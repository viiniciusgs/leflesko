import styled from 'styled-components'

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacings.md};

  & h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    text-transform: uppercase;
  }
`
