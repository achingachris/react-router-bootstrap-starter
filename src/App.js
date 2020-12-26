import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'

// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Route path='/react-bootstrap-starter' component={HomePage} exact />
          <Route path='/about' component={AboutPage} />
        </Container>
      </main>
    </Router>
  )
}

export default App
