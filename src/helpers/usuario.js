const usuarioURL = import.meta.env.VITE_API_USUARIO;

export const registrarUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${usuarioURL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const loginUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${usuarioURL}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(`${usuarioURL}/usuarios`)
    const resultado = await respuesta.json()

    return resultado
  } catch (error) {
    console.log(error)
  }
}