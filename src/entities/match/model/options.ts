import { TSelectOption } from '@/src/shared/model'
import { MatchStatusOption } from './types'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const useGetOptions = () => {
  const { t } = useTranslation()

  const matchStatusOptions: TSelectOption[] = useMemo(
    () => [
      {
        value: MatchStatusOption.LIVE,
        label: t('match.status', { context: MatchStatusOption.LIVE }),
      },
      {
        value: MatchStatusOption.FINISHED,
        label: t('match.status', { context: MatchStatusOption.FINISHED }),
      },
      {
        value: MatchStatusOption.PREPARING,
        label: t('match.status', { context: MatchStatusOption.PREPARING }),
      },
      {
        value: MatchStatusOption.ALL,
        label: t('match.status', { context: MatchStatusOption.ALL }),
      },
    ],
    [],
  )

  return {
    matchStatusOptions,
  }
}
