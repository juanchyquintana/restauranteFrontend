import logoFooter from "../pages/imagenLogo/lotus.png";
import logoExelencia from "../pages/imagenLogo/tripadvisor.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-center bg-green text-black  contenedorFooter">
      <div className="text-center ">
        <div className="row m-0">
          <div className="col-12 col-sm-12 col-lg-4">
            <a
              href="#"
              className="contenedorLogo d-flex justify-content-center"
            >
              <img src={logoFooter} alt="Logo" className="imgLogoFooter img-fluid " />
            </a>
            <div>
              <ul className="listaFooter">
                <li className="list-unstyled">
                  <h4 className="text-light fw-bold tituloLista">Acerca de</h4>
                </li>
                <li className="mt-3 list-unstyled">
                  <a
                    href="#"
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Acerca de Nosotros
                  </a>
                </li>
                <li className="mt-3 list-unstyled">
                  <a
                    href="#"
                    className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light listaAyuda"
                  >
                    Ayuda
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column">
                <p className="text-light">Síguenos en nuestras redes:</p>
                <div className="d-flex justify-content-center">
                  <a href="#">
                    <i className="bi bi-instagram fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter fs-3 m-2 colorIcon"></i>
                  </a>
                  <a href="#">
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
                <a
                  href="#"
                  className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
                ></a>
              </li>
              <li className="mt-3 list-unstyled">
                <a
                  href="./registro.html"
                  className="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
                ></a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-lg-4 d-flex flex-column justify-content-center">
            <a
              href="#"
              className="contenedorLogo d-flex justify-content-center"
            >
              <img src={logoExelencia} alt="Logo" className="imgLogoFooter2 img-fluid" />
            </a>
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
