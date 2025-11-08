import React from "react";
import cursive from "../assets/abouttext.png";
import ted from "../assets/ted.png";
import hills from "../assets/hill.png";
import people from "../assets/bg.png";

const AboutUs = () => {
  return (
    <section className="mt-0 w-full flex items-center justify-center px-6 md:px-12 py-16 bg-[#fff7f2]"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12 relative">
        
        {/* Left Section  */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800">
            A montage of familiar faces and names
          </h3>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
            Some stories come from the biggest names. Others begin with bold, rising voices.
            We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
          </p>

          {/* Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0">
            <div className="flex flex-col items-center justify-center w-32 h-32 bg-amber-200 rounded-lg shadow-md transform rotate-20 hover:rotate-0 transition-transform duration-300">
              <h3 className="font-bold text-4xl text-gray-800">80+</h3>
              <p className="text-orange-600 mt-2 font-medium">Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center w-32 h-32 bg-amber-200 rounded-lg shadow-md transform rotate-20 hover:rotate-0 transition-transform duration-300">
              <h3 className="font-bold text-4xl text-gray-800">50+</h3>
              <p className="text-orange-600 mt-2 font-medium">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center w-32 h-32 bg-amber-200 rounded-lg shadow-md transform rotate-20 hover:rotate-0 transition-transform duration-300">
              <h3 className="font-bold text-4xl text-gray-800">10+</h3>
              <p className="text-orange-600 mt-2 font-medium">Expert Teams</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
          <img
            src={cursive}
            alt="Decorative text"
            className="w-3/4 md:w-full object-contain mb-10 md:mb-0"
          />
          <div className="relative flex items-center justify-center">
            <img
              src={ted}
              alt="Ted Logo"
              className="w-48 sm:w-56 md:w-200 h-auto object-contain drop-shadow-md"
            />
            <img
              src={hills}
              alt="Hills Logo"
              className="absolute w-28 sm:w-36 md:w-100 h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
