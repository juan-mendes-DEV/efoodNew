import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalCss } from './styles'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <div className="container"></div>
          <Rotas />
          <Cart />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
