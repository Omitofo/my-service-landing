import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center justify-items-center">
        {/* Columna 1 */}
        <div className="flex flex-col items-center">
          <h6 className="font-bold mb-4">Servicios</h6>
          <ul className="space-y-2">
            <li><Link to="/desarrollo-web" className="hover:underline">Web</Link></li>
            <li><Link to="/consultoria" className="hover:underline">Consultoría</Link></li>
            <li><Link to="/soporte-tecnico" className="hover:underline">Soporte</Link></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h6 className="font-bold mb-4">Compañía</h6>
          <ul className="space-y-2">
            <li><Link to="/acerca" className="hover:underline">Acerca</Link></li>
            <li><Link to="/trabaja-con-nosotros" className="hover:underline">Trabaja con nosotros</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h6 className="font-bold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><Link to="/terminos" className="hover:underline">Términos</Link></li>
            <li><Link to="/privacidad" className="hover:underline">Privacidad</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
