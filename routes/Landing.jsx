import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../src/assets/logo.png' // Pastikan path ini sesuai dengan lokasi logo Anda

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
            <div className="max-w-6xl w-full flex items-center justify-between">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                    <h1 className="text-6xl font-bold mb-6">
                        <span className="text-black">Ubah </span>
                        <span className="text-blue-600">Keluhan</span>
                        <br />
                        <span className="text-black">Anda Menjadi</span>
                        <br />
                        <span className="text-blue-600">Tindakan</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-md">
                        Buat laporan publik menjadi lebih cepat,
                        tepat, dan tertindak.
                    </p>

                    <div className="space-y-4">
                        {/* Button Lapor Sekarang */}
                        <Link to={"/lapor"}>
                            <button className='w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white text-xl font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-lg cursor-pointer'>
                                Lapor Sekarang
                            </button></Link>


                        {/* Button WhatsApp */}
                        <a href="https://wa.me/6281358757665"
                            target="_blank" rel="noopener noreferrer">
                            <button className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white text-xl font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-lg flex items-center justify-center gap-3">
                                Lapor Melalui Whatsapp
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right Content - Logo Circle */}
                <div className="hidden lg:flex flex-1 justify-center items-center">
                    <div className='w-96 h-96 rounded-full bg-blue-500 flex items-center justify-center shadow-lg'>
                        <img src={Logo} alt="Logo" className="w-64 h-auto" />

                    </div>
                </div>
            </div>

            {/* Mobile Logo - visible only on smaller screens */}
            <div className="lg:hidden fixed top-4 right-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">📢</span>
                </div>
            </div>
        </div>
    )
}

export default Landing