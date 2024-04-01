import Col from "react-bootstrap/Col";
import { Card, Container } from "react-bootstrap";
import placa1 from "./img/placa-comida.jpg";
import placa2 from "./img/placa-bebida.jpg";

const Cardlink = () => {
  return (
    <Container className="d-flex justify-content-between">
    <Col sm={1} md={2} lg={3} className="tamañoCard d-flex ">
      <Card className="position-relative">
        <div className="position-absolute w-100 text-center top-50 start-50 translate-middle">
          <Card.Title className="pt-5 display-6">Comidas</Card.Title>
        </div>
        <div>
          <a href="#">
            <img src={placa1} alt="imagen" className="opcionImagen" />
          </a>
        </div>
      </Card>
    </Col>
    <Col sm={1} md={2} lg={3} className="tamañoCard d-flex">
      <Card className="position-relative ms-5">
        <div className="position-absolute w-100 text-center top-50 start-50 translate-middle">
        <Card.Title className="pt-5 display-6">bebidas</Card.Title>
        </div>
        <div>
        <a href="#">
          <img src={placa2} alt="imagen" className="opcionImagen" />
        </a>
        </div>
      </Card>
    </Col>

    </Container>
  );
};

export default Cardlink;
