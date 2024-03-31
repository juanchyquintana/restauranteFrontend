import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";



function App() {
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      {/* <Administrador></Administrador> */}
      {/* <Error404></Error404> */}
      <Footer></Footer>
    </>
  );
}

export default App;
