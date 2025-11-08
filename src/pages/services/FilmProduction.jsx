import React from "react";
import { useNavigate } from "react-router-dom";
import filmProductionImg from "../../assets/filmProduction.png"; 
import bg from "../../assets/bg.png";

const FilmProductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf4ef] flex flex-col items-center justify-center px-6 text-gray-800 relative"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      {/* Back Button */}
      <button
        onClick={() => navigate("/services")}
        className="absolute left-8 top-8 border rounded-full p-2 text-[#d45a00] hover:underline font-semibold"
      >
        ← Back
      </button>

      <div className="max-w-4xl flex-col justify-center items-center text-center">
        <h1 className="text-xl italic text-gray-700">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </h1>
        <div className="w-full mt-2 h-1 bg-blue-950"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 p-2 pt-10 rounded-xl">
          {/* Image */}
          <div className="">
            <img
              src={filmProductionImg} 
              alt="Film Production"
              className="w-80 object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-left max-w-md">
            <p className="mb-4 leading-relaxed text-gray-700">
              Who says films are just an escape? We see them as a way to live
              many lives – to feel, to explore, and to tell stories that stay.
              Every film we craft carries memories and emotions that inspire us
              to keep creating.
            </p>

            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center mt-6 text-[#d45a00] font-semibold hover:underline"
            >
              Explore Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmProductionPage;
