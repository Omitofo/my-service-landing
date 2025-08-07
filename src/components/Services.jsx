const services = [
  { title: "Desarrollo Web", desc: "Páginas modernas y rápidas." },
  { title: "Consultoría", desc: "Asesoramiento técnico especializado." },
  { title: "Soporte Técnico", desc: "Resolución rápida y eficiente de problemas." },
];

export default function Services() {
  return (
    <section className="py-12 bg-base-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <div key={idx} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
