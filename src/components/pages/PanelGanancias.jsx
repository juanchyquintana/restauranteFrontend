import { Button, Container, Row, Table } from "react-bootstrap";
import {
  cerrarCaja,
  crearCaja,
  editarCaja,
  obtenerCajaPorFecha,
  obtenerPedidos,
} from "../../helpers/pedidos.js";
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
  const [filtrar, setFiltrar] = useState("all");
  const [filtroActivo, setFiltroActivo] = useState(false);

  useEffect(() => {
    setGanancias(
      pedidos.reduce((total, pedido) => {
        if (pedido.estado === "entregado" || pedido.estado === "terminado") {
          return total + pedido.total;
        }
        return total;
      }, 0)
    );

    setCantidadPedidos(
      pedidos.filter(
        (pedido) =>
          pedido.estado === "terminado" || pedido.estado === "entregado"
      )
    );
  }, [pedidos]);

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
    // const fechaFormateada = formatearFecha(fecha);
    // const fechaFiltro = new Date().toISOString();

    // const datosCaja = {
    //   ganancias,
    //   cantidadPedidos,
    //   fechaCierre: fecha.getTime(),
    // };

    // try {
    //   const respuestaFiltro = await obtenerCajaPorFecha(fechaFiltro);
    //   if (respuestaFiltro) {
    //     await editarCaja(respuestaFiltro.data._id, datosCaja);
    //     await Swal.fire({
    //       title: "Caja cerrada",
    //       text: `Caja cerrada el ${fechaFormateada}.\n Ganancias del día: ${ganancias}\n Cantidad de pedidos: ${cantidadPedidos.length}`,
    //       icon: "success",
    //       confirmButtonText: "Aceptar",
    //     });

    //     localStorage.setItem("cajaCerrada", "true");
    //     setCajaCerrada(true);
    //     setGanancias(0);
    //     setCantidadPedidos(0);
    //     setPedidos([]);
    //   } else {
    //     await Swal.fire({
    //       title: "Error!",
    //       text: `No Existe una Caja con esa Fecha`,
    //       icon: "error",
    //       confirmButtonText: "Aceptar",
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const abrirCajaHandler = async () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const fechaFormateada = dia + "-" + mes + "-" + año;

    const datosCaja = {
      ganancias,
      cantidadPedidos,
      fechaCierre: fechaFormateada,
    };

    try {
      const respuestaFiltro = await obtenerCajaPorFecha(datosCaja.fechaCierre);
      console.log(respuestaFiltro)

      if (respuestaFiltro.status === 400) {
        await crearCaja(datosCaja);
        await Swal.fire({
          title: "Caja Abierta",
          text: `La Caja ha sido Abierta`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      } else {
        await Swal.fire({
          title: "Error!",
          text: `Ya existe una Caja con la Fecha: ${fechaFormateada}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return;
      }

      localStorage.removeItem("cajaCerrada");
      setCajaCerrada(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterClick = (filter) => {
    setFiltroActivo(true);
    setFiltrar(filter);
  };

  const resetearFiltros = () => {
    setFiltroActivo(false);
    setFiltrar("all");
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
        <h2 className="bannerTitulo mt-5 nav-espacio">Ganancias</h2>
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
                <span className="fw-bold fs-3">${ganancias}</span>
              </div>

              <div className="d-flex flex-column justify-content-center mb-3">
                <h1 className="fs-4">Total de Pedidos Terminados: </h1>
                <span className="fw-bold fs-3">{cantidadPedidos.length}</span>
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

        <div className="d-flex flex-column flex-md-row gap-2 gap-md-0 justify-content-around my-5">
          <div>
            <Button
              variant="danger"
              className="text-white text-bold text-uppercase fw-bold w-100"
              onClick={() => handleFilterClick("terminado")}
            >
              Pedidos Terminados
            </Button>
          </div>
          <div>
            <Button
              variant="success"
              className="text-white text-bold text-uppercase fw-bold w-100"
              onClick={() => handleFilterClick("en proceso")}
            >
              Pedidos en Proceso
            </Button>
          </div>
          <div>
            <Button
              variant="warning"
              className="text-white text-bold text-uppercase fw-bold w-100"
              onClick={() => handleFilterClick("pendiente")}
            >
              Pedidos Pendientes
            </Button>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4 ">Pedidos del Día</h1>
            <Button variant="primary" onClick={resetearFiltros}>
              <i className="bi bi-arrow-clockwise"></i>
            </Button>
          </div>

          <hr />

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
                {filtroActivo &&
                  pedidos.filter((pedido) => pedido.estado === filtrar)
                    .length === 0 && (
                    <p className="text-center fw-bold ">
                      No hay pedidos que coincidan con el filtro seleccionado.
                    </p>
                  )}
                {filtroActivo
                  ? pedidos
                      .filter((pedido) => pedido.estado === filtrar)
                      .map((pedido) => (
                        <ItemPedidos
                          key={pedido._id}
                          pedido={pedido}
                          setPedidos={setPedidos}
                        />
                      ))
                  : pedidos.map((pedido) => (
                      <ItemPedidos
                        key={pedido._id}
                        pedido={pedido}
                        setPedidos={setPedidos}
                      />
                    ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PanelGanancias;
