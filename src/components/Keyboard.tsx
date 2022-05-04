import React from 'react'

import Row from './Row'
import Button from './Button'

import { MdOutlineBackspace } from 'react-icons/md'

import { useWord } from '../hooks/useWord'

import { StyledKeyboard } from '../styles/components/Keyboard'
import {
  StyledButtonCustom1,
  StyledButtonCustom2,
} from '../styles/components/Button'

export default function Keyboard({
  onSubmit,
  onBackspace,
}: {
  onSubmit: () => void
  onBackspace: () => void
}) {
  const { finished } = useWord()

  return (
    <StyledKeyboard className={`${finished && 'disabled'}`}>
      <Row type="custom">
        <Button letter="q" />
        <Button letter="w" />
        <Button letter="e" />
        <Button letter="r" />
        <Button letter="t" />
        <Button letter="y" />
        <Button letter="u" />
        <Button letter="i" />
        <Button letter="o" />
        <Button letter="p" />
      </Row>

      <Row type="custom">
        <Button letter="a" />
        <Button letter="s" />
        <Button letter="d" />
        <Button letter="f" />
        <Button letter="g" />
        <Button letter="h" />
        <Button letter="j" />
        <Button letter="k" />
        <Button letter="l" />
        <StyledButtonCustom1
          onClick={() => {
            onBackspace()
          }}
        >
          <MdOutlineBackspace />
        </StyledButtonCustom1>
      </Row>

      <Row type="custom">
        <Button letter="z" />
        <Button letter="x" />
        <Button letter="c" />
        <Button letter="v" />
        <Button letter="b" />
        <Button letter="n" />
        <Button letter="m" />
        <StyledButtonCustom2 onClick={() => onSubmit()}>
          enter
        </StyledButtonCustom2>
      </Row>
    </StyledKeyboard>
  )
}
