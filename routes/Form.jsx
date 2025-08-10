import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Calendar,
  Plus,
  Check,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Data lokasi
const provinsiList = [
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "Kepulauan Riau",
  "Jambi",
  "Sumatera Selatan",
  "Kepulauan Bangka Belitung",
  "Bengkulu",
  "Lampung",
  "DKI Jakarta",
  "Banten",
  "Jawa Barat",
  "Jawa Tengah",
  "D.I. Yogyakarta",
  "Jawa Timur",
  "Bali",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Timur",
  "Kalimantan Utara",
  "Sulawesi Utara",
  "Gorontalo",
  "Sulawesi Tengah",
  "Sulawesi Barat",
  "Sulawesi Selatan",
  "Sulawesi Tenggara",
  "Maluku",
  "Maluku Utara",
  "Papua",
  "Papua Barat",
];

const kabupatenList = {
  "D.I. Yogyakarta": [
    "Sleman",
    "Bantul",
    "Kulon Progo",
    "Gunungkidul",
    "Kota Yogyakarta",
  ],
  "Jawa Tengah": ["Semarang", "Solo", "Magelang", "Klaten", "Purworejo"],
  "DKI Jakarta": [
    "Jakarta Pusat",
    "Jakarta Timur",
    "Jakarta Barat",
    "Jakarta Selatan",
    "Jakarta Utara",
  ],
  "Jawa Barat": ["Bandung", "Bogor", "Depok", "Bekasi", "Cimahi"],
  "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Gresik", "Mojokerto"],
  Banten: ["Tangerang", "Tangerang Selatan", "Serang", "Cilegon", "Lebak"],
  Bali: ["Denpasar", "Badung", "Gianyar", "Klungkung", "Bangli"],
};

const kecamatanList = {
  Sleman: ["Ngaglik", "Depok", "Mlati", "Godean", "Gamping"],
  Bantul: ["Banguntapan", "Sewon", "Kasihan", "Bantul", "Jetis"],
  "Kota Yogyakarta": [
    "Gondokusuman",
    "Umbulharjo",
    "Kotagede",
    "Mergangsan",
    "Tegalrejo",
  ],
};

