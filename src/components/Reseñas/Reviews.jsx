import { Card, Carousel } from "react-bootstrap";
import foto1 from "./resenas/foto1.jpg";
import foto2 from "./resenas/foto2.jpeg";
import foto3 from "./resenas/foto3.jpg";
import foto4 from "./resenas/foto4.jpeg";
import foto5 from "./resenas/foto5.jpg";
import foto6 from "./resenas/foto6.jpg";
import foto7 from "./resenas/foto7.jpeg";
import foto8 from "./resenas/foto8.jpg";
import foto9 from "./resenas/foto9.jpg";
import foto10 from "./resenas/foto10.jpg";
import foto11 from "./resenas/foto11.jpeg";
import "./reviews.css";

const Reviews = () => {
  const reviews = [
    {
      name: "Juan",
      photo: foto1,
      comment:
        "La comida es deliciosa y el servicio es excelente. Definitivamente volveré.",
      rating: 5,
    },
    {
      name: "Laura",
      photo: foto2,
      comment:
        "La comida es deliciosa y el servicio es excelente. Definitivamente volveré.",
      rating: 0,
    },
    {
      name: "Carlos",
      photo: foto3,
      comment:
        "El ambiente es muy acogedor y la comida tiene un sabor auténtico. ¡Recomendado!",
      rating: 0,
    },
    {
      name: "Ana",
      photo: foto4,
      comment:
        "Me encanta este restaurante chino. Siempre ofrecen platos deliciosos a precios razonables.",
      rating: 4,
    },
    {
      name: "Pablo",
      photo: foto5,
      comment: "Excelente comida china. El pollo agridulce es mi favorito.",
      rating: 5,
    },
    {
      name: "Lucía",
      photo: foto6,
      comment:
        "El personal es amable y atento. Siempre disfruto de mi visita aquí.",
      rating: 0,
    },
    {
      name: "Miguel",
      photo: foto7,
      comment:
        "Buena variedad de platos chinos auténticos. ¡Muy recomendable para los amantes de la comida china!",
      rating: 5,
    },
    {
      name: "Sofía",
      photo: foto8,
      comment:
        "El restaurante tiene un ambiente encantador y la comida es simplemente deliciosa.",
      rating: 0,
    },
    {
      name: "Diego",
      photo: foto9,
      comment:
        "Siempre tengo una experiencia fantástica aquí. La comida es fresca y deliciosa.",
      rating: 5,
    },
    {
      name: "Elena",
      photo: foto10,
      comment:
        "He estado viniendo a este restaurante durante años y nunca me ha decepcionado. ¡Altamente recomendado!",
      rating: 4,
    },
    {
      name: "Martín",
      photo: foto11,
      comment:
        "El restaurante ofrece una excelente relación calidad-precio y la comida es siempre excepcional.",
      rating: 5,
    },
  ];

  const mostrarEstrellas = (estrellas) => {
    if (estrellas === 0) {
      return <span className="fw-bold">No hay rating</span>;
    }

    const estrella = [];
    for (let i = 0; i < estrellas; i++) {
      estrella.push(
        <span key={i} className="bi bi-star-fill text-warning"></span>
      );
    }
    return estrella;
  };

  return (
    <section className="marginResenas">
      <h2 className="text-center mb-5">Reseñas de Clientes</h2>
      <Carousel className="carousel-custom" interval={5000}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index} className="carousel-item-custom">
            <div className="d-flex justify-content-center">
              <Card className="shadow card-custom ">
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <div>
                    <Card.Img
                      src={review.photo}
                      alt={`Imagen Artista ${index + 1}`}
                      className="tamañoImagen"
                    />
                  </div>

                  <div className="my-3 px-3">
                    <h3 className="fw-bold">- {review.name} -</h3>
                    <div>{mostrarEstrellas(review.rating)}</div>
                    <p className="lead">{review.comment}</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Reviews;
