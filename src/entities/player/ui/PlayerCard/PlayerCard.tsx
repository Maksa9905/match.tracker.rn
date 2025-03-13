import { Image, Text, View } from 'react-native'
import { usePlayerCardStyles } from './PlayerCard.styles'
import { useTranslation } from 'react-i18next'

type PlayerCardProps = {
  username: string
  kills: number
  avatarUrl: string
}

const PlayerCard = ({ username, kills, avatarUrl }: PlayerCardProps) => {
  const { t } = useTranslation()

  const {
    $container,
    $usernameContainer,
    $avatar,
    $username,
    $statisticsContainer,
    $statisticsLabel,
    $statisticsValue,
  } = usePlayerCardStyles()

  return (
    <View style={$container}>
      <View style={$usernameContainer}>
        <View>
          <Image
            source={{ uri: avatarUrl }}
            style={$avatar}
          />
        </View>
        <Text style={$username}>{username}</Text>
      </View>
      <View style={$statisticsContainer}>
        <Text style={$statisticsLabel}>{t('kills')}: </Text>
        <Text style={$statisticsValue}>{kills}</Text>
      </View>
    </View>
  )
}

export default PlayerCard
