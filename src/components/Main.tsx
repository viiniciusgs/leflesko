import React, { useState, useEffect } from 'react'

import { Container, Row, Letter } from '../styles/components/Main'

interface Word {
  letter: string
  success: boolean
  alert: boolean
  error: boolean
}

const mock = 'teste'

export default function Main() {
  const [word, setWord] = useState<Word[][]>()
  const [index, setIndex] = useState<number>(0)
  const [finished, setFinished] = useState<boolean>(false)

  const correctWordSplit = mock.toLowerCase().split('')

  const correctWord = [
    {
      letter: correctWordSplit[0],
      success: false,
      alert: false,
    },
    {
      letter: correctWordSplit[1],
      success: false,
      alert: false,
    },
    {
      letter: correctWordSplit[2],
      success: false,
      alert: false,
    },
    {
      letter: correctWordSplit[3],
      success: false,
      alert: false,
    },
    {
      letter: correctWordSplit[4],
      success: false,
      alert: false,
    },
  ]

  const handleSubmit = () => {
    if (word && word[index].length === 5) {
      for (let i = 0; i <= word[index].length - 1; i++) {
        for (let j = 0; j <= word[index].length - 1; j++) {
          if (word[index][i].letter === correctWord[j].letter && i === j) {
            word[index][i].success = true
            correctWord[j].success = true
          } else {
            word[index][i].error = true
          }
        }
      }

      for (let i = 0; i <= word[index].length - 1; i++) {
        for (let j = 0; j <= word[index].length - 1; j++) {
          if (
            word[index][i].letter === correctWord[j].letter &&
            !correctWord[j].success &&
            !correctWord[j].alert &&
            !word[index][i].success &&
            !word[index][i].alert
          ) {
            word[index][i].alert = true
            correctWord[j].alert = true
          } else {
            word[index][i].error = true
          }
        }
      }

      const wordInString =
        word[index][0].letter +
        word[index][1].letter +
        word[index][2].letter +
        word[index][3].letter +
        word[index][4].letter

      if (wordInString === mock) {
        console.log('palavra correta')
        setFinished(true)
      } else if (index < 5) {
        setIndex(index + 1)
      } else {
        console.log('palavra incorreta')
        setFinished(true)
      }
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key, keyCode } = event

    if (finished) {
      return
    }

    if (keyCode >= 65 && keyCode <= 90) {
      if (!word) {
        setWord([
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
        setWord([
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

        setWord([...word])
      }
    } else if (keyCode === 8 && word && word[index] && word[index][0]) {
      setWord(word.slice(0, index).concat([word[index].slice(0, -1)]))
    } else if (keyCode === 13) {
      handleSubmit()
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
