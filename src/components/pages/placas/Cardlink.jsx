import { Container } from "react-bootstrap";
import placa1 from "./img/placa-comida.jpg";
import placa2 from "./img/placa-bebida.jpg";
import "./cardlink.css";

const Cardlink = () => {
  return (
    <Container className="cardImagen">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="hover-effect mt-5 imgLink">
              <div className="tituloMenu text-white ">Comidas</div>
              <a href="#">
                <img
                  src={placa1}
                  alt="Comida"
                  className="tamañoImagen img-fluid img-thumbnail"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="hover-effect mt-5 imgLink">
              <div className="tituloMenu2 text-white">Bebidas</div>
              <a href="#">
                <img
                  src={placa2}
                  alt="Bebida"
                  className="tamañoImagen img-fluid img-thumbnail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cardlink;
