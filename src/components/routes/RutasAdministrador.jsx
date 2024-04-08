import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import NuevoProducto from "../NuevoProducto";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route
          exact
          path="/agregar-producto"
          element={<NuevoProducto editar={false} titulo="Nuevo Producto" />}
        />
        <Route
          exact
          path="/editar-producto/:id"
          element={<NuevoProducto editar={true} titulo="Editar Producto" />}
        />
      </Routes>
    </>
  );
};

export default RutasAdministrador;
