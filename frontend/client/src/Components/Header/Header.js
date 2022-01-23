import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return(
    <div className="navBar">
        <>
            <Navbar variant="dark" style={{backgroundColor: "#A2DCE7"}}>
                <Container>
                <Navbar.Brand href="#home">Student Portal</Navbar.Brand>
                <Nav className="me-right">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    </div>    
  );
}

export default Header;
