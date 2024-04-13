import { obtenerGananciasDia, cerrarCaja, obtenerCantidadPedidosDia } from "../../helpers/pedidos";
import { useEffect, useState } from "react";

const PanelGanancias = () => {
  const [gananciasDia, setGananciasDia] = useState(0);
  const [cantidadPedidos, setCantidadPedidos] = useState(0);

  const obtenerGanancias = async () => {
    const ganancias = await obtenerGananciasDia();
    setGananciasDia(ganancias);
  };

  const pedidoCantidad = async () => {
    const cantidad = await obtenerCantidadPedidosDia();
    setCantidadPedidos(cantidad);
};

  const cerrarCajaHandler = async () => {
    await cerrarCaja()
    setGananciasDia(0)
  }

  useEffect(() => {
    obtenerGanancias();
    pedidoCantidad()
  }, []);

  return (
    <div className="container my-5">
      <h1>Ganancias del día: ${gananciasDia}</h1>
      <h2>Cantidad de pedidos realizados hoy: {cantidadPedidos}</h2>
      <button onClick={cerrarCajaHandler}>Cerrar caja</button>
    </div>
  );
};

export default PanelGanancias;
