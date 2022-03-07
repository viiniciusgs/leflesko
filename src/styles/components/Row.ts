import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};

  @media screen and (max-width: 425px) {
    gap: ${({ theme }) => theme.spacings.sm};
  }
`

export const ContainerCustom = styled(Container)`
  gap: ${({ theme }) => theme.spacings.sm};
`
