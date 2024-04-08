import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NuevoProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const productoValidado = (e) => {
    e.preventDefault()

    console.log('Validado')
  }

  return (
    <>
      <Container>
        <h2 className="display-4 mt-5">{titulo}</h2>
        <hr />
        <section className=" bg-white shadow rounded-5  p-3 my-4">
          <Form onSubmit={handleSubmit(productoValidado)}>
            <Form.Group className="mb-3">
              <Form.Label>Producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Café"
                {...register("nombreProducto", {
                  required: "El Nombre del Producto es Obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El nombre del producto debe tener como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El nombre del producto debe tener como máximo 20 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: $50"
                {...register("precio", {
                  required: "El Precio es Obligatorio",
                  min: {
                    value: 50,
                    message:
                      "El precio del producto debe tener un precio minimo de $50 caracteres",
                  },
                  max: {
                    value: 10000,
                    message:
                      "El precio del producto debe tener un precio máximo de $10000 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label>Imagen URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
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

            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Selecciona una Categoría",
                })}
              >
                <option value="" hidden>
                  -- Seleccione una Opción --
                </option>
                <option value="infusiones">Infusiones</option>
                <option value="batidos">Batidos</option>
                <option value="dulce">Dulce</option>
                <option value="salado">Salado</option>
              </Form.Select>
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label>Descripción Breve</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: Una taza de café suave y aromático"
                className="w-100"
                {...register("descripcionBreve", {
                  required: "La Descripcion Breve es Obligatoria",
                  minLength: {
                    value: 5,
                    message:
                      "La Descripcion Breve del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "La Descripcion Breve del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label>Descripción Amplia</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: El Café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático..."
                className="w-100"
                {...register("descripcionAmplia", {
                  required: "La Descripcion Amplia es Obligatoria",
                  minLength: {
                    value: 50,
                    message:
                      "La Descripcion Amplia del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "La Descripcion Amplia del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descripcionAmplia?.message}
            </Form.Text>

            <Button
              variant="success"
              type="submit"
              className="w-100 my-2 fw-bold"
            >
              Guardar
            </Button>
          </Form>
        </section>
      </Container>
    </>
  );
};

export default NuevoProducto;
