import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalEvento = ({ show, handleClose, titulo, texto, imagen }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="text-center">
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={imagen}
          alt="Descripción de la imagen"
          className="w-100 h-auto img-fluid"
        />

        <div>
          <p className="fw-bold my-3">- Restaurante Lotus -</p>
          <hr />
          <p>{texto}</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <Button
          variant="danger"
          className="text-uppercase fw-bold w-50"
          onClick={handleClose}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEvento;
