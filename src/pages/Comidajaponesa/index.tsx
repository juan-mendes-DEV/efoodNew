import HeaderBar from '../../components/Header'
import HeroApresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import CardList, { AddList } from '../../components/CardList'
import Restaurante, { RestAdd } from '../../models/Restaurante'
import resJapa from '../../assets/images/restauranteJaponeis.png'
import resJapa2 from '../../assets/images/comida-japonesa.jpg'
import { useParams } from 'react-router-dom'

const foodjap: RestAdd[] = [
  {
    id: 1,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    receita:
      'O sushi, uma joia da culinária japonesa, é muito mais do que simples bolinhos de arroz com peixe cru. É uma experiência gastronômica única, que combina tradição e inovação a cada criação. Imagine uma tela em branco, onde cada sushiman, como um artista, pinta com ingredientes frescos e vibrantes, criando verdadeiras obras de arte comestíveis.',
    image: resJapa,
    link: '',
    type: `{image}`,
    price: 100.5,
    pessoasServida: ''
  },
  {
    id: 2,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    image: resJapa2,
    link: '',
    type: `{image}`,
    price: 50,
    pessoasServida: '',
    receita:
      'O sushi, uma joia da culinária japonesa, é muito mais do que simples bolinhos de arroz com peixe cru. É uma experiência gastronômica única, que combina tradição e inovação a cada criação. Imagine uma tela em branco, onde cada sushiman, como um artista, pinta com ingredientes frescos e vibrantes, criando verdadeiras obras de arte comestíveis.'
  },
  {
    id: 3,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    image: resJapa,
    link: '',
    type: `{image}`,
    price: 10,
    pessoasServida: '',
    receita:
      'O sushi, uma joia da culinária japonesa, é muito mais do que simples bolinhos de arroz com peixe cru. É uma experiência gastronômica única, que combina tradição e inovação a cada criação. Imagine uma tela em branco, onde cada sushiman, como um artista, pinta com ingredientes frescos e vibrantes, criando verdadeiras obras de arte comestíveis.'
  },
  {
    id: 4,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    image: resJapa2,
    link: '',
    type: `{image}`,
    price: 100,
    pessoasServida: 'Serve: de duas a 3 pessoas',
    receita:
      'A base de todo sushi é o arroz japonês, cozido na medida certa para ter uma textura macia e pegajosa. Sobre essa base, são adicionados os mais diversos ingredientes, como peixes crus finamente fatiados (atum, salmão, peixe branco), frutos do mar (camarão, polvo), vegetais frescos (pepino, abacate, cenoura) e ovas de peixe. Cada combinação resulta em uma explosão de sabores e texturas, que desperta os sentidos e conquista até os paladares mais exigentes'
  },
  {
    id: 5,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    image: resJapa2,
    link: '',
    type: `{image}`,
    price: 100,
    pessoasServida: 'Serve: de duas a 3 pessoas',
    receita:
      'A base de todo sushi é o arroz japonês, cozido na medida certa para ter uma textura macia e pegajosa. Sobre essa base, são adicionados os mais diversos ingredientes, como peixes crus finamente fatiados (atum, salmão, peixe branco), frutos do mar (camarão, polvo), vegetais frescos (pepino, abacate, cenoura) e ovas de peixe. Cada combinação resulta em uma explosão de sabores e texturas, que desperta os sentidos e conquista até os paladares mais exigentes'
  },
  {
    id: 6,
    title: 'Restaurante japones',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    image: resJapa2,
    link: '',
    type: `{image}`,
    price: 10,
    pessoasServida: 'Serve: de duas a 3 pessoas',
    receita:
      'A base de todo sushi é o arroz japonês, cozido na medida certa para ter uma textura macia e pegajosa. Sobre essa base, são adicionados os mais diversos ingredientes, como peixes crus finamente fatiados (atum, salmão, peixe branco), frutos do mar (camarão, polvo), vegetais frescos (pepino, abacate, cenoura) e ovas de peixe. Cada combinação resulta em uma explosão de sabores e texturas, que desperta os sentidos e conquista até os paladares mais exigentes'
  }
]

const ComidaJaponesa = () => {
  const { id } = useParams()
  return (
    <>
      <HeaderBar />
      <HeroApresentacao title="comida japonesa" category="comida japonesa" />
      <div className="containerTwo">
        <AddList restAdd={foodjap} />
      </div>
      <Footer />
    </>
  )
}

export default ComidaJaponesa
