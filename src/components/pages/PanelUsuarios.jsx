import { Container, Table } from "react-bootstrap";
import ItemUsuarios from "../ItemUsuarios";
import { useEffect, useState } from "react";
import { leerUsuariosAPI } from "../../helpers/usuario";

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
    <>
      <Container>
        <section className="my-5">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-5">Panel de Usuarios</h1>
          </div>

          <hr />

          <Table responsive>
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
                    key={usuario.id}
                    usuario={usuario}
                    setUsuarios={setUsuarios}
                />
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
};

export default PanelUsuarios;
