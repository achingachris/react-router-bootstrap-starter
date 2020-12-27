import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Route path='/react-bootstrap-starter' component={Home} exact />
          <Route path='/react-bootstrap-starter/about' component={About} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
