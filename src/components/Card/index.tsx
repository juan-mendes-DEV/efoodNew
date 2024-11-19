import { Link } from 'react-router-dom'
import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/icons/estrela.png'
import {
  Card,
  ContainerRest,
  DescriptionNota,
  Destacado,
  EstrelaIcon,
  ImgCard,
  ImgRest,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  NameDescription,
  NameRest
} from './style'
import { useState } from 'react'
import { Cardapio, Restaurante } from '../../pages/Home'
import { useGetFeatureEfoodQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { CartItem, add, open } from '../../store/redux/cart'
import { parseToBrl } from '../Cart'

interface ModalState {
  isVisible: boolean
}
const getDescription = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + '...'
  }
  return descricao
}
const CardRestaurante = ({
  avaliacao,
  descricao,
  capa,
  id,
  titulo,
  destacado,
  tipo
}: Restaurante) => {
  return (
    <>
      <Card>
        <ImgCard src={capa} alt={titulo} />
        <Destacado>
          {destacado && <p>Destaque da Semana</p>}
          <p>{tipo}</p>
        </Destacado>
        <NameRest>
          <h3>{titulo}</h3>
          <DescriptionNota>
            <p>{avaliacao}</p>
            <EstrelaIcon src={estrela} alt="" />
          </DescriptionNota>
        </NameRest>
        <NameDescription>
          <p>{getDescription(descricao)}</p>
        </NameDescription>
        <button>
          <Link className="link" to={`/Restaurantes/${id}`}>
            Saiba Mais
          </Link>
        </button>
      </Card>
    </>
  )
}
export default CardRestaurante

export const CardRest = ({
  descricao,
  id,
  foto,
  nome,
  porcao,
  preco
}: Cardapio) => {
  const dispatch = useDispatch()

  const addTocart = () => {
    const itemToAdd: CartItem = {
      id: id, // Certifique-se de que 'id' está definido corretamente
      nome: nome, // Substitua com o nome do item
      preco: preco,
      foto: foto,
      descricao: descricao,
      porcao: porcao
    }
    dispatch(add(itemToAdd))
    dispatch(open())
  }
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
        <ImgRest src={foto} alt="" />
        <h2>{nome}</h2>
        <p>{getDescription(descricao)}</p>
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
            <img src={foto} alt={nome} />
            <ModalDescription>
              <h1>{nome}</h1>
              <p>
                {descricao}
                <br />
                <br />
                {porcao}
              </p>
              <button onClick={addTocart}>
                Adicionar ao carrinho - {parseToBrl(preco)}
              </button>
            </ModalDescription>
          </ModalBody>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
