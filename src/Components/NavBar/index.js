import {
    Navbar,
    Nav,
} from "react-bootstrap";

import React from 'react'

export default function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Nav className="me-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}
