import { StyleSheet } from 'react-native'
import { colors } from '../../lib'

export const useSelectOptionStyles = () =>
  StyleSheet.create({
    $container: {
      padding: 12,
      backgroundColor: colors.select.dropdown.option.background.default,
      height: 48,
      display: 'flex',
      justifyContent: 'center',
    },
    $text: {
      fontSize: 16,
      color: colors.select.dropdown.option.text.default,
      fontWeight: 500,
    },
  })
