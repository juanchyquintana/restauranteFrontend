import { Container, Row, Col } from 'react-bootstrap';
const Nosotros = () => {
    return (
        <section id="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Nuestra Historia</h2>
            <p>
              Lotus es un restaurante chino familiar que ha estado sirviendo auténtica cocina china durante más de dos décadas. Nos enorgullecemos de ofrecer platos elaborados con ingredientes frescos y sabrosos, preparados por nuestros talentosos chefs.
            </p>
            <p>
              Desde nuestros modestos comienzos en un pequeño local hasta convertirnos en un destino gastronómico popular, hemos mantenido nuestro compromiso con la calidad y la autenticidad en cada plato que servimos.
            </p>
          </Col>
          <Col md={6}>
            <h2>Nuestra Misión</h2>
            <p>
              En Lotus, nuestra misión es proporcionar una experiencia culinaria excepcional para nuestros clientes. Nos esforzamos por superar las expectativas con cada comida, brindando no solo deliciosos platos, sino también un servicio excepcional y un ambiente acogedor.
            </p>
            <p>
              Valoramos la satisfacción del cliente por encima de todo y nos comprometemos a mantener los más altos estándares en todo lo que hacemos. Ya sea que esté buscando una comida rápida para llevar o una cena relajada en nuestro comedor, nos esforzamos por hacer que cada visita a Lotus sea memorable.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    );
};

export default Nosotros;