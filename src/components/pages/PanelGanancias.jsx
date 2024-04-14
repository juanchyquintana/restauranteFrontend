import { Button, Container, Row, Table } from "react-bootstrap";
import {
  obtenerGananciasDia,
  cerrarCaja,
  obtenerCantidadPedidosDia,
  obtenerPedidos,
} from "../../helpers/pedidos";
import { useEffect, useState } from "react";
import bambu from "../../assets/bambu-fondo.jpg";
import banner from "../../assets/chicosConversando.jpg";
import "./panelganancias.css";
import Swal from "sweetalert2";
import ItemPedidos from "../ItemPedidos";

const PanelGanancias = () => {
  const [gananciasDia, setGananciasDia] = useState(0);
  const [cantidadPedidos, setCantidadPedidos] = useState(0);
  const [fechaActual, setFechaActual] = useState("");
  const [pedidos, setPedidos] = useState([]);

  const obtenerGanancias = async () => {
    const ganancias = await obtenerGananciasDia();
    setGananciasDia(ganancias);
  };

  const pedidoCantidad = async () => {
    const cantidad = await obtenerCantidadPedidosDia();
    setCantidadPedidos(cantidad);
  };

  const obtenerPedidosDelDia = async () => {
    const pedidosDelDia = await obtenerPedidos();
    
    const pedidosHoy = pedidosDelDia.filter((pedido) => {
      const fechaPedido = new Date(pedido.fecha);
      const fechaActual = new Date();
      return (
        fechaPedido.getDate() === fechaActual.getDate() &&
        fechaPedido.getMonth() === fechaActual.getMonth() &&
        fechaPedido.getFullYear() === fechaActual.getFullYear()
      );
    });
    setPedidos(pedidosHoy);
  };

  const formatearFecha = (fecha) => {
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-AR", opciones);
  };

  const fecha = new Date();

  const cerrarCajaHandler = async () => {
    const fechaFormateada = formatearFecha(fecha);

    await Swal.fire({
      title: "Caja cerrada",
      text: `Caja cerrada el ${fechaFormateada}.\n Ganancias del día: ${gananciasDia}\nCantidad de pedidos: ${cantidadPedidos}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    const datosCaja = {
      gananciasDia,
      cantidadPedidos,
      fechaCierreCaja: fecha.getTime(),
    };
    localStorage.setItem("datosCaja", JSON.stringify(datosCaja));

    await cerrarCaja();
    setGananciasDia(0);
    setCantidadPedidos(0);
    setPedidos([]);
  };

  useEffect(() => {
    obtenerGanancias();
    pedidoCantidad();
    obtenerPedidosDelDia();

    const fechaFormateada = formatearFecha(fecha);
    setFechaActual(fechaFormateada);

    const datosCajaGuardados = localStorage.getItem("datosCaja");
    if (datosCajaGuardados) {
      const datosCaja = JSON.parse(datosCajaGuardados);
      setGananciasDia(datosCaja.gananciasDia);
      setCantidadPedidos(datosCaja.cantidadPedidos);
    }
  }, []);

  const total = pedidos.reduce((acc, pedido) => {
    if (pedido.estado === 'entregado' || pedido.estado === 'terminado') {
      return acc + pedido.total;
    }
    return acc;
  }, 0);

  return (
    <section>
      <div className="banner-container">
        <img className="banner" src={banner} alt="plato con comida china" />
        <h2 className="bannerTitulo mt-5">利润 Ganancias</h2>
      </div>

      <Container className="d-flex flex-column justify-content-center my-5 mainPage ganancias-containe">
        <div className="imagen-contenedora container-fluid bg-light p-3 p-lg-0 rounded-3 border shadow">
          <Row className="m-0">
            <div className="img-form-div col-lg-6 d-none d-lg-flex rounded-start-3 p-0">
              <img src={bambu} className="img-ganancias" />
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center text-center">
              <div className="d-flex flex-column justify-content-center mb-3">
                <h1 className="display-6">Ganancias del día:</h1>
                <span className="fw-bold fs-3 text-uppercase">
                  {fechaActual}
                </span>
                <span className="fw-bold fs-3">${gananciasDia}</span>
              </div>

              <div className="d-flex flex-column justify-content-center mb-3">
                <h1 className="display-6">Pedidos de la Fecha: </h1>
                <span className="fw-bold fs-3">{cantidadPedidos}</span>
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

        <div className="d-flex flex-column justify-content-center my-5">
          <h1 className="display-6">Pedidos de la Fecha: </h1>

          <div>
            <Table responsive striped bordered variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Tipo Entrega</th>
                  <th>Total</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidos?.length > 0
                  ? pedidos.map((pedido) =>
                      pedido.estado === "entregado" || pedido.estado === "terminado"  ? (
                        <ItemPedidos 
                          key={pedido._id}
                          pedido={pedido}
                        />
                      ) : null
                    )
                  : null}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PanelGanancias;
