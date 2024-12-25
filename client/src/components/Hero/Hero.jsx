import Navbar from "../navbar/Navbar";
import HeroCover from "../../assets/HeroCover.png"; // Replace with an image of your hotel

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      {/* Background Decoration */}
      <div className="md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-black rounded-full transform rotate-6 -top-40 z-0"></div>

      {/* Stars */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 1.5 + 0.5})`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        ></div>
      ))}

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-20 pb-4 md:pb-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10"
      >
        {/* Text Content */}
        <div data-aos="fade-up" className="flex-1 md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4">
            Discover Elite Business Hotel
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-6"
          >
            &quot;Your Best Business Hotel—Where Work Meets Excellence and
            Comfort.&quot;
          </p>
          <a href="#BookingForm">
            <button
              type="button"
              className="text-gray-900 mt-4 bg-white hover:bg-gray-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center"
            >
              Book Now
            </button>
          </a>
        </div>

        {/* Image Content */}
        <div
          data-aos="fade-up"
          className="mr-2 mt-0 md:mt-0 flex justify-center"
        >
          <img
            src={HeroCover}
            alt="HeroCover"
            className="h-auto max-w-full rounded-lg shadow-lg object-cover md:h-[400px] sm:h-[350px]"
          />
        </div>
      </section>
    </div>
  );
}
