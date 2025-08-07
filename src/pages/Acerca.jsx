export default function Acerca() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Acerca de Nosotros</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Equipo"
            className="rounded-xl shadow-md"
          />
          <div>
            <p className="mb-4">
              Somos un equipo apasionado por la tecnología y la innovación. Ayudamos a empresas a adaptarse al entorno digital
              actual con soluciones efectivas y escalables.
            </p>
            <p>
              Con más de 10 años de experiencia, nos especializamos en consultoría tecnológica, desarrollo web y soporte
              técnico personalizado.
            </p>
          </div>
        </div>

        {/* Nueva sección del equipo */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-10">Nuestro equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {/* Miembro 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Juan Pérez" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Juan Pérez</h3>
              <p className="text-sm opacity-70">CEO & Fundador</p>
            </div>

            {/* Miembro 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="María Gómez" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold">María Gómez</h3>
              <p className="text-sm opacity-70">CTO</p>
            </div>

            {/* Miembro 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Carlos Ruiz" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Carlos Ruiz</h3>
              <p className="text-sm opacity-70">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
