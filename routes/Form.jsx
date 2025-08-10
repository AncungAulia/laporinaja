import React, { useState, useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

const LaporMelaluiWebsite = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    judulLaporan: '',
    deskripsiLaporan: '',
    tanggalKejadian: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    instansiTujuan: '',
    tampilkanPublik: false,
    anonimNama: false
  });

  // State untuk data wilayah
  const [provinsiList, setProvinsiList] = useState([]);
  const [kabupatenList, setKabupatenList] = useState([]);
  const [kecamatanList, setKecamatanList] = useState([]);
  const [loading, setLoading] = useState({
    provinsi: false,
    kabupaten: false,
    kecamatan: false
  });

  // State untuk search dan dropdown visibility
  const [searchTerms, setSearchTerms] = useState({
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    instansi: ''
  });
  const [dropdownOpen, setDropdownOpen] = useState({
    provinsi: false,
    kabupaten: false,
    kecamatan: false,
    instansi: false
  });

  // Data instansi tujuan
  const instansiList = [
    // Kepolisian
    { id: 'polri', name: 'Kepolisian Negara Republik Indonesia (Polri)', category: 'Keamanan' },
    { id: 'polda', name: 'Kepolisian Daerah (Polda)', category: 'Keamanan' },
    { id: 'polres', name: 'Kepolisian Resort (Polres)', category: 'Keamanan' },
    { id: 'polsek', name: 'Kepolisian Sektor (Polsek)', category: 'Keamanan' },
    
    // Kejaksaan
    { id: 'kejagung', name: 'Kejaksaan Agung RI', category: 'Hukum' },
    { id: 'kejati', name: 'Kejaksaan Tinggi', category: 'Hukum' },
    { id: 'kejari', name: 'Kejaksaan Negeri', category: 'Hukum' },
    
    // Lembaga Anti Korupsi
    { id: 'kpk', name: 'Komisi Pemberantasan Korupsi (KPK)', category: 'Anti Korupsi' },
    
    // Kementerian
    { id: 'kemendagri', name: 'Kementerian Dalam Negeri', category: 'Pemerintahan' },
    { id: 'kemenkeu', name: 'Kementerian Keuangan', category: 'Keuangan' },
    { id: 'kemenkes', name: 'Kementerian Kesehatan', category: 'Kesehatan' },
    { id: 'kemendikbud', name: 'Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi', category: 'Pendidikan' },
    { id: 'kemenaker', name: 'Kementerian Ketenagakerjaan', category: 'Ketenagakerjaan' },
    { id: 'kemenhub', name: 'Kementerian Perhubungan', category: 'Transportasi' },
    { id: 'kementan', name: 'Kementerian Pertanian', category: 'Pertanian' },
    { id: 'kemenperin', name: 'Kementerian Perindustrian', category: 'Industri' },
    { id: 'kemendag', name: 'Kementerian Perdagangan', category: 'Perdagangan' },
    { id: 'kemenko-polhukam', name: 'Kementerian Koordinator Politik, Hukum dan Keamanan', category: 'Koordinasi' },
    { id: 'kemenko-perekonomian', name: 'Kementerian Koordinator Bidang Perekonomian', category: 'Koordinasi' },
    { id: 'kemenko-pmk', name: 'Kementerian Koordinator Pembangunan Manusia dan Kebudayaan', category: 'Koordinasi' },
    { id: 'kemenko-maritim', name: 'Kementerian Koordinator Bidang Kemaritiman dan Investasi', category: 'Koordinasi' },
    
    // Lembaga Negara
    { id: 'ombudsman', name: 'Ombudsman Republik Indonesia', category: 'Pengawasan' },
    { id: 'komnas-ham', name: 'Komisi Nasional Hak Asasi Manusia', category: 'HAM' },
    { id: 'kpu', name: 'Komisi Pemilihan Umum', category: 'Pemilu' },
    { id: 'bawaslu', name: 'Badan Pengawas Pemilu', category: 'Pemilu' },
    { id: 'bpk', name: 'Badan Pemeriksa Keuangan', category: 'Audit' },
    { id: 'bpkp', name: 'Badan Pengawasan Keuangan dan Pembangunan', category: 'Audit' },
    
    // Pemerintah Daerah
    { id: 'pemda-provinsi', name: 'Pemerintah Provinsi', category: 'Pemerintahan Daerah' },
    { id: 'pemkot', name: 'Pemerintah Kota', category: 'Pemerintahan Daerah' },
    { id: 'pemkab', name: 'Pemerintah Kabupaten', category: 'Pemerintahan Daerah' },
    { id: 'kecamatan', name: 'Kecamatan', category: 'Pemerintahan Daerah' },
    { id: 'kelurahan', name: 'Kelurahan/Desa', category: 'Pemerintahan Daerah' },
    
    // BUMN/BUMD
    { id: 'bumn', name: 'Badan Usaha Milik Negara (BUMN)', category: 'BUMN' },
    { id: 'bumd', name: 'Badan Usaha Milik Daerah (BUMD)', category: 'BUMD' },
    { id: 'pln', name: 'PT PLN (Persero)', category: 'BUMN' },
    { id: 'pertamina', name: 'PT Pertamina (Persero)', category: 'BUMN' },
    { id: 'telkom', name: 'PT Telkom Indonesia', category: 'BUMN' },
    { id: 'bni', name: 'Bank Negara Indonesia', category: 'BUMN' },
    { id: 'bri', name: 'Bank Rakyat Indonesia', category: 'BUMN' },
    { id: 'mandiri', name: 'Bank Mandiri', category: 'BUMN' },
    
    // Lembaga Lainnya
    { id: 'ojk', name: 'Otoritas Jasa Keuangan', category: 'Keuangan' },
    { id: 'bi', name: 'Bank Indonesia', category: 'Keuangan' },
    { id: 'bssn', name: 'Badan Siber dan Sandi Negara', category: 'Keamanan Siber' },
    { id: 'kominfo', name: 'Kementerian Komunikasi dan Informatika', category: 'Komunikasi' },
    { id: 'bapeten', name: 'Badan Pengawas Tenaga Nuklir', category: 'Pengawasan' },
    { id: 'lapan', name: 'Lembaga Antariksa dan Penerbangan Nasional', category: 'Teknologi' },
    { id: 'lipi', name: 'Lembaga Ilmu Pengetahuan Indonesia', category: 'Penelitian' },
    { id: 'batan', name: 'Badan Tenaga Nuklir Nasional', category: 'Teknologi' },
    
    // Layanan Publik
    { id: 'pdam', name: 'Perusahaan Daerah Air Minum', category: 'Layanan Publik' },
    { id: 'rumah-sakit', name: 'Rumah Sakit Pemerintah', category: 'Kesehatan' },
    { id: 'sekolah', name: 'Sekolah/Institusi Pendidikan', category: 'Pendidikan' },
    { id: 'universitas', name: 'Perguruan Tinggi Negeri', category: 'Pendidikan' }
  ];

  // Filtered lists berdasarkan search
  const filteredProvinsiList = provinsiList.filter(prov =>
    prov.name.toLowerCase().includes(searchTerms.provinsi.toLowerCase())
  );
  const filteredKabupatenList = kabupatenList.filter(kab =>
    kab.name.toLowerCase().includes(searchTerms.kabupaten.toLowerCase())
  );
  const filteredKecamatanList = kecamatanList.filter(kec =>
    kec.name.toLowerCase().includes(searchTerms.kecamatan.toLowerCase())
  );
  const filteredInstansiList = instansiList.filter(inst =>
    inst.name.toLowerCase().includes(searchTerms.instansi.toLowerCase()) ||
    inst.category.toLowerCase().includes(searchTerms.instansi.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen({
          provinsi: false,
          kabupaten: false,
          kecamatan: false,
          instansi: false
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ambil data provinsi saat mount
  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        setLoading(prev => ({ ...prev, provinsi: true }));
        console.log('Fetching provinsi...');
        const response = await fetch('https://wilayah.id/api/provinces.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Provinsi response:', data);
        
        // Handle different response structures
        const provinsiData = data.data || data;
        console.log('Provinsi data processed:', provinsiData);
        setProvinsiList(Array.isArray(provinsiData) ? provinsiData : []);
      } catch (error) {
        console.error('Error fetching provinces:', error);
        // Fallback data jika API error
        const fallbackProvinsi = [
          { id: '11', name: 'Aceh' },
          { id: '12', name: 'Sumatera Utara' },
          { id: '13', name: 'Sumatera Barat' },
          { id: '14', name: 'Riau' },
          { id: '15', name: 'Jambi' },
          { id: '16', name: 'Sumatera Selatan' },
          { id: '17', name: 'Bengkulu' },
          { id: '18', name: 'Lampung' },
          { id: '19', name: 'Kepulauan Bangka Belitung' },
          { id: '21', name: 'Kepulauan Riau' },
          { id: '31', name: 'DKI Jakarta' },
          { id: '32', name: 'Jawa Barat' },
          { id: '33', name: 'Jawa Tengah' },
          { id: '34', name: 'DI Yogyakarta' },
          { id: '35', name: 'Jawa Timur' },
          { id: '36', name: 'Banten' },
          { id: '51', name: 'Bali' },
          { id: '52', name: 'Nusa Tenggara Barat' },
          { id: '53', name: 'Nusa Tenggara Timur' },
          { id: '61', name: 'Kalimantan Barat' },
          { id: '62', name: 'Kalimantan Tengah' },
          { id: '63', name: 'Kalimantan Selatan' },
          { id: '64', name: 'Kalimantan Timur' },
          { id: '65', name: 'Kalimantan Utara' },
          { id: '71', name: 'Sulawesi Utara' },
          { id: '72', name: 'Sulawesi Tengah' },
          { id: '73', name: 'Sulawesi Selatan' },
          { id: '74', name: 'Sulawesi Tenggara' },
          { id: '75', name: 'Gorontalo' },
          { id: '76', name: 'Sulawesi Barat' },
          { id: '81', name: 'Maluku' },
          { id: '82', name: 'Maluku Utara' },
          { id: '91', name: 'Papua Barat' },
          { id: '94', name: 'Papua' }
        ];
        console.log('Using fallback provinsi data');
        setProvinsiList(fallbackProvinsi);
      } finally {
        setLoading(prev => ({ ...prev, provinsi: false }));
      }
    };

    fetchProvinsi();
  }, []);

  // Ambil data kabupaten saat provinsi berubah
  useEffect(() => {
    const fetchKabupaten = async () => {
      if (formData.provinsi) {
        try {
          setLoading(prev => ({ ...prev, kabupaten: true }));
          console.log(`Fetching kabupaten for provinsi ${formData.provinsi}...`);
          const response = await fetch(`https://wilayah.id/api/regencies/${formData.provinsi}.json`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Kabupaten response:', data);
          
          // Handle different response structures
          const kabupatenData = data.data || data;
          console.log('Kabupaten data processed:', kabupatenData);
          setKabupatenList(Array.isArray(kabupatenData) ? kabupatenData : []);
        } catch (error) {
          console.error('Error fetching kabupaten:', error);
          // Fallback data berdasarkan provinsi yang dipilih
          let fallbackKabupaten = [];
          if (formData.provinsi === '34') { // DI Yogyakarta
            fallbackKabupaten = [
              { id: '3471', name: 'Kota Yogyakarta' },
              { id: '3472', name: 'Kabupaten Sleman' },
              { id: '3473', name: 'Kabupaten Bantul' },
              { id: '3474', name: 'Kabupaten Kulon Progo' },
              { id: '3475', name: 'Kabupaten Gunungkidul' }
            ];
          } else if (formData.provinsi === '33') { // Jawa Tengah
            fallbackKabupaten = [
              { id: '3371', name: 'Kota Semarang' },
              { id: '3372', name: 'Kota Surakarta' },
              { id: '3373', name: 'Kota Magelang' },
              { id: '3301', name: 'Kabupaten Semarang' },
              { id: '3302', name: 'Kabupaten Boyolali' }
            ];
          } else if (formData.provinsi === '32') { // Jawa Barat
            fallbackKabupaten = [
              { id: '3271', name: 'Kota Bandung' },
              { id: '3272', name: 'Kota Bekasi' },
              { id: '3273', name: 'Kota Bogor' },
              { id: '3201', name: 'Kabupaten Bandung' },
              { id: '3202', name: 'Kabupaten Bekasi' }
            ];
          } else {
            fallbackKabupaten = [
              { id: 'fallback1', name: 'Kabupaten/Kota contoh 1' },
              { id: 'fallback2', name: 'Kabupaten/Kota contoh 2' }
            ];
          }
          console.log('Using fallback kabupaten data for provinsi:', formData.provinsi);
          setKabupatenList(fallbackKabupaten);
        } finally {
          setLoading(prev => ({ ...prev, kabupaten: false }));
        }
        setFormData(prev => ({ ...prev, kabupaten: '', kecamatan: '' }));
        setSearchTerms(prev => ({ ...prev, kabupaten: '', kecamatan: '' }));
        setKecamatanList([]);
      }
    };

    fetchKabupaten();
  }, [formData.provinsi]);

  // Ambil data kecamatan saat kabupaten berubah
  useEffect(() => {
    const fetchKecamatan = async () => {
      if (formData.kabupaten) {
        try {
          setLoading(prev => ({ ...prev, kecamatan: true }));
          console.log(`Fetching kecamatan for kabupaten ${formData.kabupaten}...`);
          const response = await fetch(`https://wilayah.id/api/districts/${formData.kabupaten}.json`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Kecamatan response:', data);
          
          // Handle different response structures
          const kecamatanData = data.data || data;
          console.log('Kecamatan data processed:', kecamatanData);
          setKecamatanList(Array.isArray(kecamatanData) ? kecamatanData : []);
        } catch (error) {
          console.error('Error fetching kecamatan:', error);
          // Fallback data berdasarkan kabupaten yang dipilih
          let fallbackKecamatan = [];
          if (formData.kabupaten === '3471') { // Kota Yogyakarta
            fallbackKecamatan = [
              { id: '347101', name: 'Gondokusuman' },
              { id: '347102', name: 'Jetis' },
              { id: '347103', name: 'Tegalrejo' },
              { id: '347104', name: 'Umbulharjo' },
              { id: '347105', name: 'Kotagede' },
              { id: '347106', name: 'Mergangsan' },
              { id: '347107', name: 'Ngampilan' },
              { id: '347108', name: 'Wirobrajan' },
              { id: '347109', name: 'Mantrijeron' },
              { id: '347110', name: 'Kraton' },
              { id: '347111', name: 'Gondomanan' },
              { id: '347112', name: 'Pakualaman' },
              { id: '347113', name: 'Danurejan' },
              { id: '347114', name: 'Gedongtengen' }
            ];
          } else if (formData.kabupaten === '3472') { // Sleman
            fallbackKecamatan = [
              { id: '347201', name: 'Depok' },
              { id: '347202', name: 'Berbah' },
              { id: '347203', name: 'Prambanan' },
              { id: '347204', name: 'Kalasan' },
              { id: '347205', name: 'Ngemplak' },
              { id: '347206', name: 'Ngaglik' },
              { id: '347207', name: 'Sleman' },
              { id: '347208', name: 'Tempel' },
              { id: '347209', name: 'Turi' },
              { id: '347210', name: 'Pakem' },
              { id: '347211', name: 'Cangkringan' },
              { id: '347212', name: 'Mlati' },
              { id: '347213', name: 'Godean' },
              { id: '347214', name: 'Minggir' },
              { id: '347215', name: 'Sayegan' },
              { id: '347216', name: 'Moyudan' },
              { id: '347217', name: 'Gamping' }
            ];
          } else {
            fallbackKecamatan = [
              { id: 'fallback1', name: 'Kecamatan contoh 1' },
              { id: 'fallback2', name: 'Kecamatan contoh 2' },
              { id: 'fallback3', name: 'Kecamatan contoh 3' }
            ];
          }
          console.log('Using fallback kecamatan data for kabupaten:', formData.kabupaten);
          setKecamatanList(fallbackKecamatan);
        } finally {
          setLoading(prev => ({ ...prev, kecamatan: false }));
        }
        setFormData(prev => ({ ...prev, kecamatan: '' }));
        setSearchTerms(prev => ({ ...prev, kecamatan: '' }));
      }
    };

    fetchKecamatan();
  }, [formData.kabupaten]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSearchChange = (field, value) => {
    setSearchTerms(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSelectWilayah = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: item.id
    }));
    setSearchTerms(prev => ({
      ...prev,
      [field]: item.name
    }));
    setDropdownOpen(prev => ({
      ...prev,
      [field]: false
    }));
  };

  const handleSelectInstansi = (instansi) => {
    setFormData(prev => ({
      ...prev,
      instansiTujuan: instansi.id
    }));
    setSearchTerms(prev => ({
      ...prev,
      instansi: instansi.name
    }));
    setDropdownOpen(prev => ({
      ...prev,
      instansi: false
    }));
  };

  const toggleDropdown = (field) => {
    setDropdownOpen(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const StepIndicator = ({ step, isActive, isCompleted }) => (
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
        isCompleted ? 'bg-green-500 text-white' : 
        isActive ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-500'
      }`}>
        {step}
      </div>
      <span className="text-xs mt-1 text-gray-600">
        {step === 1 ? 'Pengisian Formulir' : 'Rekomendasi Laporan'}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Lapor Melalui Website
          </h1>

          {/* Step Indicator */}
          <div className="flex justify-center items-center mb-8">
            <StepIndicator step={1} isActive={currentStep === 1} isCompleted={currentStep > 1} />
            <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
            <StepIndicator step={2} isActive={currentStep === 2} isCompleted={false} />
          </div>

          {currentStep === 1 && (
            <div className="space-y-6">
              {/* Judul Laporan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Laporan*
                </label>
                <input
                  type="text"
                  name="judulLaporan"
                  value={formData.judulLaporan}
                  onChange={handleInputChange}
                  placeholder="Masukkan Judul Laporan Anda"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Deskripsi Laporan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Laporan*
                </label>
                <textarea
                  name="deskripsiLaporan"
                  value={formData.deskripsiLaporan}
                  onChange={handleInputChange}
                  placeholder="Masukkan Judul Laporan Anda"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tanggal Kejadian */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Kejadian Laporan*
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="tanggalKejadian"
                    value={formData.tanggalKejadian}
                    onChange={handleInputChange}
                    placeholder="Pilih Tanggal Kejadian"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Lokasi Kejadian */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi Kejadian*
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {/* Provinsi Searchable Dropdown */}
                  <div className="relative dropdown-container">
                    <input
                      type="text"
                      placeholder={loading.provinsi ? 'Loading...' : 'Cari Provinsi...'}
                      value={searchTerms.provinsi}
                      onChange={(e) => handleSearchChange('provinsi', e.target.value)}
                      onFocus={() => toggleDropdown('provinsi')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading.provinsi}
                    />
                    {dropdownOpen.provinsi && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredProvinsiList.length > 0 ? (
                          filteredProvinsiList.map((prov) => (
                            <div
                              key={prov.id}
                              onClick={() => handleSelectWilayah('provinsi', prov)}
                              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                            >
                              {prov.name}
                            </div>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-gray-500 text-sm">Tidak ditemukan</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Kabupaten Searchable Dropdown */}
                  <div className="relative dropdown-container">
                    <input
                      type="text"
                      placeholder={
                        !formData.provinsi 
                          ? 'Pilih provinsi dulu' 
                          : loading.kabupaten 
                            ? 'Loading...' 
                            : 'Cari Kabupaten/Kota...'
                      }
                      value={searchTerms.kabupaten}
                      onChange={(e) => handleSearchChange('kabupaten', e.target.value)}
                      onFocus={() => formData.provinsi && toggleDropdown('kabupaten')}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none transition-all duration-200 ${
                        !formData.provinsi 
                          ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed shadow-inner' 
                          : 'border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white'
                      }`}
                      disabled={!formData.provinsi || loading.kabupaten}
                    />
                    {dropdownOpen.kabupaten && formData.provinsi && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredKabupatenList.length > 0 ? (
                          filteredKabupatenList.map((kab) => (
                            <div
                              key={kab.id}
                              onClick={() => handleSelectWilayah('kabupaten', kab)}
                              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                            >
                              {kab.name}
                            </div>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-gray-500 text-sm">Tidak ditemukan</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Kecamatan Searchable Dropdown */}
                  <div className="relative dropdown-container">
                    <input
                      type="text"
                      placeholder={
                        !formData.kabupaten 
                          ? 'Pilih kabupaten dulu' 
                          : loading.kecamatan 
                            ? 'Loading...' 
                            : 'Cari Kecamatan...'
                      }
                      value={searchTerms.kecamatan}
                      onChange={(e) => handleSearchChange('kecamatan', e.target.value)}
                      onFocus={() => formData.kabupaten && toggleDropdown('kecamatan')}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none transition-all duration-200 ${
                        !formData.kabupaten 
                          ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed shadow-inner' 
                          : 'border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white'
                      }`}
                      disabled={!formData.kabupaten || loading.kecamatan}
                    />
                    {dropdownOpen.kecamatan && formData.kabupaten && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredKecamatanList.length > 0 ? (
                          filteredKecamatanList.map((kec) => (
                            <div
                              key={kec.id}
                              onClick={() => handleSelectWilayah('kecamatan', kec)}
                              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                            >
                              {kec.name}
                            </div>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-gray-500 text-sm">Tidak ditemukan</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Instansi Tujuan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instansi Tujuan*
                </label>
                <div className="relative dropdown-container">
                  <input
                    type="text"
                    placeholder="Cari Instansi Tujuan..."
                    value={searchTerms.instansi}
                    onChange={(e) => handleSearchChange('instansi', e.target.value)}
                    onFocus={() => toggleDropdown('instansi')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {dropdownOpen.instansi && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {filteredInstansiList.length > 0 ? (
                        // Group by category
                        (() => {
                          const groupedInstansi = filteredInstansiList.reduce((groups, instansi) => {
                            const category = instansi.category;
                            if (!groups[category]) {
                              groups[category] = [];
                            }
                            groups[category].push(instansi);
                            return groups;
                          }, {});

                          return Object.entries(groupedInstansi).map(([category, instansis]) => (
                            <div key={category}>
                              <div className="px-3 py-2 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wide border-b border-gray-200">
                                {category}
                              </div>
                              {instansis.map((inst) => (
                                <div
                                  key={inst.id}
                                  onClick={() => handleSelectInstansi(inst)}
                                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="font-medium text-gray-900">{inst.name}</div>
                                </div>
                              ))}
                            </div>
                          ));
                        })()
                      ) : (
                        <div className="px-3 py-2 text-gray-500 text-sm">Tidak ditemukan</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Checkbox Options */}
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="tampilkanPublik"
                    checked={formData.tampilkanPublik}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Jangan tampilkan untuk publik</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="anonimNama"
                    checked={formData.anonimNama}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Jangan tampilkan nama dan foto profil saya (anonim)</span>
                </label>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
              >
                Selanjutnya
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Rekomendasi Laporan</h2>
              
              {/* Report Cards */}
              {[1, 2, 3].map((index) => (
                <div key={index} className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Lorem Ipsum Dolor Sit Amet Wangsit Age
                    </h3>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Desa/Kota: </span>
                    </div>
                    <div className="text-sm text-gray-700">
                      Dalam tiga hari terakhir, warga di sekitar Jalan Kaliurang merasa resah akibat maraknya aksi kriminal. Polsek Depok tengah mendata persoalan hari dengan membawa senjata tajam. Beberapa korban mengalami luka dan harus menjalani perawatan.
                    </div>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div>Tanggal dan Lokasi:</div>
                    <div>1 Agustus 2025 - Ngagplik, Sleman, Daerah Istimewa Yogyakarta</div>
                    <div className="mt-2">Instansi yang dituju:</div>
                    <div>Kepolisian Daerah</div>
                  </div>

                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                    + Sambungkan
                  </button>
                </div>
              ))}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={handleBack}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition duration-200"
                >
                  Kembali
                </button>
                <button
                  onClick={() => alert('Laporan berhasil dikirim!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-200"
                >
                  Lewati dan Kirim
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaporMelaluiWebsite;