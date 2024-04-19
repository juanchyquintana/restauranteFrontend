const restauranteURL = import.meta.env.VITE_API_RESTAURANTE;

export const crearConsulta = async (consultaNueva) => {
    try {
      const respuesta = await fetch(`${restauranteURL}/consultas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultaNueva),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerConsultas = async () => {
    try {
      const response = await fetch(`${restauranteURL}/consultas`);
      const datos = await response.json();
      return datos;
    } catch (error) {
      console.log(error);
    }
  };

  export const borrarConsultaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${restauranteURL}/consultas/${id}`, {
        method: "DELETE",
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  