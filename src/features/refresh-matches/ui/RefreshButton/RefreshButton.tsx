import { useLazyGetMatchesQuery } from '@/src/entities/match'
import { RefreshIcon } from '@/src/shared/icons'
import { Button } from '@/src/shared/ui'
import { useTranslation } from 'react-i18next'
import { StyleProp, ViewStyle } from 'react-native'

type RefreshButtonProps = {
  style?: StyleProp<ViewStyle>
}

const RefreshButton = ({ style }: RefreshButtonProps) => {
  const { t } = useTranslation()

  const [refreshMatches] = useLazyGetMatchesQuery()

  return (
    <Button
      onPress={() => refreshMatches({})}
      style={style}
      label={t('refresh')}
      icon={RefreshIcon}
    />
  )
}

export default RefreshButton
