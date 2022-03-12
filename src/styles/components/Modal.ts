import styled from 'styled-components'

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacings.xl};

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

export const StyledModalContent = styled.section`
  padding: ${({ theme }) => theme.spacings.xl}
    ${({ theme }) => theme.spacings.lg};
  border-radius: ${({ theme }) => theme.radius.md};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.lg};

  background: ${({ theme }) => theme.colors.background};
`

export const StyledModalText = styled.p`
  font-family: Open Sans;
  font-size: ${({ theme }) => theme.fonts.sizes.xxs};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  line-height: 150%;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
  }
`
