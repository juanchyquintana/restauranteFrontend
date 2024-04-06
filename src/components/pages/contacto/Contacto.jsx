import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import "./contacto.css";
const Contacto = () => {
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState:{errors}
     } = useForm();

  const onSubmit = data => {
    // Aquí lógica para enviar los datos del formulario
    console.log(data);
    
    reset();
  };

  return (
    <section id="mainContacto" className='mt-5'>
      <h1>Contacto </h1>
      <p >¡Gracias por tu interés en contactar con nosotros! Por favor, llena el formulario a continuación y te responderemos lo antes posible.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label className='fw-bold'>Nombre:</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            {...register("nombre", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre",
                },
              })} />
          {errors.nombre && <Form.Text className="text-danger">Este campo es requerido.</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className='fw-bold'>Correo electrónico:</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            {...register("email", {
                required: "La imagen es obligatoria",
                minLength:{
                    value: 8,
                    message: "Debe ingresar como minimo 8 caracteres"
                },
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: "Debe ingresar una email valido (alguien@algunlugar.es)",
                },
              })} 
          />
          {errors.email && <Form.Text className="text-danger">Este campo es requerido.</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className='fw-bold'>Mensaje:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="message" 
            {...register("mensaje",{
                required: "El mensaje es obligatorio",
                minLength: {
                    value:10,
                    message: "El mensaje debe tener como minimo 10 caracteres"
                },
                maxLength: {
                    value:1000,
                    message: "El mensaje debe tener como maximo 1000 caracteres"
                }
            })}
          />
          {errors.mensaje && <Form.Text className="text-danger">Este campo es requerido.</Form.Text>}
        </Form.Group>
        <div className='text-end'> 
            <Button variant="primary" type="submit" className='mt-3'>
            Enviar
            </Button>
        </div>
      </Form>
    </section>
  );
};

export default Contacto;