import { Card, Button } from "react-bootstrap";
import { PiTrash, PiEnvelope } from "react-icons/pi";
import { borrarConsultaAPI, obtenerConsultas } from "../../../helpers/consulta.js";
import Swal from "sweetalert2/src/sweetalert2";




const ConsultaItem = ({ consulta, setConsultas }) => {
    const fecha = new Date(consulta.fecha)
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; 
    const anio = fecha.getFullYear();

    const borrarConsulta = async()=>{
        Swal.fire({
            title: "¿Estas seguro de eliminar esta consulta?",
            text: "No se puede revertir este proceso",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
          }).then(async (result) => {
            if (result.isConfirmed) {
             const respuesta = await borrarConsultaAPI(consulta._id);
             if(respuesta.status === 200){
               Swal.fire({
                 title: "Consulta eliminada",
                 text: `La consulta de "${consulta.nombre}" fue eliminada correctamente`,
                 icon: "success"
               });
               const listaConsultas = await obtenerConsultas()
               setConsultas(listaConsultas);
             }else{
              Swal.fire({
                title: "Ocurrio un error",
                text: `La consulta de "${consulta.nombre}" no fue eliminada. Intente realizar esta operación en unos minutos`,
                icon: "error"
              });
             }
            }
          });
    }

    const abrirMail =()=>{
        const destinatario = consulta.email
        const asunto = "Respuesta a su consulta de parte de Lotus Restaurante"
        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}}`;
        window.open(mailtoLink, '_blank');
    }
    return (
    <Card className="my-4"> 
      <Card.Header as="h5">{consulta.nombre}</Card.Header>
      <Card.Body className="d-flex flex-column flex-md-row justify-content-between">
        <div >
            <Card.Title>{consulta.email}</Card.Title>
            <Card.Text>
            {consulta.mensaje}
            </Card.Text>
        </div>
        <div className="mt-3 mt-md-0 d-flex justify-content-md-around flex-column flex-sm-row flex-md-column text-center">
            <Button 
                variant="primary" 
                className="d-flex align-items-center mb-md-2 justify-content-center"
                onClick={abrirMail}
            >
                <p className="m-0">
                    Responder 
                </p>   
                <PiEnvelope className="fs-5 ms-1 align-self-center justify-content-center"/>
            </Button>
            <Button 
                variant="danger" 
                className="d-flex align-items-center mt-2 justify-content-center"
                onClick={borrarConsulta}
            >
                <p className="m-0">
                    Eliminar 
                </p>
                <PiTrash className="fs-5 ms-1 align-self-center"/>
            </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-end">
        <small className="text-muted me-2">{`${dia}-${mes}-${anio}`}</small>
      </Card.Footer>
    </Card>
    );
};

export default ConsultaItem;