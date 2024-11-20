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
    width: 30%;
    margin: 10px;
    border: none;
    padding: 8px;

    .link {
      color: white;
      font-weight: 700;
      font-size: 14px;
    }
  }
`
export const Highlighted = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
  p {
    margin-left: 10px;
    color: white;
    background-color: #e66767;
    font-size: 12px;
    padding: 8px;
    align-items: center;
    font-weight: 700;
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
