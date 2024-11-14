import HeaderBar from '../../components/Header'
import HeroApresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import { AddList } from '../../components/CardList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurante } from '../Home'
import { useGetFeatureEfoodQuery } from '../../services/api'

const Restaurantes = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeatureEfoodQuery(id!)

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
