import { Container, Links } from './styles'
import logo from '../../assets/images/logo.png'
import { ImgLogo } from '../Hero/style'
import { Link } from 'react-router-dom'
const HeaderBar = () => (
  <Container>
    <nav className="container">
      <Links>
        <li>
          <a href="#">Restaurantes</a>
        </li>
        <li>
          <Link to={'/'}>
            <ImgLogo src={logo} alt="" />
          </Link>
        </li>
        <li>
          <a href="#">carrinho</a>
        </li>
      </Links>
    </nav>
  </Container>
)

export default HeaderBar
