import { useState } from 'react'
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { TSelectOption } from '@/src/shared/model'
import { useSelectStyles } from './Select.styles'
import { ArrowUpIcon } from '@/src/shared/icons'
import { SelectOption } from './SelectOption'

type SelectProps = {
  value: string
  onChange?: (value: string) => void
  options?: TSelectOption[]
  label?: string
  style?: StyleProp<ViewStyle>
}

const Select = ({
  value,
  onChange,
  options = [],
  label,
  style,
}: SelectProps) => {
  const [expanded, setExpanded] = useState(false)

  const displayValue =
    options.find((option) => option.value === value)?.label || ''

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const handleChangeValue = (value: string) => {
    onChange?.(value)
    setExpanded(false)
  }

  const { $container, $input, $displayValue, $label, $dropdown } =
    useSelectStyles(expanded)

  return (
    <View style={[$container, style]}>
      <TouchableOpacity
        style={$input}
        onPress={handleExpand}
      >
        {displayValue ? (
          <Text style={$displayValue}>{displayValue}</Text>
        ) : (
          <Text style={$label}>{label}</Text>
        )}
        {<ArrowUpIcon rotate={expanded ? 0 : 180} />}
      </TouchableOpacity>
      {expanded && (
        <View style={$dropdown}>
          {options.map((option) => (
            <SelectOption
              key={option.value}
              value={option.value}
              label={option.label}
              onClick={handleChangeValue}
            />
          ))}
        </View>
      )}
    </View>
  )
}

export default Select
