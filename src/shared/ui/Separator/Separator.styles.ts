import { StyleSheet } from 'react-native'

export const useSeparatorStyles = () => {
  return StyleSheet.create({
    $container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
  })
}
