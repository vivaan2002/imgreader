import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navbar_cal = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Image OCR</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_cal
