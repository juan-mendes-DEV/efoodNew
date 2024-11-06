import { HeroDescription, HeroSection } from './style'

type Props = {
  category: string
  title: string
}

const HeroApresentacao = ({ category, title }: Props) => (
  <HeroSection>
    <HeroDescription className="container">
      <h1>{category}</h1>
      <h2>{title}</h2>
    </HeroDescription>
  </HeroSection>
)
export default HeroApresentacao
