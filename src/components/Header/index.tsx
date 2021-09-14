import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Gerenciamento de usuário</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item as={Link} className="nav-link" to="/">Início</Nav.Item>
          <Nav.Item as={Link} className="nav-link" to="/users">Usuário</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export {
  Header
}
