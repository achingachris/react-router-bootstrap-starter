import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Menu from './components/Menu'
import './App.css'

const App = () => {
  return (
    <>
      <Menu />
      <main>
        <Container>
          <Header />
        </Container>
      </main>
    </>
  )
}

export default App
