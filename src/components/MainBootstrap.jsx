import { Container, Row, Col, Image } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} lg={4}>
          <Image
            src="/imagenes/imagen1.jpg"
            alt="Imagen ilustrativa"
            fluid
            rounded
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <h2>Tienda America ... todo lo que necesitas y mas ....</h2>
          <p>
            Una moda que se adapta a vos....
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
