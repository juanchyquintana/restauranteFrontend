import { Container, Row } from "react-bootstrap";
import Cardevento from "./placas/Cardevento";
import Cardlink from "./placas/Cardlink";
import "./inicio.css";
import Reviews from "../Reseñas/Reviews";
import LogoPortada from "./imagenLogo/lotusblanco.png";

const Inicio = () => {
  return (
    <>
      <Container fluid className="p-0">
        <section className="banner-imagen d-flex justify-content-center align-item-center">
          <img
            src={LogoPortada}
            alt="logo del restaurante"
            className="logoInicio"
          />
        </section>
      </Container>
      <Container fluid className="p-0">
        <section className="banner-imagen2 position-relative d-flex">
          <div className="container">
            <div className="row">
              <div className="estiloParrafo">
                <p className="text-light text-center contenido position-relative pt-4 ">
                  Experimenta la auténtica cocina china en nuestro restaurante
                  con más de 20 años de historia. Ofrecemos platos tradicionales
                  y modernos, un ambiente acogedor y un servicio excepcional.
                  Nuestra misión es crear momentos memorables y compartir la
                  rica herencia culinaria china. ¡Únete a nosotros para una
                  experiencia gastronómica inolvidable en Lotus Restaurante!
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container fluid className="p-0">
        <section className="banner-imagen3 ">
          <h2 className="tituloSeccion text-center text-light">
            Ingresa a nuestros menús
          </h2>
          <hr className="text-light" />
          <Cardlink />
        </section>
      </Container>

      <Container fluid className=" p-0">
        <section className=" banner-imagen4 w-100 vh-100 d-flex justify-content-center align-item-center">
          <h2 className="tituloSeccion text-center text-light">
            Conoce mas opciones
          </h2>
          <hr className="text-light" />
          <Row className="d-flex justify-content-center">
            <Cardevento />
          </Row>
        </section>
      </Container>
      <Container>
        <section className="container">
          <Reviews />
        </section>
      </Container>
    </>
  );
};

export default Inicio;
