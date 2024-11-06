import { Link } from 'react-router-dom'
import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/icons/estrela.png'
import {
  Card,
  ContainerRest,
  DescriptionNota,
  EstrelaIcon,
  ImgCard,
  ImgRest,
  Infos,
  NameDescription,
  NameRest
} from './style'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  link: string
  nota: number
}
type PropsCardRest = {
  title: string
  description: string
  image: string
  link: string
}

const CardRestaurante = ({
  title,
  category,
  description,
  infos,
  image,
  link,
  nota
}: Props) => (
  <Card>
    <ImgCard src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="big" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <NameRest>
      <h3>{title}</h3>
      <DescriptionNota>
        <p>{nota}</p>
        <EstrelaIcon src={estrela} alt="" />
      </DescriptionNota>
    </NameRest>
    <NameDescription>
      <p>{description}</p>
    </NameDescription>
    <Button type="link" to={link} title={'Clique e saiba mais'}>
      Saiba Mais
    </Button>
  </Card>
)
export const CardRest = ({
  description,
  image,
  link,
  title
}: PropsCardRest) => (
  <ContainerRest>
    <ImgRest src={image} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button title={'adicionar no carrinho'}>
      <Link to={''}>Adicionar No Carrinho</Link>
    </button>
  </ContainerRest>
)
export default CardRestaurante
