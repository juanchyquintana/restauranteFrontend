const RESTAURANTE_URL = import.meta.env.VITE_API_RESTAURANTE;

export const obtenerCajaPorFecha = async (fechaFiltro) => {
  try {
    if (!fechaFiltro) {
      throw new Error("Fecha de filtro no especificada");
    }

    const respuesta = await fetch(`${RESTAURANTE_URL}/caja/${fechaFiltro}`);

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearCaja = async (datosCaja) => {
  try {
    console.log(datosCaja);
    const respuesta = await fetch(`${RESTAURANTE_URL}/caja`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify({
        ganancias: datosCaja.ganancias,
        cantidadPedidos: datosCaja.cantidadPedidos,
        fechaCierre: datosCaja.fechaCierre,
      }),
    });
    return respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const editarCaja = async (id, datosCaja) => {
  try {
    const respuesta = await fetch(`${RESTAURANTE_URL}/caja/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify(datosCaja),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
