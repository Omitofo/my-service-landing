export default function TrabajaConNosotros() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Trabajá con Nosotros</h1>
        <p className="mb-10">
          Estamos en constante búsqueda de talentos apasionados por la tecnología. Unite a nuestro equipo y creá impacto.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">👨‍💻 Desarrollador/a Web</h2>
              <p>Buscamos personas con experiencia en React, Node.js y buenas prácticas de desarrollo.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Postular</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">🎨 UX/UI Designer</h2>
              <p>Si te apasiona el diseño centrado en el usuario, ¡queremos conocerte!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Postular</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
