import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/animes">Animes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Votações</Nav.Link>
            <Nav.Link href="/generos">Gêneros</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Cabecalho