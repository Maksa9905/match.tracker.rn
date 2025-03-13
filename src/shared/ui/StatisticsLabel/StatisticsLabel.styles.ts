import { StyleSheet } from 'react-native'
import { colors } from '../../lib'
import { useMediaQuery } from 'react-responsive'

export const useStatisticsLabelStyles = () => {
  const xs = useMediaQuery({ query: '(max-width: 600px)' })

  return StyleSheet.create({
    $container: {
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    $label: {
      fontSize: xs ? 12 : 14,
      fontWeight: 500,
      color: colors.statisticsCard.text.secondary,
    },
    $value: {
      fontSize: xs ? 14 : 16,
      fontWeight: 600,
      color: colors.statisticsCard.text.primary,
    },
  })
}
