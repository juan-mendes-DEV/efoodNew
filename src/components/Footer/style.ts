import styled from 'styled-components'
import fundo from '../../assets/images/fundoHeader.png'

export const Rodape = styled.footer`
  background-image: url(${fundo});
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;
`
export const UlList = styled.ul`
  display: flex;
  flex-direction: row;
`
export const LiList = styled.li`
  margin-right: 5px;
`
export const ImgIcon = styled.img`
  width: 40px;
`
