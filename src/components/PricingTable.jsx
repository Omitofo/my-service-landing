export default function PricingTable() {
  return (
    <section className="py-12 bg-base-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Planes y Precios</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Básico", "Profesional", "Empresarial"].map((plan, i) => (
          <div key={i} className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{plan}</h2>
              <p className="text-2xl font-bold">$ {i * 50 + 49}</p>
              <ul className="list-disc text-left mt-4">
                <li>Servicio 1</li>
                <li>Servicio 2</li>
                <li>Soporte incluido</li>
              </ul>
              <div className="card-actions mt-6">
                <button className="btn btn-primary">Elegir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
