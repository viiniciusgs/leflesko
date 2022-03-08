import React from 'react'

import { StyledRow, StyledRowCustom } from '../styles/components/Row'

export default function Row({
  children,
  type,
}: {
  children: React.ReactNode
  type?: string
}) {
  switch (type) {
    case 'custom':
      return <StyledRowCustom>{children}</StyledRowCustom>
    default:
      return <StyledRow>{children}</StyledRow>
  }
}
