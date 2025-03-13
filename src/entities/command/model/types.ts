import { Player } from '@/src/entities/player'

export type Command = {
  name: string
  avatarUrl: string
  players: Player[]
  statistics: {
    place: number
    points: number
    kills: number
  }
}
