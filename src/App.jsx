import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Normas from './pages/Normas'; // Asegúrate de que este componente esté importado correctamente
import Direccion from './pages/Direccion';
import Contacto from './pages/Contacto';
import Acreditaciones from './pages/Acreditaciones'; // Asegúrate de que este componente esté importado correctamente

function App() {
  return (
    <Router>
      <Header />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normas" element={<Normas />} /> {/* Asegúrate de que esta ruta sea correcta */}
          <Route path="/direccion" element={<Direccion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acreditaciones" element={<Acreditaciones />} /> {/* Asegúrate de que esta ruta sea correcta */}
        </Routes>
      </main>
      
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2025 BASCZAGUI - Todos los derechos reservados</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
