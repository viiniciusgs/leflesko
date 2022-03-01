import React from 'react'

import { Container, ContainerCustom } from '../styles/components/Row'

export default function Row({
  children,
  type,
}: {
  children: React.ReactNode
  type?: string
}) {
  switch (type) {
    case 'custom':
      return <ContainerCustom>{children}</ContainerCustom>
    default:
      return <Container>{children}</Container>
  }
}
