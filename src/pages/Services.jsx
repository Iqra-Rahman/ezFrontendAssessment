import React from "react";
import { useNavigate } from "react-router-dom";
import filmImg from "../assets/film.png";
import brandingImg from "../assets/branding.png";
import artImg from "../assets/art.png";
import people from "../assets/bg.png";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Film Production",
      image: filmImg,
      path: "/services/film-production",
    },
    {
      title: "Branding",
      image: brandingImg,
      path: "/services/branding",
    },
    {
      title: "Art Curation",
      image: artImg,
      path: "/services/art-curation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff7f2] flex flex-col items-center py-10"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      {/* Heading */}
      <h2 className="text-xl font-serif text-gray-800 pb-2">
        The storyboard reveals the breadth of our craft.
      </h2>

      <div className="w-64 h-[3px] bg-[#1a4d7a] mb-10"></div>

      {/* Services */}
      <div className="flex flex-wrap justify-center gap-10 px-6 ">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => navigate(service.path)}
            className="cursor-pointer hover:drop-shadow-2xl"
          >
            <div className="relative bg-white p-1 shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-64 h-80 object-cover rounded-sm"
              />
              <p className="text-center mt-3 font-serif text-gray-800">
              {service.title}
            </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Border */}
      <div className="absolute md:-bottom-20 left-0 right-0 h-10 bg-repeat-x bg-[url('/src/assets/decor.png')]"></div>
    </div>
  );
};

export default Services;
