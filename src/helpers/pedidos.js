const RESTAURANTE_URL = import.meta.env.VITE_API_RESTAURANTE;

export const crearPedido = async (pedido) => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const cerrarCaja = async (datosCaja) => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/cerrar-caja`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify(datosCaja)
    });

    return respuesta
  } catch (error) {
    console.log(error);
    return { ganancias: 0, cantidadProductos: 0 };
  }
};

export const obtenerPedidos = async () => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos`);
    return respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const editarPedido = async (id, pedido) => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const filtrarPedidosPorUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/pedidosUsuario/${id}`)
    return respuesta.json()
  } catch (error) {
    console.log(error)
  }
}