import { StyleSheet } from 'react-native'
import { colors } from '../../lib'

export const useAlertStyles = () =>
  StyleSheet.create({
    $container: {
      paddingVertical: 17,
      paddingHorizontal: 24,
      minHeight: 56,
      height: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 4,
      backgroundColor: colors.alert.background,
    },
    $text: {
      fontSize: 18,
      fontWeight: 400,
      color: colors.alert.text,
    },
  })
