import { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <Container className="py-5 my-4">
      <h2 className="text-center mb-5 fw-bold display-5">Contáctanos</h2>
      
      <Row>
        <Col lg={6} className="mb-5 mb-lg-0">
          <Form onSubmit={handleSubmit} className="shadow-sm p-4 rounded">
            {submitted && <Alert variant="success">¡Gracias por tu mensaje!</Alert>}
            
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100">
              Enviar mensaje
            </Button>
          </Form>
        </Col>
        
        <Col lg={6}>
          <div className="h-100 p-4 border rounded bg-light">
            <h3 className="h4 fw-bold mb-4">Información de contacto</h3>
            
            <div className="mb-4">
              <p className="d-flex align-items-center gap-2">
                <FaPhone className="text-primary" />
                <span>81 1234 5678</span>
              </p>
              <p className="d-flex align-items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>contacto@basczagui.com</span>
              </p>
              <p className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>Av. Tecnológico #123, Monterrey</span>
              </p>
            </div>
            
            <div>
              <h4 className="h5 fw-bold mb-3">Síguenos</h4>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-dark">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
