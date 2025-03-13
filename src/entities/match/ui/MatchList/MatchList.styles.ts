import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useMatchListStyles = () => {
  const l = useMediaQuery({ query: '(max-width: 1024px)' })

  return StyleSheet.create({
    $container: {
      gap: l ? 12 : 8,
      position: 'relative',
    },
    $loader: {
      width: '100%',
      height: '100%',
      minHeight: 200,
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
  })
}
