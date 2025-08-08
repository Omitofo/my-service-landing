export default function Consultoria() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-6 text-center">Consultoría</h1>

      <div className="mb-10 text-center">
        <p className="text-lg opacity-80">
          Asesoramiento técnico especializado para optimizar tus procesos, mejorar tu infraestructura y apoyar decisiones estratégicas.
        </p>
      </div>

      <div className="divider my-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body flex flex-col items-center justify-center text-center">
            <h2 className="card-title">🔍 Auditoría IT</h2>
            <p>Evaluamos tus sistemas actuales para detectar mejoras y riesgos.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body flex flex-col items-center justify-center text-center">
            <h2 className="card-title">📈 Estrategia Tecnológica</h2>
            <p>Definimos una hoja de ruta alineada con tus objetivos de negocio.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body flex flex-col items-center justify-center text-center">
            <h2 className="card-title">🧠 Capacitación</h2>
            <p>Formamos a tu equipo para usar tecnologías de forma eficiente.</p>
          </div>
        </div>
      </div>

      <div className="divider my-8" />

      <div className="stats shadow w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-6">
        <div className="stat flex flex-col items-center justify-center text-center flex-1">
          <div className="stat-title">Clientes asesorados</div>
          <div className="stat-value text-primary">80+</div>
        </div>
        <div className="stat flex flex-col items-center justify-center text-center flex-1">
          <div className="stat-title">Casos de éxito</div>
          <div className="stat-value">94%</div>
        </div>
        <div className="stat flex flex-col items-center justify-center text-center flex-1">
          <div className="stat-title">Industrias atendidas</div>
          <div className="stat-value text-secondary">12+</div>
        </div>
      </div>
    </section>
  );
}
