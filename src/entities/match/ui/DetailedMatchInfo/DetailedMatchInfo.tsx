import { Text, View } from 'react-native'
import { useDetailedMatchInfoStyles } from './DetailedMatchInfo.styles'
import { PlayerCard } from '@/src/entities/player'
import { Command, CommandStatistics } from '@/src/entities/command'
import { Separator } from '@/src/shared/ui'
import { useMediaQuery } from 'react-responsive'

type DetailedMatchInfoProps = {
  homeCommand: Command
  awayCommand: Command
}

const DetailedMatchInfo = ({
  homeCommand,
  awayCommand,
}: DetailedMatchInfoProps) => {
  const { $container, $statistics, $players, $player, $separator_text } =
    useDetailedMatchInfoStyles()

  const l = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <View style={$container}>
      <View style={$statistics}>
        <View style={$players}>
          {homeCommand.players.map((player) => (
            <View
              style={$player}
              key={player.username}
            >
              <PlayerCard {...player} />
            </View>
          ))}
        </View>
        <CommandStatistics {...homeCommand.statistics} />
      </View>
      {l && (
        <Separator>
          <Text style={$separator_text}>VS</Text>
        </Separator>
      )}
      <View style={$statistics}>
        <View style={$players}>
          {homeCommand.players.map((player) => (
            <View
              style={$player}
              key={player.username}
            >
              <PlayerCard {...player} />
            </View>
          ))}
        </View>
        <CommandStatistics {...awayCommand.statistics} />
      </View>
    </View>
  )
}

export default DetailedMatchInfo
