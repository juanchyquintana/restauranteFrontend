import ItemProductos from "../ItemProductos.jsx";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { leerProductos } from "../../helpers/producto.js";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarBD();
  }, []);

  const consultarBD = async () => {
    try {
      const respuesta = await leerProductos();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <section className="my-5">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-5">Productos Disponibles</h1>
            <Link
              to="/administrador/agregar-producto"
              className="btn btn-primary"
            >
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
          </div>

          <hr />

          <Table responsive>
            <thead>
              <tr>
                <th>Productos</th>
                <th>Estado</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>URL de Imagen</th>
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((producto) => (
                <ItemProductos key={producto.id} productoProps={producto} />
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
};

export default Administrador;
