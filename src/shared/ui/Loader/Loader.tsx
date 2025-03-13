import { RefreshIcon } from '@/src/shared/icons'
import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated'

type LoaderProp = {
  size?: number
  className?: string
  disabled?: boolean
}

const Loader = ({ size = 26, className, disabled }: LoaderProp) => {
  const sv = useSharedValue(0)

  const rotationAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
    width: size,
    height: size,
  }))

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
    )
  }, [])

  return (
    <Animated.View style={rotationAnimation}>
      <RefreshIcon
        size={size}
        disabled={disabled}
      />
    </Animated.View>
  )
}

export default Loader
