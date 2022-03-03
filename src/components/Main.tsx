import React, { useEffect } from 'react'

import Row from './Row'

import { useWord } from '../hooks/useWord'

import { Container, Letter } from '../styles/components/Main'

export default function Main({
  onSubmit,
  onBackspace,
}: {
  onSubmit: () => void
  onBackspace: () => void
}) {
  const { word, handleSetWord, index, finished } = useWord()

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key, keyCode } = event

    if (finished) {
      return
    }

    if (keyCode >= 65 && keyCode <= 90) {
      if (!word) {
        handleSetWord([
          [
            {
              letter: key,
              success: false,
              alert: false,
              error: false,
            },
          ],
        ])
      } else if (!word[index] && word.length < 6) {
        handleSetWord([
          ...word,
          [
            {
              letter: key,
              success: false,
              alert: false,
              error: false,
            },
          ],
        ])
      } else if (word[index] && word[index].length < 5) {
        word[index].push({
          letter: key,
          success: false,
          alert: false,
          error: false,
        })

        handleSetWord([...word])
      }
    } else if (keyCode === 8) {
      onBackspace()
    } else if (keyCode === 13) {
      onSubmit()
    }
  }

  const handleClassName = (row: number, index: number) => {
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <Container>
      <Row>
        <Letter className={handleClassName(0, 0)}>
          {word && word[0] && word[0][0] && word[0][0].letter}
        </Letter>
        <Letter className={handleClassName(0, 1)}>
          {word && word[0] && word[0][1] && word[0][1].letter}
        </Letter>
        <Letter className={handleClassName(0, 2)}>
          {word && word[0] && word[0][2] && word[0][2].letter}
        </Letter>
        <Letter className={handleClassName(0, 3)}>
          {word && word[0] && word[0][3] && word[0][3].letter}
        </Letter>
        <Letter className={handleClassName(0, 4)}>
          {word && word[0] && word[0][4] && word[0][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className={handleClassName(1, 0)}>
          {word && word[1] && word[1][0] && word[1][0].letter}
        </Letter>
        <Letter className={handleClassName(1, 1)}>
          {word && word[1] && word[1][1] && word[1][1].letter}
        </Letter>
        <Letter className={handleClassName(1, 2)}>
          {word && word[1] && word[1][2] && word[1][2].letter}
        </Letter>
        <Letter className={handleClassName(1, 3)}>
          {word && word[1] && word[1][3] && word[1][3].letter}
        </Letter>
        <Letter className={handleClassName(1, 4)}>
          {word && word[1] && word[1][4] && word[1][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className={handleClassName(2, 0)}>
          {word && word[2] && word[2][0] && word[2][0].letter}
        </Letter>
        <Letter className={handleClassName(2, 1)}>
          {word && word[2] && word[2][1] && word[2][1].letter}
        </Letter>
        <Letter className={handleClassName(2, 2)}>
          {word && word[2] && word[2][2] && word[2][2].letter}
        </Letter>
        <Letter className={handleClassName(2, 3)}>
          {word && word[2] && word[2][3] && word[2][3].letter}
        </Letter>
        <Letter className={handleClassName(2, 4)}>
          {word && word[2] && word[2][4] && word[2][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className={handleClassName(3, 0)}>
          {word && word[3] && word[3][0] && word[3][0].letter}
        </Letter>
        <Letter className={handleClassName(3, 1)}>
          {word && word[3] && word[3][1] && word[3][1].letter}
        </Letter>
        <Letter className={handleClassName(3, 2)}>
          {word && word[3] && word[3][2] && word[3][2].letter}
        </Letter>
        <Letter className={handleClassName(3, 3)}>
          {word && word[3] && word[3][3] && word[3][3].letter}
        </Letter>
        <Letter className={handleClassName(3, 4)}>
          {word && word[3] && word[3][4] && word[3][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className={handleClassName(4, 0)}>
          {word && word[4] && word[4][0] && word[4][0].letter}
        </Letter>
        <Letter className={handleClassName(4, 1)}>
          {word && word[4] && word[4][1] && word[4][1].letter}
        </Letter>
        <Letter className={handleClassName(4, 2)}>
          {word && word[4] && word[4][2] && word[4][2].letter}
        </Letter>
        <Letter className={handleClassName(4, 3)}>
          {word && word[4] && word[4][3] && word[4][3].letter}
        </Letter>
        <Letter className={handleClassName(4, 4)}>
          {word && word[4] && word[4][4] && word[4][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className={handleClassName(5, 0)}>
          {word && word[5] && word[5][0] && word[5][0].letter}
        </Letter>
        <Letter className={handleClassName(5, 1)}>
          {word && word[5] && word[5][1] && word[5][1].letter}
        </Letter>
        <Letter className={handleClassName(5, 2)}>
          {word && word[5] && word[5][2] && word[5][2].letter}
        </Letter>
        <Letter className={handleClassName(5, 3)}>
          {word && word[5] && word[5][3] && word[5][3].letter}
        </Letter>
        <Letter className={handleClassName(5, 4)}>
          {word && word[5] && word[5][4] && word[5][4].letter}
        </Letter>
      </Row>
    </Container>
  )
}
