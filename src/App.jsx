import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Direccion from './pages/Direccion';
import Contacto from './pages/Contacto';
import Normas from './pages/Normas';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Inicializar AOS para animaciones
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <Header />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/direccion" element={<Direccion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/normas" element={<Normas />} />
        </Routes>
      </main>
      
      {/* Footer opcional */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2023 BASCZAGUI - Todos los derechos reservados</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
