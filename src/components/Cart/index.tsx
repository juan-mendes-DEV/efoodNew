import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Fechar,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
  ValorTotal
} from './style'
import imgExemplo from '../../assets/images/comida-japonesa.jpg'
import fechar from '../../assets/images/fechar.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={imgExemplo} alt="" />
          <div>
            <h3>nome do prato</h3>
            <span>R$ 150,00</span>
          </div>
          <Fechar>
            <img className="BtnFechar" src={fechar} alt="" />
          </Fechar>
        </CartItem>
      </ul>
      <ValorTotal>
        <p>Valor Total</p>
        <p>100</p>
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

export default Cart
