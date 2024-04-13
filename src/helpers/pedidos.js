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

export const obtenerGananciasDia = async () => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/ganancias-dia`, {
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
    });

    const datos = await respuesta.json();
    return datos.ganancias;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCantidadPedidosDia = async () => {
    try {
        const fechaHoy = new Date();
        fechaHoy.setHours(0, 0, 0, 0);

        const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos-dia?fecha=${fechaHoy.toISOString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': JSON.parse(sessionStorage.getItem('usuarioLotus')).token
            }
        });
        const data = await respuesta.json();
        return data.cantidad;
    } catch (error) {
        console.log(error);
        return 0;
    }
};

export const cerrarCaja = async () => {
    try {
        const respuesta = await fetch(`${RESTAURANTE_URL}/cerrar-caja`, {
            method: 'POST',
            headers: {
                "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token
            }
        })

        const datos = await respuesta.json()
        return datos
    } catch (error) {
        console.log(error)
        return { ganancias: 0, cantidadProductos: 0}
    }
}