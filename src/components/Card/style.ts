import styled from 'styled-components'
import restJap from '../../assets/images/restauranteJaponeis.png'
import Button from '../Button'

export const Card = styled.div`
  width: 470px;
  height: 415px;
  position: relative;
  border: 1px solid #e66767;
  color: #e66767;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  button {
    background-color: #e66767;
    color: white;
    width: 50%;
    margin: 10px;
    border: none;
    padding: 8px;
  }
`
export const ImgCard = styled.img`
  width: 100%;
  height: 220px;
`
export const EstrelaIcon = styled.img`
  width: 21px;
  height: 21px;
`
export const DescriptionNota = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    margin-right: 6px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 6px;
  right: 2px;
`
export const ImgRestaurante = styled.div`
  width: 400px;
  height: 216px;
  background-image: url(${restJap});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: start;

  p {
    margin-right: 10px;
  }
`
export const NameRest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  p {
    font-weight: bold;
  }
`
export const NameDescription = styled.div`
  padding: 10px;
  text-align: start;
`
export const ContainerRest = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 348px;
  background-color: #e66767;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 32px;
  h2 {
    color: white;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
  }
  p {
    color: white;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 8px;
  }
  button {
    background-color: #ffebd9;
    border: none;
    width: 100%;
    font-size: 14px;
    padding: 8px;
    margin: auto;
    cursor: pointer;
  }
  @media (max-width: 999px) {
    margin: 16px auto;
  }
`
export const ImgRest = styled.img`
  width: 100%;
  height: 100%;
  max-height: 167px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1030px;
  height: 344px;
  margin-top: 70px;
  position: relative;
  z-index: 1;
  background-color: #e66767;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  padding: 32px;

  button {
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
`
export const ModalBody = styled.div`
  display: flex;
  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`
export const ModalDescription = styled.div`
  display: block;

  h1 {
    font-size: 18px;
    line-height: 21px;
    color: white;
    font-weight: bold;
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  button {
    background-color: white;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    width: 218px;
    height: 24px;
  }
`
