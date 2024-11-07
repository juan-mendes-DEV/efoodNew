import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import CardList from '../../components/CardList'
import Restaurante from '../../models/Restaurante'
import resJapa from '../../assets/images/restauranteJaponeis.png'
import pizzaria from '../../assets/images/pizzaria.png'
import pizzaria1 from '../../assets/images/pizzria1.jpeg'
import pizzaria2 from '../../assets/images/pizzaria2.jpg'

const restaurantess: Restaurante[] = [
  {
    id: 1,
    category: '',
    title: 'comida japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['japa'],
    image: resJapa,
    link: `/ComidaJaponesa/{id}`,
    nota: 3.5
  },
  {
    id: 2,
    category: '',
    title: 'comida japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['japa'],
    image: resJapa,
    link: `/ComidaJaponesa/{id}`,
    nota: 4.5
  },
  {
    id: 3,
    category: '',
    title: 'comida japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'japa'],
    image: resJapa,
    link: `/ComidaJaponesa/{id}`,
    nota: 4.2
  },
  {
    id: 4,
    category: '',
    title: 'Pizzaria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque', 'pizza'],
    image: pizzaria2,
    link: `/Pizzas/{id}`,
    nota: 5.5
  },
  {
    id: 5,
    category: '',
    title: 'Pizzaria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['pizza'],
    image: pizzaria2,
    link: `/Pizzas/{id}`,
    nota: 2.5
  },
  {
    id: 6,
    category: '',
    title: 'Pizzaria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['pizza'],
    image: pizzaria1,
    link: `/Pizzas/{id}`,
    nota: 5.3
  }
]

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <CardList restaurantes={restaurantess} />
    </div>
    <Footer />
  </>
)

export default Home
