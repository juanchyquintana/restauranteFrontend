import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Evento from "./img/eventoCumpleaños.jpg";
import Evento2 from "./img/eventoEjecutivo.jpg";
import Evento3 from "./img/eventoTe.jpg";
import ModalEvento from "./ModalEvento";
import './cardevento.css'

const Cardevento = () => {
  const [show, setShow] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setEventoSeleccionado(e);
    setShow(true);
  };

  const eventos = [
    {
      titulo: "Festeja tus cumpleaños",
      texto: "¡Celebra tu cumpleaños con nosotros y convierte tu día en una experiencia única! Ofrecemos una decoración vibrante, servicio excepcional y una deliciosa comida. Únete a nosotros para momentos memorables junto a tus seres queridos. ¡Te esperamos para celebrar de una manera emocionante!",
      imagen: Evento,
    },
    {
      titulo: "Almuerzos Ejecutivos",
      texto: "¡Ven a disfrutar de nuestro exclusivo almuerzo ejecutivo! Déjate sorprender con un servicio de alta calidad y platos exquisitos. Comparte un ambiente tranquilo con tus compañeros de trabajo. ¡Te esperamos para vivir una experiencia gastronómica única durante tu almuerzo ejecutivo!",
      imagen: Evento2,
    },
    {
      titulo: "Ceremonia del Té",
      texto: "Disfruta de la tranquila y refinada ceremonia del té con nosotros. Sumérgete en la tradición y la elegancia mientras degustas una selección exquisita de tés acompañados de dulces y bocados delicados. Únete a nosotros para una experiencia relajante y enriquecedora que te transportará a un mundo de armonía y serenidad.",
      imagen: Evento3,
    },
  ];

  return (
    <>
      <Container className="mt-md-5 tamañoContenedor">
        <Row className="justify-content-around columnaTamaño ">
          {eventos.map((evento, index) => (
            <Card key={index} className="col-lg-3 col-md-6 col-sm-6 tamañoCard">
              <Card.Img
                variant="top"
                src={evento.imagen}
                className="imagenEvento "
              />
              <Card.Body>
                <Card.Title className="text-center textoEvento">{evento.titulo}</Card.Title>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={() => handleShow(evento)} className="textoBoton">
                    ¡Conoce más!
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>

      {eventoSeleccionado && (
        <ModalEvento
          show={show}
          handleClose={handleClose}
          titulo={eventoSeleccionado.titulo}
          texto={eventoSeleccionado.texto}
          imagen={eventoSeleccionado.imagen}
        />
      )}
    </>
  );
};

export default Cardevento;