import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 2rem;
  height: 3rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Oswald;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  cursor: pointer;

  svg path:last-child {
    fill: ${({ theme }) => theme.colors.text};
  }

  &.success {
    background: ${({ theme }) => theme.colors.success};
  }

  &.alert {
    background: ${({ theme }) => theme.colors.alert};
  }

  &.error {
    background: ${({ theme }) => theme.colors.error};
  }

  @media screen and (min-width: 1024px) {
    width: 3rem;
    height: 4rem;
  }
`

export const StyledButtonCustom1 = styled(StyledButton)`
  width: max-content;
  padding: ${({ theme }) => theme.spacings.md};
  background: ${({ theme }) => theme.colors.tertiary};

  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacings.lg};
  }
`

export const StyledButtonCustom2 = styled(StyledButtonCustom1)`
  padding: 0 ${({ theme }) => theme.spacings.lg};

  text-transform: lowercase;
`
