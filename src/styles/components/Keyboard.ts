import styled from 'styled-components'

export const StyledKeyboard = styled.div`
  padding: ${({ theme }) => theme.spacings.sm} 0
    ${({ theme }) => theme.spacings.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md};
`
