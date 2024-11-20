import styled from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  height: 350px; /* Ajuste a altura conforme necessário */
  background-size: cover;
  background-position: center;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`
export const HeroDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1024px;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 32px;
    font-weight: 100;
    line-height: 38px;
    color: white;
    margin-top: 25px;
  }
  h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 38px;
    color: white;
    margin-bottom: 32px;
  }
  @media (max-width: 740px) {
    text-align: left;
    margin: 20px;
  }
`
