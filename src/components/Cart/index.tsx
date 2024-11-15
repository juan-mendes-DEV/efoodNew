import Button from '../Button'
import {
  CartContainer,
  CartItems,
  Fechar,
  Overlay,
  Sidebar,
  ValorTotal
} from './style'
import fechar from '../../assets/images/fechar.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, CartItem } from '../../store/redux/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = (items: CartItem[]): number => {
    return items.reduce((accumulator, currentItem) => {
      // Verifica se 'preco' existe e é um número
      if (currentItem.preco) {
        return accumulator + currentItem.preco
      }
      return accumulator // Garante que o acumulador não é alterado se 'preco' não existir
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItems key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco}</span>
              </div>
              <Fechar>
                <img
                  onClick={() => removeItem(item.id)}
                  className="BtnFechar"
                  src={fechar}
                  alt=""
                />
              </Fechar>
            </CartItems>
          ))}
        </ul>
        <ValorTotal>
          <p>Valor Total</p>
          <p>{getTotalPrice(items).toFixed(2)}</p>
        </ValorTotal>
        <button
          className="btn"
          title="clique aqui para continuar com a compra"
          type="button"
        >
          Continuar Com A Entrega
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
