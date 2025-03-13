import { colors } from '@/src/shared/lib'
import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useDetailedMatchInfoStyles = () => {
  const l = useMediaQuery({ query: '(max-width: 1024px)' })
  const xxs = useMediaQuery({ query: '(max-width: 480px)' })

  return StyleSheet.create({
    $container: {
      width: '100%',
      display: 'flex',
      flexDirection: l ? 'column' : 'row',
      gap: l ? 8 : 32,
      height: '100%',
      paddingTop: 16,
    },
    $statistics: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
    $players: {
      flex: 1,
      display: 'flex',
      flexDirection: xxs ? 'column' : 'row',
      gap: 8,
    },
    $player: {
      flex: 1,
      display: 'flex',
    },
    $separator_text: {
      fontSize: 14,
      fontWeight: 600,
      color: colors.separator.text,
    },
  })
}
