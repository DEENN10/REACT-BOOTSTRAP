import { Container, ListGroup, Badge } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';

function Normas() {
  const normas = [
    {
      codigo: "NOM-005-SCFI-2011",
      descripcion: "Norma que regula el almacenamiento y manejo de gas LP",
      pdf: "#"
    },
    {
      codigo: "NOM-003-SECRE-2018",
      descripcion: "Especificaciones para instalaciones de aprovechamiento de gas LP",
      pdf: "#"
    },
    {
      codigo: "NOM-016-SCFI-2018",
      descripcion: "Especificaciones para equipos de medición de gas LP",
      pdf: "#"
    },
    {
      codigo: "NMX-R-069-SCFI-2017",
      descripcion: "Requisitos mínimos para estaciones de servicio de gas LP",
      pdf: "#"
    }
  ];

  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Normas de Trabajo</h2>
      
      <ListGroup variant="flush" className="shadow-sm">
        {normas.map((norma, index) => (
          <ListGroup.Item key={index} className="py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="h5 fw-bold mb-1">{norma.codigo}</h3>
                <p className="mb-0">{norma.descripcion}</p>
              </div>
              <a 
                href={norma.pdf} 
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

export default Normas;
