export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Servicios</h6> 
        <a className="link link-hover">Web</a>
        <a className="link link-hover">Consultoría</a>
        <a className="link link-hover">Soporte</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Compañía</h6> 
        <a className="link link-hover">Acerca</a>
        <a className="link link-hover">Trabaja con nosotros</a>
        <a className="link link-hover">Blog</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Términos</a>
        <a className="link link-hover">Privacidad</a>
      </nav>
    </footer>
  );
}
