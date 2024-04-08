import "./carrito.css";
import { Container, Table, Form, Button } from "react-bootstrap";

const Carrito = () => {
  return (
    <section className="mainPage nav-espacio bg-light d-flex justify-content-center">
      <Container className="">
        <div>
          <Table responsive striped bordered>
            <thead className="text-center">
              <tr>
                <th className="text-white bg-dark">Producto</th>
                <th className="text-white bg-dark">Imagen</th>
                <th className="text-white bg-dark">Precio unidad</th>
                <th className="text-white bg-dark">Cantidad</th>
                <th className="text-white bg-dark">Total producto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-text-bottom text-center">
                <td>Sushi 12 piezas</td>
                <td>
                  <img
                    src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="sushi"
                    className="img-tabla"
                  />
                </td>
                <td>$250</td>
                <td>
                  <Form className="d-flex justify-content-center">
                    <Form.Control
                      type="number"
                      className="text-center input-tabla"
                      value={1}
                    />
                  </Form>
                </td>
                <td>$250</td>
              </tr>
              <tr className="align-text-bottom text-center">
                <td>Sushi 12 piezas</td>
                <td>
                  <img
                    src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="sushi"
                    className="img-tabla"
                  />
                </td>
                <td>$250</td>
                <td>
                  <Form className="d-flex justify-content-center">
                    <Form.Control
                      type="number"
                      className="text-center input-tabla"
                      value={1}
                    />
                  </Form>
                </td>
                <td>$250</td>
              </tr>
              <tr className="align-text-bottom text-center">
                <td>Sushi 12 piezas</td>
                <td>
                  <img
                    src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="sushi"
                    className="img-tabla"
                  />
                </td>
                <td>$250</td>
                <td>
                  <Form className="d-flex justify-content-center">
                    <Form.Control
                      type="number"
                      className="text-center input-tabla"
                      value={1}
                    />
                  </Form>
                </td>
                <td>$250</td>
              </tr>
              <tr>
                <td colSpan={5} className="text-end fw-bold pe-lg-5 bg-dark text-white">
                Total: $250
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Container>Aca poner el mapa</Container>
        <Container className="d-flex justify-content-center justify-content-md-end gap-3 text-center justify-items-center bg-white p-2">
          <Button>Realizar pedido</Button>
        </Container>
      </Container>
    </section>
  );
};

export default Carrito;