import { colors } from '@/src/shared/lib'
import { StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

export const useHeaderStyles = () => {
  const xl = useMediaQuery({ query: '(max-width: 1200px)' })

  return StyleSheet.create({
    $container: {
      paddingTop: 32,
      paddingBottom: 14,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: xl ? 'column' : 'row',
      gap: 12,
    },
    $logotype: {
      fontSize: 28,
      fontStyle: 'italic',
      fontWeight: 400,
      fontFamily: 'TacticSans',
      color: colors.white,
      verticalAlign: 'middle',
      marginBottom: 14,
    },
    $refresh: {
      gap: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    $refresh_button: {
      marginBottom: 10,
      flex: xl ? 1 : undefined,
      width: xl ? '100%' : 'auto',
    },
    $statusSelect: {
      marginBottom: 10,
      width: xl ? '100%' : 'auto',
      flex: xl ? 1 : undefined,
    },
    $alert: {
      width: '100%',
      marginBottom: 10,
      flex: 1,
    },
  })
}
