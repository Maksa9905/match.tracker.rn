import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { matchApi } from './entities/match'
import { matchSlice } from './entities/match'

export const store = configureStore({
  reducer: {
    [matchApi.reducerPath]: matchApi.reducer,
    [matchSlice.reducerPath]: matchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
