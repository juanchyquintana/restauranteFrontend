import { Button, Card, Container } from "react-bootstrap";
import "./cocina.css";
import CardProductoCocina from "./CardProdCocina";
import { editarPedido, obtenerPedidos } from "../../../helpers/pedidos";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/src/sweetalert2.js";

const Cocina = () => {
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const respuesta = await obtenerPedidos();
      setPedidos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarPedido = async (id, estado) => {
    const copiaPedidos = pedidos;
    const pedidoEstado = copiaPedidos.find((pedido) => {
      return pedido._id === id;
    });
    if (pedidoEstado.estado === "en proceso") {
      Swal.fire({
        title: "¿Finalizar pedido?",
        showDenyButton: true,
        confirmButtonText: "Finalizar pedido",
        denyButtonText: `No finalizar`,
        customClass: {
          confirmButton: "btn-confirm",
          denyButton: "btn-deny",
        },
        buttonsStyling: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          pedidoEstado.estado = "terminado";
          const respuesta = await putPedido(id, pedidoEstado);
          if (respuesta.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "¡El pedido ha sido finalizado!",
              showConfirmButton: false,
              timer: 1500,
            });
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
      getPedidos();
    }
    if (pedidoEstado.estado === "pendiente") {
      console.log(copiaPedidos);
      pedidoEstado.estado = "en proceso";
      const respuesta = await putPedido(id, pedidoEstado);
      if (respuesta.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido esta en proceso",
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
    <section className="mainPage nav-espacio bg-light pb-5">
      <Container>
        <div className="row">
          {pedidos?.map((pedido, i) =>
            pedido.estado !== "terminado" ? (
              <div className="mb-3 mb-md-4 col-md-6 col-lg-4" key={i}>
                <CardProductoCocina
                  pedido={pedido}
                  actualizarPedido={actualizarPedido}
                />
              </div>
            ) : (
              <div key={i}></div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Cocina;
