import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import Product from './components/Product'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoçoes" background="gray" />
        <ProductList title="Em Breve" background="black" />
      </>
    )
  }
])
function App() {
  return (
    <div className="App">
      <>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RouterProvider router={rotas} />
      </>
    </div>
  )
}

export default App
