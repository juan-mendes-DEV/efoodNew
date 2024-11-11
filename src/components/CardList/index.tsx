import { Restaurante, Cardapio } from '../../pages/Home'
import CardRestaurante, { CardRest } from '../Card'
import { ContainerHome, List, ListTWO } from './style'

type Props = {
  restaurantes: Restaurante[]
}
type PropsCardapio = {
  cardapio: Cardapio[]
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

export const AddList = ({ cardapio }: PropsCardapio) => (
  <div>
    <ListTWO>
      {Array.isArray(cardapio) ? (
        cardapio.map((item) => (
          <CardRest
            key={item.id}
            foto={item.foto}
            id={item.id}
            preco={item.preco}
            nome={item.nome}
            descricao={item.descricao}
            porcao={item.porcao}
          />
        ))
      ) : (
        <p>Não há itens de cardápio disponíveis.</p>
      )}
    </ListTWO>
  </div>
)
