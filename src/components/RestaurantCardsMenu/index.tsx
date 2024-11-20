import * as S from './style'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CartItem, add, open } from '../../store/redux/cart'
import { parseToBrl } from '../../utils'
import { getDescription } from '../../utils'

interface ModalState {
  isVisible: boolean
}

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
      <S.ContainerRest>
        <S.ImgRest src={foto} alt="" />
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
      </S.ContainerRest>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <button onClick={() => closeModal()}>X</button>
          <S.ModalBody>
            <img src={foto} alt={nome} />
            <S.ModalDescription>
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
            </S.ModalDescription>
          </S.ModalBody>
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}
