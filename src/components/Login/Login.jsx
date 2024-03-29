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

      <div className="form-Img-Container container bg-light p-3 rounded-3">
        <div className="row">
          <div className="img-form col-lg-6 bg-dark">
            <img src="" />
          </div>

          <div className="col-lg-6">
            <Form
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit(validarFormulario)}
            >
              <Form.Group>
                <Form.Label htmlFor="correo">Correo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ejemplo@correo.com"
                  id="correo"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="contraseña"
                  id="password"
                />
              </Form.Group>

              <Button>Ingresar</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
