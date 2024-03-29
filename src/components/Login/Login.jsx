import { Button, Form } from "react-bootstrap";
import backgroundImg from "../../assets/Login/backgroundImg.webp";
import "./login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const validarFormulario = () => {};

  return (
    <section className="login-container p-0 m-0 mainPage d-flex flex-column justify-content-center">
      <div className="background-img-container bg-black">
        <img src={backgroundImg} className="img-blur-ingreso" />
      </div>

      <div className="form-Img-Container container-fluid bg-light p-3 rounded-3">
        <h2 className="text-center mb-2">¡Bienvenido!</h2>

        <div className="row">
          <div className="img-form col-lg-6 bg-dark d-none d-lg-block">
            <img src="" />
          </div>

          <div className="col-lg-6">
            <Form onSubmit={handleSubmit(validarFormulario)}>
              <Form.Group>
                <Form.Label htmlFor="correo">Correo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ejemplo@correo.com"
                  className="mb-3"
                  id="correo"
                  {...register("email", {
                    required:
                      "El Email es Obligatorio. Ingrese un Email válido, por favor!",
                    minLength: {
                      value: 4,
                      message: "El Email debe contener al menos 4 caracteres",
                    },
                    maxLength: {
                      value: 250,
                      message:
                        "El email debe contener como máximo 250 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida",
                    },
                  })}
                />
              </Form.Group>

              <Form.Text className="text-danger fw-bold">
                {errors.email?.message}
              </Form.Text>

              <Form.Group>
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="contraseña"
                  className="mb-4"
                  id="password"
                  {...register("password", {
                    required:
                      "El Password es Obligatorio. Ingrese un Password, por favor!",
                    minLength: {
                      value: 4,
                      message:
                        "El Password debe contener al menos 4 caracteres.",
                    },
                  })}
                />
              </Form.Group>
              <Form.Text className="text-danger fw-bold">
                {errors.password?.message}
              </Form.Text>

              <div className="text-center">
                <Button>Ingresar</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
