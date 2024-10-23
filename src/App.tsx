import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
