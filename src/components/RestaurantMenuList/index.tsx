import { CardRest } from '../RestaurantCardsMenu'
import { ListTWO } from './style'

type PropsCardapio = {
  cardapio: Cardapio[]
}

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
