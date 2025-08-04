import { Container, ListGroup, Badge } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';

function Acreditaciones() {
  const acreditaciones = [
    {
      codigo: "Acreditación 1",
      descripcion: "Descripción de la acreditación 1",
      pdf: "#"
    },
    {
      codigo: "Acreditación 2",
      descripcion: "Descripción de la acreditación 2",
      pdf: "#"
    },
    {
      codigo: "Acreditación 3",
      descripcion: "Descripción de la acreditación 3",
      pdf: "#"
    },
    {
      codigo: "Acreditación 4",
      descripcion: "Descripción de la acreditación 4",
      pdf: "#"
    }
  ];

  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Acreditaciones</h2>
      
      <ListGroup variant="flush" className="shadow-sm">
        {acreditaciones.map((acreditacion, index) => (
          <ListGroup.Item key={index} className="py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="h5 fw-bold mb-1">{acreditacion.codigo}</h3>
                <p className="mb-0">{acreditacion.descripcion}</p>
              </div>
              <a 
                href={acreditacion.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <FaFilePdf className="me-2" />
                Ver PDF
              </a>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Acreditaciones;
