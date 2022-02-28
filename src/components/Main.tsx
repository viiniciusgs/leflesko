import React from 'react'

import { Container, Row, Letter } from '../styles/components/Main'

export default function Main() {
  return (
    <Container>
      <Row>
        <Letter className="alert">l</Letter>
        <Letter className="success">o</Letter>
        <Letter className="alert">r</Letter>
        <Letter className="alert">e</Letter>
        <Letter className="error">m</Letter>
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
