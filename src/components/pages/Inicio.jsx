import { Container, Row } from "react-bootstrap";
import Cardlink from "./placas/Cardlink";
import Cardlink2 from "./placas/Cardlink2";

const Inicio = () => {
  return (
    <>
      <section className="banner-imagen w-100 vh-100 d-flex justify-content-center align-item-center"></section>
      <section className="banner-imagen3 d-flex w-100 vh-100  justify-content-center align-item-center">
        <div className="text-light text-center w-75 ">
          <p>hola prueba</p>
        </div>
        <div className="texto-superpuesto ">
          <h6 className="text-light text-center item-align-center w-50">
            Bienvenido al Restaurante Jade Imperial
            </h6>
            <p className="text-light text-center item-align-center w-50">
            Experimenta la auténtica cocina china en nuestro restaurante con más
            de 20 años de historia. Ofrecemos platos tradicionales y modernos,
            un ambiente acogedor y un servicio excepcional. Nuestra misión es
            crear momentos memorables y compartir la rica herencia culinaria
            china. ¡Únete a nosotros para una experiencia gastronómica
            inolvidable en el Restaurante Jade Imperial!
            </p>
          
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
            <Cardlink2></Cardlink2>
          </Row>
        </Container>
      </section>
      <section className="banner-imagen w-100 vh-100 d-flex justify-content-center align-item-center"></section>
    </>
  );
};

export default Inicio;
