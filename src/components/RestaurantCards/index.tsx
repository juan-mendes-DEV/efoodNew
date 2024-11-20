import { Link } from 'react-router-dom'
import estrela from '../../assets/images/icons/estrela.png'
import * as S from './style'
import { getDescription } from '../../utils'

const CardRestaurante = ({
  avaliacao,
  descricao,
  capa,
  id,
  titulo,
  destacado,
  tipo
}: Restaurante) => {
  return (
    <>
      <S.Card>
        <S.ImgCard src={capa} alt={titulo} />
        <S.Highlighted>
          {destacado && <p>Destaque da Semana</p>}
          <p>{tipo}</p>
        </S.Highlighted>
        <S.NameRest>
          <h3>{titulo}</h3>
          <S.DescriptionNota>
            <p>{avaliacao}</p>
            <S.EstrelaIcon src={estrela} alt="" />
          </S.DescriptionNota>
        </S.NameRest>
        <S.NameDescription>
          <p>{getDescription(descricao)}</p>
        </S.NameDescription>
        <button>
          <Link className="link" to={`/Restaurantes/${id}`}>
            Saiba Mais
          </Link>
        </button>
      </S.Card>
    </>
  )
}
export default CardRestaurante
