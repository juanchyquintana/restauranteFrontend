import { Form } from "react-bootstrap";
import { useState } from "react";

const ItemUsuarios = ({ usuario, setUsuarios }) => {

    const { email, estado, nombre, tipoUsuario } = usuario
    const [ estadoUsuario, setEstadoUsuario ] = useState(estado)

    console.log(usuario)
  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>
        <Form.Select value={estadoUsuario} onChange={(e) => setEstadoUsuario(e.target.value)}>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </Form.Select>
      </td>
      <td className="text-uppercase fw-semibold">{tipoUsuario}</td>
      <td>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger">
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
