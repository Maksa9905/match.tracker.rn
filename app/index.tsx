import HomePage from '@/src/pages/HomePage'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomeScreen() {
  const { t } = useTranslation()

  console.log(t('hello'))

  return <HomePage />
}
