import { StyleSheet } from 'react-native'
import { colors } from '../../lib'

export const useButtonStyles = (disabled?: boolean) =>
  StyleSheet.create({
    $container: {
      padding: 16,
      minWidth: 204,
      borderRadius: 4,
      backgroundColor: disabled
        ? colors.button.background.disabled
        : colors.button.background.default,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      maxHeight: 56,
    },
    $label: {
      fontSize: 16,
      fontWeight: 500,
      color: disabled
        ? colors.button.text.disabled
        : colors.button.text.default,
      textAlign: 'center',
    },
  })
