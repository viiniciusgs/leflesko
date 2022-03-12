import React from 'react'

import Row from './Row'

import { StyledLetter } from '../styles/components/Letter'
import {
  StyledModal,
  StyledModalContent,
  StyledModalText,
} from '../styles/components/Modal'

export default function Modal() {
  return (
    <StyledModal>
      <StyledModalContent>
        <StyledModalText>
          Todos os dias uma nova palavra de 5 letras surge para você adivinhar
          em até 6 tentativas.
        </StyledModalText>

        <StyledModalText>
          Cada tentativa deve ser uma palavra válida. Obs: Acentos e cedilhas
          são desconsiderados.
        </StyledModalText>

        <StyledModalText>
          Após cada tentativa as peças iram indicar se você está perto da
          resposta ou não.
        </StyledModalText>

        <Row>
          <StyledLetter className="success">l</StyledLetter>
          <StyledLetter>o</StyledLetter>
          <StyledLetter>r</StyledLetter>
          <StyledLetter>e</StyledLetter>
          <StyledLetter>m</StyledLetter>
        </Row>

        <StyledModalText>
          A cor verde indica que a letra faz parte da palavra e está na posição
          correta.
        </StyledModalText>

        <Row>
          <StyledLetter>i</StyledLetter>
          <StyledLetter>p</StyledLetter>
          <StyledLetter className="alert">s</StyledLetter>
          <StyledLetter>u</StyledLetter>
          <StyledLetter>m</StyledLetter>
        </Row>

        <StyledModalText>
          A cor azul indica que a letra faz parte da palavra porém em outra
          posição.
        </StyledModalText>

        <Row>
          <StyledLetter>d</StyledLetter>
          <StyledLetter>o</StyledLetter>
          <StyledLetter>l</StyledLetter>
          <StyledLetter>o</StyledLetter>
          <StyledLetter className="error">r</StyledLetter>
        </Row>

        <StyledModalText>
          A cor vermelha indica que a letra não faz parte da palavra.
        </StyledModalText>

        <StyledModalText>Bom jogo!</StyledModalText>
      </StyledModalContent>
    </StyledModal>
  )
}
