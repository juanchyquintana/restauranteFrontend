import { Button, Container, Row, Table } from "react-bootstrap";
import { cerrarCaja, obtenerPedidos } from "../../helpers/pedidos.js";
import { useEffect, useState } from "react";
import bambu from "../../assets/tonyMontana.jpg";
import banner from "../../assets/chicosConversando.jpg";
import "./panelganancias.css";
import Swal from "sweetalert2";
import ItemPedidos from "../ItemPedidos";

const PanelGanancias = () => {
  const [ganancias, setGanancias] = useState(0);
  const [cantidadPedidos, setCantidadPedidos] = useState(0);
  const [fechaActual, setFechaActual] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [cajaCerrada, setCajaCerrada] = useState(
    localStorage.getItem("cajaCerrada") === "true"
  );

  const totalGanancias = pedidos.reduce((total, pedido) => {
    if (pedido.estado === "entregado" || pedido.estado === "terminado") {
      return total + pedido.total;
    }
    return total;
  }, 0);

  const pedidosTerminados = pedidos.filter(
    (pedido) => pedido.estado === "terminado" || pedido.estado === "entregado"
  );
  const cantidadPedidosTerminados = pedidosTerminados.length;

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
      text: `Caja cerrada el ${fechaFormateada}.\n Ganancias del día: ${totalGanancias}\n Cantidad de pedidos: ${cantidadPedidos}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    const datosCaja = {
      ganancias: totalGanancias,
      cantidadPedidos: cantidadPedidosTerminados,
      fechaCierreCaja: fecha.getTime(),
    };

    try {
      await cerrarCaja(datosCaja);
      localStorage.setItem("cajaCerrada", "true");
      setCajaCerrada(true);
    } catch (error) {
      console.log(error);
    }

    setGanancias(0);
    setCantidadPedidos(0);
    setPedidos([]);
  };

  const abrirCajaHandler = () => {
    localStorage.removeItem("cajaCerrada");
    setCajaCerrada(false);

    Swal.fire({
      title: "Caja Abierta",
      text: `La Caja ha sido Abierta`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    window.location.reload();
  };

  useEffect(() => {
    if (!cajaCerrada) {
      obtenerPedidosDelDia();
    }

    const fechaFormateada = formatearFecha(fecha);
    setFechaActual(fechaFormateada);
  }, []);

  useEffect(() => {
    if (cajaCerrada) {
      setGanancias(0);
      setCantidadPedidos(0);
      setPedidos([]);
    }
  }, [cajaCerrada]);

  return (
    <section className="nav-espacio">
      <div className="banner-container">
        <img className="banner" src={banner} alt="plato con comida china" />
        <h2 className="bannerTitulo mt-5 nav-espacio">利润 Ganancias</h2>
      </div>

      <Container className="d-flex flex-column justify-content-center my-5 ganancias-containe">
        <div className="imagen-contenedora container-fluid bg-light p-3 p-lg-0 rounded-3 border shadow">
          <Row className="m-0">
            <div className="img-form-div col-lg-6 d-none d-lg-flex rounded-start-3 p-0">
              <img src={bambu} className="img-ganancias" />
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center text-center">
              <div className="d-flex flex-column justify-content-center mb-3">
                <h1 className="display-6">- CAJA -</h1>
                <span className="fw-bold fs-3 text-uppercase">
                  {fechaActual}
                </span>
                <span className="fw-bold fs-3">${totalGanancias}</span>
              </div>

              <div className="d-flex flex-column justify-content-center mb-3">
                <h1 className="fs-4">Total de Pedidos Terminados: </h1>
                <span className="fw-bold fs-3">
                  {cantidadPedidosTerminados}
                </span>
              </div>

              <Button
                variant="success"
                className="fw-bold text-uppercase mt-4"
                onClick={abrirCajaHandler}
              >
                Abrir Caja
              </Button>
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
            <Table responsive striped bordered>
              <thead className="text-center">
                <tr>
                  <th className="text-white bg-dark">Nombre</th>
                  <th className="text-white bg-dark">Fecha</th>
                  <th className="text-white bg-dark">Tipo Entrega</th>
                  <th className="text-white bg-dark">Total</th>
                  <th className="text-white bg-dark">Estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidos?.length > 0
                  ? pedidos.map((pedido) => (
                      <ItemPedidos key={pedido._id} pedido={pedido} />
                    ))
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
