import { Card, Carousel } from "react-bootstrap";
import './reviews.css'

const Reviews = () => {
  const reviews = [
    {
      name: "Juan",
      photo: "../../src/assets/resenas/foto1.jpg",
      comment: "La comida es deliciosa y el servicio es excelente. Definitivamente volveré.",
      rating: 5,
    },
    {
      name: "Laura",
      photo: "../../src/assets/resenas/foto2.jpeg",
      comment: "La comida es deliciosa y el servicio es excelente. Definitivamente volveré.",
      rating: 0,
    },
    {
      name: "Carlos",
      photo: "../../src/assets/resenas/foto3.jpg",
      comment: "El ambiente es muy acogedor y la comida tiene un sabor auténtico. ¡Recomendado!",
      rating: 0,
    },
    {
      name: "Ana",
      photo: "../../src/assets/resenas/foto4.jpeg",
      comment: "Me encanta este restaurante chino. Siempre ofrecen platos deliciosos a precios razonables.",
      rating: 4,
    },
    {
      name: "Pablo",
      photo: "../../src/assets/resenas/foto5.jpg",
      comment: "Excelente comida china. El pollo agridulce es mi favorito.",
      rating: 5,
    },
    {
      name: "Lucía",
      photo: "../../src/assets/resenas/foto6.jpg",
      comment: "El personal es amable y atento. Siempre disfruto de mi visita aquí.",
      rating: 0,
    },
    {
      name: "Miguel",
      photo: "../../src/assets/resenas/foto7.jpeg",
      comment: "Buena variedad de platos chinos auténticos. ¡Muy recomendable para los amantes de la comida china!",
      rating: 5,
    },
    {
      name: "Sofía",
      photo: "../../src/assets/resenas/foto8.jpg",
      comment: "El restaurante tiene un ambiente encantador y la comida es simplemente deliciosa.",
      rating: 0,
    },
    {
      name: "Diego",
      photo: "../../src/assets/resenas/foto9.jpg",
      comment: "Siempre tengo una experiencia fantástica aquí. La comida es fresca y deliciosa.",
      rating: 5,
    },
    {
      name: "Elena",
      photo: "../../src/assets/resenas/foto10.jpg",
      comment: "He estado viniendo a este restaurante durante años y nunca me ha decepcionado. ¡Altamente recomendado!",
      rating: 4,
    },
    {
      name: "Martín",
      photo: "../../src/assets/resenas/foto11.jpeg",
      comment: "El restaurante ofrece una excelente relación calidad-precio y la comida es siempre excepcional.",
      rating: 5,
    },
  ];

  const mostrarEstrellas = (estrellas) => {
    if(estrellas === 0) {
      return <span className="fw-bold">No hay rating</span>;
    }

    const estrella = [];
    for (let i = 0; i < estrellas; i++) {
      estrella.push(<span key={i} className="bi bi-star-fill text-warning"></span>);
    }
    return estrella;
  };

  return (
    <>
      <h2 className="text-center mb-5">
        Reseñas de Clientes
      </h2>
      <Carousel
        className="carousel-custom"
        interval={5000}
      >
        {reviews.map((review, index) => (
          <Carousel.Item key={index} className="carousel-item-custom">
              <Card className="shadow card-custom">
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <div>
                    <Card.Img
                      src={review.photo}
                      alt={`Imagen Artista ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>

                  <div className="my-3">
                    <h3 className="fw-bold">- {review.name} -</h3>
                    <div>{mostrarEstrellas(review.rating)}</div>
                    <p className="lead">{review.comment}</p>
                  </div>
                </Card.Body>
              </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Reviews;
