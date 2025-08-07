// Privacidad.jsx
export default function Privacidad() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Política de Privacidad</h1>
        <div className="divider mb-10"></div>

        <div className="mb-10 text-center">
          <p className="text-lg opacity-80">
            Tu privacidad es importante para nosotros. Esta política explica qué datos recopilamos, cómo los usamos y tus derechos como usuario.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Sección 1 */}
          <div className="collapse collapse-arrow bg-base-100 shadow-md">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title font-medium text-lg">
              <span className="badge badge-info mr-2">1</span> Información que Recopilamos
            </div>
            <div className="collapse-content">
              <ul className="list-disc list-inside ml-4">
                <li>Datos de navegación y uso</li>
                <li>Dirección IP y ubicación aproximada</li>
              </ul>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="collapse collapse-arrow bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title font-medium text-lg">
              <span className="badge badge-info mr-2">2</span> Cómo Usamos tus Datos
            </div>
            <div className="collapse-content">
              <p>
                Utilizamos tus datos para mejorar tu experiencia, ofrecer soporte, enviar comunicaciones relevantes y asegurar el correcto funcionamiento del sitio.
              </p>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="collapse collapse-arrow bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title font-medium text-lg">
              <span className="badge badge-info mr-2">3</span> Tus Derechos
            </div>
            <div className="collapse-content">
              <ul className="list-disc list-inside ml-4">
                <li>Acceder, corregir o eliminar tus datos</li>
                <li>Oponerte al tratamiento de datos</li>
                <li>Solicitar portabilidad</li>
              </ul>
            </div>
          </div>

          {/* Sección 4 */}
          <div className="collapse collapse-arrow bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title font-medium text-lg">
              <span className="badge badge-info mr-2">4</span> Seguridad
            </div>
            <div className="collapse-content">
              <p>
                Implementamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados y usos indebidos.
              </p>
            </div>
          </div>

          {/* Sección 5 */}
          <div className="collapse collapse-arrow bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title font-medium text-lg">
              <span className="badge badge-info mr-2">5</span> Terceros y Cookies
            </div>
            <div className="collapse-content">
              <p>
                Podemos compartir información con proveedores confiables y usamos cookies para analizar el tráfico y personalizar el contenido.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
