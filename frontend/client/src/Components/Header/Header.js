import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return(
    <div className="navBar">
        <>
            <Navbar variant="dark" style={{backgroundColor: "#A2DCE7"}}>
                <Container>
                <Navbar.Brand href="#home" style={{color: "#3D5B59"}}>Student Portal</Navbar.Brand>
                <Nav className="me-right">
                <Nav.Link href="/" style={{color: "#FFF"}}>Home</Nav.Link>
                <Nav.Link href="/insert" style={{color: "#FFF"}}>Custom-query</Nav.Link>
                <Nav.Link href="/inbuilt" style={{color: "#FFF"}}>In-built-query</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    </div>    
  );
}

export default Header;
