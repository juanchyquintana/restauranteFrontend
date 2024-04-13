const URL_GENERAL = import.meta.env.VITE_API_USUARIO; 

export const borrarProductoAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URL_GENERAL}/productos/${id}`, {
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