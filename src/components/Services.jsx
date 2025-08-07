import { Link } from "react-router-dom";

const services = [
  { title: "Desarrollo Web", desc: "Páginas modernas y rápidas.", icon: "💻", badge: "Nuevo", path: "/desarrollo-web" },
  { title: "Consultoría", desc: "Asesoramiento técnico especializado.", icon: "🧠", badge: null, path: "/consultoria" },
  { title: "Soporte Técnico", desc: "Resolución rápida y eficiente de problemas.", icon: "🛠️", badge: "Top", path: "/soporte-tecnico" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-base-100">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
        <p className="text-base-content opacity-70 mt-2">Soluciones pensadas para tu negocio</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((s, idx) => (
          <div key={idx} className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="card-title">{s.title}</h3>
                {s.badge && <div className="badge badge-accent">{s.badge}</div>}
              </div>
              <p>{s.desc}</p>
              <div className="card-actions justify-end">
                <Link to={s.path} className="btn btn-outline btn-primary btn-sm">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider visual sutil y neutral */}
      <div className="my-12 max-w-xs mx-auto">
         <div className="divider before:bg-white after:bg-white before:h-[0.5px] after:h-[0.5px]" />
      </div>

      {/* Stats */}
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="stats stats-vertical sm:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Proyectos entregados</div>
              <div className="stat-value text-primary">+200</div>
            </div>
            <div className="stat">
              <div className="stat-title">Clientes felices</div>
              <div className="stat-value">+200</div>
            </div>
            <div className="stat">
              <div className="stat-title">Satisfacción</div>
              <div className="stat-value text-secondary">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
