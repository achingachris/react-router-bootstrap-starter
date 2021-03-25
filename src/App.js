import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// page components
import Menu from './components/Menu'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
