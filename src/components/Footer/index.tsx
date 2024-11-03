import { ImgIcon, LiList, Rodape, UlList } from './style'
import faceLogo from '../../assets/images/icons/face.png'
import instaLogo from '../../assets/images/icons/insta.png'
import twitterLogo from '../../assets/images/icons/twitter.png'
import logo from '../../assets/images/logo.png'
import { ImgLogo } from '../Hero/style'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Rodape>
    <Link to={'/'}>
      <ImgLogo src={logo} alt="" />
    </Link>
    <UlList>
      <LiList>
        <a href="#">
          <ImgIcon src={instaLogo} alt="" />
        </a>
      </LiList>
      <LiList>
        <a href="#">
          <ImgIcon src={faceLogo} alt="" />
        </a>
      </LiList>
      <LiList>
        <a href="#">
          <ImgIcon src={twitterLogo} alt="" />
        </a>
      </LiList>
    </UlList>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade
      <br /> pela entrega, qualidade dos produtos é toda do estabelecimento
      contratado.
    </p>
  </Rodape>
)

export default Footer
