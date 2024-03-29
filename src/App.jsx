import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrarse from "./components/Registrarse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/registrarse" element={<Registrarse />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
