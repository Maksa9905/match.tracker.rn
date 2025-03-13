import { useHeaderStyles } from './Header.styles'
import { Text, View } from 'react-native'
import { RefreshAlert, RefreshButton } from '@/src/features/refresh-matches'
import { StatusSelect, useGetMatchesQuery } from '@/src/entities/match'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const {
    $container,
    $logotype,
    $refresh,
    $refresh_button,
    $statusSelect,
    $alert,
  } = useHeaderStyles()

  const l = useMediaQuery({ query: '(max-width: 1200px)' })

  const { isError, error } = useGetMatchesQuery({})

  return (
    <View style={$container}>
      {l && (
        <>
          <Text style={$logotype}>Match Tracker</Text>
          <StatusSelect style={$statusSelect} />
          {isError && <RefreshAlert style={$alert} />}
          <RefreshButton style={$refresh_button} />
        </>
      )}
      {!l && (
        <>
          <View style={$refresh}>
            <Text style={$logotype}>Match Tracker</Text>
            <StatusSelect style={$statusSelect} />
          </View>
          <View style={$refresh}>
            {isError && <RefreshAlert style={$alert} />}
            <RefreshButton style={$refresh_button} />
          </View>
        </>
      )}
    </View>
  )
}

export default Header
