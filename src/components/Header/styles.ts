import styled from 'styled-components'
import fundoHeader from '../../assets/images/fundoHeader.png'

export const Container = styled.header`
  background-image: url(${fundoHeader});
  height: 186px;
  font-size: 18px;
  color: #e66767;
  width: 100%;
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
`
