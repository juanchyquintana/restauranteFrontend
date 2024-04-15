const ItemPedidos = ({ pedido }) => {
  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-AR", opciones);
  };

  return (
    <tr>
      <td>{pedido.usuario.nombre}</td>
      <td>{formatearFecha(pedido.fecha)}</td>
      <td className="text-uppercase fw-semibold">{pedido.tipoEntrega}</td>
      <td className="text-uppercase fw-semibold">${pedido.total}</td>
      <td className="text-uppercase fw-bold text-danger text-center">
        {pedido.estado}
      </td>
    </tr>
  );
};

export default ItemPedidos;
