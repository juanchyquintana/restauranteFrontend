import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, obtenerProductos } from "../helpers/producto";

const ItemProductos = ({producto, setProductos}) => {

  const borrarProducto =()=>{
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
       const respuesta = await borrarProductoAPI(producto._id);
       if(respuesta.status === 200){
         Swal.fire({
           title: "Producto eliminado",
           text: `El producto "${producto.nombre}" fue eliminado correctamente`,
           icon: "success"
         });
         const listaProductos = await obtenerProductos()
         setProductos(listaProductos);
       }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${producto.nombre}" no fue eliminado. Intente realizar esta operación en unos minutos`,
          icon: "error"
        });
       }
      }
    });
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.estado}</td>
      <td>{producto.precio}</td>
      <td>categoria</td>
      <td>
        <img
          src={producto.imagen}
          alt={`Esta es la imagen de `}
          className="w-25 img-fluid"
        />
      </td>
      <td>
        <div className="d-flex gap-2">
          <button className="btn btn-danger" onClick={borrarProducto}>
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
