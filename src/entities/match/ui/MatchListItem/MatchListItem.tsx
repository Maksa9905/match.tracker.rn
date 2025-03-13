import { Text, TouchableOpacity, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { Command, CommandInfo, CommandStatistics } from '@/src/entities/command'
import MatchStatusCard from '../MatchStatusCard/MatchStatusCard'
import { MatchStatus } from '../../model'
import { useMatchListItemStyles } from './MatchListItem.styles'
import { DropListArrow } from '@/src/shared/icons'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import DetailedMatchInfo from '../DetailedMatchInfo/DetailedMatchInfo'

type MatchListItemProps = {
  status: MatchStatus
  score: string
  homeCommand: Command
  awayCommand: Command
}

const MatchListItem = ({
  status,
  score,
  homeCommand,
  awayCommand,
}: MatchListItemProps) => {
  const [expanded, setExpanded] = useState(false)

  const { $container, $matchInfo, $container_with_arrow, $collapse } =
    useMatchListItemStyles()

  const l = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <View style={$container}>
      <View style={$container_with_arrow}>
        <View style={$matchInfo}>
          <CommandInfo
            side="left"
            avatarUrl={homeCommand.avatarUrl}
            name={homeCommand.name}
          />
          <MatchStatusCard
            status={status}
            score={score}
          />
          <CommandInfo
            side="right"
            avatarUrl={awayCommand.avatarUrl}
            name={awayCommand.name}
          />
        </View>
        {!l && (
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <DropListArrow rotate={expanded ? 180 : 0} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ width: '100%' }}>
        <Collapsible
          style={$collapse}
          collapsed={!expanded}
        >
          <DetailedMatchInfo
            homeCommand={homeCommand}
            awayCommand={awayCommand}
          />
        </Collapsible>
      </View>
      {l && (
        <TouchableOpacity
          style={{ paddingTop: 8 }}
          onPress={() => setExpanded(!expanded)}
        >
          <DropListArrow rotate={expanded ? 180 : 0} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default MatchListItem
