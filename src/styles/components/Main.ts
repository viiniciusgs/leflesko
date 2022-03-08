import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.md};
  flex: 1;

  @media screen and (max-width: 425px) {
    gap: ${({ theme }) => theme.spacings.sm};
  }
`
