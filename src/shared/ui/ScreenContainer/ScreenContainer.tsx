import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../lib'

type ScreenContainerProps = {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  global: {
    fontFamily: 'Inter',
    backgroundColor: colors.background,
    minHeight: '100%',
    padding: 16,
  },
})

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    // @ts-ignore
    <SafeAreaProvider style={styles.global}>
      <StatusBar
        animated
        barStyle="light-content"
      />
      <ScrollView bounces={false}>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default ScreenContainer
