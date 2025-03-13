import { Command } from '@/src/entities/command'

export enum MatchStatusOption {
  LIVE = 'LIVE',
  FINISHED = 'FINISHED',
  PREPARING = 'PREPARING',
  ALL = 'ALL',
}

export enum MatchStatus {
  LIVE = 'LIVE',
  FINISHED = 'FINISHED',
  PREPARING = 'PREPARING',
}

export type Match = {
  status: MatchStatus
  score: string
  homeCommand: Command
  awayCommand: Command
}
