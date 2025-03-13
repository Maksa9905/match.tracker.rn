import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MatchStatusOption } from './types'
import { RootState } from '@/src/store'

export const matchSlice = createSlice({
  name: 'match',
  initialState: {
    status: MatchStatusOption.ALL,
  },
  reducers: {
    setStatus: (state, action: PayloadAction<MatchStatusOption>) => {
      state.status = action.payload
    },
  },
})

export const { setStatus } = matchSlice.actions

export const selectStatus = (state: RootState) => state.match.status
