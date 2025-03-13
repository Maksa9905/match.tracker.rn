import { colors } from '@/src/shared/lib'
import { useEffect } from 'react'
import { Animated, StyleSheet, useAnimatedValue } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useMatchListItemStyles = () => {
  const l = useMediaQuery({ query: '(max-width: 1024px)' })

  return StyleSheet.create({
    $container: {
      backgroundColor: colors.matchCard.background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: l ? 8 : 16,
    },
    $container_with_arrow: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      gap: 8,
    },
    $matchInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    $collapse: {
      width: '100%',
    },
  })
}
