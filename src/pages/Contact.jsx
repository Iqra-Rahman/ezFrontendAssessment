import React, { useState } from "react";
import mandala1 from "../assets/blm.png";
import mandala2 from "../assets/trm.png";
import bg from "../assets/bg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("All fields are required!");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 200 || response.ok) {
        setStatus("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to submit form. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8e7df] relative overflow-hidden"
      style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundColor: "#fffaf8",
                        }}>
      {/* Left Section */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-center px-6 md:px-10 py-10 md:py-0 relative md:mb-20">
        <p className="text-gray-800 text-base sm:text-lg md:text-xl md:ml-50 md:mb-20 md:w-full z-10">
          Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
          Let’s catch up over coffee — great stories always begin with a good conversation.
        </p>
        <img
          src={mandala1}
          alt="Mandala Left"
          className="absolute bottom-0 left-0 w-56 sm:w-72 md:w-80 opacity-90"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 flex items-center justify-center relative px-6 sm:px-10 md:px-12 py-12 md:py-0">
        <img
          src={mandala2}
          alt="Mandala Right"
          className="absolute top-0 right-0 w-32 sm:w-44 md:w-56 opacity-70"
        />

        <div className="bg-transparent p-6 sm:p-8 w-full max-w-sm sm:max-w-md z-10 flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3">
            Join the Story
          </h2>
          <p className="text-gray-700 text-center mb-6 text-sm sm:text-base">
            Ready to bring your vision to life? Let's talk.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 flex flex-col w-full justify-center items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              autoComplete="name"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              autoComplete="email"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              autoComplete="tel"
            />

            <textarea
              name="message"
              placeholder="Write your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-1/2 py-2.5 sm:py-3 text-white font-semibold rounded-full transition ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {status && (
            <p
              className={`text-center mt-4 font-medium text-sm sm:text-base ${
                status.includes("Done!")
                  ? "text-green-600"
                  : status.includes("Error") || status.includes("Something went wrong!")
                  ? "text-red-600"
                  : "text-orange-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
