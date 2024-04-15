import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registrarse from "./components/Registrarse";
import Login from "./components/Login/Login";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/error404/Error404";
import Contacto from "./components/pages/contacto/Contacto";
import Reviews from "./components/Reseñas/Reviews";
import Nosotros from "./components/pages/nosotros/Nosotros";
import Carrito from "./components/pages/carrito/Carrito";
import SeccionMenu from "./components/pages/menus/SeccionMenu";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import DetalleProducto from "./components/pages/menus/DetalleProducto";
import MisPedidos from "./components/pages/MisPedidos";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLotus")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu 
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/registrarse" element={<Registrarse />} />
          <Route
            exact
            path="/ingresar"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdministrador />
              </RutasProtegidas>
            }
          />
          <Route exact path="/menu" element={<SeccionMenu />} />
          
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/reseñas" element={<Reviews />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/detalleProducto/:id" element={<DetalleProducto />} />
          <Route exact path="/mis-pedidos" element={<MisPedidos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
