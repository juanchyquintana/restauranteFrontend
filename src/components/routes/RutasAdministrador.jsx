import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import NuevoProducto from "../NuevoProducto";
import Error404 from "../pages/error404/Error404";
import PanelUsuarios from "../pages/PanelUsuarios";
import Cocina from "../pages/cocina/Cocina";
import PanelGanancias from "../pages/PanelGanancias";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route
          exact
          path="/agregar-producto"
          element={<NuevoProducto editar={false} titulo="Agregar Nuevo Plato" />}
        />
        <Route exact path="/panel-usuarios" element={<PanelUsuarios />} />
        <Route exact path="/ganancias" element={<PanelGanancias />} />
        <Route exact path="/cocina" element={<Cocina />} />
        <Route exact path="*" element={<Error404 />}/>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
