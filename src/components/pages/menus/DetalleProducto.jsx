import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoK } from "../../../helpers/producto"; 
import Swal from "sweetalert2/src/sweetalert2";

const DetalleProducto = () => {
const {id} = useParams();
const [producto, setProducto] = useState({});
useEffect(()=>{
  cargarDetalle();
},[])

const cargarDetalle = async()=>{
  const respuesta = await obtenerProductoK(id)
  console.log(respuesta)
  if(respuesta.status === 200){
    const datoProducto = await respuesta.json();
    setProducto(datoProducto);
  }else{
    Swal.fire({
      title: "Ocurrio un error",
      text: "Intente realizar esta operacion en unos minutos",
      icon: "error",
    });
  }
}
  return (
    <Container className="my-5 mainSection">
      <Card>
        <Row className="align-items-center">
          <Col md={6} >
            <Card.Img
              className=""
              alt={producto.nombre}
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto.nombre}</Card.Title>
              <hr />
              <Card.Text>
              {producto.detalle}
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {producto.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${producto.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;