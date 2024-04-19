import { Card, Button } from "react-bootstrap";
import "../pages/cocina/cardProdCocina.css";
const MisPedirosCard = ({ pedido, cancelarPedido }) => {

  const estiloEstado = (estado) => {
    if (estado === "pendiente" || estado === "enviado") {
      return "bg-warning";
    }
    if (estado === "en proceso" || estado === "entregado") {
      return "bg-success";
    }
    if (estado === "terminado" || estado === "cancelado") {
      return "bg-danger";
    }
  };

  const cancelarPedidoEstilo = (estado) => {
    if (estado === 'cancelado'){
      return 'disabled'
    }
  }


  const fecha = new Date(pedido.fecha);
  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", opcionesFecha);

  const opcionesHora = {
    hour: "numeric",
    minute: "numeric",
  };
  const horaFormateada = fecha.toLocaleTimeString("es-ES", opcionesHora);

  return (
    <Card className="rounded-0 h-100" id="cardContainer">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
        <Card.Title className="d-flex gap-2 flex-wrap">
          <p className={`p-2 rounded-1 m-0`}>
            {pedido?.tipoEntrega.toUpperCase()}
          </p>
          <p
            className={`p-2 ${estiloEstado(
              pedido.estado
            )} text-white rounded-1 m-0`}
          >
            {pedido?.estado.toUpperCase()}
          </p>
        </Card.Title>
        <ul className="list-unstyled py-4">
          {pedido?.productos?.map((objetoPedido, i) => (
            <div key={i}>
              <li className="mb-2">
                <div className="d-flex justify-content-between border-bottom">
                  <p className="m-0 fw-bold">
                    • {objetoPedido?.producto?.nombre}
                  </p>
                  <p className=" m-0 fw-bold">x{objetoPedido?.cantidad}</p>
                </div>
              </li>
            </div>
          ))}
          {pedido?.notas?.length > 0 ? (
            <li className="mt-4 bg-light border p-2">
              <span className="fw-bold">Notas:</span> {pedido.notas}
            </li>
          ) : (
            <></>
          )}
        </ul>
        </div>
        <div className="">
          <p className="m-0">
            Pedido realizado el {fechaFormateada} {horaFormateada}hs
          </p>
          <p className="m-0 fw-bold">Total: ${pedido.total}</p>
        </div>
      </Card.Body>

      <Card.Footer className="d-flex justify-content-end">
        <Button onClick={() => cancelarPedido(pedido._id)}>Cancelar Pedido</Button>
      </Card.Footer>
    </Card>
  );
};
export default MisPedirosCard;
