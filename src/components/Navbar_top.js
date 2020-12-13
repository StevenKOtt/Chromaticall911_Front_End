import React from "react"
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAppState} from '../AppState.js'
const NavbarTop = (props) => {
  const {state, dispatch} = useAppState()
  return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Chromaticall-911</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      {!state.token ? (<><Nav.Link><Link to=
    "/auth/login">Login</Link></Nav.Link>
      <Nav.Link><Link to=
    "/auth/signup">Sign Up</Link></Nav.Link></>): null}
      {state.token ? 
      (<>
      <Nav.Link><Link to=
      "/">Home</Link></Nav.Link>
      
      <Nav.Link><Link to=
      "/search">Search</Link></Nav.Link>

       <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to="/notes">Notes</Link></NavDropdown.Item>
          <NavDropdown.Item >Support</NavDropdown.Item>
          <NavDropdown.Item >Analysis</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>


      <Nav.Link onClick={()=> {
        dispatch({type: "logout"})
        props.history.push("/")
      }}>Logout</Nav.Link></>) : null }
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default NavbarTop