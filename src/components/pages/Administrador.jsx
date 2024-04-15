import { useEffect, useState } from "react";
import ItemProductos from "../ItemProductos.jsx";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../assets/platocomidachina.jpg";
import { obtenerProductos } from "../../helpers/producto.js";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarBD();
  }, []);
  const consultarBD = async () => {
    try {
      const respuesta = await obtenerProductos();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <div className="banner-container nav-espacio">
          <img className="banner" src={banner} alt="plato con comida china" />
          <h2 className="bannerTitulo nav-espacio">Agregar Productos</h2>
        </div>

        <Container className="my-5">
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
                {productos?.map((producto) => (
                  <ItemProductos
                    key={producto._id}
                    producto={producto}
                    setProductos={setProductos}
                  />
                ))}
              </tbody>
            </Table>
        </Container>
      </section>
    </>
  );
};

export default Administrador;
