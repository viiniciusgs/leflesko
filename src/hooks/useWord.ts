import { useContext } from 'react'

import { WordContext } from '../contexts/WordContext'

export function useWord() {
  const context = useContext(WordContext)

  return context
}
