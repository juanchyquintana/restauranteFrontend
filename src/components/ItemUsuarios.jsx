import { actualizarEstado, borrarUsuario, leerUsuariosAPI } from "../helpers/usuario";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

const ItemUsuarios = ({ usuario, setUsuarios }) => {
  const { email, estado, nombre, tipoUsuario, _id } = usuario;
  const [estadoUsuario, setEstadoUsuario] = useState(estado);
  const [estadoModificado, setEstadoModificado] = useState(false)

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

  const cambiarEstadoUsuario = async (e) => {
    const nuevoEstado = e.target.value;
    setEstadoUsuario(nuevoEstado)
    setEstadoModificado(true)
  }

  const guardarCambios = async () => {
    const respuesta = await actualizarEstado(_id, estadoUsuario);
    if (respuesta.error) {
      Swal.fire({
        title: "Ocurrió un Error",
        text: `El estado del usuario ${nombre} no pudo ser actualizado. Intenta nuevamente.`,
        icon: "error",
      });
    } else {
      setEstadoModificado(false)
      Swal.fire({
        title: "Estado Modificado",
        text: `El estado del ${nombre} fue modifcado correctamente!`,
        icon: "success",
      });
    }
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>
        <Form.Select
          value={estadoUsuario}
          onChange={cambiarEstadoUsuario}
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </Form.Select>
      </td>
      <td className="text-uppercase fw-semibold">{tipoUsuario}</td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-danger">
            <i className="bi bi-trash-fill" onClick={usuarioBorrar}></i>
          </button>
          <button className={`btn btn-success ${estadoModificado ? "" : "disabled"}`}>
            <i className="bi bi-check2-circle" onClick={guardarCambios}></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
