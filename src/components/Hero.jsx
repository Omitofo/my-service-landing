import { Player } from '@lottiefiles/react-lottie-player';
import heroAnimation from '../assets/hero-animation.json';

export default function Hero({ theme }) {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`hero min-h-screen flex flex-col xl:flex-row items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      {/* ✅ Reverse order on desktop */}
      <div className="flex flex-col xl:flex-row-reverse items-center justify-center w-full max-w-6xl px-6 md:px-10 gap-6 xl:gap-10">
        
        {/* Animación Lottie */}
        <div className="flex-shrink-0 flex items-center justify-center w-full xl:w-auto">
          <Player
            autoplay
            loop
            src={heroAnimation}
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto object-contain"
          />
        </div>

        {/* Texto + botón */}
        <div className="flex flex-col justify-center text-center xl:text-left max-w-md">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-2 leading-snug ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Impulsa tu negocio al siguiente nivel
          </h1>
          <p
            className={`text-sm sm:text-base mb-3 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Consultoría profesional y desarrollo web a medida, adaptado a tus necesidades.
          </p>
          <button
            onClick={handleClick}
            className="bg-gray-900 text-white font-medium rounded-full px-4 py-1.5 text-sm shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-200 mx-auto xl:mx-0"
          >
            Solicita una cotización
          </button>
        </div>
      </div>
    </section>
  );
}
