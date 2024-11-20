import styled from 'styled-components'

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

  @media (max-width: 740px) {
    height: 600px;
    flex-direction: column;
    margin-top: 20px;
    align-items: end;
  }

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

  @media (max-width: 740px) {
    flex-direction: column;

    img {
      align-items: center;
      width: 200px;
      height: 200px;
      margin-right: 0;
    }
  }
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
    background-color: #ffebd9;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    width: 218px;
    height: 24px;
  }

  @media (max-width: 740px) {
    h1 {
      font-size: 18px;
      line-height: 10px;
      padding: 5px;
      margin-top: 10px;
    }
    p {
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    button {
      font-size: 14px;
      font-weight: 700;
      width: 218px;
      height: 24px;
    }
  }
`
