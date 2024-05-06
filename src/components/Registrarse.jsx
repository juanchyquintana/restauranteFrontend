import "../components/Login/login.css";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import backgroundImg from "./../assets/Login/backgroundImg.webp";
import formImg from "./../assets/Login/ComidaChinaLogin.jpg";
import { registrarUsuario } from "../helpers/usuario";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Registrarse = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const navegar = useNavigate()

  const crearUsuario = async (formRegistro) => {
    const { confirmPassword, ...datosUsuario } = formRegistro;
    datosUsuario.estado = "activo";
    datosUsuario.tipoUsuario = "usuario";
    try {
      const respuesta = await registrarUsuario(datosUsuario);
      const datos = await respuesta.json();
      if (respuesta.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: datos.mensaje,
          showConfirmButton: true,
        })
        reset()
        navegar("/")
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: datos.mensaje,
          showConfirmButton: true,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login-container mainPage d-flex flex-column justify-content-center">
        <div className="background-img-container bg-black">
          <img src={backgroundImg} className="img-blur-ingreso" />
        </div>

        <div className="form-e-Img-Container container-fluid bg-light p-3 p-lg-0 rounded-3 nav-espacio my-lg-5">
          <div className="row m-0">
            <div className="col-lg-6 d-none d-lg-flex rounded-start-3 p-0">
              <img src={formImg} className="form-img img-thumbnail" />
            </div>

            <div className="col-lg-6 py-3 d-flex flex-column  justify-content-center">
              <h2 className="text-center mb-3">¡Crear Cuenta!</h2>

              <Form onSubmit={handleSubmit(crearUsuario)}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                  <Form.Label className="text-uppercase fw-bold">
                    Nombre Completo
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su Nombre Completo"
                    {...register("nombre", {
                      required: "El Nombre es Obligatorio.",
                      minLength: {
                        value: 3,
                        message:
                          "El Nombre debe tener un minimo de 3 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "El Nombre debe tener un máximo de 3 caracteres",
                      },
                    })}
                  />
                </Form.Group>

                <Form.Text className="text-danger fw-bold">
                  {errors.nombre?.message}
                </Form.Text>

                <Form.Group className="my-3" controlId="formBasicEmail">
                  <Form.Label className="text-uppercase fw-bold">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: pepito12@gmail.com"
                    maxLength={250}
                    {...register("email", {
                      required: "El Email es Obligatorio.",
                      minLength: {
                        value: 3,
                        message: "El Email debe contener al menos 4 caracteres",
                      },
                      maxLength: {
                        value: 254,
                        message:
                          "El email debe contener como máximo 250 caracteres",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        message:
                          "Ingrese una dirección de correo electrónico válida",
                      },
                    })}
                  />
                </Form.Group>

                <Form.Text className="text-danger fw-bold">
                  {errors.email?.message}
                </Form.Text>

                <Form.Group className="my-3" controlId="formBasicPassword">
                  <Form.Label className="text-uppercase fw-bold">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese un Password"
                    maxLength={64}
                    {...register("password", {
                      required: "El Password es Obligatorio.",
                      minLength: {
                        value: 8,
                        message:
                          "El Password debe contener al menos 8 caracteres.",
                      },
                      maxLength: {
                        value: 64,
                        message:
                          "El password debe contener como máximo 64 caracteres",
                      },
                    })}
                  />
                </Form.Group>
                <Form.Text className="text-danger fw-bold">
                  {errors.password?.message}
                </Form.Text>

                <Form.Group
                  className="my-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label className="text-uppercase fw-bold">
                    confirmar Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese un Password"
                    maxLength={64}
                    {...register("confirmPassword", {
                      required: "El Password es Obligatorio.",
                      minLength: {
                        value: 8,
                        message:
                          "El Password debe contener al menos 8 caracteres.",
                      },
                      maxLength: {
                        value: 64,
                        message:
                          "El password debe contener como máximo 64 caracteres",
                      },
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                  />
                </Form.Group>

                <Form.Text className="text-danger fw-bold">
                  {errors.confirmPassword?.message}
                </Form.Text>

                <Button
                  variant="danger"
                  type="submit"
                  className="w-100 text-uppercase fw-bold my-2"
                >
                  Crear Cuenta
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registrarse;
