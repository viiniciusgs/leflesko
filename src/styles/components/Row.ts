import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};
`

export const ContainerCustom = styled(Container)`
  gap: ${({ theme }) => theme.spacings.sm};
`
