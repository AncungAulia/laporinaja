import React from 'react';
import backgroundImage from '../src/assets/background.png';
import logo from '../src/assets/logo2.png';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div
            className="min-h-screen w-full"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >   <div className="mb-8">
                <div className="mb-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <img src={logo} alt="Logo" className="w-60 h-auto" />
                </div>

                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-white text-5xl  font-bold leading-tight mb-4">
                        Ubah <span className='text-yellow-500'>Keluhan</span> Anda Menjadi <span className='text-[#25D366]'>Tindakan</span>
                    </h1>
                    <p className="text-white text-3xl  font-medium">
                        Mudah, Aman, dan Transparan
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Link
                        to="/login"
                        className="bg-white text-[#575757] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 min-w-[200px] justify-center cursor-pointer"
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

                    <button className="bg-[#25D366] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 min-w-[200px] justify-center cursor-pointer">
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
        </div>
    );
};

export default Landing;