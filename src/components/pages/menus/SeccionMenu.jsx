import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./seccionMenu.css";
import bannerComida from "./bannerImg/comidaChina.jpg";
import bannerBebida from "./bannerImg/bebidaChina.jpg";

const SeccionMenu = () => {
  return (
    <>
      <section>
        <img
          className="banner"
          src={bannerComida}
          alt="plato con comida china"
        />
        <h2 className="bannerTitulo">食品 Comidas</h2>
        <Container className="my-4  pb-4">
          <div className="row ">
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant=" top "
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cadenaser.com/resizer/xRCT4u61WV8B6FPDIZ9sVEsJP1M=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6YDRXOMYH5LOLD7S6G2YINMS74.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="d-flex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input type="number" className="agregar text-center ms-2" />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="bannerContenedor2">
        <img
          className="banner2 mt-5"
          src={bannerBebida}
          alt="vasos con bebida"
        />
        <h2 className="titulo">饮料 Bebidas</h2>
        </div>
        <Container className="my-4 ">
          <div className="row ">
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">ver mas</Button>
                    <input
                      type="number"
                      className="agregar text-center ms-2"
                      min={0}
                    />
                    <Button className="bg-success ms-2">
                      <i className="bi bi-plus-circle"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SeccionMenu;
