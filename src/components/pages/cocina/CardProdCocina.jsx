import { Button, Card } from "react-bootstrap"
import './cardProdCocina.css'

const CardProductoCocina = () => {
  return (
    <Card className="card-container">
      <Card.Img variant="top" src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardProductoCocina