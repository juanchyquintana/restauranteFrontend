import bannerContacto from "../../../assets/chicosConversando.jpg";
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import "./contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí lógica para enviar los datos del formulario
    console.log(data);

    reset();
  };

  return (
    <section>
      <img
        className="banner"
        src={bannerContacto}
        alt="plato con comida china"
      />
      <h2 className="bannerTitulo mt-5">门票 Contacto</h2>

      <Container id="mainContacto" className="my-5 shadow-lg rounded-3">
        <h1 className="display-4">Contacto </h1>
        <hr />
        <p className="text-center fw-semibold ">
          ¡Gracias por tu interés en contactar con nosotros! Por favor, llena el
          formulario a continuación y te responderemos lo antes posible.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label className="fw-bold">Nombre:</Form.Label>
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
              })}
            />
            {errors.nombre && (
              <Form.Text className="text-danger">
                Este campo es requerido.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="fw-bold">Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              {...register("email", {
                required: "La imagen es obligatoria",
                minLength: {
                  value: 8,
                  message: "Debe ingresar como minimo 8 caracteres",
                },
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message:
                    "Debe ingresar una email valido (alguien@algunlugar.es)",
                },
              })}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                Este campo es requerido.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label className="fw-bold">Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              {...register("mensaje", {
                required: "El mensaje es obligatorio",
                minLength: {
                  value: 10,
                  message: "El mensaje debe tener como minimo 10 caracteres",
                },
                maxLength: {
                  value: 1000,
                  message: "El mensaje debe tener como maximo 1000 caracteres",
                },
              })}
            />
            {errors.mensaje && (
              <Form.Text className="text-danger">
                Este campo es requerido.
              </Form.Text>
            )}
          </Form.Group>

          <div className="text-end">
            <Button variant="primary" type="submit" className="mt-3">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.074740468244!2d-65.20445213048936!3d-26.83044190181348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c106f2afc99%3A0xe97bef14f2ad881a!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1713158879727!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          className="w-100 border-2 border-top border-black"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacto;
