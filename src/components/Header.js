import { Container } from 'react-bootstrap'

const Header = (props) => {
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <h1>{props.pageTitle} Page</h1>
        <p className='lead'>{props.pageDescription}</p>
      </div>
    </Container>
  )
}

export default Header
