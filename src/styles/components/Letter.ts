import styled from 'styled-components'

export const StyledLetter = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: ${({ theme }) => theme.spacings.sm} solid
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  text-transform: uppercase;

  &.success {
    border-color: ${({ theme }) => theme.colors.success};
  }

  &.alert {
    border-color: ${({ theme }) => theme.colors.alert};
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.error};
  }
`
