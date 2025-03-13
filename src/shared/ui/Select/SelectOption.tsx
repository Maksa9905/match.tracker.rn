import { Text, TouchableOpacity } from 'react-native'
import { useSelectOptionStyles } from './SelectOption.styles'

type SelectOptionProps = {
  value: string
  label: string
  onClick?: (value: string) => void
}

export const SelectOption = ({ value, label, onClick }: SelectOptionProps) => {
  const { $container, $text } = useSelectOptionStyles()

  return (
    <TouchableOpacity
      onPress={() => onClick?.(value)}
      style={$container}
    >
      <Text style={$text}>{label}</Text>
    </TouchableOpacity>
  )
}
