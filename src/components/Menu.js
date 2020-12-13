import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='https://github.com/ChrisAchinga/react-bootstrap-starter'>GitHub</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu
