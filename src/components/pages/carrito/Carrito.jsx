import { Container, Table, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Mapa from "../../Mapa";
import "leaflet/dist/leaflet.css";
import "./carrito.css";
import { obtenerProductoID } from "../../../helpers/producto";

const Carrito = () => {
  const [datos, setDatos] = useState({
    lat: -26.8301695,
    lng: -65.2044388,
    delivery: false,
    calle: "",
  });
  const [pedidoState, setPedidoState] = useState({})
  const [productos, setProductos] = useState([])
  const pedido = JSON.parse(sessionStorage.getItem("pedido")) || false;
  // console.log(pedido)
  

  const actualizarCarrito = (direccion, lat, lng) => {
    setDatos({ ...datos, calle: direccion, lat: lat, lng: lng });
  };

  const cargarProductos = async () => {
    const productosArray = []
    for (let i = 0; i < pedido.productos.length; i++){
      try {
        const productoObtenido = await obtenerProductoID(pedido?.productos[i].producto)
        productosArray.push(productoObtenido)
        setProductos(productosArray)
      } catch (error) {
        console.log(error)
      }
    }
  }


  useEffect(() => {
    setPedidoState(pedido)
    cargarProductos()
  },[])

  return (
    <>
      {pedido ? (
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
                  {productos?.map((producto, i) => (
                    <tr className="align-text-bottom text-center" key={i}>
                      <td>{producto.nombre}</td>
                      <td>
                        <img
                          src={producto.imagen}
                          alt="sushi"
                          className="img-tabla"
                        />
                      </td>
                      <td>${producto.precio}</td>
                      <td>
                        <Form className="d-flex justify-content-center">
                          <Form.Control
                            type="number"
                            className="text-center input-tabla"
                            defaultValue={pedidoState.productos[i].cantidad}
                          />
                        </Form>
                      </td>
                      <td>$</td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan={5}
                      className="text-end fw-bold pe-lg-5 bg-dark text-white"
                    >
                      Total: ${pedidoState.total}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Form.Check
                type="checkbox"
                label="¿Delivery?"
                className="fw-bold text-uppercase my-3 "
                checked={datos.delivery}
                onChange={() =>
                  setDatos({ ...datos, delivery: !datos.delivery })
                }
              />
            </div>

            {datos.delivery && (
              <Mapa datos={datos} actualizarCarrito={actualizarCarrito} />
            )}

            <Container className="d-flex justify-content-center justify-content-md-end gap-3 text-center justify-items-center bg-white p-2">
              <Button type="submit">Realizar pedido</Button>
            </Container>
          </Container>
        </section>
      ) : (
        <Container className="mainPage nav-espacio">
          <h2>No hay productos agregados al carrito</h2>
        </Container>
      )}
    </>
  );
};

export default Carrito;
