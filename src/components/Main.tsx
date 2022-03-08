import React, { useEffect } from 'react'

import Row from './Row'
import Letter from './Letter'

import { useWord } from '../hooks/useWord'

import { StyledMain } from '../styles/components/Main'

export default function Main({
  onSubmit,
  onBackspace,
}: {
  onSubmit: () => void
  onBackspace: () => void
}) {
  const { handleKeyClick } = useWord()

  function handleKeyPress(event: KeyboardEvent) {
    const { key, keyCode } = event

    if (keyCode >= 65 && keyCode <= 90) {
      handleKeyClick(key)
    } else if (keyCode === 8) {
      onBackspace()
    } else if (keyCode === 13) {
      onSubmit()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <StyledMain>
      <Row>
        <Letter row={0} index={0} />
        <Letter row={0} index={1} />
        <Letter row={0} index={2} />
        <Letter row={0} index={3} />
        <Letter row={0} index={4} />
      </Row>
      <Row>
        <Letter row={1} index={0} />
        <Letter row={1} index={1} />
        <Letter row={1} index={2} />
        <Letter row={1} index={3} />
        <Letter row={1} index={4} />
      </Row>
      <Row>
        <Letter row={2} index={0} />
        <Letter row={2} index={1} />
        <Letter row={2} index={2} />
        <Letter row={2} index={3} />
        <Letter row={2} index={4} />
      </Row>
      <Row>
        <Letter row={3} index={0} />
        <Letter row={3} index={1} />
        <Letter row={3} index={2} />
        <Letter row={3} index={3} />
        <Letter row={3} index={4} />
      </Row>
      <Row>
        <Letter row={4} index={0} />
        <Letter row={4} index={1} />
        <Letter row={4} index={2} />
        <Letter row={4} index={3} />
        <Letter row={4} index={4} />
      </Row>
      <Row>
        <Letter row={5} index={0} />
        <Letter row={5} index={1} />
        <Letter row={5} index={2} />
        <Letter row={5} index={3} />
        <Letter row={5} index={4} />
      </Row>
    </StyledMain>
  )
}
