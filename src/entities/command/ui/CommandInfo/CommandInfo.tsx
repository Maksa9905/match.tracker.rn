import { Image, Text, View } from 'react-native'
import { useCommandInfoStyles } from './CommandInfo.styles'

type CommandInfoProps = {
  side: 'left' | 'right'
  avatarUrl: string
  name: string
}

const CommandInfo = ({ side, avatarUrl, name }: CommandInfoProps) => {
  const { $container, $text, $avatar } = useCommandInfoStyles(side)

  return (
    <View style={$container}>
      <Image
        style={$avatar}
        source={{ uri: avatarUrl }}
      />
      <Text style={$text}>{name}</Text>
    </View>
  )
}

export default CommandInfo
