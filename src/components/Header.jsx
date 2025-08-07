export default function Header({ theme, toggleTheme }) {
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-bold">
          MyServiceCo
        </a>
      </div>
      <div className="flex-none flex items-center gap-4">
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
    </header>
  );
}
