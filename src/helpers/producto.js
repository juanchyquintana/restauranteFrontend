const restauranteURL = import.meta.env.VITE_API_RESTAURANTE;
console.log(productoURL);

export const leerProductos = async () => {
  try {
    const respuesta = await fetch(restauranteURL);
    const listaProductos = await respuesta.json();

    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(restauranteURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
