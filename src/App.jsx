import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/pages/Administrador";
import Registrarse from "./components/Registrarse";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/registrarse" element={<Registrarse />}></Route>
          <Route exact path="/ingresar" element={<Login />} />
          <Route exact path="/administrador" element={<Administrador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
