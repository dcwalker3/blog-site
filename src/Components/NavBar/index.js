import React from 'react'
import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';

const logo = require('../../media/img/logo/logo.png');

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className='navbar'>
        <Navbar.Brand href="#home">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Site Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
            <Nav className="mr-2">
                <Nav.Link href="/" className='mr-2'>Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                {/* User React Icon that links to login/signup */}
                <Nav.Link href="/login">
                    Login
                </Nav.Link>
                <Nav.Link href="/signup">
                    Create Account
                </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            
        </Navbar.Collapse>
    </Navbar>
  )
}
