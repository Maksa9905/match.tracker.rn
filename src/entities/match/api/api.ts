import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetMatchesResponse, MatchResponse } from './types'
import { ApiResponse, ApiWsResponse } from '@/src/shared/model'

export const matchApi = createApi({
  reducerPath: 'matchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com/fronttemp-service',
  }),
  endpoints: (builder) => ({
    getMatches: builder.query<ApiResponse<GetMatchesResponse>, {}>({
      query: () => ({
        url: '/fronttemp',
        method: 'GET',
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws')
        try {
          await cacheDataLoaded

          const listener = (event: MessageEvent) => {
            const data: ApiWsResponse<MatchResponse[]> = JSON.parse(event.data)
            updateCachedData(() => ({
              data: { matches: data.data },
              ok: true,
            }))
          }

          ws.addEventListener('message', listener)
        } catch (error) {
          console.log(error)
        }
        await cacheEntryRemoved
        ws.close()
      },
    }),
  }),
})

export const { useGetMatchesQuery, useLazyGetMatchesQuery } = matchApi
