import React from "react";
import { useNavigate } from "react-router-dom";
import aboutPara from "../assets/aboutpara.png";
import indiaGate from "../assets/indiagate.png";
import people from "../assets/people.png";
import people from "../assets/bg.png";

const AboutTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#fff7f2] min-h-screen overflow-hidden flex flex-col items-center justify-center text-gray-800 px-4 sm:px-6 md:px-12 py-10"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      
      {/* Crumbled Paper */}
      <img
        src={aboutPara}
        alt="About paragraph"
        className="absolute top-5 left-4 sm:left-10 w-40 sm:w-60 md:w-96 lg:w-[520px] -rotate-6 drop-shadow-2xl"
      />

      {/* India Gate */}
      <div className="absolute bottom-1 sm:bottom-10 left-0 sm:left-20 md:left-40 flex flex-col items-center">
        <img
          src={indiaGate}
          alt="India Gate"
          className="w-24 sm:w-36 md:w-48 lg:w-60 object-contain"
        />
      </div>

      {/* People */}
      <div className="flex flex-col items-center justify-center mt-28 sm:mt-32 md:mt-0 md:ml-100">
        <img
          src={people}
          alt="People silhouettes"
          className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[550px]"
        />

        <div className="flex flex-wrap justify-center gap-4 mt-2 text-gray-600 italic text-xs sm:text-sm">
          <span>Film Makers</span>
          <span>Branding Experts</span>
          <span>Art Curators</span>
        </div>
      </div>

      {/* Route to Portfolio*/}
      <div className="mt-5 text-center px-4 sm:px-0 md:ml-100">
        <p className="text-base sm:text-lg md:text-xl font-serif max-w-md mx-auto">
          Take a closer look at the stories V bring to life.
        </p>
        <button
          onClick={() => navigate("/varnan")}
          className="mt-5 bg-[#f25c3b] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#d74d2f] transition-all duration-300 text-sm sm:text-base"
        >
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default AboutTeam;
