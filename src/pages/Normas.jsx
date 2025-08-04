import { Container, Row, Col, Card } from 'react-bootstrap';

function Normas() {
  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Normas</h2>
      <Row className="g-4">
        {['Norma 1', 'Norma 2', 'Norma 3'].map((norma, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">{norma}</Card.Title>
                <Card.Text>
                  Descripción breve de la norma correspondiente.
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