const LaporMelaluiWebsite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    judulLaporan: "",
    deskripsiLaporan: "",
    tanggalKejadian: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    instansiTujuan: "",
    tampilkanPublik: false,
    tampilkanAnonim: false,
    lampiran: [],
  });

  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Jalan Rusak Parah di Jalan Malioboro",
      description:
        "Jalan utama di Malioboro mengalami kerusakan parah dengan banyak lubang besar yang membahayakan pengendara. Kondisi ini sudah berlangsung selama 2 minggu dan menyebabkan kemacetan serta kecelakaan ringan. Warga mengeluh karena akses menuju pusat kota terganggu.",
      date: "8 Agustus 2025",
      location: "Malioboro, Yogyakarta, Daerah Istimewa Yogyakarta",
      agency: "Dinas Pekerjaan Umum",
      status: "pending",
    },
    {
      id: 2,
      title: "Pencemaran Sungai Code Akibat Limbah Industri",
      description:
        "Sungai Code mengalami pencemaran berat akibat pembuangan limbah industri. Air sungai berubah warna menjadi kehitaman dan berbau busuk. Ikan-ikan mati dan warga sekitar mengeluh karena air sumur mereka ikut tercemar. Kondisi ini sangat mengkhawatirkan kesehatan masyarakat.",
      date: "9 Agustus 2025",
      location: "Gondokusuman, Yogyakarta, Daerah Istimewa Yogyakarta",
      agency: "Dinas Lingkungan Hidup",
      status: "pending",
    },
    {
      id: 3,
      title: "Pungutan Liar di Terminal Giwangan",
      description:
        "Terjadi praktik pungutan liar oleh oknum yang mengaku sebagai petugas di Terminal Giwangan. Mereka memungut biaya tambahan kepada penumpang dan sopir angkutan umum. Banyak korban yang merasa dirugikan namun takut melapor karena ancaman. Praktik ini sudah berlangsung berbulan-bulan.",
      date: "10 Agustus 2025",
      location: "Giwangan, Umbulharjo, Yogyakarta, Daerah Istimewa Yogyakarta",
      agency: "Satuan Polisi Pamong Praja",
      status: "pending",
    },
  ]);

  // Function to reset form and states
  const resetFormAndStates = () => {
    setFormData({
      judulLaporan: "",
      deskripsiLaporan: "",
      tanggalKejadian: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      instansiTujuan: "",
      tampilkanPublik: false,
      tampilkanAnonim: false,
      lampiran: [],
    });

    setReports((prevReports) =>
      prevReports.map((report) => ({ ...report, status: "pending" }))
    );

    setCurrentStep(1);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }));

    setFormData((prev) => ({
      ...prev,
      lampiran: [...prev.lampiran, ...newFiles],
    }));
  };

  const removeFile = (fileId) => {
    setFormData((prev) => ({
      ...prev,
      lampiran: prev.lampiran.filter((file) => file.id !== fileId),
    }));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setCurrentStep(2);
      setIsLoading(false);
    }, 1000); // delay 1 detik
  };

  const handleAddReport = (reportId) => {
    setReports((prevReports) =>
      prevReports.map((report) => {
        if (report.id === reportId) {
          // Toggle: if already added, change to pending; if pending, change to added
          return {
            ...report,
            status: report.status === "added" ? "pending" : "added",
          };
        } else {
          // Reset other reports to pending when selecting a new one
          return { ...report, status: "pending" };
        }
      })
    );
  };

  const handleSendReports = () => {
    const hasSelectedReport = reports.some(
      (report) => report.status === "added"
    );

    if (hasSelectedReport) {
      setNotification({
        type: "success",
        title: "Laporan Berhasil Dikirim!",
        message:
          "Laporan Anda telah berhasil dikirim bersama dengan rekomendasi yang dipilih. Tim terkait akan segera menindaklanjuti laporan Anda.",
      });
    } else {
      setNotification({
        type: "success",
        title: "Laporan Berhasil Dikirim!",
        message:
          "Laporan Anda telah berhasil dikirim. Tim terkait akan segera menindaklanjuti laporan Anda.",
      });
    }

    // Auto hide notification, reset form, and navigate back to /lapor after 3 seconds
    setTimeout(() => {
      setNotification(null);
      resetFormAndStates();
      navigate("/lapor");
    }, 3000);
  };

  const handleFinalSend = () => {
    setNotification({
      type: "success",
      title: "Semua Laporan Berhasil Dikirim!",
      message:
        "Semua laporan yang dipilih telah berhasil dikirim. Terima kasih atas partisipasi Anda dalam meningkatkan keamanan dan kenyamanan masyarakat.",
    });

    // Auto hide notification and reset form after 3 seconds
    setTimeout(() => {
      setNotification(null);
      resetFormAndStates();
    }, 3000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Judul Laporan<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Masukkan Judul Laporan Anda"
          value={formData.judulLaporan}
          onChange={(e) => handleInputChange("judulLaporan", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Deskripsi Laporan<span className="text-red-500">*</span>
        </label>
        <textarea
          rows={6}
          placeholder="Masukkan Deskripsi Laporan Anda"
          value={formData.deskripsiLaporan}
          onChange={(e) =>
            handleInputChange("deskripsiLaporan", e.target.value)
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tanggal Kejadian Laporan<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="date"
            value={formData.tanggalKejadian}
            onChange={(e) =>
              handleInputChange("tanggalKejadian", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Lokasi Kejadian<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <select
              value={formData.provinsi}
              onChange={(e) => {
                handleInputChange("provinsi", e.target.value);
                handleInputChange("kabupaten", ""); // Reset kabupaten when provinsi changes
                handleInputChange("kecamatan", ""); // Reset kecamatan when provinsi changes
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="">Pilih Provinsi</option>
              {provinsiList.map((provinsi) => (
                <option key={provinsi} value={provinsi}>
                  {provinsi}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={formData.kabupaten}
              onChange={(e) => {
                handleInputChange("kabupaten", e.target.value);
                handleInputChange("kecamatan", ""); // Reset kecamatan when kabupaten changes
              }}
              disabled={!formData.provinsi}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none ${
                !formData.provinsi ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            >
              <option value="">Pilih Kabupaten/Kota</option>
              {formData.provinsi &&
                kabupatenList[formData.provinsi]?.map((kabupaten) => (
                  <option key={kabupaten} value={kabupaten}>
                    {kabupaten}
                  </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={formData.kecamatan}
              onChange={(e) => handleInputChange("kecamatan", e.target.value)}
              disabled={!formData.kabupaten}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none ${
                !formData.kabupaten ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            >
              <option value="">Pilih Kecamatan</option>
              {formData.kabupaten &&
                kecamatanList[formData.kabupaten]?.map((kecamatan) => (
                  <option key={kecamatan} value={kecamatan}>
                    {kecamatan}
                  </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Instansi Tujuan<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            value={formData.instansiTujuan}
            onChange={(e) =>
              handleInputChange("instansiTujuan", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option value="">Pilih Instansi Tujuan</option>
            <option value="kepolisian">Kepolisian Daerah</option>
            <option value="pemda">Pemerintah Daerah</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="tampilkanPublik"
            checked={formData.tampilkanPublik}
            onChange={(e) =>
              handleInputChange("tampilkanPublik", e.target.checked)
            }
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="tampilkanPublik" className="text-sm text-gray-700">
            Jangan tampilkan untuk publik
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="tampilkanAnonim"
            checked={formData.tampilkanAnonim}
            onChange={(e) =>
              handleInputChange("tampilkanAnonim", e.target.checked)
            }
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="tampilkanAnonim" className="text-sm text-gray-700">
            Jangan tampilkan nama dan foto profil saya (anonim)
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Lampiran
        </label>
        <div className="space-y-3">
          {/* File Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              id="fileUpload"
              multiple
              accept="image/*,application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="fileUpload" className="cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <p className="text-sm text-gray-600 mb-2">
                <span className="text-blue-600 font-medium">
                  Klik untuk upload
                </span>{" "}
                atau drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, dan PDF</p>
            </label>
          </div>

          {/* Uploaded Files List */}
          {formData.lampiran.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                File yang diupload:
              </p>
              {formData.lampiran.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {file.type.startsWith("image/") ? (
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <span className="text-xs text-blue-600 font-medium">
                            IMG
                          </span>
                        </div>
                      ) : file.type === "application/pdf" ? (
                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                          <span className="text-xs text-red-600 font-medium">
                            PDF
                          </span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-600 font-medium">
                            DOC
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full bg-[#004B87] hover:opacity-80 text-white font-medium py-4 px-6 rounded-lg transition-colors
        ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isLoading ? "Memproses..." : "Selanjutnya"}
      </button>
    </div>
  );

  const renderStep2 = () => {
    const hasSelectedReport = reports.some(
      (report) => report.status === "added"
    );

    return (
      <div className="space-y-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className={`bg-white border-l-4 rounded-lg p-6 shadow-sm ${
              report.status === "added"
                ? "border-green-400 bg-green-50"
                : "border-yellow-400"
            }`}
          >
            <h3 className="font-semibold text-gray-900 text-lg mb-3">
              {report.title}
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <span className="font-medium text-gray-700">Deskripsi</span>
                <p className="mt-1">{report.description}</p>
              </div>

              <div>
                <span className="font-medium text-gray-700">
                  Tanggal dan Lokasi
                </span>
                <p className="mt-1">
                  {report.date} • {report.location}
                </p>
              </div>

              <div>
                <span className="font-medium text-gray-700">
                  Instansi yang dituju
                </span>
                <p className="mt-1">{report.agency}</p>
              </div>
            </div>

            <button
              onClick={() => handleAddReport(report.id)}
              className={`mt-4 font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors ${
                report.status === "added"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
              }`}
            >
              {report.status === "added" ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Ditambahkan</span>
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  <span>Tambahkan</span>
                </>
              )}
            </button>
          </div>
        ))}

        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentStep(1)}
            className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 px-6 rounded-lg transition-colors border border-gray-300"
          >
            Kembali
          </button>
          <button
            onClick={() => {
              setIsLoading(true);

              setTimeout(() => {
                setCurrentStep(3);
                handleSendReports();
                setIsLoading(false);
              }, 1000); // delay 1 detik
            }}
            disabled={isLoading}
            className={`flex-1 bg-[#004B87] hover:opacity-80 text-white font-medium py-4 px-6 rounded-lg transition-colors 
        ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading
              ? "Mengirim..."
              : hasSelectedReport
              ? "Kirim"
              : "Lewati dan Kirim"}
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="space-y-6">
      {reports.map((report) => (
        <div
          key={report.id}
          className={`bg-white border-l-4 rounded-lg p-6 shadow-sm ${
            report.status === "added"
              ? "border-green-400 bg-green-50"
              : "border-yellow-400"
          }`}
        >
          <h3 className="font-semibold text-gray-900 text-lg mb-3">
            {report.title}
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-700">Deskripsi</span>
              <p className="mt-1">{report.description}</p>
            </div>

            <div>
              <span className="font-medium text-gray-700">
                Tanggal dan Lokasi
              </span>
              <p className="mt-1">
                {report.date} • {report.location}
              </p>
            </div>

            <div>
              <span className="font-medium text-gray-700">
                Instansi yang dituju
              </span>
              <p className="mt-1">{report.agency}</p>
            </div>
          </div>

          <button
            className={`mt-4 font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors ${
              report.status === "added"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-yellow-500 hover:bg-yellow-600 text-white"
            }`}
          >
            {report.status === "added" ? (
              <>
                <Check className="h-4 w-4" />
                <span>Ditambahkan</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Tambahkan</span>
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen w-screen bg-gradient-to-bl from-[#00294A] to-[#336F9F] pt-20 pb-20">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 max-w-md w-full">
          <div
            className={`bg-white rounded-lg shadow-lg border-l-4 p-4 ${
              notification.type === "success"
                ? "border-green-500"
                : "border-red-500"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {notification.type === "success" ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto min-w-[80%]">
        <div className="rounded-lg rounded-tl-none overflow-hidden">
          <div className="bg-white rounded-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Lapor Melalui Website
              </h1>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-0 mb-8">
                <div className="flex flex-col  items-center gap-2 space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= 1
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    1
                  </div>
                  <span className="text-sm text-gray-600">
                    Pengisian Formulir
                  </span>
                </div>

                <div className="w-[50%] h-px bg-gray-300"></div>

                <div className="flex flex-col items-center gap-2 space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= 2
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    2
                  </div>
                  <span className="text-sm text-gray-600">
                    Rekomendasi Laporan
                  </span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporMelaluiWebsite;
