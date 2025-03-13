import { Text, View } from 'react-native'
import { useStatisticsLabelStyles } from './StatisticsLabel.styles'

type StatisticsLabelProps = {
  label: string
  value: string
}

const StatisticsLabel = ({ label, value }: StatisticsLabelProps) => {
  const { $container, $label, $value } = useStatisticsLabelStyles()

  return (
    <View style={$container}>
      <Text style={$label}>{label}: </Text>
      <Text style={$value}>{value}</Text>
    </View>
  )
}

export default StatisticsLabel
