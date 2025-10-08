// src/components/Header.jsx
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Scroll suave al cambiar hash
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Navegación suave a secciones
  const handleNavToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Click en logo: ir a home y scroll al top
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Scroll after navigation
      setTimeout(() => {
        const hero = document.getElementById("hero");
        if (hero) hero.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="navbar sticky top-0 z-50 bg-base-100 bg-opacity-90 backdrop-blur-sm shadow px-4">
      {/* Logo / Home */}
      <div className="flex-1">
        <button
          onClick={handleLogoClick}
          className="btn btn-ghost text-xl font-bold"
        >
          MyServiceCo
        </button>
      </div>

      {/* Botón hamburguesa para móvil con dropdown */}
      <div className="flex-none md:hidden relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

{/* Dropdown móvil */}
{isMenuOpen && (
  <div
    ref={menuRef}
    className="
      absolute top-full right-0 mt-2 bg-base-100 rounded-lg shadow-lg
      w-56 p-4 flex flex-col gap-4 z-50
      max-w-screen-sm
    "
    style={{ minWidth: "160px" }}
  >
    <button
      onClick={() => handleNavToSection("services")}
      className="text-left w-full btn btn-ghost"
    >
      Servicios
    </button>
    <button
      onClick={() => handleNavToSection("pricing")}
      className="text-left w-full btn btn-ghost"
    >
      Precios
    </button>
    <button
      onClick={() => handleNavToSection("contact")}
      className="text-left w-full btn btn-ghost"
    >
      Contacto
    </button>
    <button
      onClick={() => {
        toggleTheme();
        setIsMenuOpen(false);
      }}
      className="btn w-full mt-2" // removed btn-outline here
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  </div>
)}

      </div>

      {/* Menú de escritorio */}

<div className="hidden md:flex flex-none items-center gap-4">
  <ul className="menu menu-horizontal px-1">
    <li>
      <button onClick={() => handleNavToSection("services")}>Servicios</button>
    </li>
    <li>
      <button onClick={() => handleNavToSection("pricing")}>Precios</button>
    </li>
    <li>
      <button onClick={() => handleNavToSection("contact")}>Contacto</button>
    </li>
  </ul>
  <button className="btn btn-ghost btn-sm" onClick={toggleTheme}>
    {theme === "light" ? "🌙" : "☀️"}
  </button>
</div>

    </header>
  );
}
