const restauranteURL = import.meta.env.VITE_API_RESTAURANTE

export const obtenerProductos = async () => {
    try {
        const response = await fetch(`${restauranteURL}/productos`)
        const datos = await response.json()
        return datos
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProductoID = async (id) => {
    try {
        const response = await fetch(`${restauranteURL}/productos/${id}`)
        const datos = await response.json()
        return datos
    } catch (error) {
        console.log(error)
    }
}

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${restauranteURL}/productos/${id}`, {
      method: "DELETE",
      headers: {
      'x-token': JSON.parse(sessionStorage.getItem('usuarioLotus')).token
      }
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


