export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MyServiceCo</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Servicios</a></li>
          <li><a>Precios</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
    </header>
  );
}
