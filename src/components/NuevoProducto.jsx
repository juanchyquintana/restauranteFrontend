import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProducto } from "../helpers/producto";

const NuevoProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
    reset();

    crearProducto(producto)
  };

  return (
    <section className="my-4">
      <Container>
        <h2 className="display-4 mt-5 text-center text-lg-start ">{titulo}</h2>
        <hr />
        <section className=" bg-white shadow rounded-5  p-3 my-4">
          <Form onSubmit={handleSubmit(productoValidado)}>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Nombre del Plato</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Sopa Wan Tan, Rollitos de primavera, Zongzi, Jiaozi..."
                {...register("nombrePlato", {
                  required: "El Nombre del Plato es Obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El Nombre del Plato debe tener como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El Nombre del Plato debe tener como máximo 20 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.nombrePlato?.message}
            </Form.Text>

            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: $1500"
                {...register("precio", {
                  required: "El Precio es Obligatorio",
                  min: {
                    value: 50,
                    message:
                      "El Precio del producto debe tener un precio minimo de $50",
                  },
                  max: {
                    value: 10000,
                    message:
                      "El Precio del producto debe tener un precio máximo de $10000",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>

            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Imagen URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>

            <Row>
              <div className="col-md-6">
                <Form.Group className="my-3">
                  <Form.Label className="fw-bold">Categoría</Form.Label>
                  <Form.Select
                    {...register("categoria", {
                      required: "Selecciona una Categoría",
                    })}
                  >
                    <option value="" hidden>
                      -- Seleccione una Opción --
                    </option>
                    <option value="entradas">Entradas</option>
                    <option value="platos-principales">
                      Platos Principales
                    </option>
                    <option value="postres">Postres</option>
                    <option value="bebidas">Bebidas</option>
                  </Form.Select>
                </Form.Group>

                <Form.Text className="text-danger">
                  {errors.categoria?.message}
                </Form.Text>
              </div>

              <div className="col-md-6">
                <Form.Group className="my-3">
                  <Form.Label className="fw-bold">
                    Estado de Disponibilidad
                  </Form.Label>
                  <Form.Select
                    {...register("estado", {
                      required: "Selecciona una Categoría",
                    })}
                  >
                    <option value="" hidden>
                      -- Seleccione una Opción --
                    </option>
                    <option value="disponible">Disponible</option>
                    <option value="no-disponible">No Disponible</option>
                  </Form.Select>
                </Form.Group>

                <Form.Text className="text-danger">
                  {errors.estado?.message}
                </Form.Text>
              </div>
            </Row>

            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Detalle del Plato</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: El Mapo Tofu es un plato chino de tofu firme cocinado en una salsa picante y aromática con pasta de frijol fermentado, pasta de chile, ajo y cebolla verde. Es conocido por su sabor picante y numbing (麻辣), típico de la cocina de Sichuan..."
                className="w-100"
                {...register("detalle", {
                  required: "Los Detalle del Plato es Obligatorio",
                  minLength: {
                    value: 50,
                    message:
                      "El Detalle del Plato debe tener como minimo 50 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "El Detalle del Plato debe tener como máximo 300 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.detalle?.message}
            </Form.Text>

            <Button
              variant="danger"
              type="submit"
              className="w-100 my-3 fw-bold"
            >
              Guardar Plato
            </Button>
          </Form>
        </section>
      </Container>
    </section>
  );
};

export default NuevoProducto;
