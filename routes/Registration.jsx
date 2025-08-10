import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo2 from "../src/assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Registration data:", formData);

    // Simulasi fetch 2 detik
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  const handleLogin = () => {
    console.log("Navigate to login page");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="w-2/5 bg-[#00447B] flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-2/5 h-auto aspect-square bg-[#336F9F] bg-opacity-10 rounded-tr-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-auto aspect-square bg-[#5486AF] bg-opacity-10 rounded-tr-full"></div>
        <div
          className="absolute top-0 right-0 w-full h-full bg-[#004B87]"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)" }}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#336F9F]"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)" }}
        ></div>

        <div className="relative z-10 text-center flex flex-col items-center mb-40">
          <img
            src={Logo2}
            alt="Logo"
            className="w-2/3 h-auto aspect-square mb-[-90px]"
          />
          <h1 className="text-[36px] font-bold mb-8 tracking-[0.02em]">
            Sudah Punya
            <br />
            Akun?
          </h1>
          <Link to="/login">
            <button
              onClick={handleLogin}
              className="bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-medium hover:bg-white hover:text-[#00447B] transition-all duration-300"
            >
              Masuk
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="w-3/5 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-[#00447B] mb-8 text-center tracking-wide">
            Registrasi Akun
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Alamat Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan Teks"
                className="w-full px-4 py-3 border-2 border-[#C9C9C9] rounded-lg focus:ring-2 focus:ring-[#00447B] focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Nama Lengkap<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Masukkan Teks"
                className="w-full px-4 py-3 border-2 border-[#C9C9C9] rounded-lg focus:ring-2 focus:ring-[#00447B] focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Masukkan Teks"
                  className="w-full px-4 py-3 pr-12 border-2 border-[#C9C9C9] rounded-lg focus:ring-2 focus:ring-[#00447B] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00447B] transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-medium transition-all duration-200 mt-8 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00447B] text-white hover:opacity-80 focus:ring-4 focus:ring-blue-200"
              }`}
            >
              {loading ? "Membuat Akun..." : "Buat Akun"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
