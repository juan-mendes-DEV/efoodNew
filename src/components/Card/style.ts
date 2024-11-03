import styled from 'styled-components'
import restJap from '../../assets/images/restauranteJaponeis.png'

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
  width: 360px;
  height: 366px;
  background-color: #e66767;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  margin: 10px;
  margin-bottom: 22px;

  h2 {
    color: white;
    margin-top: 4px;
  }
  p {
    color: white;
    line-height: 22px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  button {
    background-color: white;
    border: none;
    width: 100%;
    padding: 8px;
  }
`
export const ImgRest = styled.img`
  width: 350px;
  height: 160px;
`
