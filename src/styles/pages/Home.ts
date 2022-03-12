import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 ${({ theme }) => theme.spacings.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: max-content;
    margin: 0 auto;
  }
`
