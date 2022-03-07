import styled from 'styled-components'

export const Container = styled.header`
  padding: ${({ theme }) => theme.spacings.md};

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 425px) {
      font-size: ${({ theme }) => theme.fonts.sizes.md};
    }
  }
`
