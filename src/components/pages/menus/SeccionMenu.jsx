import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./seccionMenu.css";
import bannerComida from "./bannerImg/comidaChina.jpg";
import bannerBebida from "./bannerImg/bebidaChina.jpg";
import { obtenerProductos } from "../../../helpers/producto";
import { useEffect, useState } from "react";

const SeccionMenu = () => {
  const [productos, setProductos] = useState([]);
  let pedido = {
    usuario: "",
    fecha: "",
    productos: [],
    estado: "pendiente",
    tipoEntrega: "bar",
    telefonoContacto: "",
    notas: "",
    total: 0,
  }

  const agregarAlCarrito = (e, productoID, precio) => {
    e.preventDefault();
    const cantidadIngresada = parseInt(e.target.cantidad.value);

    if (cantidadIngresada > 0) {
      const productoEncontrado = pedido.productos.find((elemento) => {
        return elemento.producto === productoID;
      });

      if (productoEncontrado) {
        productoEncontrado.cantidad =
          productoEncontrado.cantidad + cantidadIngresada;
      } else {
        pedido.productos.push({
          producto: productoID,
          cantidad: cantidadIngresada
        })
      }
      pedido.total = pedido.total + parseInt(precio) * cantidadIngresada
      sessionStorage.setItem("pedido", JSON.stringify(pedido))
    }
  }

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
          <div className="row ">
            {productos.map((producto) => (
              <div className="col-md-4 col-lg-3 mb-3" key={producto.nombre}>
                <Card>
                  <Card.Img variant="top" src={producto.imagen} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="d-flex">{producto.detalle}</Card.Text>

                    <form
                      className="d-flex align-items-center justify-content-between"
                      onSubmit={(e) => agregarAlCarrito(e, producto._id, producto.precio)}
                    >
                      <Button variant="primary">ver mas</Button>
                      <input
                        type="number"
                        className="agregar text-center ms-2"
                        min={0}
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
          </div>
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
        <Container className="my-4 ">
          <div className="row ">
            {productos.map((producto) => (
              <div className="col-md-4 col-lg-3 mb-3" key={producto.nombre}>
                <Card>
                  <Card.Img variant="top" src={producto.imagen} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="d-flex">{producto.detalle}</Card.Text>

                    <div className="d-flex align-items-center justify-content-between">
                      <Button variant="primary">ver mas</Button>
                      <input
                        type="number"
                        className="agregar text-center ms-2"
                        min={0}
                      />
                      <Button className="bg-success ms-2">
                        <i className="bi bi-plus-circle"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default SeccionMenu;
