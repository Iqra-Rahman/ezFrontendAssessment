import React from "react";
import { useNavigate } from "react-router-dom";
import artCuration from "../../assets/artCuration.png"; 

const ArtCuration = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#fdf4ef] flex flex-col items-center justify-center px-6 text-gray-800 relative">
            {/* Back Button */}
            <button
                onClick={() => navigate("/services")}
                className="absolute left-8 top-8 border rounded-full p-2 text-[#d45a00] hover:underline font-semibold"
            >
                ← Back
            </button>

            <div className="max-w-4xl flex-col justify-center items-center text-center">
                <h1 className="text-xl italic text-gray-700">
                    "V take art where it belongs, to the people.” - Vernita Verma
                </h1>
                <div className="w-full mt-2 h-1 bg-blue-950"></div>

                <div className="flex flex-col md:flex-row items-center gap-10 p-2 pt-10 rounded-xl">
                    {/* Image */}
                    <div className="">
                        <img
                            src={artCuration} 
                            alt="Art image"
                            className="w-80 object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="text-left max-w-md">
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
                            Through every festival, every performance, and every gathering, we help stories find their stage and their people.
                            V curates:
                            Art Festivals
                            Live Performances
                            Community Events
                            Cultural Storytelling
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

export default ArtCuration;
