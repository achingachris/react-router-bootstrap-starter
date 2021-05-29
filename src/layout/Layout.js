// router
import { BrowserRouter as Router} from 'react-router-dom'

import Meta from '../components/Meta'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <Menu />
      <main>{children}</main>
      <Footer />
    </Router>
  )
}

export default Layout
