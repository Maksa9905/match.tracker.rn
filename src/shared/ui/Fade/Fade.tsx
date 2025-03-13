import { ReactNode, useEffect, useRef, useState } from 'react'
import { Animated, ViewProps } from 'react-native'

type FadeProps = ViewProps & {
  children: ReactNode
  duration?: number
}

const Fade = ({ children, duration = 200, ...restProps }: FadeProps) => {
  const [displayChildren, setDisplayChildren] = useState<ReactNode | null>(
    children,
  )

  useEffect(() => {
    const timeout = setTimeout(() => setDisplayChildren(children), duration)

    return () => clearTimeout(timeout)
  }, [children])

  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start(() => {
      fadeAnim.setValue(0)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start()
    })
  }, [children])

  return (
    <Animated.View
      {...restProps}
      style={[restProps.style, { opacity: fadeAnim }]}
    >
      {displayChildren}
    </Animated.View>
  )
}

export default Fade
