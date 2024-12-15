import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


export default function NavBar() {
    
  return (
    <>
      <Navbar bg="antiquewhite" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="d-flex me-auto p-3 container justify-content-center">
            <Nav.Link href="#home">Main Pages</Nav.Link>
            <Nav.Link href="#features">Landing Pages</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">System</Nav.Link>
          </Nav>
          <Button variant="outline-success">Search</Button>
        </Container>
      </Navbar>
      
    </>
    
  )
  
}


