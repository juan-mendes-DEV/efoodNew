import Tag from '../tag'
import { Card, Descricao, Titulo } from './style'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore
      illo rem dolore consequatur quidem illum ipsa vero qui quos maiores
      obcaecati nesciunt sapiente possimus itaque, vitae voluptas enim ducimus!
      -
    </Descricao>
  </Card>
)
export default Product
