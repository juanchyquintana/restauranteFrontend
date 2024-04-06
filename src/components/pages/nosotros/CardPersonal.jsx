import { Button, Card } from "react-bootstrap"
// import './cardProdCocina.css'

const CardPersonal = () => {
  return (
    <Card id="card-container" >
      <Card.Img variant="top" src="https://img.freepik.com/vector-premium/chef-mujer-trabajadora-avatar_18591-58459.jpg" className="card-img"/>
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

export default CardPersonal