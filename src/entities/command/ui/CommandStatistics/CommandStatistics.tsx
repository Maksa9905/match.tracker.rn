import { View } from 'react-native'
import { useCommandStatisticsStyles } from './CommandStatistics.styles'
import { StatisticsLabel } from '@/src/shared/ui'
import { useTranslation } from 'react-i18next'

type CommandStatisticsProps = {
  kills: number
  points: number
  place: number
}

const CommandStatistics = ({
  kills,
  points,
  place,
}: CommandStatisticsProps) => {
  const { t } = useTranslation()

  const { $container } = useCommandStatisticsStyles()

  return (
    <View style={$container}>
      <StatisticsLabel
        label={t('match.info.points')}
        value={points.toString()}
      />
      <StatisticsLabel
        label={t('match.info.place')}
        value={place.toString()}
      />
      <StatisticsLabel
        label={t('match.info.totalKills')}
        value={kills.toString()}
      />
    </View>
  )
}

export default CommandStatistics
