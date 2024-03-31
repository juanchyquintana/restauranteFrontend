import { Col, Card } from "react-bootstrap";
import placa2 from "./img/placa-bebida.jpg";

const Cardlink2 = () => {
  return (
    <Col sm={2} md={2} lg={3} className="tamañoCard d-flex">
      <Card className="position-relative">
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
  );
};

export default Cardlink2;
