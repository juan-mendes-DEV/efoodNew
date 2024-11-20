import styled from 'styled-components'

export const ContainerHome = styled.div``

export const List = styled.ul`
  grid-template-columns: 1fr 1fr;
  display: grid;

  @media (max-width: 999px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
