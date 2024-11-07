import CardRestaurante, { CardRest } from '../Card'
import { ContainerHome, List, ListTWO } from './style'
import Restaurante, { RestAdd } from '../../models/Restaurante'

type Props = {
  restaurantes: Restaurante[]
}
type PropsRest = {
  restAdd: RestAdd[]
}

export const AddList = ({ restAdd }: PropsRest) => (
  <div>
    <ListTWO>
      {restAdd.map((restadd) => (
        <CardRest
          key={restadd.id}
          title={restadd.title}
          description={restadd.description}
          image={restadd.image}
          link={restadd.link}
          price={restadd.price}
          pessoasServida={restadd.pessoasServida}
          receita={restadd.receita}
        />
      ))}
    </ListTWO>
  </div>
)
const CardList = ({ restaurantes }: Props) => (
  <ContainerHome>
    <List>
      {restaurantes.map((restaurante) => (
        <CardRestaurante
          key={restaurante.id}
          title={restaurante.title}
          category={restaurante.category}
          description={restaurante.description}
          infos={restaurante.infos}
          image={restaurante.image}
          link={restaurante.link}
          nota={restaurante.nota}
        />
      ))}
    </List>
  </ContainerHome>
)

export default CardList
