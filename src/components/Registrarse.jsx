import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Registrarse = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Container className="bg-white shadow p-3 rounded my-5">
      <Form >

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su Nombre Completo" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ej: pepito12@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Ingrese un Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100 text-uppercase fw-bold'>
          Crear Cuenta
        </Button>
      </Form>
    </Container>
  )
}

export default Registrarse
