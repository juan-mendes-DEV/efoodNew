import styled from 'styled-components'
import ImgHero from '../../assets/images/comida-japonesa.jpg'

export const HeroSection = styled.section`
  position: relative;
  height: 350px; /* Ajuste a altura conforme necessário */
  background-image: url(${ImgHero});
  background-size: cover;
  background-position: center;
  z-index: 3;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
`
export const HeroDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 100px;
    margin-top: 70px;
    h1 {
      color: white;
      margin-bottom: 100px;
      z-index: 4;
    }
    p {
      color: white;
      z-index: 4;
    }
  }
`

// <section class="hero">
//   <img src="sua-imagem.jpg" alt="Descrição da imagem">
//   <div class="hero-content">
//     <h1>Título do Hero</h1>
//     <p>Descrição do hero.</p>
//   </div>
// </section>
