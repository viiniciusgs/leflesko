import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.md};
  flex: 1;

  @media screen and (max-width: 425px) {
    gap: ${({ theme }) => theme.spacings.sm};
  }
`

export const Letter = styled.div`
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

  @media screen and (min-width: 1024px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`
