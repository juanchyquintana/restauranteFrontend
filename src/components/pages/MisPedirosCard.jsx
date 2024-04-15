import { Card } from "react-bootstrap";
import "../pages/cocina/cardProdCocina.css";
const MisPedirosCard = ({
    pedido
  }) => {  
    const estiloEstado = (estado) => {
      if (estado === "pendiente") {
        return "bg-warning";
      }
      if (estado === "en proceso") {
        return "bg-success";
      }
    };
  
    return (
      <Card className="rounded-0 h-100" id="cardContainer">
        <Card.Body className="">
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
        </Card.Body>
      </Card>
    );
  };
export default MisPedirosCard;