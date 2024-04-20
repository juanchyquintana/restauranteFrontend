import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerPedidos } from "../../helpers/pedidos";
import { useEffect, useState } from "react";
import banner from "../../assets/cocina/banner-cocina.jpg";
import MisPedirosCard from "./MisPedirosCard";
import { Navigate } from "react-router-dom";
import './misPedidos.css'

const MisPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLotus"));

  useEffect(() => {
    const getPedidos = async () => {
      try {
        if (!usuario) return;
        const respuesta = await obtenerPedidos();
        const productosEntradas = respuesta.filter(
          (pedido) => pedido.usuario?._id === usuario.id
        );
        setPedidos(productosEntradas);
      } catch (error) {
        console.log(error);
      }
    };
    getPedidos();
  }, [usuario]);

  if (!usuario) {
    return <Navigate to="/error" />;
  }

  if (usuario.tipoUsuario === "admin") {
    return <Navigate to="/error" />;
  }

  return (
    <section className="mainPage bg-light pb-5">
      <div className="banner-container mb-5">
        <img className="banner" src={banner} alt="plato con comida china" />
        <h2 className="bannerTitulo mt-5 nav-espacio">命令 Pedidos</h2>
      </div>
      <div className="text-end mb-3 btnVolver">
        <Link to="/">
          <Button variant="primary">Volver al inicio</Button>
        </Link>
      </div>
      <Container>
        <div className="row">
          {pedidos.length > 0 ? (
            pedidos.map((pedido, i) => (
              <div className="mb-3 mb-md-4 col-md-6 col-lg-4" key={i}>
                <MisPedirosCard pedido={pedido} />
              </div>
            ))
          ) : (
            <div>
              <h2>No hay pedidos.</h2>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MisPedidos;
