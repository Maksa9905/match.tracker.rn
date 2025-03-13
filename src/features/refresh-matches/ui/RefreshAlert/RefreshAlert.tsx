import { AlertIcon } from '@/src/shared/icons'
import { Alert } from '@/src/shared/ui'
import { StyleProp } from 'react-native'
import { ViewStyle } from 'react-native'
import { useTranslation } from 'react-i18next'

type RefreshAlertProps = {
  style?: StyleProp<ViewStyle>
}

const RefreshAlert = ({ style }: RefreshAlertProps) => {
  const { t } = useTranslation()

  return (
    <Alert
      style={style}
      icon={AlertIcon}
    >
      {t('refreshError')}
    </Alert>
  )
}

export default RefreshAlert
