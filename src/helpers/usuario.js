const usuarioURL = import.meta.env.VITE_API_USUARIO

export const registrarUsuario = async (usuario) => {
    console.log(usuario)
    try {
        const respuesta = await fetch(`${usuarioURL}/usuarios`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}