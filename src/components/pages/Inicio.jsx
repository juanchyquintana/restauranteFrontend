import { Container, Row, Spinner } from "react-bootstrap";
import Cardevento from "./placas/Cardevento";
import Cardlink from "./placas/Cardlink";
import "./inicio.css";
import Reviews from "../Reseñas/Reviews";
import LogoPortada from "./imagenLogo/lotusblanco.png";
import banner1 from "../../../src/assets/banner1.jpg"
import banner2 from "../../../src/assets/banner2.jpg"
import banner3 from "../../../src/assets/banner3.jpg"
import banner4 from "../../../src/assets/banner4.jpg"
import { useEffect, useState } from "react";

const Inicio = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    const timeout = setTimeout(() => {
      setCargando(false);
    }, 500); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {cargando && (
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </Container>
      )}
      {!cargando && (
        <>
          <Container fluid className="p-0 position-relative">
            <img src={banner1} alt="banner 1" className="position-absolute banner1"/>
            <section className="banner-imagen d-flex justify-content-center align-item-center nav-espacio">
              <img
                src={LogoPortada}
                alt="logo del restaurante"
                className="logoInicio position-absolute mt-lg-4"
              />
            </section>
          </Container>

          <Container fluid className="p-0">
          <img src={banner2} alt="banner 1" className="position-absolute banner1"/>
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

          <Container fluid className="p-0 position-relative">
          <img src={banner3} alt="banner 1" className="position-absolute banner3"/>
            <section className="banner-imagen3 ">
              <h2 className=" pt-1 text-center text-light textoIngreso">
                Ingresa a nuestros menús
              </h2>
              
              <Cardlink/>
            </section>
          </Container>

          <Container fluid className="p-0">
            <img src={banner4} alt="banner 1" className="position-absolute banner4"/>
            <section className="banner-imagen4">
              <h2 className="text-center text-light textoOpciones">
                Conoce mas opciones
              </h2>
              
              <Row className="d-flex justify-content-center mx-0">
                <Cardevento />
              </Row>
            </section>
          </Container>
          
          <Container>
            <section className="container pt-5">
              <Reviews />
            </section>
          </Container>
        </>
      )}
    </>
  );
};

export default Inicio;
