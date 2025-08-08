export default function Hero() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Soluciones a tu medida</h1>
          <p className="py-6">
            Ofrecemos servicios profesionales para hacer crecer tu negocio. Desde desarrollo web hasta consultoría.
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Solicita una cotización
          </button>
        </div>
      </div>
    </section>
  );
}
