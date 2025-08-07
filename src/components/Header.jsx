import { useState } from "react";

export default function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-bold">
          MyServiceCo
        </a>
      </div>

      <div className="flex-none lg:hidden">
        {/* Botón hamburguesa para móviles */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú normal en escritorio */}
      <div className="hidden lg:flex flex-none items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#pricing">Precios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <button
          className="btn btn-sm btn-outline"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-base-100 p-4 rounded-lg shadow-lg lg:hidden z-50">
          <ul className="menu menu-vertical">
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Precios</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </li>
            <li>
              <button
                className="btn btn-sm btn-outline w-full mt-2"
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                aria-label="Toggle theme"
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
