// Terminos.jsx
export default function Terminos() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Términos y Condiciones</h1>
        <div className="divider mb-10"></div>

        <div className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title font-medium text-lg">1. Aceptación de Términos</div>
          <div className="collapse-content">
            <p>
              Al acceder a este sitio web, aceptas cumplir con estos términos y condiciones,
              todas las leyes y regulaciones aplicables.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-lg">2. Uso Permitido</div>
          <div className="collapse-content">
            <p>
              Puedes utilizar este sitio solo para fines legales. No puedes utilizarlo de manera
              que dañe, desactive o interfiera con su funcionamiento.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-lg">3. Propiedad Intelectual</div>
          <div className="collapse-content">
            <p>
              Todos los contenidos, marcas y logotipos en este sitio son propiedad de nuestra empresa o de terceros licenciantes.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-lg">4. Limitación de Responsabilidad</div>
          <div className="collapse-content">
            <p>
              No nos hacemos responsables por daños derivados del uso o la imposibilidad de uso del contenido de este sitio.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mb-4 shadow-md">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-lg">5. Cambios en los Términos</div>
          <div className="collapse-content">
            <p>
              Podemos revisar estos términos en cualquier momento sin previo aviso. El uso continuado del sitio implicará aceptación de los cambios.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm opacity-70">Última actualización: 7 de agosto de 2025</p>
        </div>
      </div>
    </section>
  );
}
