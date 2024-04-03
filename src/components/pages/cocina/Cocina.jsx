import { Button, Card, Container } from "react-bootstrap";
import "./cocina.css";
import CardProductoCocina from "./CardProdCocina";

const Cocina = () => {
  return (
    <section className="mainPage bg-light">
      <Container className="cocina-container overflow-hidden mb-5">
        <h2 className="mb-4">Pedidos pendientes: 2</h2>
        <Container fluid>
          <Card className="mb-3">
            <Card.Body className="card-padre-body">
              <Card.Title className="mb-3">Pedido 23</Card.Title>
              <Container fluid className="d-flex p-0 gap-4">
                <CardProductoCocina />
                <CardProductoCocina />
              </Container>
              
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <p className="m-0 btn btn-success">5:03</p>
                <Button>Finalizar</Button>
            </Card.Footer>
          </Card>
          
          <Card className="mb-3">
            <Card.Body className="card-padre-body">
              <Card.Title className="mb-3">Pedido 23</Card.Title>
              <Container fluid className="d-flex p-0 gap-4">
                <CardProductoCocina />
                <CardProductoCocina />
              </Container>
              
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <p className="m-0 btn btn-success">5:03</p>
                <Button>Finalizar</Button>
            </Card.Footer>
          </Card>

          
        </Container>
      </Container>
    </section>
  );
};

export default Cocina;
