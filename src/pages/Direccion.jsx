import { Container, Row, Col } from 'react-bootstrap';

function Direccion() {
  return (
    <Container className="py-5 my-4">
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="fw-bold display-5 mb-4">Nuestra Ubicación</h2>
          <p className="lead">
            <strong>Dirección:</strong> Av. 414-A Numero 81, Colonia San Juan de Aragon VI Seccion, codigo postal 07918, Alcaldia Gustavo A. Madero, Ciudad de México.
          </p>
          <p className="lead">
            <strong>Horario:</strong> Lunes a Viernes 9:00 - 17:00 hrs
          </p>
          <p className="lead">
            <strong>Cobertura:</strong> Nacional (CDMX, Estado de Mexico, Más...)
          </p>
        </Col>
        <Col lg={6}>
          <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789012!2d-99.0966302!3d19.4667947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1f1f1f1f1f1%3A0x1234567890abcdef!2sAv.%20414-A%20Numero%2081%2C%20Colonia%20San%20Juan%20de%20Aragon%20VI%20Seccion%2C%2007918%20Gustavo%20A.%20Madero%2C%20CDMX!5e0!3m2!1ses!2smx!4v1631234567890" 
              style={{border:0}}
              allowFullScreen="" 
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Direccion;

