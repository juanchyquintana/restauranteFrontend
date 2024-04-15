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
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setSelectedEvent(event);
    setShow(true);
  };

  const eventos = [
    {
      title: "Festeja tus cumpleaños",
      text: "¡Celebra tu cumpleaños con nosotros y convierte tu día en una experiencia única! Ofrecemos una decoración vibrante, servicio excepcional y una deliciosa comida. Únete a nosotros para momentos memorables junto a tus seres queridos. ¡Te esperamos para celebrar de una manera emocionante!",
      image: Evento,
    },
    {
      title: "Almuerzos Ejecutivos",
      text: "¡Ven a disfrutar de nuestro exclusivo almuerzo ejecutivo! Déjate sorprender con un servicio de alta calidad y platos exquisitos. Comparte un ambiente tranquilo con tus compañeros de trabajo. ¡Te esperamos para vivir una experiencia gastronómica única durante tu almuerzo ejecutivo!",
      image: Evento2,
    },
    {
      title: "Ceremonia del Té",
      text: "Disfruta de la tranquila y refinada ceremonia del té con nosotros. Sumérgete en la tradición y la elegancia mientras degustas una selección exquisita de tés acompañados de dulces y bocados delicados. Únete a nosotros para una experiencia relajante y enriquecedora que te transportará a un mundo de armonía y serenidad.",
      image: Evento3,
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
                src={evento.image}
                className="imagenEvento "
              />
              <Card.Body>
                <Card.Title className="text-center textoEvento">{evento.title}</Card.Title>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={() => handleShow(evento)} className="textoBoton">
                    conoce más!!!
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      {selectedEvent && (
        <ModalEvento
          show={show}
          handleClose={handleClose}
          title={selectedEvent.title}
          body={selectedEvent.text}
        />
      )}
    </>
  );
};

export default Cardevento;