import React, { useState } from 'react';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownloadModal,
  onOpenTrialModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      alert('Masukkan alamat email yang valid.');
      return;
    }
    setNewsletterSubscribed(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2248] text-white pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-xl shadow-md">
                🚀
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-heading">
                Kids-CodePlay
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Aplikasi edukasi coding ramah anak nomor 1 di Indonesia. Mengubah rasa ingin tahu dan
              imajinasi anak menjadi baris logika kode nyata dengan cara yang menyenangkan.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: 'fa-brands fa-instagram', href: 'https://instagram.com' },
                { icon: 'fa-brands fa-youtube', href: 'https://youtube.com' },
                { icon: 'fa-brands fa-tiktok', href: 'https://tiktok.com' },
                { icon: 'fa-brands fa-facebook', href: 'https://facebook.com' },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors flex items-center justify-center text-xs text-white"
                  aria-label="Social Link"
                >
                  <i className={soc.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Eksplorasi
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('screens-showcase')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  6 Layar Asli
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('app-simulator')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Simulator Interaktif
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('interactive-game')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Game &apos;The lost Number&apos;
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('curriculum')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Kurikulum
                </button>
              </li>
            </ul>
          </div>

          {/* Parents & Teachers */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Orang Tua & Guru
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Ulasan & Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Paket Langganan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Tanya Jawab (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Hubungi Konsultan
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrialModal}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-amber-300 font-bold"
                >
                  Daftar Uji Coba Gratis
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & App Download */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Tips Coding Anak Mingguan
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              Dapatkan ide aktivitas logika offline seru dan panduan pengasuhan digital gratis via
              email setiap Sabtu pagi.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-emerald-900/60 border border-emerald-500 rounded-xl text-emerald-200 text-xs font-bold flex items-center gap-2">
                <span>✓</span>
                <span>Terima kasih! Anda telah terdaftar di buletin mingguan kami.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email orang tua..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Langganan
                </button>
              </form>
            )}

            {/* App Store Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors text-left cursor-pointer"
              >
                <i className="fa-brands fa-apple text-xl text-white" />
                <div>
                  <p className="text-[9px] text-slate-400 uppercase leading-none">Unduh di</p>
                  <p className="text-xs font-bold text-white leading-tight">App Store</p>
                </div>
              </button>

              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors text-left cursor-pointer"
              >
                <i className="fa-brands fa-google-play text-xl text-white" />
                <div>
                  <p className="text-[9px] text-slate-400 uppercase leading-none">Tersedia di</p>
                  <p className="text-xs font-bold text-white leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Kids-CodePlay Technologies Ltd. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi Anak (COPPA)</span>
            <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-white cursor-pointer">Keamanan Siber</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
