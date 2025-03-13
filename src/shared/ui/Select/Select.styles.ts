import { StyleSheet } from 'react-native'
import { colors } from '@/src/shared/lib'

export const useSelectStyles = (pressed: boolean) => {
  return StyleSheet.create({
    $container: {
      position: 'relative',
    },
    $input: {
      backgroundColor: pressed
        ? colors.select.input.background.pressed
        : colors.select.input.background.default,
      padding: pressed ? 15 : 16,
      minHeight: 56,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      boxSizing: 'border-box',
      borderRadius: 4,
      borderWidth: pressed ? 1 : 0,
      borderColor: colors.select.input.outline.pressed,
    },
    $label: {
      fontSize: 16,
      fontWeight: 500,
      color: pressed
        ? colors.select.input.text.pressed
        : colors.select.input.text.default,
    },
    $dropdown: {
      position: 'absolute',
      paddingVertical: 10,
      width: '100%',
      top: 66,
      backgroundColor: colors.select.dropdown.background.default,
      borderRadius: 4,
      zIndex: 1,
    },
    $displayValue: {
      fontSize: 16,
      fontWeight: 500,
      color: pressed
        ? colors.select.input.text.pressed
        : colors.select.input.text.default,
    },
  })
}
