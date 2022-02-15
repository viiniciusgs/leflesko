import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`
