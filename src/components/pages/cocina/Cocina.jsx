import { Button, Card, Container } from "react-bootstrap";
import "./cocina.css";
import CardProductoCocina from "./CardProdCocina";
import { editarPedido, obtenerPedidos } from "../../../helpers/pedidos";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/src/sweetalert2.js";
import moment from 'moment-timezone';

const Cocina = () => {
  const [pedidos, setPedidos] = useState([]);
  const [contadores, setContadores] = useState([])

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
        buttonsStyling: false,
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
    const fechas = [];
    let fechaActual = moment.tz('America/Argentina/Buenos_Aires').toDate();
    fechaActual.setHours(fechaActual.getHours() - 3);

    for (let i = 0; i < pedidos.length; i++) {
      const fecha = pedidos[i]?.fecha;
      if (fecha) {
        fechas?.push(new Date(fecha));
      }
    }

    setInterval(() => {
      let diferencias = [];
      let contado = [];
      for (let fechaIn of fechas) {
        const diferencia = fechaActual - fechaIn;
        diferencias.push(diferencia);
      }
      let stringDiferencia = []
      for (let i = 0; i < diferencias.length; i++) {
        const horas = Math.floor(diferencias[i] / (1000 * 60 * 60));
        const minutos = Math.floor((diferencias[i] / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencias[i] / 1000) % 60);
        stringDiferencia.push(`${horas}:${minutos}:${segundos}`)
      }
      setContadores(stringDiferencia)

    }, 7000);
  }, [contadores]);

  useEffect(() => {
    getPedidos();

    // console.log(pedidos)
  }, []);

  return (
    <section className="mainPage nav-espacio bg-light pb-5">
      <Container>
        <div className="row">
          {pedidos?.length > 0 ? (
            <>
              {pedidos?.map((pedido, i) =>
                pedido.estado !== "terminado" ? (
                  <div className="mb-3 mb-md-4 col-md-6 col-lg-4" key={i}>
                    <CardProductoCocina
                      pedido={pedido}
                      actualizarPedido={actualizarPedido}
                      contadores={contadores}
                      orden={i}
                    />
                  </div>
                ) : (
                  <div key={i}></div>
                )
              )}
            </>
          ) : (
            <div>
              <h2>No hay pedidos pendientes.</h2>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Cocina;
