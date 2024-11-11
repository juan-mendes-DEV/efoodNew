import { HeroDescription, HeroSection } from './style'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const HeroApresentacao = ({ restaurante }: Props) => (
  <HeroSection style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <HeroDescription className="container">
      <h1>{restaurante.titulo}</h1>
      <h2>{restaurante.tipo}</h2>
    </HeroDescription>
  </HeroSection>
)
export default HeroApresentacao
