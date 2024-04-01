import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrarse from "./components/Registrarse";
import Login from "./components/Login/Login";
import Error404 from "./components/pages/error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/registrarse" element={<Registrarse />}></Route>
          <Route exact path="/ingresar" element={<Login />} />

          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
