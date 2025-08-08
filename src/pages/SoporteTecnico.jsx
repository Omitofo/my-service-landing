export default function SoporteTecnico() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-6 text-center">Soporte Técnico</h1>

      <div className="mb-10 text-center">
        <p className="text-lg opacity-80">
          Resolución rápida y eficiente de problemas técnicos para minimizar tiempos de inactividad y mantener tu operación fluida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🛠️ Soporte integral</h2>
            <p>Resolución remota y presencial de incidentes técnicos.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🧰 Mantenimiento</h2>
            <p>Prevención de fallos con rutinas de mantenimiento programado.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">☁️ Backups & Seguridad</h2>
            <p>Resguardamos tu información y actualizamos sistemas críticos.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="stats shadow w-full max-w-4xl px-4 flex flex-col md:flex-row gap-6">
          <div className="stat flex-1 text-center">
            <div className="stat-title">Tickets resueltos</div>
            <div className="stat-value text-primary">300+</div>
          </div>
          <div className="stat flex-1 text-center">
            <div className="stat-title">Tiempo promedio de respuesta</div>
            <div className="stat-value">2h</div>
          </div>
          <div className="stat flex-1 text-center">
            <div className="stat-title">Satisfacción del cliente</div>
            <div className="stat-value text-secondary">97%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
