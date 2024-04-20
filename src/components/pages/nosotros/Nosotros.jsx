import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import nosotrosImg from "./imgNosotros/fondoNosotros.jpg";
import "./nosotros.css";
import CardPersonal from "./CardPersonal";
import foto1 from "./imgNosotros/dylan2.jpg";
import foto2 from "./imgNosotros/Nano1.jpg";
import foto3 from "./imgNosotros/Juanchi.jpg";
import foto4 from "./imgNosotros/Kevin.jpg";

const Nosotros = () => {
  const chefs = [
    {
      imagenNosotros: foto1,
      nombre: "Dylan",
      reseña:
        "Apasionado desarrollador full stack con un ojo para el diseño limpio y funcional. Amante de los desafíos técnicos y siempre buscando aprender nuevas tecnologías.",
      linkedin: "https://www.linkedin.com/in/dylan-navarro/",
      github: "https://github.com/DylanNavarro97",
    },
    {
      imagenNosotros: foto2,
      nombre: "Nano",
      reseña:
        "Desarrollador full stack creativo y detallista, con experiencia en proyectos innovadores. Apasionado por la resolución de problemas y la optimización de procesos",
      linkedin: "https://www.linkedin.com/in/charles-xavier-152275304/",
      github: "https://github.com/Rippy1024",
    },
    {
      imagenNosotros: foto3,
      nombre: "Juan",
      reseña:
        "Desarrollador full stack con un enfoque en la usabilidad y la experiencia del usuario. Experto en encontrar soluciones eficientes y escalables para problemas complejos.",
      linkedin: "https://www.linkedin.com/in/juan-diego-quintana-b5a186211/",
      github: "https://github.com/juanchyquintana",
    },
    {
      imagenNosotros: foto4,
      nombre: "Kevin",
      reseña:
        "Desarrollador full stack con habilidades excepcionales en el desarrollo tanto de frontend como de backend. Capaz de trabajar en equipo y adaptarse rápidamente a nuevos entornos tecnológicos.",
      linkedin: "https://www.linkedin.com/in/kevinstephantorres/",
      github: "https://github.com/kstephantorres",
    },
  ];

  return (
    <section id="about-us" className="text-white espacioNav">
      <div className="bannerContainer">
        <img src={nosotrosImg} alt="Sobre Nosotros" className="banner h-100 " />
        <div className="textContainer">
          <h2>Nuestra Historia</h2>
          <p className="anchoTexto text-center position-relative">
            Lotus es un restaurante chino familiar que ha estado sirviendo
            auténtica cocina china durante más de dos décadas. Nos
            enorgullecemos de ofrecer platos elaborados con ingredientes frescos
            y sabrosos, preparados por nuestros talentosos chefs. Desde nuestros
            modestos comienzos en un pequeño local hasta convertirnos en un
            destino gastronómico popular, hemos mantenido nuestro compromiso con
            la calidad y la autenticidad en cada plato que servimos.
          </p>
          <h2>Nuestra Misión</h2>
          <p className="anchoTexto">
            En Lotus, nuestra misión es proporcionar una experiencia culinaria
            excepcional para nuestros clientes. Nos esforzamos por superar las
            expectativas con cada comida, brindando no solo deliciosos platos,
            sino también un servicio excepcional y un ambiente acogedor.
            Valoramos la satisfacción del cliente por encima de todo y nos
            comprometemos a mantener los más altos estándares en todo lo que
            hacemos. Ya sea que esté buscando una comida rápida para llevar o
            una cena relajada en nuestro comedor, nos esforzamos por hacer que
            cada visita a Lotus sea memorable.
          </p>
        </div>
      </div>

      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h2>Nuestro Equipo</h2>
          </Col>
          {chefs.map((chef, index) => (
            <Col
              md={4}
              key={index}
              className="d-flex justify-content-center my-2"
            >
              <CardPersonal
                imagenNosotros={chef.imagenNosotros}
                nombre={chef.nombre}
                reseña={chef.reseña}
                linkedin={chef.linkedin}
                github={chef.github}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;
