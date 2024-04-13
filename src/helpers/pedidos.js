const RESTAURANTE_URL = import.meta.env.VITE_API_RESTAURANTE

export const crearPedido = async (pedido) => {
    try {
        const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token
            },
            body: JSON.stringify(pedido)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerPedidos = async () => {
    try {
        const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos`)
        return respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export const editarPedidos = async (id, pedido) => {
    try {
        const respuesta = await fetch(`${RESTAURANTE_URL}/pedidos/${id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuarioLotus")).token
            },
            body: JSON.stringify(pedido)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
} 