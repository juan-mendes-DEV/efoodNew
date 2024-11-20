import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import CardList from '../../components/RestaurantList'
import { useGetHomePageQuery } from '../../services/api'

const Home = () => {
  const { data: catalogoServico = [] } = useGetHomePageQuery()
  return (
    <>
      <Hero />
      <div className="container">
        <CardList restaurantes={catalogoServico} />
      </div>
      <Footer />
    </>
  )
}

export default Home
