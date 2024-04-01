import { Link } from "react-router-dom";

const ItemProductos = () => {

  return (
    <tr>
      <td>nombreProducto</td>
      <td>estado</td>
      <td>precio</td>
      <td>categoria</td>
      <td>
        <img
          src={'imagen'}
          alt={`Esta es la imagen de `}
          className="w-25 img-fluid"
        />
      </td>
      <td>
        <div className="d-flex gap-2">
          <button className="btn btn-danger">
            <i className="bi bi-trash-fill" ></i>
          </button>
          <Link className="btn btn-warning" to={`/administrador/editar-producto/`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ItemProductos;
