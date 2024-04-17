const ItemPedidos = ({ pedido }) => {
  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-AR", opciones);
  };

  let estadoClass;
  switch (pedido.estado) {
    case 'terminado':
      estadoClass = 'bg-danger text-white';
      break;
    case 'proceso':
      estadoClass = 'bg-success text-white';
      break;
    case 'pendiente':
      estadoClass = 'bg-warning text-white';
      break;
    default:
      estadoClass = '';
  }

  return (
    <tr>
      <td>{pedido.usuario.nombre}</td>
      <td>{formatearFecha(pedido.fecha)}</td>
      <td className="text-uppercase fw-semibold">{pedido.tipoEntrega}</td>
      <td className="text-uppercase fw-semibold">${pedido.total}</td>
      <td className={`text-uppercase fw-bold text-center ${estadoClass}`}>
        {pedido.estado}
      </td>
    </tr>
  );
};

export default ItemPedidos;
