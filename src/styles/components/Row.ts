import styled from 'styled-components'

export const StyledRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};

  @media screen and (max-width: 425px) {
    gap: ${({ theme }) => theme.spacings.sm};
  }
`

export const StyledRowCustom = styled(StyledRow)`
  gap: ${({ theme }) => theme.spacings.sm};
`
