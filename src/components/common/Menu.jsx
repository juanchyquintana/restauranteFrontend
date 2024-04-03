import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import './menu.css'


const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <Navbar expand="lg" className={`fixed-top navbar-custom fs-4 ${scrolled ? 'bg-dark shadow' : ''}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto centrarNav">
            <Nav.Link href="#home"className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="#link"className='text-light'>Administrador</Nav.Link>
            <Nav.Link href="#home"className='text-light'>Login</Nav.Link>
            <Nav.Link href="#link"className='text-light'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;