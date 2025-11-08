import React from "react";
import mbr from "../assets/mbr.png";
import video from "../assets/video.png";
import camera from "../assets/camera.png";
import bg from "../assets/bg.png";

const Varnan = () => {
  return (
    <div className="relative bg-[#fff7f2] min-h-screen overflow-hidden flex flex-col items-center justify-center text-gray-800 px-4 sm:px-8 py-10"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-base sm:text-lg md:text-xl font-serif max-w-md mx-auto">
          Take a closer look at the stories V bring to life.
        </p>
      </div>

      {/* Camera */}
      <img
        src={camera}
        alt="camera art"
        className="absolute top-8 sm:top-16 left-4 sm:left-10 md:left-20 w-20 sm:w-28 md:w-36 lg:w-40 drop-shadow-2xl opacity-90"
      />

      {/* Video */}
      <div className="flex flex-col items-center justify-center">
        <img
          src={video}
          alt="video reel"
          className="w-60 sm:w-80 md:w-[420px] lg:w-[480px] object-contain drop-shadow-md"
        />
      </div>

      {/* Mandala */}
      <img
        src={mbr}
        alt="mandala art"
        className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-56 lg:w-64 drop-shadow-2xl opacity-90"
      />
    </div>
  );
};

export default Varnan;
