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
  @media (max-width: 500px) {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .is-none {
      display: none;
    }
    .is-none-two {
      margin-top: 10px;
    }
  }
  @media (min-width: 501px) {
    .is-none-two {
      display: none;
    }
  }
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    img {
      margin-left: 0;
    }
  }
`
