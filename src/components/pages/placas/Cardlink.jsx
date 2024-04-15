import { Container } from "react-bootstrap";
import placa1 from "./img/placa-comida.jpg";
import placa2 from "./img/placa-bebida.jpg";
import "./cardlink.css";
import { Link } from "react-router-dom";

const Cardlink = () => {
  return (
    <Container className="cardImagen">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="hover-effect mt-5 imgLink">
              <div className="tituloMenu text-white ">Comidas</div>
              <Link to="/menu">
                <img
                  src={placa1}
                  alt="Comida"
                  className="tamañoImagen img-fluid img-thumbnail"
                />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="hover-effect mt-5 imgLink">
              <div className="tituloMenu2 text-white">Bebidas</div>
              <Link to="/menu">
                <img
                  src={placa2}
                  alt="Bebida"
                  className="tamañoImagen img-fluid img-thumbnail"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cardlink;
