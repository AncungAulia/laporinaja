import React from "react";
import backgroundImage from "../src/assets/background.png";
import logo from "../src/assets/logo2.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="mb-8">
        <div
          className="mb-0 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <img src={logo} alt="Logo" className="w-60 h-auto" />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1
            className="text-white text-5xl  font-bold leading-tight mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            Ubah <span className="text-yellow-500">Keluhan</span> Anda Menjadi{" "}
            <span className="text-[#25D366]">Tindakan</span>
          </h1>
          <p
            className="text-white text-3xl  font-medium animate-fade-in opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            Mudah, Aman, dan Transparan
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            to="/login"
            className="bg-white text-[#575757] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#575757] hover:text-white transition-colors duration-300 flex items-center gap-2 min-w-[200px] justify-center cursor-pointer animate-fade-in opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            Lapor Sekarang
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <button
            className="bg-[#25D366] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 min-w-[200px] justify-center cursor-pointer animate-fade-in opacity-0"
            style={{ animationDelay: "1.3s" }}
          >
            Lapor Lewat Whatsapp
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInFromTop 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;
