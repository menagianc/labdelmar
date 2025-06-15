import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Inicio from "./web/inicio";
import SobreNosotros from "./web/sobre-nosotros";
import Contacto from "./web/contacto";
import Sucursales from "./web/sucursales";
import Domicilio from "./web/domicilio";
import { Navbar1 } from "./components/Navbar1";
import { Footer3 } from "./components/Footer3";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar1 />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/inicio" />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/sucursales" element={<Sucursales />} />
              <Route path="/domicilio" element={<Domicilio />} />
            </Routes>
          </main>
          <Footer3 />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}