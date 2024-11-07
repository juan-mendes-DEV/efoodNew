import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ComidaJaponesa from './pages/Comidajaponesa'
import Pizzas from './pages/Pizzaria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ComidaJaponesa/:id" element={<ComidaJaponesa />} />
    <Route path="/Pizzas/:id" element={<Pizzas />} />
  </Routes>
)

export default Rotas
