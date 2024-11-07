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
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  NameDescription,
  NameRest
} from './style'
import { useState } from 'react'

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
  price: number
  pessoasServida: string
  receita: string
}
interface ModalState {
  isVisible: boolean
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
  title,
  price,
  pessoasServida,
  receita
}: PropsCardRest) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  return (
    <>
      <ContainerRest>
        <ImgRest src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          title={'adicionar no carrinho'}
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          Adicionar No Carrinho
        </button>
      </ContainerRest>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <button onClick={() => closeModal()}>X</button>
          <ModalBody>
            <img src={image} alt={title} />
            <ModalDescription>
              <h1>{title}</h1>
              <p>
                {receita}
                <br />
                <br />
                {pessoasServida}
              </p>
              <button>Adicionar ao carrinho - R$ {price}</button>
            </ModalDescription>
          </ModalBody>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default CardRestaurante
