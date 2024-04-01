import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Evento from "./img/people-having-dinner-home-celebration-greek-easter.jpg"
import Evento2 from "./img/man-suit-having-breakfast-kitchen-side-view.jpg"
import Evento3 from "./img/closeup-tea-set-served-against-red-background-flowers.jpg"

const Cardevento = () => {
    return (
      <Container className='d-flex justify-content-between'>
        <Col sm={1} md={1} lg={3} >
        <Card className='mt-5 h-100'>
        <Card.Img variant="top" src={Evento} className='imagenEvento' />
        <Card.Body>
          <Card.Title className='text-center'>Festeja tus cumpleaños</Card.Title>
          <Card.Text className='text-center'>
          ¡Celebra tu cumpleaños con nosotros y convierte tu día en una experiencia única! <br />
          Ofrecemos una decoración vibrante, servicio excepcional y una deliciosa comida. <br />
          Únete a nosotros para momentos memorables junto a tus seres queridos. ¡Te esperamos para celebrar de una manera emocionante!
          </Card.Text>
          <div  className='d-flex justify-content-center'>
          <Button variant="primary">Hace tus reservas Aqui !!!</Button>
          </div>
            
        </Card.Body>
      </Card>
        </Col>
        <Col sm={1} md={1} lg={3} >
        <Card className='mt-5 h-100'>
        <Card.Img variant="top" src={Evento2} className='imagenEvento' />
        <Card.Body>
          <Card.Title className='text-center'>Almuerzos Ejecutivos</Card.Title>
          <Card.Text className='text-center'>
          ¡Ven a disfrutar de nuestro exclusivo almuerzo ejecutivo! <br />
          Déjate sorprender con un servicio de alta calidad y platos exquisitos. <br /> 
          Comparte un ambiente tranquilo con tus compañeros de trabajo. <br />
          ¡Te esperamos para vivir una experiencia gastronómica única durante tu almuerzo ejecutivo!
          </Card.Text>
          <div className='d-flex justify-content-center pt-4'>
          <Button variant="primary">Hace tus reservas Aqui !!!</Button>
          </div>
        </Card.Body>
      </Card>
        </Col>
        <Col sm={1} md={1} lg={3} >
        <Card className='mt-5 h-100'>
        <Card.Img variant="top" src={Evento3} className='imagenEvento' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Col>
      </Container>
        
    );
};

export default Cardevento;