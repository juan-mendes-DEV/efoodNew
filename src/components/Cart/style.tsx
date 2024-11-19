import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 7;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
    border: none;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    background-color: #ffebd9;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: #fff;
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItems = styled.li`
  display: flex;
  background-color: #ffebd9;
  position: relative;
  padding: 8px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: #e66767;
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: #e66767;
    font-weight: 400;
    font-size: 14px;
  }
`
export const Fechar = styled.div`
  position: absolute;
  bottom: 0px;
  right: -4px;
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
export const ValorTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  p {
    color: #ffebd9;
  }
`
