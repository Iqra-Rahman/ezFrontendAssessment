import React from "react";
import mandala from "../assets/vfilms-logo.png"; 
import mainlogo from "../assets/logo.png";
import bg from "../assets/bg.png";

const Hero = () => {
    return (
        <section className="bg-[#faefe9] min-h-screen w-full flex items-center justify-center px-6 md:px-12"
            style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10">

                {/* Left */}
                <div className="relative w-[300px] md:w-[565px] h-auto flex items-center justify-center">
                    <img
                        src={mandala}
                        alt="Mandala bg"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src={mainlogo}
                        alt="Main Logo"
                        className="absolute object-contain"
                    />

                </div>

                {/* Right */}
                <div className="text-center md:text-left max-w-lg">
                    <h1 className="font-dancing text-3xl md:text-4xl lg:text-5xl text-[#0b1b3a] leading-snug mb-4">
                        Varnan is where stories find their voice and form
                    </h1>
                    <h3 className="text-[#b85c38] text-lg md:text-xl font-medium mb-4">
                        Films . Brands . Art
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Since 2009, V’s been telling stories – stories of people, their
                        journeys, and the places that shape them. Some begin in polished
                        boardrooms, others in humble village squares. But every story starts
                        the same way – by listening with intention. V believes it takes
                        trust, patience, and an eye for the unseen to capture what truly
                        matters. V doesn’t just tell stories – V honors them.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
