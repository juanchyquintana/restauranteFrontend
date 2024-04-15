import { obtenerProductos } from "../../../helpers/producto";
import bannerComida from "./bannerImg/comidaChina.jpg";
import bannerBebida from "./bannerImg/bebidaChina.jpg";
import Swal from "sweetalert2/src/sweetalert2.js";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./seccionMenu.css";
import { Link } from "react-router-dom";

const SeccionMenu = () => {
  const [productos, setProductos] = useState([]);
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLotus")) || false;

  let pedido = JSON.parse(sessionStorage.getItem("pedido")) || {
    usuario: usuario?.id,
    fecha: "",
    productos: [],
    estado: "pendiente",
    tipoEntrega: "bar",
    telefonoContacto: "",
    notas: "",
    total: 0,
  };

  const agregarAlCarrito = (e, productoID, precio, nombreProducto) => {
    e.preventDefault();
    const cantidadIngresada = parseInt(e.target.cantidad.value);

    if (cantidadIngresada > 0 && cantidadIngresada <= 15) {
      const productoEncontrado = pedido.productos.find((elemento) => {
        return elemento.producto === productoID;
      });
      const cantidadProductoEncontrado = parseInt(productoEncontrado?.cantidad);
      if (productoEncontrado && productoEncontrado.cantidad < 15) {
        const cantidadPrevia = cantidadProductoEncontrado;
        productoEncontrado.cantidad =
          cantidadProductoEncontrado + cantidadIngresada;
        if (productoEncontrado.cantidad > 15) {
          productoEncontrado.cantidad = 15;
          swalProductoAgregado(true, cantidadPrevia, nombreProducto);
        } else {
          swalProductoAgregado(false, cantidadIngresada, nombreProducto);
        }
      } else if (productoEncontrado && productoEncontrado.cantidad >= 15) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Se llegó al límite de 15 unidades para ${nombreProducto}`,
          showConfirmButton: true,
        });
      } else {
        pedido.productos.push({
          producto: productoID,
          cantidad: cantidadIngresada,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Se agregaron ${cantidadIngresada} x ${nombreProducto} al carrito`,
          showConfirmButton: true,
        });
      }

      pedido.total = pedido.total + parseInt(precio) * cantidadIngresada;
      sessionStorage.setItem("pedido", JSON.stringify(pedido));
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Ingrese una cantidad válida`,
        showConfirmButton: true,
      });
    }
  };

  const swalProductoAgregado = (limiteAlcanzado, cantidad, nombreProducto) => {
    limiteAlcanzado === true
      ? cantidad === 1
        ? Swal.fire({
            position: "center",
            icon: "success",
            title: `Se añadio ${
              15 - cantidad
            } x ${nombreProducto} al carrito, debido a que se llegó al límite de 15 unidades por producto`,
            showConfirmButton: true,
          })
        : Swal.fire({
            position: "center",
            icon: "success",
            title: `Se añadieron ${
              15 - cantidad
            } x ${nombreProducto} al carrito, debido a que se llegó al límite de 15 unidades por producto`,
            showConfirmButton: true,
          })
      : cantidad === 1
      ? Swal.fire({
          position: "center",
          icon: "success",
          title: `Se añadio ${cantidad} x ${nombreProducto} al carrito.`,
          showConfirmButton: true,
        })
      : Swal.fire({
          position: "center",
          icon: "success",
          title: `Se añadieron ${cantidad} x ${nombreProducto} al carrito.`,
          showConfirmButton: true,
        });
  };

  const cargarProductos = async () => {
    try {
      const respuesta = await obtenerProductos();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <section>
        <img
          className="banner"
          src={bannerComida}
          alt="plato con comida china"
        />
        <h2 className="bannerTitulo">食品 Comidas</h2>
        <Container className="my-4  pb-4">
          <Row>
            {productos?.map((producto) => (
              <div className="col-md-4 col-lg-3 mb-3" key={producto.nombre}>
                <Card className="h-100">
                  <Card.Img variant="top" src={producto.imagen} />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="d-flex texto-overflow flex-grow-1">{producto.detalle}</Card.Text>
                    <form
                      className="d-flex align-items-center justify-content-between"
                      onSubmit={(e) =>
                        agregarAlCarrito(
                          e,
                          producto._id,
                          producto.precio,
                          producto.nombre
                        )
                      }
                    >
                      <Button variant="primary" as={Link} to={`/detalleProducto/${producto._id}`}>Ver Más</Button>
                      <input
                        type="number"
                        className="agregar text-center ms-2"
                        min={1}
                        max={15}
                        defaultValue={1}
                        name="cantidad"
                      />
                      <Button className="bg-success ms-2" type="submit">
                        <i className="bi bi-plus-circle"></i>
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <div className="bannerContenedor2">
          <img
            className="banner2 mt-5"
            src={bannerBebida}
            alt="vasos con bebida"
          />
          <h2 className="titulo">饮料 Bebidas</h2>
        </div>
        <Container className="my-4  pb-4">
          <Row>
            {productos?.map((producto) => (
              <div className="col-md-4 col-lg-3 mb-3" key={producto.nombre}>
                <Card className="h-100">
                  <Card.Img variant="top" src={producto.imagen} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="d-flex texto-overflow flex-grow-1">{producto.detalle}</Card.Text>
                    <form
                      className="d-flex align-items-center justify-content-between"
                      onSubmit={(e) =>
                        agregarAlCarrito(
                          e,
                          producto._id,
                          producto.precio,
                          producto.nombre
                        )
                      }
                    >
                      <Button variant="primary" as={Link} to={`/detalleProducto/${producto._id}`}>Ver Más</Button>
                      <input
                        type="number"
                        className="agregar text-center ms-2"
                        min={1}
                        max={15}
                        defaultValue={1}
                        name="cantidad"
                      />
                      <Button className="bg-success ms-2" type="submit">
                        <i className="bi bi-plus-circle"></i>
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SeccionMenu;
