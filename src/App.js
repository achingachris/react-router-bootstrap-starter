import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Routes>
      </Container>
    </Layout>
  )
}

export default App
