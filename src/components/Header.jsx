import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  // Manejador de navegación hacia secciones
  const handleNavToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Cerrar menú si clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar bg-base-100 shadow px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          MyServiceCo
        </Link>
      </div>

      {/* Botón hamburguesa para móviles */}
      <div className="flex-none lg:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-6 h-6 stroke-current"
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
      </div>

      {/* Menú de escritorio */}
      <div className="hidden lg:flex flex-none items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => handleNavToSection("services")}>
              Servicios
            </button>
          </li>
          <li>
            <button onClick={() => handleNavToSection("pricing")}>Precios</button>
          </li>
          <li>
            <button onClick={() => handleNavToSection("contact")}>Contacto</button>
          </li>
        </ul>
        <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 left-0 mx-auto bg-base-100 p-6 rounded-lg shadow-lg lg:hidden z-50 max-w-md"
          style={{ width: "90vw" }}
        >
          <ul className="menu menu-vertical text-lg gap-4 justify-center">
            <li>
              <button onClick={() => handleNavToSection("services")}>
                Servicios
              </button>
            </li>
            <li>
              <button onClick={() => handleNavToSection("pricing")}>Precios</button>
            </li>
            <li>
              <button onClick={() => handleNavToSection("contact")}>Contacto</button>
            </li>
            <li>
              <button
                className="btn btn-sm btn-outline w-full mt-4"
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
