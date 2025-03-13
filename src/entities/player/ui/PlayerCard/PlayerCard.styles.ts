import { colors } from '@/src/shared/lib'
import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const usePlayerCardStyles = () => {
  const xl = useMediaQuery({ query: '(max-width: 1600px)' })
  const xs = useMediaQuery({ query: '(max-width: 600px)' })
  const xxs = useMediaQuery({ query: '(max-width: 480px)' })

  return StyleSheet.create({
    $container: {
      paddingVertical: 14,
      paddingHorizontal: 24,
      minHeight: 52,
      display: 'flex',
      flexDirection: xl && !xxs ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: xl && !xxs ? 'center' : 'space-between',
      borderRadius: 4,
      gap: 16,
      backgroundColor: colors.playerCard.background,
    },
    $usernameContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    $avatar: {
      width: xs ? 32 : 36,
      height: xs ? 32 : 36,
    },
    $username: {
      fontSize: xs ? 14 : 16,
      fontWeight: 600,
      color: colors.playerCard.text.primary,
    },
    $statisticsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    $statisticsLabel: {
      fontSize: xs ? 12 : 14,
      fontWeight: 500,
      color: colors.playerCard.text.secondary,
    },
    $statisticsValue: {
      fontSize: xs ? 14 : 16,
      fontWeight: 600,
      color: colors.playerCard.text.primary,
    },
  })
}
