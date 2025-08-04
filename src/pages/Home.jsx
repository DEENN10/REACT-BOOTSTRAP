import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <div 
      className="d-flex align-items-center" 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)',
        color: 'white'
      }}
    >
      <Container className="text-center py-5">
        <h1 className="display-3 fw-bold mb-3">BASCZAGUI</h1>
        <p className="lead fs-3 mb-5">Inspección profesional de bombas de gas LP</p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button as={Link} to="/normas" variant="primary" size="lg" className="px-4">
            Normas
          </Button>
          <Button as={Link} to="/direccion" variant="outline-light" size="lg" className="px-4">
            Dirección
          </Button>
          <Button as={Link} to="/contacto" variant="primary" size="lg" className="px-4">
            Contacto
          </Button>
          <Button as={Link} to="/acreditaciones" variant="outline-light" size="lg" className="px-4">
            Acreditaciones
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
