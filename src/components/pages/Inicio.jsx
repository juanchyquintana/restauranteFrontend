import { Container, Row } from "react-bootstrap";
import Cardevento from "./placas/Cardevento";
import Cardlink from "./placas/Cardlink";
import './inicio.css'

const Inicio = () => {
  return (
    <>
      <section className="banner-imagen w-100 vh-100 d-flex justify-content-center align-item-center"></section>
      <section className="banner-imagen3 d-flex w-100 vh-100  justify-content-center align-item-center">
        <div className="row w-50 d-flex">
          <div className="col text-light text-center w-100 col-sm-1">
            <p></p>
          </div>
          <div className="col texto-superpuesto w-100 pt-5 col-sm-12 col-lg-6 mx-5">
            <h5 className="text-light text-center item-align-center">
              Bienvenido al Restaurante Jade Imperial
            </h5>
            <p className="text-light">
              Experimenta la auténtica cocina china en nuestro restaurante con
              más de 20 años de historia. Ofrecemos platos tradicionales y
              modernos, un ambiente acogedor y un servicio excepcional. Nuestra
              misión es crear momentos memorables y compartir la rica herencia
              culinaria china. ¡Únete a nosotros para una experiencia
              gastronómica inolvidable en el Restaurante Jade Imperial!
            </p>
          </div>
        </div>
      </section>
      <section className="banner-imagen2 w-100 vh-100 d-flex justify-content-center align-item-center mt-0">
        <Container className="mt-5">
          <h1 className="display-4 text-center text-light">
            Ingresa a nuestros menús
          </h1>
          <hr className="text-light" />

          <Row className="d-flex justify-content-around pt-5">
            <Cardlink></Cardlink>
          </Row>
        </Container>
      </section>
      <section className="banner-imagen4 w-100 vh-100 d-flex justify-content-center align-item-center">
        <Container className="mt-5">
          <h1 className="display-4 text-center text-light">
            Conoce mas opciones
          </h1>
          <hr className="text-light" />

          <Row className="d-flex justify-content-center">
            <Cardevento></Cardevento>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Inicio;
