import { Container, Table, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Mapa from "../../Mapa";
import "leaflet/dist/leaflet.css";
import "./carrito.css";
import { obtenerProductoID } from "../../../helpers/producto";
import { crearPedido } from "../../../helpers/pedidos";
import Swal from "sweetalert2/src/sweetalert2.js";

const Carrito = () => {
  const [datos, setDatos] = useState({
    lat: -26.8301695,
    lng: -65.2044388,
    delivery: false,
    calle:
      "65, 25 de Mayo de 1810, Centro, San Miguel de Tucumán, Departamento Capital, Tucumán, T4000, Argentina",
  });
  const [pedidoState, setPedidoState] = useState({});
  const [productos, setProductos] = useState([]);
  const pedido = JSON.parse(sessionStorage.getItem("pedido")) || false;

  const realizarPedido = async (e) => {
    e.preventDefault();
    const nuevoObjeto = crearObjetoPedido();
    if (!datos.delivery) {
      nuevoObjeto.tipoEntrega = "bar";
      const infoPedido = await postPedido(nuevoObjeto);
        if (infoPedido.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `El pedido fue crado correctamente.`,
            showConfirmButton: true,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Ocurrió un error al realizar el pedido, intenta nuevamente.`,
            showConfirmButton: true,
          });
        }
    } else {
      const nuevoObjeto = crearObjetoPedido();
      nuevoObjeto.calle = datos?.calle;
      (nuevoObjeto.lng = datos?.lng), (nuevoObjeto.lat = datos?.lat);
      nuevoObjeto.tipoEntrega = "delivery";
      nuevoObjeto.telefonoContacto = pedidoState.telefonoContacto;
      if (
        nuevoObjeto.telefonoContacto.length > 6 &&
        nuevoObjeto.telefonoContacto.length <= 20
      ) {
        const infoPedido = await postPedido(nuevoObjeto);
        if (infoPedido.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `El pedido fue crado correctamente. Será enviado a ${nuevoObjeto.calle}`,
            showConfirmButton: true,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Ocurrió un error al realizar el pedido, intenta nuevamente.`,
            showConfirmButton: true,
          });
        }
      }
    }
  };

  const crearObjetoPedido = () => {
    const fechaHoraActual = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });
    const { usuario, productos, estado, total } = pedidoState;
    const nuevoObjeto = {
      usuario: usuario,
      productos: productos,
      estado: estado,
      fecha: fechaHoraActual,
      total: total,
    };
    if (pedidoState?.notas?.length > 0 && pedidoState?.notas?.length <= 300) {
      nuevoObjeto.notas = pedidoState?.notas;
    }
    return nuevoObjeto;
  };

  const postPedido = async (pedido) => {
    try {
      const respuesta = await crearPedido(pedido);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarInputs = (e) => {
    const { name, value } = e.target;
    setPedidoState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const actualizarCarrito = (direccion, lat, lng) => {
    setDatos({ ...datos, calle: direccion, lat: lat, lng: lng });
  };

  const actualizarCantidad = (e, id, precio) => {
    const productoEncontrado = pedido.productos.find((elemento) => {
      return elemento.producto === id;
    });
    if (e.target.value > 0 && e.target.value <= 15) {
      productoEncontrado.cantidad = e.target.value;
      actualizarTotal();
      sessionStorage.setItem("pedido", JSON.stringify(pedido));
      setPedidoState(pedido);
    } else {
      productoEncontrado.cantidad = 1;
      actualizarTotal();
      sessionStorage.setItem("pedido", JSON.stringify(pedido));
      setPedidoState(pedido);
    }
  };

  const actualizarTotal = () => {
    let total = 0;
    for (let i = 0; i < pedido?.productos?.length; i++) {
      total += pedido?.productos[i]?.cantidad * productos[i]?.precio;
    }
    pedido.total = total;
    setPedidoState(pedido);
  };

  const cargarProductos = async () => {
    const productosArray = [];
    for (let i = 0; i < pedido?.productos?.length; i++) {
      try {
        const productoObtenido = await obtenerProductoID(
          pedido?.productos[i].producto
        );
        productosArray.push(productoObtenido);
        setProductos(productosArray);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setPedidoState(pedido);
    cargarProductos();
  }, []);

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
                            value={pedidoState.productos[i].cantidad}
                            onChange={(e) =>
                              actualizarCantidad(
                                e,
                                producto._id,
                                producto.precio
                              )
                            }
                            min={1}
                            max={15}
                          />
                        </Form>
                      </td>
                      <td>
                        ${pedidoState.productos[i].cantidad * producto.precio}
                      </td>
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

              <Form className="mt-3">
                <Form.Group>
                  <Form.Label className="fw-bold">Notas del pedido</Form.Label>
                  <Form.Control
                    className="notas"
                    as="textarea"
                    name="notas"
                    rows={4}
                    minLength={10}
                    maxLength={300}
                    placeholder="Información sobre el pedido"
                    value={pedidoState.notas}
                    onChange={(e) => actualizarInputs(e)}
                  />
                </Form.Group>
              </Form>

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

            {datos.delivery ? (
              <>
                <div className="">
                  <Form
                    className="d-flex flex-column mb-4"
                    onSubmit={(e) => realizarPedido(e)}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold" name="telefonoContacto">
                        Telefono contacto
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Telefono"
                        name="telefonoContacto"
                        value={pedidoState.telefonoContacto}
                        required
                        min={6}
                        max={20}
                        onChange={(e) => actualizarInputs(e)}
                      />
                    </Form.Group>

                    <Mapa datos={datos} actualizarCarrito={actualizarCarrito} />

                    <Container className="mt-4 d-flex justify-content-center justify-content-md-end gap-3 text-center justify-items-center bg-white p-2">
                      <Button type="submit">Realizar pedido</Button>
                    </Container>
                  </Form>
                </div>
              </>
            ) : (
              <Container className="mt-4 d-flex justify-content-center justify-content-md-end gap-3 text-center justify-items-center bg-white p-2">
                <Button type="submit" onClick={realizarPedido}>
                  Realizar pedido
                </Button>
              </Container>
            )}
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
