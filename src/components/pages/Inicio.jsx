import { Container, Row } from "react-bootstrap";
import Cardlink from "./placas/Cardlink"
import Cardlink2 from "./placas/Cardlink2";

const Inicio = () => {
  return (
   <>
   <section className="banner-imagen w-100 vh-100 d-flex justify-content-center align-item-center"></section>
   <section className="banner-imagen2 w-100 vh-100 d-flex justify-content-center align-item-center mt-0">
   <Container className="mt-5">
        <h1 className="display-4 text-center text-light">Ingresa a nuestros menús</h1>
        <hr className="text-light"/>
    
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
