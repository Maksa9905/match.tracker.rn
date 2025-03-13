import { colors } from '@/src/shared/lib'
import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useCommandStatisticsStyles = () => {
  const xs = useMediaQuery({ query: '(max-width: 600px)' })

  return StyleSheet.create({
    $container: {
      backgroundColor: colors.statisticsCard.background,
      paddingVertical: xs ? 8 : 14,
      paddingHorizontal: xs ? 16 : 24,
      height: 52,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: xs ? 'space-between' : 'space-around',
      alignItems: 'center',
    },
  })
}
