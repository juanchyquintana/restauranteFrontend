import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import './menu.css'
import { Link, useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [scrolled, setScrolled] = useState(false);

  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuarioLotus");
    setUsuarioLogueado({});
    navegacion("/ingresar");
  };
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
            <Link className='text-light nav-link' to="/menu">Menú</Link>
            <Link to="/contacto" className='text-light nav-link'>Contacto</Link>
            <Link to="/nosotros" className='text-light nav-link'>Sobre nosotros</Link>
            {
              usuarioLogueado.tipoUsuario === "admin" ? (
                <>
                  <Link to="administrador/cocina"  className='text-light nav-link'>
                    Cocina
                  </Link>  
                  <Link className='text-light nav-link' to="/administrador">
                    Administrador
                  </Link>
                  <Button className="text-light nav-link" variant="link" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                usuarioLogueado.tipoUsuario === "usuario" ? (
                  <>
                  <Link className='text-light nav-link' to="/menu">
                    Menú
                  </Link>  
                  <Link className='text-light nav-link' to="/carrito">
                    Carrito
                  </Link> 
                  <Button className="text-light nav-link" variant="link" onClick={logout}>
                    Logout
                  </Button>
                  </>
                ):(
                <>
                  <Link to="/ingresar" className='text-light nav-link'>Login</Link>
                  <Link to="/registrarse" className='text-light nav-link'>Register</Link>
                </>)
              )
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
             
};

export default Menu;