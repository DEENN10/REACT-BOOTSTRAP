import { Container, Row, Col, Card } from 'react-bootstrap';

function Normas() {
  // Definimos un array con las normas y sus descripciones
  const normas = [
    {
      titulo: "OIML R 117-1",
      descripcion: "Sistemas dinamicos de medicion para liquidos diferentes al agua. Aplicado a Sistemas de medicon de gas L.P."
    },
    {
      titulo: "NOM-007-SESH-2010",
      descripcion: "Vehiculos para el transporte y distribucion de gas L.P. Condiciones de seguridad, operacion y mantenimiento."
    },
    {
      titulo: "NOM-005-SESH-2010",
      descripcion: "Equipos de carburacion de gas L.P. en motores de combustion interna. Instalacion y mantenimiento."
    }
  ];

  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Normas</h2>
      <Row className="g-4">
        {normas.map((norma, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">{norma.titulo}</Card.Title>
                <Card.Text>
                  {norma.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Normas;
