import { Text, View } from 'react-native'
import { useGetStatusChipStyles } from './StatusChip.styles'
import { MatchStatus } from '../../model'
import { memo } from 'react'
import Fade from '@/src/shared/ui/Fade'

type StatusChipProps = {
  status: MatchStatus
  score?: string
}

const StatusChip = memo(({ status, score }: StatusChipProps) => {
  const { $container, $label } = useGetStatusChipStyles(status)

  const label = {
    [MatchStatus.LIVE]: 'Live',
    [MatchStatus.FINISHED]: 'Finished',
    [MatchStatus.PREPARING]: 'Match preparing',
  }

  return (
    <View style={$container}>
      <Fade>
        <Text style={$label}>{score ?? label[status]}</Text>
      </Fade>
    </View>
  )
})

export default StatusChip
