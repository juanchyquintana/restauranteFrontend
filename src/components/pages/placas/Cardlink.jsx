import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import placa1 from "./img/placa-comida.jpg";

const Cardlink = () => {
  return (
    <Col sm={2} md={2} lg={3} className="tamañoCard d-flex ">
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
  );
};

export default Cardlink;
