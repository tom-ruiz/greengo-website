import React from 'react';
import '../style/navbar.scss';
import {Navbar, Container, Nav} from 'react-bootstrap';
import picto from '../img/picto.png';

function NavbarComponent(){
    return(
        <Navbar className="nav" variant="light" fixed='top'>
          <Container>
          <Navbar.Brand href="/" className="nav__title"><img src={picto} alt="picto"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav__link" href="./Events">Evènements</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    )
}

export default NavbarComponent;
