import { Button, Card, Container } from "react-bootstrap";
import "./cocina.css";
import CardProductoCocina from "./CardProdCocina";
import { obtenerPedidos } from "../../../helpers/pedidos";
import { useEffect, useState } from "react";

const Cocina = () => {
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const respuesta = await obtenerPedidos();
      setPedidos(respuesta);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPedidos();
  }, []);

  return (
    <section className="mainPage nav-espacio bg-light pb-5">
      <Container>
        <div className="row">
          <div className="col-md-4">
            {pedidos?.map((pedido, i) => (
              <div className="mb-3" key={i}>
                <CardProductoCocina pedido={pedido}/>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cocina;
