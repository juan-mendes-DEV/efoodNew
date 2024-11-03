import styled from 'styled-components'
import fundoHeader from '../../assets/images/fundoHeader.png'

export const Container = styled.header`
  background-image: url(${fundoHeader});
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`
export const ImgLogo = styled.img`
  width: 125px;
  height: 58px;
`
export const TextHero = styled.h2`
  font-size: 36px;
  line-height: 42px;
  color: #e66767;
`
