import { Animated, Text, View } from 'react-native'
import { useGetMatchStatusCardStyles } from './MatchStatusCard.styles'
import StatusChip from '../StatusChip/StatusChip'
import { MatchStatus } from '../../model'
import { memo, useEffect, useRef, useState } from 'react'
import Fade from '@/src/shared/ui/Fade'
import { useMediaQuery } from 'react-responsive'

type MatchStatusCardProps = {
  status: MatchStatus
  score: string
}

const MatchStatusCard = memo(({ status, score }: MatchStatusCardProps) => {
  const { $container, $score } = useGetMatchStatusCardStyles()

  const xxs = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <View style={$container}>
      {!xxs && (
        <Fade>
          <Text style={$score}>{score}</Text>
        </Fade>
      )}
      <StatusChip
        status={status}
        score={xxs ? score : undefined}
      />
    </View>
  )
})

export default MatchStatusCard
