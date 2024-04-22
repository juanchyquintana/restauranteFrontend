import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPersonal = ({ imagenNosotros, nombre, reseña, linkedin, github }) => {
  return (
    <Card id="card-container">
      <Card.Img variant="top" src={imagenNosotros} className="card-img img-thumbnail" />
      <Card.Body>
        <Card.Title className="text-center">{nombre}</Card.Title>
        <Card.Text>{reseña}</Card.Text>
        <div className="card-footer text-center d-flex justify-content-around">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="btn btn-outline-info">
              <i className="bi bi-linkedin"></i>
            </Button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="btn btn-outline-info">
              <i className="bi bi-github"></i>
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPersonal;
