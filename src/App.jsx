import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingTable from "./components/PricingTable";
import Footer from "./components/Footer";

import DesarrolloWeb from "./pages/DesarrolloWeb";
import Consultoria from "./pages/Consultoria";
import SoporteTecnico from "./pages/SoporteTecnico";

// Nuevas páginas
import Acerca from "./pages/Acerca";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Blog from "./pages/Blog";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="services">
                  <Services />
                </section>
                <section id="pricing">
                  <PricingTable />
                </section>
                <section id="contact">
                  <div className="text-center py-24">
                    <h2 className="text-3xl font-bold">Contáctanos</h2>
                    <p className="mt-4 text-lg text-neutral">Próximamente...</p>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/soporte-tecnico" element={<SoporteTecnico />} />

          {/* Nuevas rutas */}
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
