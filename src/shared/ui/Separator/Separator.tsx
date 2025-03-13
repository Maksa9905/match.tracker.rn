import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useSeparatorStyles } from './Separator.styles'

type SeparatorProps = {
  children?: React.ReactNode
  color?: string
}

const Separator = ({ children, color }: SeparatorProps) => {
  const { $container } = useSeparatorStyles()

  return (
    <View style={$container}>
      <Svg
        width="174"
        height="1"
        viewBox="0 0 174 1"
        fill="none"
      >
        <Path
          d="M0.5 0.5H173.5"
          stroke={color ?? '#13181F'}
        />
      </Svg>
      {children}
      <Svg
        width="174"
        height="1"
        viewBox="0 0 174 1"
        fill="none"
      >
        <Path
          d="M0.5 0.5H173.5"
          stroke={color ?? '#13181F'}
        />
      </Svg>
    </View>
  )
}

export default Separator
