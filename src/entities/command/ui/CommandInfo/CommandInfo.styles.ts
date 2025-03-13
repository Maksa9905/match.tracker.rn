import { colors } from '@/src/shared/lib'
import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useCommandInfoStyles = (side: 'left' | 'right') => {
  const xs = useMediaQuery({ query: '(max-width: 600px)' })

  return StyleSheet.create({
    $container: {
      display: 'flex',
      flexDirection: side === 'left' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
    },
    $text: {
      fontSize: xs ? 14 : 16,
      fontWeight: 500,
      color: colors.white,
    },
    $avatar: {
      width: xs ? 28 : 48,
      height: xs ? 28 : 48,
    },
  })
}
