import backgroundImg from "../../assets/Login/backgroundImg.webp";
import formImg from "../../assets/Login/formImage.webp";
import { loginUsuario } from "../../helpers/usuario";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import "./login.css";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const login = async (usuario) => {
    try {
      const respuesta = await loginUsuario(usuario);
      const datos = await respuesta.json();
      console.log(datos)
      if(datos.estado === 'inactivo') {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "¡Lo Sentimos!",
          text: "Su cuenta se encuentra momentáneamente inactiva",
          showConfirmButton: false,
          timer: 1500
        });
        
        navegacion("/ingresar");
        return
      }

      if (respuesta.status === 200) {
        sessionStorage.setItem(
          "usuarioLotus",
          JSON.stringify({ email: datos.email, token: datos.token, tipoUsuario: datos.tipoUsuario, id: datos.id })
        );
        setUsuarioLogueado(datos);

        Swal.fire({
          position: "center",
          icon: `success`,
          title: `"¡Bienvenido! Has iniciado sesión correctamente`,
          showConfirmButton: false,
          timer: 1500
        });

        if (datos.tipoUsuario === "admin") {
          navegacion("/administrador");
        } else {
          navegacion("/");
        }

      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Ocurrió un error",
          text: "Correo o contraseña incorrectos",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="mainPage login-container p-0 m-0 d-flex flex-column justify-content-center">
      <div className="background-img-container bg-black">
        <img src={backgroundImg} className="img-blur-ingreso" />
      </div>

      <div className="form-e-Img-Container container-fluid bg-light p-3 p-lg-0 rounded-3">
        <div className="row m-0">
          <div className="img-form-div col-lg-6 d-none d-lg-flex rounded-start-3 p-0">
            <img src={formImg} className="form-img"/>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-lg-center">
          <h2 className="text-center mb-3">¡Bienvenido!</h2>
            <Form onSubmit={handleSubmit(login)}
            className="formulario">
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
              <Button
                  variant="danger"
                  type="submit"
                  className="w-100 text-uppercase fw-bold my-2"
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
