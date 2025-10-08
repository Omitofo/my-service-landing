  // src/pages/DesarrolloWeb.jsx
export default function DesarrolloWeb() {
  return (
    <section className="min-h-screen py-16 px-6 bg-base-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Desarrollo Web</h1>
          <p className="text-base-content mt-2 opacity-70">
            Soluciones digitales para empresas de logística y comercio de frutas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">FruitSports Co. 🍇⚽</h2>
              <p>
                Ayudamos a esta empresa a digitalizar sus pedidos de banano premium
                para exportación, conectando con forwarders en tiempo real.
              </p>
              <div className="badge badge-success badge-outline mt-2">React + Node</div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-primary">Ver detalles</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">AgroLogistics Hub 🚛</h2>
              <p>
                Plataforma desarrollada para recibir cotizaciones automáticas de
                transporte desde varios operadores logísticos en Centroamérica.
              </p>
              <div className="badge badge-info badge-outline mt-2">Next.js + Supabase</div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-primary">Ver detalles</button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-16">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">www.fruitsports.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <div className="text-center max-w-xl">
                <h3 className="text-2xl font-bold mb-2">Interfaz adaptable</h3>
                <p>
                  Panel administrativo con métricas de pedidos, integración con WhatsApp Business y tracking por GPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

