const productoURL = import.meta.env.VITE_API_USUARIO;
console.log(productoURL);

export const leerProductos = async () => {
  try {
    const respuesta = await fetch(productoURL);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};