import { useState, useEffect } from 'react';
import {
  Zap,
  Code2, ArrowRight,
  CheckCircle2,
  MessageSquare, Smartphone,
  ShieldCheck,
  Send,
  Sun,
  Moon
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    package: 'usaha',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Slider Data
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      alt: "Analisis Data Bisnis"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      alt: "Coding Profesional"
    },
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      alt: "Sistem Keamanan"
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      alt: "Kolaborasi Tim Digital"
    }
  ];

  // Auto Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const packages = [
    {
      id: 'kilat',
      name: 'Paket KILAT',
      price: '850rb',
      desc: 'Bikin bisnismu eksis di internet hari ini juga.',
      features: [
        'Landing Page 1 Halaman',
        'Bisa Dibuka di HP (Responsive)',
        'Tombol WhatsApp Langsung',
        'Setup Hosting & Domain',
        'Web Ringan & Gak Lemot',
        '1-2 Hari Jadi'
      ],
      highlight: false
    },
    {
      id: 'usaha',
      name: 'Paket USAHA',
      price: '1.45jt',
      desc: 'Favorit UMKM! Bisa ganti konten sendiri.',
      features: [
        'Hingga 5 Halaman Web',
        'Dashboard Admin Gampang',
        'Bisa Upload Foto & Produk',
        'Fitur Berita / Promo',
        'Sudah Termasuk Domain .com',
        '3-5 Hari Jadi'
      ],
      highlight: true
    },
    {
      id: 'sistem',
      name: 'Paket SISTEM',
      price: '1.99jt',
      desc: 'Sistem rapi buat catat stok & data.',
      features: [
        'Semua Fitur Paket Usaha',
        'Sistem Catat Stok / Member',
        'Bisa Cetak Laporan PDF',
        'Keamanan Ekstra (Anti Hacker)',
        'Bimbingan Cara Pakai',
        '5-7 Hari Jadi'
      ],
      highlight: false
    }
  ];

  const handleSendWA = (e) => {
    e.preventDefault();
    const text = `Halo MurahDev! Nama saya ${formData.name}. Saya mau tanya tentang Paket ${formData.package.toUpperCase()}. %0A%0APesan: ${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-orange-500 p-1.5 rounded-xl transition-transform group-hover:rotate-12">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tighter dark:text-white">Murah<span className="text-orange-500">Dev</span></span>
            </div>

            <div className="flex items-center gap-4 md:gap-8 font-semibold text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wide">
              <div className="hidden md:flex items-center gap-8">
                <a href="#keunggulan" className="hover:text-orange-500 transition-colors">Keunggulan</a>
                <a href="#paket" className="hover:text-orange-500 transition-colors">Paket Hemat</a>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-orange-400 hover:ring-2 ring-orange-500/50 transition-all"
                title="Ganti Tema"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => document.getElementById('tanya').scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 dark:bg-orange-500 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all shadow-md active:scale-95"
              >
                Tanya dong!
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 border border-orange-200 dark:border-orange-500/20">
                  <Zap className="w-4 h-4" />
                  <span>Web Kencang, Bisnis Lancar</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] mb-6 transition-colors">
                  Bikin Website <span className="text-orange-500 underline decoration-slate-900 dark:decoration-white">Gak Pake Drama.</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg transition-colors">
                  Solusi bikin website kilat, aman, dan gampang diurus sendiri. MurahDev bantu UMKM naik kelas tanpa pusing mikirin teknis.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button onClick={() => document.getElementById('paket').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 dark:shadow-orange-900/20 flex items-center justify-center gap-2">
                    Lihat Harga <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => document.getElementById('tanya').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-orange-500 transition-all flex items-center justify-center gap-2">
                    Konsultasi Gratis
                  </button>
                </div>
              </div>

              {/* Slider Image Section */}
              <div className="relative hidden lg:block group">
                <div className="relative bg-slate-200 dark:bg-slate-800 w-full aspect-square rounded-[3rem] overflow-hidden rotate-3 border-8 border-white dark:border-slate-700 shadow-2xl transition-all duration-500">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                    >
                      <img
                        src={slide.url}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
                    </div>
                  ))}

                  {/* Slider Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-orange-500' : 'w-2 bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl flex items-center gap-4 -rotate-6 border border-slate-100 dark:border-slate-700 transition-colors z-20">
                  <div className="bg-green-100 dark:bg-green-500/10 p-3 rounded-2xl">
                    <ShieldCheck className="text-green-600 dark:text-green-400 w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">Aman & Terpercaya</p>
                    <p className="text-xs text-slate-400">Proteksi Serangan Luar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section id="keunggulan" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <div className="bg-orange-50 dark:bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl transition-colors">1</div>
                <h3 className="text-xl font-bold dark:text-white">Bukan WordPress</h3>
                <p className="text-slate-500 dark:text-slate-400 transition-colors">Pakai Laravel, jauh lebih kencang dan nggak gampang kena hack atau virus yang sering nyerang CMS umum.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-orange-50 dark:bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl transition-colors">2</div>
                <h3 className="text-xl font-bold dark:text-white">Admin Panel Simpel</h3>
                <p className="text-slate-500 dark:text-slate-400 transition-colors">Kelola web semudah update status sosmed. Ganti harga, upload foto, semua tinggal klik di dashboard MurahDev.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-orange-50 dark:bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl transition-colors">3</div>
                <h3 className="text-xl font-bold dark:text-white">Mobile First</h3>
                <p className="text-slate-500 dark:text-slate-400 transition-colors">Web dijamin rapi dibuka di HP, Tablet, atau Laptop. Jualan jadi makin pro di mata pelanggan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="paket" className="py-24 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight dark:text-white">Pilih Paket Sesuai Kantong</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Harga jujur, pengerjaan cepat, hasil memuaskan.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-8 rounded-[2rem] bg-white dark:bg-slate-800 border-2 flex flex-col transition-all hover:translate-y-[-8px] ${pkg.highlight ? 'border-orange-500 shadow-2xl shadow-orange-100 dark:shadow-orange-900/10 scale-105 z-10' : 'border-slate-100 dark:border-slate-700 shadow-sm'}`}
                >
                  <div className="mb-8 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-4">
                      <span className="text-2xl font-bold text-slate-400">Rp</span>
                      <span className="text-5xl font-black text-slate-900 dark:text-white leading-none">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{pkg.desc}</p>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, package: pkg.id });
                      document.getElementById('tanya').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${pkg.highlight ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                  >
                    Pilih Paket
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="tanya" className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative transition-colors">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6 leading-tight">Mau Tanya Dulu <br /><span className="text-orange-500">Atau Langsung Order?</span></h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Isi form di samping, tim MurahDev bakal langsung balas lewat WhatsApp buat bahas projek impian Mas. Konsultasi 100% gratis!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-slate-800 p-4 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Konsultasi Gratis</p>
                      <p className="text-sm text-slate-500 text-slate-400">Gak jadi order gak masalah, Mas.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-slate-800 p-4 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Balas Cepat</p>
                      <p className="text-sm text-slate-500 text-slate-400">Respon kilat di jam kerja (09:00 - 21:00).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-slate-900 dark:text-white transition-colors">
                <form onSubmit={handleSendWA} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nama Mas / Mbak</label>
                      <input
                        type="text"
                        placeholder="Contoh: Rijal"
                        required
                        className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none transition-all dark:text-white"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="0812xxxxxx"
                        required
                        className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none transition-all dark:text-white"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Pilih Paket</label>
                    <select
                      className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none transition-all dark:text-white font-medium"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    >
                      <option value="kilat">Paket KILAT (850rb)</option>
                      <option value="usaha">Paket USAHA (1.45jt)</option>
                      <option value="sistem">Paket SISTEM (1.99jt)</option>
                      <option value="tanya">Tanya-tanya Dulu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Pesan Singkat</label>
                    <textarea
                      placeholder="Ceritain dikit butuhnya web buat apa..."
                      rows="3"
                      className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none transition-all dark:text-white"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 dark:shadow-none flex items-center justify-center gap-2 group active:scale-95">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {formSent ? 'Membuka WhatsApp...' : 'Kirim via WhatsApp'}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 italic">Kami menghargai privasi data Mas.</p>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-orange-500 p-1 rounded-md">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg dark:text-white tracking-tighter">MurahDev</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
              Bikin website pro gak harus mahal. Percayakan pada MurahDev, solusi tepat untuk UMKM hemat.
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-400 dark:text-slate-600">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Laravel 11</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Filament v3</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Tailwind CSS</span>
            </div>
          </div>
        </footer>

        {/* Floating WA Button */}
        <a
          href={`https://wa.me/6281234567890?text=Halo MurahDev! Mau tanya dong tentang jasa websitenya.`}
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-sm whitespace-nowrap px-0 group-hover:px-2">Tanya MurahDev</span>
        </a>
      </div>
    </div>
  );
};

export default App;