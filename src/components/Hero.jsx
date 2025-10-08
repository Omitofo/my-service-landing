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
      <div className="flex flex-col xl:flex-row-reverse items-center justify-center w-full max-w-6xl px-6 md:px-10 gap-6 xl:gap-16">
        
        {/* Lottie Animation */}
        <div className="flex-shrink-0 flex items-center justify-center w-full xl:w-auto">
          <Player
            autoplay
            loop
            src={heroAnimation}
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto object-contain"
          />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col justify-center text-center xl:text-left max-w-md xl:max-w-lg">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 leading-snug ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Impulsa tu negocio al siguiente nivel
          </h1>
          <p
            className={`text-sm sm:text-base xl:text-lg mb-4 leading-relaxed xl:max-w-[300px] ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Consultoría profesional y desarrollo web a medida, adaptado a tus necesidades.
          </p>
          <button
            onClick={handleClick}
            className="bg-gray-900 text-white font-medium rounded-full px-5 py-1.5 text-sm shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-200 mx-auto xl:mx-0 w-max"
          >
            Solicita una cotización
          </button>
        </div>

      </div>
    </section>
  );
}
