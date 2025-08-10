import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  BookOpenText,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const LaporMain = () => {
  const [showWhatsappDetails, setShowWhatsappDetails] = useState(false);
  const [showWebsiteDetails, setShowWebsiteDetails] = useState(true);
  const [isAgreedWhatsapp, setIsAgreedWhatsapp] = useState(false);
  const [isAgreedWebsite, setIsAgreedWebsite] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-bl from-[#00294A] to-[#336F9F] pt-36 ">
      <h1
        className="text-white text-4xl font-medium text-center mb-6 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        Pilih Cara Anda Melapor
      </h1>

      <div className="flex flex-col items-center">
        <div className="min-w-[80%] w-full max-w-4xl">
          {/* Lapor melalui Website */}
          <div
            className="mb-6 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={() => {
                if (showWebsiteDetails) {
                  // Jika Website terbuka, tutup Website dan buka WhatsApp
                  setShowWebsiteDetails(false);
                  setShowWhatsappDetails(true);
                } else {
                  // Jika Website tertutup, buka Website dan tutup WhatsApp
                  setShowWebsiteDetails(true);
                  setShowWhatsappDetails(false);
                }
              }}
              className={`w-full text-[#575757] p-4 flex items-center justify-between transition-colors cursor-pointer  ${
                showWebsiteDetails
                  ? "rounded-t-2xl border-b border-[#d0d0d0]"
                  : "rounded-2xl"
              }`}
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center gap-3 px-8">
                <Globe size={24} />
                <span className="text-lg font-medium">
                  Lapor melalui Website
                </span>
              </div>
              <ChevronDown
                size={20}
                className={`transition-all duration-300 ease-in-out ${
                  showWebsiteDetails ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Website Details */}
            <div
              className={`px-15 bg-white text-[#575757] rounded-b-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                showWebsiteDetails
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`p-6 space-y-6 transform transition-all duration-500 ease-in-out ${
                  showWebsiteDetails ? "translate-y-0" : "-translate-y-4"
                }`}
              >
                {/* Ketentuan Umum */}
                <div className="animate-slide-up">
                  <h3 className="text-lg font-semibold mb-3 underline flex items-center gap-2">
                    <div className="bg-orange-400 p-1 rounded-full">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    Ketentuan Umum
                  </h3>
                  <p className="text-sm mb-3 leading-relaxed">
                    Sebelum melakukan pelaporan, terdapat beberapa ketentuan
                    umum. Berdasarkan UU Nomor 11 Tahun 2008 tentang Informasi
                    dan Transaksi Elektronik (UU ITE), Anda:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>
                      • <strong>DILARANG</strong> membuat laporan yang
                      menyebarkan hoax atau informasi palsu
                    </li>
                    <li>
                      • <strong>DILARANG</strong> membuat laporan yang
                      mengandung SARA (Suku, Agama, Ras, dan Antargolongan)
                    </li>
                  </ul>
                  <p className="text-sm mt-3 leading-relaxed">
                    Selain itu, terdapat beberapa ketentuan yang dapat
                    memperlancr proses pelaporan Anda, seperti:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>
                      • Tidak mengirim spam atau laporan berulang tanpa alasan
                      jelas
                    </li>
                    <li>• Menyertakan informasi yang akurat dan lengkap</li>
                    <li>• Mengunggah bukti pendukung bila diperlukan</li>
                  </ul>
                </div>

                {/* Panduan Singkat */}
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-lg font-semibold mb-4 underline flex items-center gap-2">
                    <div className="bg-green-500 p-1.5 rounded-full">
                      <BookOpenText className="w-6 h-6 text-white" />
                    </div>
                    Panduan Singkat
                  </h3>

                  {/* Progress Steps - Website Version */}
                  <div className="bg-white rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-[#004B87] text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Isi Formulir
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Kirim Laporan
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Pilih Rekomendasi
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Selesai
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Steps Description - Website Version */}
                  <ol className="text-sm space-y-2">
                    <li>
                      1. Isi formulir laporan dengan baik dan benar. Pastikan
                      Anda telah mempersiapkan semua data.{" "}
                      <strong>Lihat data</strong>
                    </li>
                    <li>
                      2. Berikan lampiran dengan format lampiran berupa PDF dan
                      JPG atau PNG (opsional)
                    </li>
                    <li>
                      3. Setelah Anda berhasil mengirim laporan, akan muncul
                      beberapa rekomendasi laporan. Pilih salah satu atau lebih
                      jika laporan Anda identik dengan rekomendasi laporan. Jika
                      menurut Anda tidak terdapat laporan yang identik, klik
                      tombol "Lewati"
                    </li>
                    <li>
                      4. Setelah Anda selesai memilih rekomendasi, Anda akan
                      mendapatkan notifikasi bahwa laporan Anda berhasil dibuat.
                      Anda dapat mengecek status laporan Anda di halaman "Lacak"
                    </li>
                    <li>
                      5. Jika laporan Anda terdeteksi palsu atau menuju ke
                      instansi yang salah, mohon kirim ulang format pelaporan
                      dengan benar
                    </li>
                  </ol>
                </div>

                {/* Agreement Checkbox */}
                <div
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <input
                    type="checkbox"
                    id="agreement-website"
                    checked={isAgreedWebsite}
                    onChange={(e) => setIsAgreedWebsite(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#004B87] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="agreement-website" className="text-sm">
                    Saya setuju untuk mematuhi ketentuan pelaporan.
                  </label>
                </div>

                {/* Submit Button */}
                <div
                  className="text-center animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link to="/formulir">
                    <button
                      disabled={!isAgreedWebsite}
                      className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition-colors ${
                        isAgreedWebsite
                          ? "bg-[#004b87] text-white hover:opacity-80"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      MULAI MELAPOR
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Lapor melalui WhatsApp */}
          <div
            className="mb-6 animate-fade-in opacity-0"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              onClick={() => {
                if (showWhatsappDetails) {
                  // Jika WhatsApp terbuka, tutup WhatsApp dan buka Website
                  setShowWhatsappDetails(false);
                  setShowWebsiteDetails(true);
                } else {
                  // Jika WhatsApp tertutup, buka WhatsApp dan tutup Website
                  setShowWhatsappDetails(true);
                  setShowWebsiteDetails(false);
                }
              }}
              className={`w-full hover:bg-blue-700 text-[#575757] p-4 flex items-center justify-between transition-colors cursor-pointer ${
                showWhatsappDetails
                  ? "rounded-t-2xl border-b border-[#d0d0d0]"
                  : "rounded-2xl"
              }`}
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center gap-3 px-9">
                <FaWhatsapp size={24} />
                <span className="text-lg font-medium">
                  Lapor melalui WhatsApp
                </span>
              </div>
              <ChevronDown
                size={20}
                className={`transition-all duration-300 ease-in-out ${
                  showWhatsappDetails ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* WhatsApp Details */}
            <div
              className={`px-16 bg-white text-[#575757] rounded-b-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                showWhatsappDetails
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`p-6 space-y-6 transform transition-all duration-500 ease-in-out ${
                  showWhatsappDetails ? "translate-y-0" : "-translate-y-4"
                }`}
              >
                {/* Ketentuan Umum */}
                <div className="animate-slide-up">
                  <h3 className="text-lg font-semibold mb-3 underline flex items-center gap-2">
                    <div className="bg-orange-400 p-1 rounded-full">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    Ketentuan Umum
                  </h3>
                  <p className="text-sm mb-3 leading-relaxed">
                    Sebelum melakukan pelaporan, terdapat beberapa ketentuan
                    umum. Berdasarkan UU Nomor 11 Tahun 2008 tentang Informasi
                    dan Transaksi Elektronik (UU ITE), Anda:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>
                      • <strong>DILARANG</strong> membuat laporan yang
                      menyebarkan hoax atau informasi palsu
                    </li>
                    <li>
                      • <strong>DILARANG</strong> membuat laporan yang
                      mengandung SARA (Suku, Agama, Ras, dan Antargolongan)
                    </li>
                  </ul>
                  <p className="text-sm mt-3 leading-relaxed">
                    Selain itu, terdapat beberapa ketentuan yang dapat
                    memperlancr proses pelaporan Anda, seperti:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>
                      • Tidak mengirim spam atau laporan berulang tanpa alasan
                      jelas
                    </li>
                    <li>• Menyertakan informasi yang akurat dan lengkap</li>
                    <li>• Mengunggah bukti pendukung bila diperlukan</li>
                  </ul>
                </div>

                {/* Panduan Singkat */}
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-lg font-semibold mb-4 underline flex items-center gap-2">
                    <div className="bg-green-500 p-1.5 rounded-full">
                      <BookOpenText className="w-6 h-6 text-white" />
                    </div>
                    Panduan Singkat
                  </h3>

                  {/* Progress Steps */}
                  <div className="bg-white rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-[#004B87] text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Pilih Layanan
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Isi Formulir
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Kirim Laporan
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <span className="text-xs text-gray-600 mt-1 text-center">
                          Terima Kode
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Steps Description */}
                  <ol className="text-sm space-y-2">
                    <li>
                      1. Anda akan diminta untuk memilih layanan, yaitu lapor,
                      customer service, atau lacak
                    </li>
                    <li>
                      2. Untuk melakukan pelaporan, Anda akan diminta untuk
                      mengisi format laporan
                    </li>
                    <li>
                      3. Isi format laporan sesuai yang dikirimkan. Lampiran
                      seperti gambar dan file bertipe PDF bersifat opsional.
                      Kirim secara terpisah setelah mengisi format laporan
                    </li>
                    <li>
                      4. Jika Anda berhasil mengirim laporan, maka Anda akan
                      dikirimkan pesan bahwa laporan Anda telah masuk beserta
                      kode laporan Anda
                    </li>
                    <li>
                      5. Jika laporan Anda terdeteksi palsu atau menuju ke
                      instansi yang salah, mohon kirim ulang format pelaporan
                      dengan benar
                    </li>
                  </ol>
                </div>

                {/* Agreement Checkbox */}
                <div
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <input
                    type="checkbox"
                    id="agreement-whatsapp"
                    checked={isAgreedWhatsapp}
                    onChange={(e) => setIsAgreedWhatsapp(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#004B87] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="agreement-whatsapp" className="text-sm">
                    Saya setuju untuk mematuhi ketentuan pelaporan.
                  </label>
                </div>

                {/* Submit Button */}
                <div
                  className="text-center animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <button
                    disabled={!isAgreedWhatsapp}
                    className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors cursor-pointer ${
                      isAgreedWhatsapp
                        ? "bg-[#004b87] text-white hover:opacity-80"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    MULAI MELAPOR
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
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

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSubtle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-3px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        .animate-fade-in {
          animation: fadeInFromTop 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LaporMain;
