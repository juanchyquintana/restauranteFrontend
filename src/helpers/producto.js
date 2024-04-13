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