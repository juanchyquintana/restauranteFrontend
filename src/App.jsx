import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/pages/Administrador";
import Registrarse from "./components/Registrarse";
import Login from "./components/Login/Login";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/error404/Error404";
import Cocina from "./components/pages/cocina/Cocina";
import SeccionMenu from "./components/pages/menus/SeccionMenu";


function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Menu /> 
        <Routes>
          <Route exact path="/" element={<Inicio />}/>
          <Route exact path="/registrarse" element={<Registrarse />}/>
          <Route exact path="/ingresar" element={<Login />} />
          <Route exact path="/administrador" element={<Administrador />} />
          <Route exact path="/cocina" element={<Cocina />}/>
          <Route path="*" element={<Error404></Error404>}></Route>       
        </Routes>
        <Footer />  */}
        <SeccionMenu></SeccionMenu>
      </BrowserRouter>
    </>
  );
}

export default App;
