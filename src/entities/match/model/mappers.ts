import { ApiResponse } from '@/src/shared/model'
import { GetMatchesResponse, MatchStatusResponse } from '../api'
import { Match, MatchStatus, MatchStatusOption } from './types'

export const mapGetMatchesResponse = (
  response: ApiResponse<GetMatchesResponse>,
  status: MatchStatusOption,
): Match[] => {
  return response.data.matches
    .map((match) => ({
      homeCommand: {
        name: match.homeTeam.name,
        avatarUrl: 'https://i.imgur.com/RBDWJeb.png',
        statistics: {
          place: match.homeTeam.place,
          points: match.homeTeam.points,
          kills: match.homeTeam.total_kills,
        },
        players: match.homeTeam.players.map((player) => ({
          username: player.username,
          kills: player.kills,
          avatarUrl: 'https://i.imgur.com/RBDWJeb.png',
        })),
      },
      awayCommand: {
        name: match.awayTeam.name,
        place: match.awayTeam.place,
        avatarUrl: 'https://i.imgur.com/RBDWJeb.png',
        statistics: {
          place: match.awayTeam.place,
          points: match.awayTeam.points,
          kills: match.awayTeam.total_kills,
        },
        players: match.awayTeam.players.map((player) => ({
          username: player.username,
          kills: player.kills,
          avatarUrl: 'https://i.imgur.com/RBDWJeb.png',
        })),
      },
      score: `${match.homeScore} : ${match.awayScore}`,
      status: mapMatchStatus(match.status),
    }))
    .filter(
      // @ts-ignore
      (match) => status === MatchStatusOption.ALL || match.status === status,
    )
}

export const mapMatchStatus = (status: MatchStatusResponse): MatchStatus => {
  switch (status) {
    case MatchStatusResponse.Finished:
      return MatchStatus.FINISHED
    case MatchStatusResponse.Ongoing:
      return MatchStatus.LIVE
    case MatchStatusResponse.Scheduled:
      return MatchStatus.PREPARING
    default:
      return MatchStatus.FINISHED
  }
}

export const filterMatchesByStatus = (
  matches: Match[],
  status: MatchStatus,
) => {
  return matches.filter((match) => match.status === status)
}
