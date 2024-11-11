import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import CardList from '../../components/CardList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <div className="container">
        <CardList restaurantes={restaurantes} />
      </div>
      <Footer />
    </>
  )
}

export default Home
