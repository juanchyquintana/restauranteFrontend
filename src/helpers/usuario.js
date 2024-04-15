const usuarioURL = import.meta.env.VITE_API_RESTAURANTE;

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
    const respuesta = await fetch(`${usuarioURL}/usuarios`);
    const resultado = await respuesta.json();

    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuarioPorId = async (id) => {
  try {
    const respuesta = await fetch(`${usuarioURL}/usuarios/${id}`);
    const resultado = await respuesta.json();

    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${usuarioURL}/usuarios/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const actualizarEstado = async (id, estado) => {
  try {
    const usuario = await leerUsuarioPorId(id);
    if (!usuario) {
      return { error: "Usuario No Encontrado" };
    }

    const nuevoUsuario = { ...usuario, estado };
    const respuesta = await fetch(`${usuarioURL}/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token,
      },
      body: JSON.stringify(nuevoUsuario),
    });
    return respuesta.json();
  } catch (error) {
    console.log(error);
  }
};