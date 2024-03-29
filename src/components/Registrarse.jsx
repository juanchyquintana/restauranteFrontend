import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registrarse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crearUsuario = () => {
    // TODO: Escribir logica para crear un usuario
  };

  return (
    <>
      <h1 className="text-center fw-bold text-uppercase display-4  mt-5">Crear Cuenta</h1>

      <Container className="bg-white shadow p-3 rounded my-3">
        <Form onClick={handleSubmit(crearUsuario)}>
          <Form.Group className="my-3" controlId="formBasicNombre">
            <Form.Label className="text-uppercase fw-bold">
              Nombre Completo
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su Nombre Completo"
              {...register("nombre", {
                required:
                  "El Nombre es Obligatorio. Ingrese un Nombre, por favor!",
                minLength: {
                  value: 3,
                  message: "El Nombre debe tener un minimo de 3 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "El Nombre debe tener un máximo de 3 caracteres",
                },
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger fw-bold">
            {errors.nombre?.message}
          </Form.Text>

          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label className="text-uppercase fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: pepito12@gmail.com"
              {...register("email", {
                required:
                  "El Email es Obligatorio. Ingrese un Email válido, por favor!",
                minLength: {
                  value: 4,
                  message: "El Email debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 250,
                  message: "El email debe contener como máximo 250 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger fw-bold">
            {errors.email?.message}
          </Form.Text>

          <Form.Group className="my-3" controlId="formBasicPassword">
            <Form.Label className="text-uppercase fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese un Password"
              {...register("password", {
                required:
                  "El Password es Obligatorio. Ingrese un Password, por favor!",
                minLength: {
                  value: 4,
                  message: "El Password debe contener al menos 4 caracteres.",
                },
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger fw-bold">
            {errors.password?.message}
          </Form.Text>

          <Button
            variant="danger"
            type="submit"
            className="w-100 text-uppercase fw-bold mt-3"
          >
            Crear Cuenta
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Registrarse;
