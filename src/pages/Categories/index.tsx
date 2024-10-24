import ProductList from '../../components/ProductList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const emBreve: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 2,
    category: 'Rpg Ação',
    description:
      'Diablo é um clássico dos jogos de RPG de ação, famoso por sua jogabilidade frenética e atmosfera sombria. Nele, você assume o papel de um herói que desce às profundezas do Inferno para enfrentar hordas de demônios e criaturas grotescas.',
    title: 'Diablo',
    system: 'PS4',
    infos: ['20/06'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Star Wars é uma saga épica de ficção científica que se passa em uma galáxia distante, cheia de planetas, naves espaciais e criaturas fantásticas. A história gira em torno de uma antiga ordem de cavaleiros Jedi, que usam a Força – uma energia misteriosa que conecta todos os seres vivos – para manter a paz na galáxia.',
    title: 'star wars',
    system: 'PS5',
    infos: ['30/07'],
    image: starwars
  },
  {
    id: 4,
    category: 'aventura',
    description:
      'The Legend of Zelda é uma série de jogos de aventura famosa por seus mundos vastos e cheios de mistérios, onde você controla Link, um jovem herói em busca de salvar a Princesa Zelda e o reino de Hyrule.',
    title: 'zelda',
    system: 'PS5',
    infos: ['20/06'],
    image: zelda
  }
]

const promocoes: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Star Wars é uma saga épica de ficção científica que se passa em uma galáxia distante, cheia de planetas, naves espaciais e criaturas fantásticas. A história gira em torno de uma antiga ordem de cavaleiros Jedi, que usam a Força – uma energia misteriosa que conecta todos os seres vivos – para manter a paz na galáxia.',
    title: 'star wars',
    system: 'PS5',
    infos: ['10%', 'R$ 100,00'],
    image: starwars
  },
  {
    id: 6,
    category: 'aventura',
    description:
      'The Legend of Zelda é uma série de jogos de aventura famosa por seus mundos vastos e cheios de mistérios, onde você controla Link, um jovem herói em busca de salvar a Princesa Zelda e o reino de Hyrule.',
    title: 'zelda',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Star Wars é uma saga épica de ficção científica que se passa em uma galáxia distante, cheia de planetas, naves espaciais e criaturas fantásticas. A história gira em torno de uma antiga ordem de cavaleiros Jedi, que usam a Força – uma energia misteriosa que conecta todos os seres vivos – para manter a paz na galáxia.',
    title: 'star wars',
    system: 'PS5',
    infos: ['10%', 'R$ 100,00'],
    image: starwars
  },
  {
    id: 8,
    category: 'aventura',
    description:
      'The Legend of Zelda é uma série de jogos de aventura famosa por seus mundos vastos e cheios de mistérios, onde você controla Link, um jovem herói em busca de salvar a Princesa Zelda e o reino de Hyrule.',
    title: 'zelda',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]
const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
