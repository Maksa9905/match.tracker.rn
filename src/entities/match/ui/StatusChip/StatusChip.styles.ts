import { StyleSheet } from 'react-native'
import { MatchStatus } from '../../model'
import { colors } from '@/src/shared/lib'
import { useMediaQuery } from 'react-responsive'

export const useGetStatusChipStyles = (status: MatchStatus) => {
  const xs = useMediaQuery({ query: '(max-width: 600px)' })

  return StyleSheet.create({
    $container: {
      backgroundColor: colors.statusCard.background[status],
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      minWidth: xs ? 70 : 92,
      maxWidth: 112,
      width: 'auto',
      gap: 8,
      paddingVertical: xs ? 4 : 6,
      paddingHorizontal: xs ? 6 : 8,
    },
    $label: {
      fontSize: 12,
      fontWeight: 500,
      color: colors.statusCard.text,
    },
  })
}
