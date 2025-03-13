import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import '@expo/match-media'
import { ScreenContainer } from '@/src/shared/ui'
import { Provider } from 'react-redux'
import { store } from '@/src/store'
import '../src/i18next'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    TacticSans: require('../assets/fonts/TacticSans.ttf'),
    Inter: require('../assets/fonts/Inter.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store}>
      <ScreenContainer>
        <Slot />
      </ScreenContainer>
    </Provider>
  )
}
