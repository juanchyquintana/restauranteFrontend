import { Link } from "react-router-dom";
import logoFooter from "../pages/imagenLogo/lotus.png";
import logoExelencia from "../pages/imagenLogo/tripadvisor.png";
import "./footer.css";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="text-center bg-green text-black  contenedorFooter">
      <div className="text-center ">
        <div className="row m-0 claseRow">
          <div className="col-12 col-sm-12 col-lg-4">
            <Link
              to="/"
              onClick={handleScrollToTop}
              className="contenedorLogo d-flex justify-content-center"
            >
              <img
                src={logoFooter}
                alt="Logo"
                className="imgLogoFooter img-fluid "
              />
            </Link>
            <div>
              <ul className="listaFooter">
                <li className="list-unstyled">
                  <h4 className="text-light fw-bold tituloLista">Secciones</h4>
                </li>
                <li className="mt-3 list-unstyled">
                  <Link
                    to="/"
                    onClick={handleScrollToTop}
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="mt-3 list-unstyled">
                  <Link
                    to="/menu"
                    onClick={handleScrollToTop}
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Menu
                  </Link>
                </li>
                <li className="mt-3 list-unstyled">
                  <Link
                    to="/contacto"
                    onClick={handleScrollToTop}
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Contacto
                  </Link>
                </li>
                <li className="mt-3 list-unstyled">
                  <Link
                    to="/nosotros"
                    onClick={handleScrollToTop}
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Acerca de nosotros
                  </Link>
                </li>
              </ul>
              <div className="d-flex flex-column">
                <p className="text-light">Síguenos en nuestras redes:</p>
                <div className="d-flex justify-content-center">
                  <a href="https://www.instagram.com/lotus-restaurante-404" target="_blank">
                    <i className="bi bi-instagram fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="https://www.facebook.com/lotus.restaurante.404/" target="_blank">
                    <i className="bi bi-facebook fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="https://twitter.com/lotus-restaurante-404" target="_blank">
                    <i className="bi bi-twitter fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="https://www.linkedin.com/lotus-restaurante-404" target="_blank">
                    <i className="bi bi-linkedin fs-3 m-2 colorIcon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ul className="listaFooter">
              <li className="mt-3 list-unstyled">
                <h4 className="text-light fw-bold"></h4>
              </li>
              <li className="mt-3 list-unstyled">
                <Link
                  to="/error"
                  className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
                ></Link>
              </li>
              <li className="mt-3 list-unstyled">
                <Link
                  to="/registrarse"
                  className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
                ></Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-lg-4 d-flex flex-column justify-content-center">
            <Link
              to="/error"
              onClick={handleScrollToTop}
              className="contenedorLogo d-flex justify-content-center"
            >
              <img
                src={logoExelencia}
                alt="Logo"
                className="imgLogoFooter2 img-fluid"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <p className="text-light">
          LOTUS RESTAURANTE S.A.&copy; 2024 Todos los derechos reservados.
          <br />
          Diseño Dyjukena creaciones
        </p>
      </div>
    </footer>
  );
};

export default Footer;
