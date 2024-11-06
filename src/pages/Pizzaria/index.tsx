import HeaderBar from '../../components/Header'
import HeroApresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import CardList, { AddList } from '../../components/CardList'
import Restaurante, { RestAdd } from '../../models/Restaurante'
import pizzaria1 from '../../assets/images/pizzria1.jpeg'
import pizzaria2 from '../../assets/images/pizzaria2.jpg'
import { title } from 'process'

const foodPizza: RestAdd[] = [
  {
    id: 1,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria1,
    link: ''
  },
  {
    id: 2,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria2,
    link: ''
  },
  {
    id: 3,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria1,
    link: ''
  },
  {
    id: 4,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria2,
    link: ''
  },
  {
    id: 5,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria2,
    link: ''
  },
  {
    id: 6,
    title: 'Pizzaria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaria2,
    link: ''
  }
]

const Pizzas = () => (
  <>
    <HeaderBar />
    <HeroApresentacao title="Pizzaria" category="italiana" />
    <div className="containerTwo">
      <AddList restAdd={foodPizza} />
    </div>
    <Footer />
  </>
)

export default Pizzas
