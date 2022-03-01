import React, { useState, useEffect } from 'react'

import { Container, Row, Letter } from '../styles/components/Main'

interface Word {
  letter: string
  success: boolean
  alert: boolean
  error: boolean
}

export default function Main() {
  const [word, setWord] = useState<Word[][]>()
  const [index, setIndex] = useState<number>(0)

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key, keyCode } = event

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
    }

    if (keyCode === 8 && word && word[index] && word[index][0]) {
      setWord(word.slice(0, index).concat([word[index].slice(0, -1)]))
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
        <Letter className="alert">
          {word && word[0] && word[0][0] && word[0][0].letter}
        </Letter>
        <Letter className="success">
          {word && word[0] && word[0][1] && word[0][1].letter}
        </Letter>
        <Letter className="alert">
          {word && word[0] && word[0][2] && word[0][2].letter}
        </Letter>
        <Letter className="alert">
          {word && word[0] && word[0][3] && word[0][3].letter}
        </Letter>
        <Letter className="error">
          {word && word[0] && word[0][4] && word[0][4].letter}
        </Letter>
      </Row>
      <Row>
        <Letter className="error">i</Letter>
        <Letter className="error">p</Letter>
        <Letter className="error">s</Letter>
        <Letter className="error">u</Letter>
        <Letter className="error">m</Letter>
      </Row>
      <Row>
        <Letter className="success">d</Letter>
        <Letter className="success">o</Letter>
        <Letter className="success">l</Letter>
        <Letter className="success">o</Letter>
        <Letter className="success">r</Letter>
      </Row>
      <Row>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
      </Row>
      <Row>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
      </Row>
      <Row>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
      </Row>
    </Container>
  )
}
