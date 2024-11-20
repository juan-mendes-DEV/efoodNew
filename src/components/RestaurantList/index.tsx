import CardRestaurante from '../RestaurantCards'
import { ContainerHome, List } from './style'

type Props = {
  restaurantes: Restaurante[]
}
const CardList = ({ restaurantes }: Props) => (
  <ContainerHome>
    <List>
      {restaurantes.map((restaurante) => (
        <CardRestaurante
          id={restaurante.id}
          key={restaurante.id}
          titulo={restaurante.titulo}
          destacado={restaurante.destacado}
          tipo={restaurante.tipo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
          cardapio={[]}
        />
      ))}
    </List>
  </ContainerHome>
)
export default CardList
