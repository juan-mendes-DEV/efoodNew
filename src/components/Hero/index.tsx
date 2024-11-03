import { Container } from './style'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { ImgLogo, TextHero } from './style'

const Hero = () => (
  <Container>
    <Link to={'/'}>
      <ImgLogo src={logo} alt="logo" />
    </Link>
    <TextHero>Viva experiências gastronômicas no conforto da sua casa</TextHero>
  </Container>
)

export default Hero
