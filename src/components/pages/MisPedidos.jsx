import { Container } from "react-bootstrap";
import "../pages/cocina/cocina.css";
import { editarPedido, obtenerPedidos } from "../../helpers/pedidos";
import { useEffect, useState } from "react";
import banner from "../../assets/cocina/banner-cocina.jpg";
import MisPedirosCard from "./MisPedirosCard";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const MisPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLotus"));

  if (!usuario) {
    return <Navigate to="/error" />;
  }
  if (usuario.tipoUsuario === "admin") return <Navigate to="/error" />;

  const getPedidos = async () => {
    try {
      const respuesta = await obtenerPedidos();
      const pedidosOrdenados = [...respuesta].sort((a, b) => {
        const fechaA = new Date(b.fecha);
        const fechaB = new Date(a.fecha);
        return fechaA - fechaB;
      });
      const productosEntradas = pedidosOrdenados.filter(
        (pedido) => pedido.usuario?._id === usuario.id
      );
      setPedidos(productosEntradas);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelarPedido = (id) => {
    const copiaPedidos = pedidos;
    const pedidoEstado = copiaPedidos.find((pedido) => {
      return pedido._id === id;
    });
    const fechaActual = new Date();
    const fechaPedido = new Date(pedidoEstado.fecha);
    const tiempoTranscurrido = fechaActual - fechaPedido;
    if (pedidoEstado.estado === "pendiente" && fechaPedido < 600000) {
      Swal.fire({
        title: "¿Cancelar pedido?",
        showDenyButton: true,
        confirmButtonText: "Cancelar pedido",
        denyButtonText: `No cancelar`,
        customClass: {
          confirmButton: "btn-confirm",
          denyButton: "btn-deny",
        },
        buttonsStyling: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          pedidoEstado.estado = "cancelado";
          const respuesta = await putPedido(id, pedidoEstado);
          if (respuesta.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "El pedido ha sido cancelado.",
              showConfirmButton: false,
              timer: 1500,
            });
            getPedidos();
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Ha ocurrido un error, intente nuevamente mas tarde.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else if (result.isDenied) {
          Swal.fire("El pedido sigue en proceso", "", "info");
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          "El pedido no se puede cancelar. Pasaron 10 min o ya esta en proceso/terminado.",
        showConfirmButton: true,
      });
    }
  };

  const putPedido = async (id, pedido) => {
    try {
      const respuesta = editarPedido(id, pedido);
      return respuesta;
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
              <p className="mb-4 fs-4">
                <span className="fw-bold">Importante:</span> Un pedido solo se
                puede cancelar si aún no pasaron 10 minutos de haberlo hecho y
                no comenzaron a cocinarlo (En proceso).
              </p>
              {pedidos?.map((pedido, i) => (
                <div className="mb-3 mb-md-4 col-md-6 col-lg-4" key={i}>
                  <MisPedirosCard
                    pedido={pedido}
                    cancelarPedido={cancelarPedido}
                  />
                </div>
              ))}
            </>
          ) : (
            <div>
              <h2>No hay pedidos.</h2>
              <Link to="/menu" className="mt-3 btn btn-primary">
                Volver al menú
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MisPedidos;
