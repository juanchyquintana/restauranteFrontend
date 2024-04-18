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