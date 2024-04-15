import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './menu.css'
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import brandImg from '../pages/imagenLogo/lotusblanco.png'
import Swal from 'sweetalert2/src/sweetalert2';

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [scrolled, setScrolled] = useState(false);
  const [windowSize, setWindowSize] = useState(false)

  const navegacion = useNavigate();
  const location = useLocation();
  const currentlUrl = location.pathname
  const widthAlIniciar = window.innerWidth

  window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 992){
    setWindowSize(true)
  } else {
    setWindowSize(false)
  }
});

  const navbarEstilo = () => {
    if (currentlUrl !== '/'){
      return 'black'
    }
    if (windowSize){
      return 'black'
    } else {
      return ''
    }
  }

  const logout = () => {


    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("usuarioLotus");
        sessionStorage.removeItem("pedido")
        setUsuarioLogueado({});
        Swal.fire("Sesion cerrada con exito!");
        navegacion("/ingresar");

      }
  });
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
      <Navbar expand="lg" variant='dark' bg={`${widthAlIniciar < 992 ? 'black' : navbarEstilo()}`} className={`py-3 fixed-top navbar-custom text-white bg-body- fs-4 ${scrolled ? 'bg-black shadow' : ''}`}>
          <Container fluid className=''>
            <Navbar.Brand href="#home">{
              <img src={brandImg} alt="logo Lotus" className='navbarLogo'/>
            }</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-center">
              <Nav>
                <Link to="/" className='text-light nav-link'>Inicio</Link>
                <Link className='text-light nav-link' to="/menu">Menú</Link>
                <Link to="/contacto" className='text-light nav-link'>Contacto</Link>
                <Link to="/nosotros" className='text-light nav-link'>Sobre nosotros</Link>
                {
                  usuarioLogueado.tipoUsuario === "admin" ? (
                    <>
                      <NavDropdown title="Administrador" id="navbarScrollingDropdown">
                      < NavDropdown.Item>
                          <Link to="/administrador/" className='text-black link link-underline-opacity-0 dropdown-item text-center'>Agregar productos</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <Link to="/administrador/panel-usuarios" className='text-black link-underline-opacity-0 dropdown-item text-center'>Panel Usuario</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/administrador/ganancias" className='text-black link link-underline-opacity-0 dropdown-item text-center'>Ganancias</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          <Link to="/administrador/cocina" className='text-black link link-underline-opacity-0 dropdown-item text-center'>Cocina</Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Button className="text-light nav-link" variant="link" onClick={logout}>
                        <i className="bi bi-box-arrow-left fs-2 iconos-nav"></i> Cerrar sesión
                      </Button>
                    </>
                  ) : (
                    usuarioLogueado.tipoUsuario === "usuario" ? (
                      <>
                      <Link className='text-light nav-link' to="/mis-pedidos">
                        Mis pedidos
                      </Link>  
                      <Link className='text-light nav-link' to="/carrito">
                        Carrito
                      </Link> 
                      <Button className="text-light nav-link" variant="link" onClick={logout}>
                      <i className="bi bi-box-arrow-left fs-2 iconos-nav"></i> Cerrar sesión
                      </Button>
                      </>
                    ):(
                    <>
                      <Link to="/ingresar" className='text-light nav-link'><i className="bi bi-person fs-1 iconos-nav"></i> Ingresar</Link>
                      <Link to="/registrarse" className='text-light nav-link'><i className="bi bi-pencil-square fs-2 iconos-nav"></i> Registro</Link>
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