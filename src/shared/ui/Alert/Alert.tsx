import React, { Children } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { useAlertStyles } from './Alert.styles'

type AlertProps = {
  children?: React.ReactNode
  icon?: () => React.ReactNode
  style?: StyleProp<ViewStyle>
}

const Alert = ({ children, icon: Icon, style }: AlertProps) => {
  const { $container, $text } = useAlertStyles()

  return (
    <View style={[$container, style]}>
      {Icon ? <Icon /> : null}
      <Text style={$text}>{children}</Text>
    </View>
  )
}

export default Alert
