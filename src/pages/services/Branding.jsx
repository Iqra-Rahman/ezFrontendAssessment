import React from "react";
import { useNavigate } from "react-router-dom";
import brandingpage from "../../assets/brandingpage.png";

const Branding = () => {
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
                    A brand is a voice, and a product is a souvenir." - Lisa Gansky
                </h1>
                <div className="w-full mt-2 h-1 bg-blue-950"></div>

                <div className="flex flex-col md:flex-row items-center gap-10 p-2 pt-10 rounded-xl">
                    {/* Image */}
                    <div className="">
                        <img
                            src={brandingpage} 
                            alt="Branding image"
                            className="w-80 object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="text-left max-w-md">
                        <p className="mb-4 leading-relaxed text-gray-700">
                            A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
                            We shape brands that people remember, return to, and fall in love with.
                            V creates:
                            Branding & Communication
                            Market Mapping
                            Content Management
                            Social Media Management
                            Rebranding
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

export default Branding;
