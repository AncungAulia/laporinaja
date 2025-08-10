import React, { useState } from 'react';
import { ChevronDown, LucideCircleQuestionMark } from 'lucide-react';
import { AiOutlineSearch } from "react-icons/ai";

const TrackingPage = () => {
    const [activeTab, setActiveTab] = useState('laporan');
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (index) => {
        setExpandedRows(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Add details data to reports array
    const reports = [
        {
            id: 1,
            title: "Kilih Semakin Menjadi-Jadi Tiga Hari Ini",
            description: "Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi kilih. Pelaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.",
            code: "835192",
            status: "Dikirim",
            statusColor: "text-blue-600 bg-blue-100",
            details: [
                { label: "Tanggal Dibuat", value: "8 Agustus 2025" },
                { label: "Lokasi", value: "Jalan Kaliurang" },
                { label: "Instansi", value: "Kepolisian DIY" },
                {
                    label: "Riwayat Status", value: [
                        { status: "Dikirim", date: "8 Agustus 2025, 14:30" },
                        // { status: "Diterima", date: "8 Agustus 2025, 15:00" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Lampu Jalan Mati di Sepanjang Jalan Malioboro Sejak Seminggu Terakhir",
            description: "Sejak seminggu yang lalu, lampu penerangan jalan di sepanjang Jalan Malioboro Km 2-5 dalam kondisi mati total. Hal ini sangat mengganggu aktivitas warga dan pedagang di malam hari, serta berpotensi meningkatkan risiko kecelakaan dan tindak kriminal. Beberapa pengendara motor sudah terjatuh karena tidak bisa melihat lubang di jalan dengan jelas.",
            code: "835192",
            status: "Selesai",
            statusColor: "text-green-600 bg-green-100",
            details: [
                { label: "Tanggal Dibuat", value: "1 Agustus 2025" },
                { label: "Lokasi", value: "Jalan Malioboro Km 2-5, Yogyakarta" },
                { label: "Instansi", value: "Dinas Pekerjaan Umum Kota Yogyakarta" },
                {
                    label: "Riwayat Status", value: [
                        { status: "Dikirim", date: "1 Agustus 2025, 10:00" },
                        { status: "Ditangani", date: "4 Agustus 2025, 12:00" },
                        { status: "Selesai", date: "10 Agustus 2025, 15:00" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Pencemaran Air Sungai Winongo Akibat Limbah Pabrik Tekstil",
            description: "Air Sungai Winongo berubah warna menjadi kehitaman dan berbau menyengat sejak 2 minggu terakhir. Diduga ada pabrik tekstil yang membuang limbahnya langsung ke sungai tanpa pengolahan terlebih dahulu. Warga sekitar mulai mengeluhkan gatal-gatal pada kulit dan beberapa ikan di sungai ditemukan mati. Perlu tindakan segera untuk menghentikan pencemaran ini.",
            code: "835192",
            status: "Ditangani",
            statusColor: "text-orange-600 bg-orange-100",
            details: [
                { label: "Tanggal Dibuat", value: "6 Agustus 2025" },
                { label: "Lokasi", value: "Sungai Winongo, Kelurahan Gedongkiwo, Yogyakarta" },
                { label: "Instansi", value: "Dinas Lingkungan Hidup Kota Yogyakarta" },
                {
                    label: "Riwayat Status", value: [
                        { status: "Dikirim", date: "6 Agustus 2025, 09:00" },
                        { status: "Ditangani", date: "8 Agustus 2025, 11:00" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Halte Bus Suroboyo Rusak dan Tidak Terawat di Jalan Ahmad Yani",
            description: "Halte bus Suroboyo di depan RS Dr. Soetomo kondisinya sangat memprihatinkan. Atap bocor, bangku rusak, dan tidak ada penerangan di malam hari. Penumpang yang menunggu bus sering kehujanan dan merasa tidak aman karena gelap. Beberapa kaca halte juga pecah dan berpotensi membahayakan. Padahal halte ini adalah pemberhentian yang ramai karena dekat dengan rumah sakit besar.",
            code: "835192",
            status: "Dikirim",
            statusColor: "text-blue-600 bg-blue-100",
            details: [
                { label: "Tanggal Dibuat", value: "10 Agustus 2025" },
                { label: "Lokasi", value: "Jl. Prof. Dr. Moestopo (Ahmad Yani), Surabaya" },
                { label: "Instansi", value: "Dinas Perhubungan Kota Surabaya" },
                {
                    label: "Riwayat Status", value: [
                        { status: "Dikirim", date: "10 Agustus 2025, 14:30" },
                        // { status: "Diterima", date: "8 Agustus 2025, 15:00" }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Pedagang Asongan di Pantai Kuta Mengganggu Wisatawan",
            description: "Pedagang asongan di Pantai Kuta semakin agresif menawarkan dagangannya kepada wisatawan. Mereka mengikuti dan memaksa wisatawan untuk membeli, bahkan sampai ke tempat duduk di cafe tepi pantai. Beberapa wisatawan asing mengeluh merasa tidak nyaman dan terganggu. Hal ini bisa merusak citra pariwisata Bali jika tidak ditangani dengan baik. Perlu ada penataan dan aturan yang jelas untuk pedagang asongan.",
            code: "835192",
            status: "Selesai",
            statusColor: "text-green-600 bg-green-100",
            details: [
                { label: "Tanggal Dibuat", value: "23 Juli 2025" },
                { label: "Lokasi", value: "Pantai Kuta, Denpasar, Bali" },
                { label: "Instansi", value: "Dinas Pariwisata Provinsi Bali" },
                {
                    label: "Riwayat Status", value: [
                        { status: "Dikirim", date: "23 Juli 2025, 14:30" },
                        { status: "Ditangani", date: "29 Juli Agustus 2025, 15:00" },
                        { status: "Selesai", date: "30 Juli 2025, 16:00" }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen w-screen bg-gradient-to-bl from-[#00294A] to-[#336F9F] pt-36" >
            <div className="max-w-6xl mx-auto min-w-[80%]">
                {/* Header Tabs */}
                <div className="flex gap-8 mb-6 mx-6">
                    <button
                        onClick={() => setActiveTab('laporan')}
                        className={`relative text-base font-medium cursor-pointer ${activeTab === 'laporan' ? 'text-white after:w-full' : 'text-gray-300 after:w-0'
                            } after:block after:absolute after:left-0 after:bottom-0
                        after:h-[2px] after:bg-[#FFBD4D] after:transition-all after:ease-in
                        hover:after:w-full`}
                    >
                        Laporan Anda
                    </button>
                    <button
                        onClick={() => setActiveTab('gunakan')}
                        className={`relative text-base font-medium cursor-pointer ${activeTab === 'gunakan' ? 'text-white after:w-full' : 'text-gray-300 after:w-0'
                            } after:block after:absolute after:left-0 after:bottom-0
                        after:h-[2px] after:bg-[#FFBD4D] after:transition-all after:ease-in
                        hover:after:w-full`}
                    >
                        Gunakan Kode
                    </button>
                </div>

                {activeTab === 'laporan' && (
                    <h2 className="text-2xl font-bold text-white mb-0 mt-8 mx-6">
                        Lacak perkembangan laporan yang Anda buat.
                    </h2>
                )}

                {/* Content Area */}
                <div className="rounded-lg rounded-tl-none overflow-hidden"> {/* Removed bg-white */}
                    {activeTab === 'laporan' && (
                        <div className="p-6">
                            {/* Table */}
                            <div className="overflow-hidden rounded-lg">
                                {/* Table Header */}
                                <div className="bg-yellow-400 p-4 grid grid-cols-12 gap-4 font-semibold text-gray-800">
                                    <div className="col-span-3">Judul Laporan</div>
                                    <div className="col-span-5">Deskripsi</div>
                                    <div className="col-span-2">Kode</div>
                                    <div className="col-span-2">Status</div>
                                </div>

                                {/* Table Rows */}
                                <div> 
                                    {reports.map((report, index) => (
                                        <div key={report.id}>
                                            <div className="p-4 grid grid-cols-12 gap-4 items-start border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                                                <div className="col-span-3">
                                                    <h3 className="font-medium text-gray-800 leading-tight">
                                                        {report.title}
                                                    </h3>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {expandedRows[index]
                                                            ? report.description
                                                            : `${report.description.substring(0, 200)}...`
                                                        }
                                                        {/* {report.description} */}
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <span className="text-gray-800 font-mono">
                                                        {report.code}
                                                    </span>
                                                </div>
                                                <div className="col-span-2 flex items-center justify-between">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${report.statusColor}`}>
                                                        {report.status}
                                                    </span>
                                                    <button
                                                        onClick={() => toggleRowExpansion(index)}
                                                        className="ml-2 p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                                                    >
                                                        <ChevronDown
                                                            className={`w-5 h-5 transition-transform cursor-pointer ${expandedRows[index] ? 'rotate-180' : ''
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Expandable Details Section */}
                                            <div
                                                className={`bg-gray-50 border-b border-gray-200 transition-all duration-300 ${expandedRows[index]
                                                    ? 'max-h-[500px] opacity-100 p-4'
                                                    : 'max-h-0 opacity-0 p-0 overflow-hidden'
                                                    }`}
                                            >
                                                <div className="grid grid-cols-3 gap-6">
                                                    {report.details?.map((detail, i) => (
                                                        <div key={i} className="space-y-2">
                                                            <h4 className="font-medium text-gray-700">{detail.label}</h4>
                                                            {Array.isArray(detail.value) ? (
                                                                <div className="space-y-1">
                                                                    {detail.value.map((item, j) => (
                                                                        <p key={j} className="text-sm text-gray-600">
                                                                            {item.status} - {item.date}
                                                                        </p>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <p className="text-sm text-gray-600">{detail.value}</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'gunakan' && (
                        <div className='mx-5'>
                            {/* Header text outside white background */}
                            <h2 className="text-2xl font-bold text-white mb-6 ">
                                Masukkan kode laporan untuk melacak status.
                            </h2>

                            {/* Only the search form has white background */}
                            <div className="p-6 bg-white rounded-lg">
                                <div className="max-w-md">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kode Laporan
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Masukkan kode laporan..."
                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg outline-none placeholder-gray-400 text-gray-900"
                                        />
                                        <button className="px-6 py-3 bg-[#004B87] text-white rounded-r-lg transition-colors font-medium border-l-0 cursor-pointer">
                                            <AiOutlineSearch size={24} className="" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-2">
                                        Contoh: 835192
                                    </p>

                                </div>
                                <div className='flex flex-col items-center justify-center my-20 py-24  text-gray-400'>
                                    <LucideCircleQuestionMark size={100} className="text-gray-300 mb-6" />
                                    <p className='text-xl'>Isi kolom pencarian dengan kode Anda</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;