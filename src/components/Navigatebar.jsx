import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigatebar = () => {
    return(
        <div>            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                    
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Career">Career</Nav.Link>
                        <Nav.Link href="/Hobbies">Hobbies</Nav.Link>                        
                        <Nav.Link href="/contact">Contact</Nav.Link>             
                    </Nav>
                </Navbar.Collapse>
            </Navbar>        
        </div>
    )
}