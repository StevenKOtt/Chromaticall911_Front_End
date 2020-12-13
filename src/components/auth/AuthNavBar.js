import React from "react"
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
const AuthNavBar = () => {
  return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Chromaticall-911</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Log-in</Nav.Link>
      <Nav.Link href="/Search">Sign-Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default AuthNavBar