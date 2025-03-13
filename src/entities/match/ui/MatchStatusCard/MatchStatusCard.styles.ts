import { colors } from '@/src/shared/lib'
import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, useAnimatedValue } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useGetMatchStatusCardStyles = () => {
  const xs = useMediaQuery({ query: '(max-width: 600px)' })

  return StyleSheet.create({
    $container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    $score: {
      fontSize: xs ? 14 : 20,
      fontWeight: 600,
      color: colors.white,
    },
  })
}
