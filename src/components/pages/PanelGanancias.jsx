import { Button, Container, Row } from "react-bootstrap";
import {
  obtenerGananciasDia,
  cerrarCaja,
  obtenerCantidadPedidosDia,
} from "../../helpers/pedidos";
import { useEffect, useState } from "react";
import bambu from "../../assets/bambu-fondo.jpg";
import "./panelganancias.css";

const PanelGanancias = () => {
  const [gananciasDia, setGananciasDia] = useState(0);
  const [cantidadPedidos, setCantidadPedidos] = useState(0);

  const obtenerGanancias = async () => {
    const ganancias = await obtenerGananciasDia();
    setGananciasDia(ganancias);
  };

  const pedidoCantidad = async () => {
    const cantidad = await obtenerCantidadPedidosDia();
    setCantidadPedidos(cantidad);
  };

  const cerrarCajaHandler = async () => {
    await cerrarCaja();
    setGananciasDia(0);
  };

  useEffect(() => {
    obtenerGanancias();
    pedidoCantidad();
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center my-5 mainPage ganancias-containe">
      <div className="imagen-contenedora container-fluid bg-light p-3 p-lg-0 rounded-3 border shadow">
        <Row className="m-0">
          <div className="img-form-div col-lg-6 d-none d-lg-flex rounded-start-3 p-0">
            <img src={bambu} className="img-ganancias" />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center text-center">
            <div className="d-flex flex-column justify-content-center mb-3">
              <h1 className="display-6">Ganancias del día:</h1>
              <span className="fw-bold fs-3">${gananciasDia}</span>
            </div>

            <div className="d-flex flex-column justify-content-center mb-3">
              <h1 className="display-6">Pedidos de la Fecha: </h1>
              <span className="fw-bold fs-3">${cantidadPedidos}</span>
            </div>

            <Button
              variant="danger"
              className="fw-bold text-uppercase mt-4"
              onClick={cerrarCajaHandler}
            >
              Cerrar caja
            </Button>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default PanelGanancias;
