import { leerUsuariosAPI } from "../../helpers/usuario";
import banner from "../../assets/chicosConversando.jpg";
import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemUsuarios from "../ItemUsuarios";

const PanelUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const consultarUsuario = async () => {
      try {
        const respuesta = await leerUsuariosAPI();
        setUsuarios(respuesta);
      } catch (error) {
        console.log(error);
      }
    };
    consultarUsuario();
  }, []);

  return (
    <section>
      <div className="banner-container">
        <img className="banner" src={banner} alt="plato con comida china" />
        <h2 className="bannerTitulo mt-5">Panel Usuarios</h2>
      </div>

      <Container className="mainPage">
        <section className="my-5">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-5">Panel de Usuarios</h1>
          </div>

          <hr />

          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Tipo Usuario</th>
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario) => (
                <ItemUsuarios
                  key={usuario._id}
                  usuario={usuario}
                  setUsuarios={setUsuarios}
                />
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </section>
  );
};

export default PanelUsuarios;
