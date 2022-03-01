import React from 'react'

import { Container } from '../styles/components/Row'

export default function Row({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}
