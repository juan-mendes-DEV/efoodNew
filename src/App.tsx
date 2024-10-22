import React from 'react'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <>
        <GlobalCss />
        <Container>
          <Header />
        </Container>
      </>
    </div>
  )
}

export default App
