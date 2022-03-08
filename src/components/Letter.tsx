import React from 'react'

import { useWord } from '../hooks/useWord'

import { StyledLetter } from '../styles/components/Letter'

export default function Letter({ row, index }: { row: number; index: number }) {
  const { word } = useWord()

  function handleClassName() {
    if (word && word[row] && word[row][index]) {
      if (word[row][index].success) {
        return 'success'
      } else if (word[row][index].alert) {
        return 'alert'
      } else if (word[row][index].error) {
        return 'error'
      }
    }
  }

  return (
    <StyledLetter className={handleClassName()}>
      {word && word[row] && word[row][index] && word[row][index].letter}
    </StyledLetter>
  )
}
