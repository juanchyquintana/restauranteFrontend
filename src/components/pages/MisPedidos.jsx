import { Container } from "react-bootstrap";
import "../pages/cocina/cocina.css";

import { obtenerPedidos } from "../../helpers/pedidos";
import { useEffect, useState } from "react";
import banner from '../../assets/cocina/banner-cocina.jpg'
import MisPedirosCard from "./MisPedirosCard";
import { Navigate } from "react-router-dom";

const MisPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLotus"))
        
        
    if (!usuario) {
        return <Navigate to="/error" />;
    }
    if(usuario.tipoUsuario === "admin")
        return <Navigate to="/error" />;

    const getPedidos = async () => {
        try {
          const respuesta = await obtenerPedidos();
          const productosEntradas = respuesta.filter(
              (pedido) => pedido.usuario?._id === usuario.id
          );
          setPedidos(productosEntradas);
        } catch (error) {
          console.log(error);
        }
      };
  
    useEffect(() => {
      getPedidos();
    }, []);
    
  
    return (
      <section className="mainPage bg-light pb-5">
        <div className="banner-container mb-5">
          <img className="banner" src={banner} alt="plato con comida china" />
          <h2 className="bannerTitulo mt-5 nav-espacio">命令 Pedidos</h2>
        </div>
        <Container>
          <div className="row">
            {pedidos?.length > 0 ? (
              <>
                {pedidos?.map((pedido, i) =>
                  pedido.estado !== "terminado" ? (
                    <div className="mb-3 mb-md-4 col-md-6 col-lg-4" key={i}>
                      <MisPedirosCard
                        pedido={pedido}
                      />
                    </div>
                  ) : (
                    <div key={i}></div>
                  )
                )}
              </>
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