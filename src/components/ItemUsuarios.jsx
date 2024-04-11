import { borrarUsuario, leerUsuariosAPI } from "../helpers/usuario";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

const ItemUsuarios = ({ usuario, setUsuarios }) => {
  const { email, estado, nombre, tipoUsuario, _id } = usuario;
  const [estadoUsuario, setEstadoUsuario] = useState(estado);

  const usuarioBorrar = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(_id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado al Usuario: ${nombre}`,
            icon: "success",
          });
        }

        const listadoUsuarios = await leerUsuariosAPI();
        setUsuarios(listadoUsuarios);
      } else {
        Swal.fire({
          title: "Ocurrió un Error",
          text: `El Usuario ${nombre} no fue eliminado. Intenta nuevamente.`,
          icon: "error",
        });
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>
        <Form.Select
          value={estadoUsuario}
          onChange={(e) => setEstadoUsuario(e.target.value)}
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </Form.Select>
      </td>
      <td className="text-uppercase fw-semibold">{tipoUsuario}</td>
      <td>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger">
            <i className="bi bi-trash-fill" onClick={usuarioBorrar}></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
