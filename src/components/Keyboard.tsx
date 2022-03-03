import React from 'react'

import Row from './Row'

import { useWord } from '../hooks/useWord'

import BackspaceSVG from '../assets/backspace.svg'

import {
  Container,
  Key,
  KeyCustom1,
  KeyCustom2,
} from '../styles/components/Keyboard'

export default function Keyboard({
  onSubmit,
  onBackspace,
}: {
  onSubmit: () => void
  onBackspace: () => void
}) {
  const { word, handleSetWord, index, finished } = useWord()

  const handleButtonClick = (button: string) => {
    if (finished) {
      return
    }

    if (!word) {
      handleSetWord([
        [
          {
            letter: button,
            error: false,
            alert: false,
            success: false,
          },
        ],
      ])
    } else if (!word[index]) {
      handleSetWord([
        ...word,
        [
          {
            letter: button,
            error: false,
            alert: false,
            success: false,
          },
        ],
      ])
    } else {
      if (word[index].length < 5) {
        word[index].push({
          letter: button,
          error: false,
          alert: false,
          success: false,
        })

        handleSetWord([...word])
      }
    }
  }

  const handleClassName = (button: string) => {
    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 4; j++) {
        if (word && word[i] && word[i][j]) {
          if (word[i][j].success && word[i][j].letter === button) {
            return 'success'
          }
        }
      }
    }

    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 4; j++) {
        if (word && word[i] && word[i][j]) {
          if (word[i][j].alert && word[i][j].letter === button) {
            return 'alert'
          } else if (word[i][j].error && word[i][j].letter === button) {
            return 'error'
          }
        }
      }
    }
  }

  return (
    <Container>
      <Row type="custom">
        <Key
          className={handleClassName('q')}
          onClick={() => handleButtonClick('q')}
        >
          q
        </Key>
        <Key
          className={handleClassName('w')}
          onClick={() => handleButtonClick('w')}
        >
          w
        </Key>
        <Key
          className={handleClassName('e')}
          onClick={() => handleButtonClick('e')}
        >
          e
        </Key>
        <Key
          className={handleClassName('r')}
          onClick={() => handleButtonClick('r')}
        >
          r
        </Key>
        <Key
          className={handleClassName('t')}
          onClick={() => handleButtonClick('t')}
        >
          t
        </Key>
        <Key
          className={handleClassName('y')}
          onClick={() => handleButtonClick('y')}
        >
          y
        </Key>
        <Key
          className={handleClassName('u')}
          onClick={() => handleButtonClick('u')}
        >
          u
        </Key>
        <Key
          className={handleClassName('i')}
          onClick={() => handleButtonClick('i')}
        >
          i
        </Key>
        <Key
          className={handleClassName('o')}
          onClick={() => handleButtonClick('o')}
        >
          o
        </Key>
        <Key
          className={handleClassName('p')}
          onClick={() => handleButtonClick('p')}
        >
          p
        </Key>
      </Row>
      <Row type="custom">
        <Key
          className={handleClassName('a')}
          onClick={() => handleButtonClick('a')}
        >
          a
        </Key>
        <Key
          className={handleClassName('s')}
          onClick={() => handleButtonClick('s')}
        >
          s
        </Key>
        <Key
          className={handleClassName('d')}
          onClick={() => handleButtonClick('d')}
        >
          d
        </Key>
        <Key
          className={handleClassName('f')}
          onClick={() => handleButtonClick('f')}
        >
          f
        </Key>
        <Key
          className={handleClassName('g')}
          onClick={() => handleButtonClick('g')}
        >
          g
        </Key>
        <Key
          className={handleClassName('h')}
          onClick={() => handleButtonClick('h')}
        >
          h
        </Key>
        <Key
          className={handleClassName('j')}
          onClick={() => handleButtonClick('j')}
        >
          j
        </Key>
        <Key
          className={handleClassName('k')}
          onClick={() => handleButtonClick('k')}
        >
          k
        </Key>
        <Key
          className={handleClassName('l')}
          onClick={() => handleButtonClick('l')}
        >
          l
        </Key>
        <KeyCustom1
          onClick={() => {
            onBackspace()
          }}
        >
          <BackspaceSVG />
        </KeyCustom1>
      </Row>
      <Row type="custom">
        <Key
          className={handleClassName('z')}
          onClick={() => handleButtonClick('z')}
        >
          z
        </Key>
        <Key
          className={handleClassName('x')}
          onClick={() => handleButtonClick('x')}
        >
          x
        </Key>
        <Key
          className={handleClassName('c')}
          onClick={() => handleButtonClick('c')}
        >
          c
        </Key>
        <Key
          className={handleClassName('v')}
          onClick={() => handleButtonClick('v')}
        >
          v
        </Key>
        <Key
          className={handleClassName('b')}
          onClick={() => handleButtonClick('b')}
        >
          b
        </Key>
        <Key
          className={handleClassName('n')}
          onClick={() => handleButtonClick('n')}
        >
          n
        </Key>
        <Key
          className={handleClassName('m')}
          onClick={() => handleButtonClick('m')}
        >
          m
        </Key>
        <KeyCustom2 onClick={() => onSubmit()}>enter</KeyCustom2>
      </Row>
    </Container>
  )
}
