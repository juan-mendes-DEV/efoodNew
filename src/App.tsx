import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import HeaderBar from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
