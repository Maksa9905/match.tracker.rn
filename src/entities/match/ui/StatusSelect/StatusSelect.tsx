import { Select } from '@/src/shared/ui'
import {
  MatchStatusOption,
  selectStatus,
  setStatus,
  useGetOptions,
} from '@/src/entities/match'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/src/shared/lib'
import { StyleProp } from 'react-native'
import { ViewStyle } from 'react-native'
import { useTranslation } from 'react-i18next'

type StatusSelectProps = {
  style?: StyleProp<ViewStyle>
}

const StatusSelect = ({ style }: StatusSelectProps) => {
  const { t } = useTranslation()

  const { matchStatusOptions } = useGetOptions()

  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)

  const handleChangeValue = useCallback(
    (value: MatchStatusOption) => {
      dispatch(setStatus(value))
    },
    [setStatus],
  )

  return (
    <Select
      label={t('match.status')}
      value={status}
      style={style}
      onChange={(value) => handleChangeValue(value as MatchStatusOption)}
      options={matchStatusOptions}
    />
  )
}

export default StatusSelect
