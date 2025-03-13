import { View } from 'react-native'
import {
  mapGetMatchesResponse,
  MatchListItem,
  selectStatus,
  useGetMatchesQuery,
} from '@/src/entities/match'
import { useMatchListStyles } from './MatchList.styles'
import { useAppSelector } from '@/src/shared/lib'
import { Loader } from '@/src/shared/ui'

const MatchList = () => {
  const { $container, $loader } = useMatchListStyles()

  const status = useAppSelector(selectStatus)

  const { matches, isLoading } = useGetMatchesQuery(
    {},
    {
      selectFromResult: ({ currentData, isLoading, isFetching }) => {
        return {
          matches: currentData
            ? mapGetMatchesResponse(currentData, status)
            : [],
          isLoading: isLoading || isFetching,
        }
      },
    },
  )

  return (
    <View style={$container}>
      {matches.map((match, index) => (
        <MatchListItem
          // TODO: Добавить на бэке id матча
          key={index}
          status={match.status}
          score={match.score}
          homeCommand={match.homeCommand}
          awayCommand={match.awayCommand}
        />
      ))}
      {isLoading && (
        <View style={$loader}>
          <Loader size={42} />
        </View>
      )}
    </View>
  )
}

export default MatchList
