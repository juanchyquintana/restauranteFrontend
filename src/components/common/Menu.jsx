import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import './menu.css'
import { Link } from 'react-router-dom';


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
            <Link to="/" className='text-light nav-link'>Inicio</Link>
            <Link to="/administrador" className='text-light nav-link'>Administrador</Link>
            <Link to="/cocina"  className='text-light nav-link'>Cocina</Link>
            <Link to="/contacto" className='text-light nav-link'>Contacto</Link>
            <Link to="/nosotros" className='text-light nav-link'>Sobre nosotros</Link>
            <Link to="/ingresar" className='text-light nav-link'>Login</Link>
            <Link to="/registrarse" className='text-light nav-link'>Register</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;