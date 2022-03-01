import React from 'react'

import Row from './Row'

import BackspaceSVG from '../assets/backspace.svg'

import {
  Container,
  Key,
  KeyCustom1,
  KeyCustom2,
} from '../styles/components/Keyboard'

export default function Keyboard() {
  return (
    <Container>
      <Row type="custom">
        <Key>q</Key>
        <Key>w</Key>
        <Key>e</Key>
        <Key>r</Key>
        <Key>t</Key>
        <Key>y</Key>
        <Key>u</Key>
        <Key>i</Key>
        <Key>o</Key>
        <Key>p</Key>
      </Row>
      <Row type="custom">
        <Key>a</Key>
        <Key>s</Key>
        <Key>d</Key>
        <Key>f</Key>
        <Key>g</Key>
        <Key>h</Key>
        <Key>j</Key>
        <Key>k</Key>
        <Key>l</Key>
        <KeyCustom1>
          <BackspaceSVG />
        </KeyCustom1>
      </Row>
      <Row type="custom">
        <Key>z</Key>
        <Key>x</Key>
        <Key>c</Key>
        <Key>v</Key>
        <Key>b</Key>
        <Key>n</Key>
        <Key>m</Key>
        <KeyCustom2>enter</KeyCustom2>
      </Row>
    </Container>
  )
}
