import { useState } from 'react';
import { Search, MapPin, MessageCircle, Share2, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaPaperclip, } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";

export default function UpvotePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('Semua');
    const [upvotedItems, setUpvotedItems] = useState(new Set());
    

    const handleUpvote = (reportId) => {
        setUpvotedItems(prev => {
            const newUpvoted = new Set(prev);
            if (newUpvoted.has(reportId)) {
                newUpvoted.delete(reportId);
            } else {
                newUpvoted.add(reportId);
            }
            return newUpvoted;
        });
    };

    const reports = [
        {
            id: 1,
            attachments: 2,
            author: 'Anonim',
            date: '8 Agustus 2025',
            title: 'Klitih Semakin Menjadi-Jadi Tiga Hari Ini',
            content: 'Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi klitih. Polaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.',
            location: 'Tidak ada lokasi',
            status: 'Selesai',
            statusColor: 'bg-green-500',
            upvotes: 0,
            comments: 7
        },
        {
            id: 2,
            attachments: 0,
            author: 'Anonim',
            date: '8 Agustus 2025',
            title: 'Klitih Semakin Menjadi-Jadi Tiga Hari Ini',
            content: 'Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi klitih. Polaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.',
            location: 'Tidak ada lokasi',
            status: 'Ditanggapi',
            statusColor: 'bg-orange-500',
            upvotes: 30,
            comments: 7
        },
        {
            id: 3,
            attachments: 1,
            author: 'Anonim',
            date: '8 Agustus 2025',
            title: 'Klitih Semakin Menjadi-Jadi Tiga Hari Ini',
            content: 'Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi klitih. Polaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.',
            location: 'Tidak ada lokasi',
            status: 'Dikirim',
            statusColor: 'bg-blue-500',
            upvotes: 30,
            comments: 7
        },
        {
            id: 4,
            attachments: 0,
            author: 'Anonim',
            date: '8 Agustus 2025',
            title: 'Klitih Semakin Menjadi-Jadi Tiga Hari Ini',
            content: 'Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi klitih. Polaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.',
            location: 'Tidak ada lokasi',
            status: 'Ditanggapi',
            statusColor: 'bg-orange-500',
            upvotes: 30,
            comments: 7
        },
        {
            id: 5,
            attachments: 3,
            author: 'Anonim',
            date: '8 Agustus 2025',
            title: 'Klitih Semakin Menjadi-Jadi Tiga Hari Ini',
            content: 'Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi klitih. Polaku biasanya beraksi pada malam hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus mendapat perawatan.',
            location: 'Tidak ada lokasi',
            status: 'Ditanggapi',
            statusColor: 'bg-orange-500',
            upvotes: 30,
            comments: 7
        }
    ];

    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="min-h-screen w-screen bg-gradient-to-bl from-[#00294A] to-[#336F9F] p-32 ">
            <div className="min-w-[80%] w-full max-w-[1334px] mx-auto">
                {/* Header */}
                <h1 className="text-white text-2xl font-semibold mb-2">Upvote Page</h1>
                <p className="text-white/90 mb-6">Lihat dan dukung laporan publik yang sedang ramai dibicarakan.</p>

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
                        <div key={report.id} className={`${index !== reports.length - 1 ? 'border-b border-gray-200 pb-6 mb-6' : ''}`}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                                        <i className="fas fa-user text-gray-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm">{report.author} • {report.date}</p>
                                    </div>
                                </div>
                                <span className={`${report.statusColor} text-white px-3 py-1 rounded-full text-sm`}>
                                    {report.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-3">{report.title}</h3>
                            <p className="text-gray-600 mb-4">{report.content}</p>

                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{report.location}</span>
                            </div>

                            <div className="flex items-center space-x-6 text-gray-500 text-sm">
                                <div className="flex items-center border-r border-gray-300 pr-6">
                                    <button
                                        className={`flex items-center space-x-2 transition-colors ${report.attachments > 0
                                            ? 'text-blue-600 hover:text-blue-700 cursor-pointer'
                                            : 'text-gray-500 cursor-default'
                                            }`}
                                    >
                                        <FaPaperclip className="w-4 h-4" />
                                        <span>
                                            Lampiran ({report.attachments})
                                        </span>
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleUpvote(report.id)}
                                    className={`flex items-center space-x-2 transition-colors cursor-pointer ${upvotedItems.has(report.id)
                                        ? 'text-green-500 hover:text-green-600'
                                        : 'text-gray-500 hover:text-blue-600'
                                        }`}
                                >
                                    <BiUpvote className="w-4 h-4" />
                                    <span>{report.upvotes + (upvotedItems.has(report.id) ? 1 : 0)}</span>
                                </button>
                                <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{report.comments}</span>
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
                    <button className="p-2 text-white hover:bg-white/20 rounded transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            className={`w-10 h-10 rounded transition-colors ${number === 1
                                ? 'bg-white text-blue-900 font-semibold'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            {number}
                        </button>
                    ))}

                    <span className="text-white mx-2">...</span>

                    <button className="p-2 text-white hover:bg-white/20 rounded transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}