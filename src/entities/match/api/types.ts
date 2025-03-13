export enum MatchStatusResponse {
  Finished = 'Finished',
  Ongoing = 'Ongoing',
  Scheduled = 'Scheduled',
}

type Player = {
  username: string
  kills: number
}

type Command = {
  name: string
  place: number
  players: Player[]
  points: number
  total_kills: number
}

export type MatchResponse = {
  awayScore: number
  awayTeam: Command
  homeScore: number
  homeTeam: Command
  status: MatchStatusResponse
  time: string
  title: string
}

export type GetMatchesResponse = {
  matches: MatchResponse[]
}
