import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavbrowserBst.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar"> {/* Aplicar clase personalizada */}
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Mover los enlaces a la derecha */}
                        <NavLink id='enlaces' aria-current="page" to="/" >Home</NavLink>
                        <NavLink id='enlaces' aria-current="page" to="/projects" >Projects</NavLink>
                        <NavLink id='enlaces' aria-current="page" to="/gallery3d" >3D Gallery</NavLink>
                        <NavLink id='enlaces' aria-current="page" to="/contact" >Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;