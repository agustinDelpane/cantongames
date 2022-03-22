import React from 'react'
import AccountComponent from './AccountWidget'
import ImageComponent from './CartWidget'
import { Navbar, Nav, NavDropdown, Container   } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/" className='CGT'>Canton Games</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/ofertas" className='OFN' >Ofertas</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='CAT'>
        <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">PS4</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">XBOX One</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">N. Switch</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/contacto" className='CON'>Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  <ImageComponent />
  <AccountComponent />
</Navbar>

  )
}



export default NavBar