import { CartButton, Container, Links } from './styles'
import logo from '../../assets/images/logo.png'
import { ImgLogo } from '../Hero/style'
import { Link } from 'react-router-dom'
import { open } from '../../store/redux/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderBar = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <nav className="container">
        <Links>
          <li>
            <Link to={'/'}>Restaurantes</Link>
          </li>
          <li>
            <Link to={'/'}>
              <ImgLogo src={logo} alt="" />
            </Link>
          </li>
          <li>
            <CartButton onClick={openCart}>
              {items.length} - Produto(s) no carrinho
            </CartButton>
          </li>
        </Links>
      </nav>
    </Container>
  )
}

export default HeaderBar
