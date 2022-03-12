import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.md} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  @media screen and (min-width: 768px) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const StyledButton = styled.button`
  display: flex;

  background: none;
  border: none;

  cursor: pointer;

  &,
  a {
    color: ${({ theme }) => theme.colors.text};
  }
`
