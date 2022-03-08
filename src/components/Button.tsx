import React from 'react'

import { useWord } from '../hooks/useWord'

import { StyledButton } from '../styles/components/Button'

export default function Button({ letter }: { letter: string }) {
  const { word, handleKeyClick } = useWord()

  function handleButtonClick() {
    handleKeyClick(letter)
  }

  function handleClassName() {
    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 4; j++) {
        if (
          word &&
          word[i] &&
          word[i][j] &&
          word[i][j].success &&
          word[i][j].letter === letter
        ) {
          return 'success'
        }
      }
    }

    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 4; j++) {
        if (word && word[i] && word[i][j]) {
          if (word[i][j].alert && word[i][j].letter === letter) {
            return 'alert'
          } else if (word[i][j].error && word[i][j].letter === letter) {
            return 'error'
          }
        }
      }
    }
  }

  return (
    <StyledButton
      className={handleClassName()}
      onClick={() => handleButtonClick()}
    >
      {letter}
    </StyledButton>
  )
}
