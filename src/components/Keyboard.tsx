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

  return (
    <Container>
      <Row type="custom">
        <Key onClick={() => handleButtonClick('q')}>q</Key>
        <Key onClick={() => handleButtonClick('w')}>w</Key>
        <Key onClick={() => handleButtonClick('e')}>e</Key>
        <Key onClick={() => handleButtonClick('r')}>r</Key>
        <Key onClick={() => handleButtonClick('t')}>t</Key>
        <Key onClick={() => handleButtonClick('y')}>y</Key>
        <Key onClick={() => handleButtonClick('u')}>u</Key>
        <Key onClick={() => handleButtonClick('i')}>i</Key>
        <Key onClick={() => handleButtonClick('o')}>o</Key>
        <Key onClick={() => handleButtonClick('p')}>p</Key>
      </Row>
      <Row type="custom">
        <Key onClick={() => handleButtonClick('a')}>a</Key>
        <Key onClick={() => handleButtonClick('s')}>s</Key>
        <Key onClick={() => handleButtonClick('d')}>d</Key>
        <Key onClick={() => handleButtonClick('f')}>f</Key>
        <Key onClick={() => handleButtonClick('g')}>g</Key>
        <Key onClick={() => handleButtonClick('h')}>h</Key>
        <Key onClick={() => handleButtonClick('j')}>j</Key>
        <Key onClick={() => handleButtonClick('k')}>k</Key>
        <Key onClick={() => handleButtonClick('l')}>l</Key>
        <KeyCustom1
          onClick={() => {
            onBackspace()
          }}
        >
          <BackspaceSVG />
        </KeyCustom1>
      </Row>
      <Row type="custom">
        <Key onClick={() => handleButtonClick('z')}>z</Key>
        <Key onClick={() => handleButtonClick('x')}>x</Key>
        <Key onClick={() => handleButtonClick('c')}>c</Key>
        <Key onClick={() => handleButtonClick('v')}>v</Key>
        <Key onClick={() => handleButtonClick('b')}>b</Key>
        <Key onClick={() => handleButtonClick('n')}>n</Key>
        <Key onClick={() => handleButtonClick('m')}>m</Key>
        <KeyCustom2 onClick={() => onSubmit()}>enter</KeyCustom2>
      </Row>
    </Container>
  )
}
