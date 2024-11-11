import HeaderBar from '../../components/Header'
import HeroApresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import { AddList } from '../../components/CardList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurante } from '../Home'

const Restaurantes = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // Verifica se a resposta é uma array, se não, converte para uma array com um único elemento
        if (!Array.isArray(res)) {
          res = [res]
        }

        setRestaurante(res[0]) // Define o primeiro restaurante retornado pela API
      })
  }, [id])
  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderBar />
      <HeroApresentacao
        restaurante={{
          id: 0,
          titulo: `${restaurante.titulo}`,
          destacado: false,
          tipo: `${restaurante.tipo}`,
          avaliacao: 0,
          descricao: '',
          capa: `${restaurante.capa}`,
          cardapio: []
        }}
      />
      <div className="containerTwo">
        <AddList cardapio={restaurante.cardapio} />
      </div>
      <Footer />
    </>
  )
}

export default Restaurantes
