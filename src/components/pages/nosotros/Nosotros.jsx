import { Container, Row, Col, Image } from 'react-bootstrap';
import nosotrosImg from "../../../assets/chefs-trabajando-cocina-luz-roja-colgando-techo_902338-14584.jpg"
import "./nosotros.css"
import CardPersonal from './CardPersonal';
const Nosotros = () => {
    return (
        <section id="about-us" className='mt-5 text-white'>
        <Container>
          <Row>
            <Col md={6}>
              <Image src={nosotrosImg} alt="Sobre Nosotros" fluid />
            </Col>
            <Col md={6}>
              <h2>Nuestra Historia</h2>
              <p>
                Lotus es un restaurante chino familiar que ha estado sirviendo auténtica cocina china durante más de dos décadas. Nos enorgullecemos de ofrecer platos elaborados con ingredientes frescos y sabrosos, preparados por nuestros talentosos chefs.
              </p>
              <p>
                Desde nuestros modestos comienzos en un pequeño local hasta convertirnos en un destino gastronómico popular, hemos mantenido nuestro compromiso con la calidad y la autenticidad en cada plato que servimos.
              </p>
              <h2>Nuestra Misión</h2>
              <p>
                En Lotus, nuestra misión es proporcionar una experiencia culinaria excepcional para nuestros clientes. Nos esforzamos por superar las expectativas con cada comida, brindando no solo deliciosos platos, sino también un servicio excepcional y un ambiente acogedor.
              </p>
              <p>
                Valoramos la satisfacción del cliente por encima de todo y nos comprometemos a mantener los más altos estándares en todo lo que hacemos. Ya sea que esté buscando una comida rápida para llevar o una cena relajada en nuestro comedor, nos esforzamos por hacer que cada visita a Lotus sea memorable.
              </p>
            </Col>
          </Row>
          <Row className="">
          <Col sm={12} className="text-center">
            <h2>Nuestro Equipo</h2>
          </Col>
          <Col md={4} className='d-flex justify-content-center my-2'>
            <CardPersonal ></CardPersonal>
          </Col>
          <Col md={4} className='d-flex justify-content-center my-2'>
            <CardPersonal></CardPersonal>
          </Col>
          <Col md={4} className='d-flex justify-content-center my-2'>
            <CardPersonal></CardPersonal>
          </Col>
          <Col md={4} className='d-flex justify-content-center my-2'>
            <CardPersonal></CardPersonal>
          </Col>
          <Col md={4} className='d-flex justify-content-center my-2'>
            <CardPersonal></CardPersonal>
          </Col>
        </Row>
        </Container>
        
      </section>
    );
};

export default Nosotros;