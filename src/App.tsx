import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
