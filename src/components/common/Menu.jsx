import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <Navbar expand="lg" className="fixed-top navbar-custom fs-4">
      <Container>
        <Navbar.Brand href="#home">Aqui iria el logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
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