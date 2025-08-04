import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaClipboardCheck, FaTools, FaFileAlt, FaGasPump } from 'react-icons/fa';

function Servicios() {
  const servicios = [
    {
      icon: <FaClipboardCheck size={40} className="text-primary mb-3" />,
      title: "Inspección Técnica",
      description: "Evaluación exhaustiva de bombas de gas LP según normas oficiales."
    },
    {
      icon: <FaTools size={40} className="text-primary mb-3" />,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para garantizar óptimo funcionamiento."
    },
    {
      icon: <FaFileAlt size={40} className="text-primary mb-3" />,
      title: "Certificación NOM",
      description: "Certificaciones conforme a la NOM-005-SCFI-2011 y otras normativas."
    },
    {
      icon: <FaGasPump size={40} className="text-primary mb-3" />,
      title: "Reparación Especializada",
      description: "Servicio técnico especializado en bombas dispensadoras."
    }
  ];

  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Nuestros Servicios</h2>
      <Row className="g-4">
        {servicios.map((servicio, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <Card.Body>
                {servicio.icon}
                <Card.Title className="fs-4 fw-bold">{servicio.title}</Card.Title>
                <Card.Text>{servicio.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Servicios;
