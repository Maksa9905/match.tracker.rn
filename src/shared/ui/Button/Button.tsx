import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { useButtonStyles } from './Button.styles'

type ButtonProps = {
  onPress?: () => void
  label?: string
  disabled?: boolean
  icon?: ({ disabled }: { disabled?: boolean }) => React.JSX.Element
  style?: StyleProp<ViewStyle>
}

const Button = ({
  label,
  icon: Icon,
  disabled,
  onPress,
  style,
}: ButtonProps) => {
  const { $container, $label } = useButtonStyles(disabled)

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[$container, style]}
      activeOpacity={0.7}
    >
      <Text style={$label}>{label}</Text>
      {Icon ? <Icon disabled={disabled} /> : null}
    </TouchableOpacity>
  )
}

export default Button
