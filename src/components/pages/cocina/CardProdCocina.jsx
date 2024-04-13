import { Button, Card } from "react-bootstrap";
import "./cardProdCocina.css";

const CardProductoCocina = ({ pedido }) => {
  return (
    <Card className="rounded-0 h-100" id="cardContainer">
      <Card.Body className="">
        <Card.Title className="d-flex gap-2 flex-wrap">
          <p className="p-2 bg-success text-white rounded-1 m-0">
            {pedido?.tipoEntrega}
          </p>
          <p className="p-2 bg-success text-white rounded-1 m-0">
            {pedido?.estado}
          </p>
          <p className="p-2 bg-success text-white rounded-1 m-0">5:02</p>
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

        <Card.Footer className="d-flex justify-content-end bg-light">
          <Button variant="primary" onClick={() => console.log()}>
            Comenzar
          </Button>
        </Card.Footer>

    </Card>
  );
};

export default CardProductoCocina;
