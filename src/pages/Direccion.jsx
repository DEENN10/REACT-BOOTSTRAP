import { Container, Row, Col } from 'react-bootstrap';

function Direccion() {
  return (
    <Container className="py-5 my-4">
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="fw-bold display-5 mb-4">Nuestra Ubicación</h2>
          <p className="lead">
            <strong>Dirección:</strong> Av. Tecnológico #123, Col. Industrial, Monterrey, N.L.
          </p>
          <p className="lead">
            <strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00 hrs
          </p>
          <p className="lead">
            <strong>Cobertura:</strong> Todo el noreste de México (Nuevo León, Tamaulipas, Coahuila)
          </p>
        </Col>
        <Col lg={6}>
          <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.926657111876!2d-100.3161272!3d25.6715803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfcf83fcdf8f%3A0xf69da0b0f5b1c0ab!2sTecnol%C3%B3gico%20de%20Monterrey!5e0!3m2!1ses-419!2smx!4v1718922334159!5m2!1ses-419!2smx" 
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

