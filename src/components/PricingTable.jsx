import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Básico",
    originalPrice: 599,
    discountPrice: 199,
    features: [
      "Sitio web completo de hasta 5 páginas",
      "Soporte por correo en horario laboral",
      "Actualizaciones mensuales",
    ],
    highlight: false,
  },
  {
    name: "Profesional",
    originalPrice: 1499,
    discountPrice: 999,
    features: [
      "Sitio web completo de hasta 15 páginas",
      "Soporte telefónico y correo 24/7",
      "Optimización SEO básica",
      "Backups semanales automáticos",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    originalPrice: 2999,
    discountPrice: 1999,
    features: [
      "Sitio web completo de hasta 50 páginas",
      "Soporte dedicado 24/7 con gestor personalizado",
      "Optimización SEO avanzada",
      "Integración con CRM y sistemas externos",
      "Backups diarios y restauración rápida",
      "Análisis de rendimiento y reportes mensuales",
    ],
    highlight: false,
  },
];

function getDiscountPercent(original, discount) {
  return Math.round(((original - discount) / original) * 100);
}

export default function PricingTable() {
  const navigate = useNavigate();

  const handleChoose = (name, price) => {
    navigate("/pago", {
      state: {
        planName: name,
        amount: price,
      },
    });
  };

  return (
    <section className="py-12 bg-base-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Planes y Precios</h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map(({ name, originalPrice, discountPrice, features, highlight }, i) => {
          const discountPercent = getDiscountPercent(originalPrice, discountPrice);

          return (
            <div
              key={i}
              className={`card shadow-lg bg-base-100 flex flex-col ${
                highlight ? "border-4 border-primary" : ""
              }`}
            >
              <div className="card-body flex flex-col items-center text-center flex-grow">
                <h2 className="card-title">{name}</h2>

                <div className="flex items-center gap-4 mb-4 justify-center">
                  <span className="text-lg line-through text-neutral">
                    ${originalPrice}
                  </span>
                  <span className="text-4xl font-extrabold">${discountPrice}</span>
                  <span className="badge badge-primary">{discountPercent}% OFF</span>
                </div>

                <ul className="list-disc list-inside text-left space-y-2 flex-grow">
                  {features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                <div className="card-actions mt-auto w-full justify-center">
                  <button
                    className={`btn ${highlight ? "btn-primary" : "btn-outline"}`}
                    onClick={() => handleChoose(name, discountPrice)}
                  >
                    Elegir
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
