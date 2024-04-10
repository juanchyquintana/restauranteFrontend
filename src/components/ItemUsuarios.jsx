import { Form } from "react-bootstrap";

const ItemUsuarios = () => {
  return (
    <tr>
      <td>Juan</td>
      <td>jd@gmail.com</td>
      <td>
        <Form.Select>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </Form.Select>
      </td>
      <td>
        <td>Administrador or Usuario</td>
      </td>
      <td>
        <div className="d-flex gap-2">
          <button className="btn btn-danger">
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
