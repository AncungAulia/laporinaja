import { useState } from "react";
import {
  Search,
  MapPin,
  Flag,
  Share2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  User,
  Paperclip,
  ArrowUp,
  X,
} from "lucide-react";

export default function UpvotePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("Semua");
  const [upvotedItems, setUpvotedItems] = useState(new Set());
  const [reports, setReports] = useState([
    {
      id: 1,
      attachments: 1,
      author: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "5 Agustus 2025",
      title: "Air PDAM Tidak Mengalir di Wilayah Godean",
      content:
        "Sudah dua hari air PDAM di rumah saya tidak mengalir. Mohon tindak lanjut agar kebutuhan air bersih warga terpenuhi.",
      location: "Godean, Sleman",
      status: "Selesai",
      statusColor: "bg-green-500",
      upvotes: 12,
      flags: 0,
    },
    {
      id: 2,
      attachments: 0,
      author: "Siti Aminah",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      date: "6 Agustus 2025",
      title: "Lampu Jalan Mati di Ringroad Utara",
      content:
        "Lampu penerangan jalan di Ringroad Utara sudah mati selama seminggu, sehingga jalan menjadi gelap dan rawan kecelakaan.",
      location: "Ringroad Utara",
      status: "Ditangani",
      statusColor: "bg-orange-500",
      upvotes: 25,
      flags: 2,
    },
    {
      id: 3,
      attachments: 2,
      author: "Anonim",
      avatar: null,
      date: "7 Agustus 2025",
      title: "Pelayanan RS Kurang Ramah",
      content:
        "Saya merasa pelayanan di bagian pendaftaran RS kurang ramah dan lambat. Mohon perbaikan agar pasien merasa nyaman.",
      location: "RSUD Sleman",
      status: "Dikirim",
      statusColor: "bg-blue-500",
      upvotes: 8,
      flags: 1,
    },
  ]);

  const [showFlagModal, setShowFlagModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [flagDescription, setFlagDescription] = useState("");

  const handleUpvote = (reportId) => {
    setUpvotedItems((prev) => {
      const newUpvoted = new Set(prev);
      if (newUpvoted.has(reportId)) {
        newUpvoted.delete(reportId);
      } else {
        newUpvoted.add(reportId);
      }
      return newUpvoted;
    });
  };

  const handleFlagClick = (report) => {
    setSelectedReport(report);
    setShowFlagModal(true);
    setFlagDescription("");
  };

  const handleFlagSubmit = () => {
    if (flagDescription.trim() !== "") {
      setReports(
        reports.map((report) => {
          if (report.id === selectedReport.id) {
            return { ...report, flags: (report.flags || 0) + 1 };
          }
          return report;
        })
      );
      setShowFlagModal(false);
      setFlagDescription("");
      setSelectedReport(null);
    }
  };

  const dummyReports = [
    {
      id: 1,
      attachments: 1,
      author: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "5 Agustus 2025",
      title: "Air PDAM Tidak Mengalir di Wilayah Godean",
      content:
        "Sudah dua hari air PDAM di rumah saya tidak mengalir. Mohon tindak lanjut agar kebutuhan air bersih warga terpenuhi.",
      location: "Godean, Sleman",
      status: "Selesai",
      statusColor: "bg-green-500",
      upvotes: 12,
      comments: 3,
    },
    {
      id: 2,
      attachments: 0,
      author: "Siti Aminah",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      date: "6 Agustus 2025",
      title: "Lampu Jalan Mati di Ringroad Utara",
      content:
        "Lampu penerangan jalan di Ringroad Utara sudah mati selama seminggu, sehingga jalan menjadi gelap dan rawan kecelakaan.",
      location: "Ringroad Utara",
      status: "Ditangani",
      statusColor: "bg-orange-500",
      upvotes: 25,
      comments: 5,
    },
    {
      id: 3,
      attachments: 2,
      author: "Anonim",
      avatar: null,
      date: "7 Agustus 2025",
      title: "Pelayanan RS Kurang Ramah",
      content:
        "Saya merasa pelayanan di bagian pendaftaran RS kurang ramah dan lambat. Mohon perbaikan agar pasien merasa nyaman.",
      location: "RSUD Sleman",
      status: "Dikirim",
      statusColor: "bg-blue-500",
      upvotes: 8,
      comments: 2,
    },
    {
      id: 4,
      attachments: 0,
      author: "Rina Wijaya",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "8 Agustus 2025",
      title: "Sampah Menumpuk di TPS",
      content:
        "TPS di daerah saya sudah penuh dan belum diangkut selama 4 hari. Bau tidak sedap mulai mengganggu warga sekitar.",
      location: "TPS Condongcatur",
      status: "Ditangani",
      statusColor: "bg-orange-500",
      upvotes: 19,
      comments: 4,
    },
    {
      id: 5,
      attachments: 3,
      author: "Anonim",
      avatar: null,
      date: "8 Agustus 2025",
      title: "Jalan Rusak di Depan Sekolah",
      content:
        "Jalan di depan SDN 2 Maguwoharjo berlubang dan membahayakan anak-anak yang berangkat sekolah. Mohon segera diperbaiki.",
      location: "SDN 2 Maguwoharjo",
      status: "Selesai",
      statusColor: "bg-green-500",
      upvotes: 32,
      comments: 6,
    },
  ];

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-bl from-[#00294A] to-[#336F9F] p-32 ">
      <div className="min-w-[80%] w-full max-w-[1334px] mx-auto">
        {/* Header */}
        <h1 className="text-white text-2xl font-semibold mb-2">Upvote Page</h1>
        <p className="text-white/90 mb-6">
          Lihat dan dukung laporan publik yang sedang ramai dibicarakan.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg px-6 py-3 flex items-center mb-6">
          <div className="flex items-center mr-4 cursor-pointer relative">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-gray-600 border-none outline-none appearance-none pr-6 cursor-pointer z-10"
            >
              <option>Semua</option>
              <option>Terbaru</option>
              <option>Terpopuler</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 pointer-events-none" />
          </div>
          <div className="w-px h-6 bg-gray-300 mr-4"></div>
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Cari Disini"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Reports Container */}
        <div className="bg-white rounded-lg p-6 mb-6">
          {reports.map((report, index) => (
            <div
              key={report.id}
              className={`${
                index !== reports.length - 1
                  ? "border-b border-gray-200 pb-6 mb-6"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                    {report.avatar ? (
                      <img
                        src={report.avatar}
                        alt={report.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.querySelector(
                            ".user-icon"
                          ).style.display = "block";
                        }}
                      />
                    ) : null}
                    <User
                      className={`user-icon w-5 h-5 text-gray-500 ${
                        report.avatar ? "hidden" : "block"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      {report.author} • {report.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`${report.statusColor} text-white px-3 py-1 rounded-full text-sm`}
                >
                  {report.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {report.title}
              </h3>
              <p className="text-gray-600 mb-4">{report.content}</p>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{report.location}</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-500 text-sm">
                <div className="flex items-center border-r border-gray-300 pr-6">
                  <button
                    className={`flex items-center space-x-2 transition-colors ${
                      report.attachments > 0
                        ? "text-blue-600 hover:text-blue-700 cursor-pointer"
                        : "text-gray-500 cursor-default"
                    }`}
                  >
                    <Paperclip className="w-4 h-4" />
                    <span>Lampiran ({report.attachments})</span>
                  </button>
                </div>
                <button
                  onClick={() => handleUpvote(report.id)}
                  className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                    upvotedItems.has(report.id)
                      ? "text-green-500 hover:text-green-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>
                    {report.upvotes + (upvotedItems.has(report.id) ? 1 : 0)}
                  </span>
                </button>
                <button
                  onClick={() => handleFlagClick(report)}
                  className="flex items-center space-x-2 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Flag className="w-4 h-4" />
                  <span>{report.flags || 0}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
                  <Share2 className="w-4 h-4" />
                  <span>Bagikan</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <button className="p-2 text-white hover:bg-white/20 rounded transition-colors cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`w-10 h-10 rounded transition-colors ${
                number === 1
                  ? "bg-white text-blue-900 font-semibold cursor-pointer"
                  : "text-white hover:bg-white/20 cursor-pointer"
              }`}
            >
              {number}
            </button>
          ))}

          <span className="text-white mx-2">...</span>

          <button className="p-2 text-white hover:bg-white/20 rounded transition-colors cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Flag Modal */}
      {showFlagModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-[#00294A]/30"
            onClick={() => setShowFlagModal(false)}
          ></div>
          <div className="bg-white rounded-lg p-6 w-[500px] relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Laporkan Konten
              </h3>
              <button
                onClick={() => setShowFlagModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Mengapa Anda ingin melaporkan konten ini?
            </p>
            <textarea
              value={flagDescription}
              onChange={(e) => setFlagDescription(e.target.value)}
              placeholder="Jelaskan alasan Anda..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 min-h-[100px]"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowFlagModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleFlagSubmit}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                disabled={!flagDescription.trim()}
              >
                Kirim Laporan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
