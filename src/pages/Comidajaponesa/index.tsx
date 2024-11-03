import HeaderBar from '../../components/Header'
import HeroApresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import CardList, { AddList } from '../../components/CardList'
import Restaurante, { RestAdd } from '../../models/Restaurante'
import resJapa from '../../assets/images/restauranteJaponeis.png'
import resJapa2 from '../../assets/images/comida-japonesa.jpg'
import pizzaria1 from '../../assets/images/pizzria1.jpeg'
import pizzaria2 from '../../assets/images/pizzaria2.jpg'

const foodjap: RestAdd[] = [
  {
    id: 1,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa,
    link: ''
  },
  {
    id: 2,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa2,
    link: ''
  },
  {
    id: 3,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa,
    link: ''
  },
  {
    id: 4,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa2,
    link: ''
  },
  {
    id: 5,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa2,
    link: ''
  },
  {
    id: 6,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: resJapa2,
    link: ''
  }
]

const ComidaJaponesa = () => (
  <>
    <HeaderBar />
    <HeroApresentacao />
    <div className="container">
      <AddList restAdd={foodjap} />
    </div>
    <Footer />
  </>
)

export default ComidaJaponesa
