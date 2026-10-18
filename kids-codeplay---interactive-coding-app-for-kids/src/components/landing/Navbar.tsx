import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadModal,
  onOpenTrialModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = [
        'hero',
        'screens-showcase',
        'app-simulator',
        'interactive-game',
        'curriculum',
        'reviews',
        'pricing',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-0.5 shadow-md flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#232758] tracking-tight font-heading block leading-none">
                Kids-CodePlay
              </span>
              <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">
                Learning By Playing
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => scrollToSection('hero')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'hero'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Beranda
            </button>

            {/* Dropdown for App Exploration */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                type="button"
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  ['screens-showcase', 'app-simulator', 'interactive-game'].includes(activeSection)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>Jelajahi App</span>
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95">
                  <button
                    onClick={() => scrollToSection('screens-showcase')}
                    type="button"
                    className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold">
                      📱
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">6 Layar Referensi</p>
                      <p className="text-[11px] text-slate-400">Desain 1:1 sesuai gambar</p>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('app-simulator')}
                    type="button"
                    className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                      ⚡
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Simulator Interaktif</p>
                      <p className="text-[11px] text-slate-400">Coba navigasi langsung</p>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('interactive-game')}
                    type="button"
                    className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">
                      🎮
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Game &apos;The lost Number&apos;</p>
                      <p className="text-[11px] text-slate-400">Puzzle coding interaktif</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('curriculum')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'curriculum'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Kurikulum
            </button>

            <button
              onClick={() => scrollToSection('reviews')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'reviews'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Ulasan
            </button>

            <button
              onClick={() => scrollToSection('pricing')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'pricing'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Harga
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'contact'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Kontak
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenTrialModal}
              type="button"
              className="px-4 py-2 text-xs font-extrabold text-blue-600 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
            >
              Coba Gratis
            </button>

            <button
              onClick={onOpenDownloadModal}
              type="button"
              className="px-5 py-2.5 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-95 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-[0_4px_14px_rgba(76,139,245,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <i className="fa-solid fa-download text-xs" />
              <span>Unduh Aplikasi</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDownloadModal}
              type="button"
              className="sm:hidden px-3 py-1.5 bg-[#4C8BF5] text-white text-xs font-bold rounded-full"
            >
              Unduh
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-2">
            {[
              { id: 'hero', label: '🏠 Beranda' },
              { id: 'screens-showcase', label: '📱 6 Layar Referensi Asli' },
              { id: 'app-simulator', label: '⚡ Simulator Interaktif' },
              { id: 'interactive-game', label: '🎮 Game Coding Langsung' },
              { id: 'curriculum', label: '📚 Kurikulum & Tahapan' },
              { id: 'reviews', label: '⭐ Ulasan Orang Tua' },
              { id: 'pricing', label: '💎 Pilihan Paket & Harga' },
              { id: 'contact', label: '✉️ Hubungi Kami' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                type="button"
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                type="button"
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Daftar Uji Coba Gratis
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal();
                }}
                type="button"
                className="w-full py-3 bg-[#4C8BF5] text-white font-extrabold text-xs rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-download text-xs" />
                <span>Unduh Kids-CodePlay Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
