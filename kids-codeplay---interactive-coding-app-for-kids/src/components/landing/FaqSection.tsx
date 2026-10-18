import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Apakah anak saya harus sudah bisa membaca lancar untuk mulai?',
    a: 'Tidak harus! Kids-CodePlay dilengkapi dengan simbol visual berkode warna, ikon aksi intuitif, dan narasi panduan suara. Anak usia 5 tahun ke atas dapat langsung bermain dan memahami konsep navigasi dengan mudah.',
  },
  {
    q: 'Perangkat apa saja yang didukung oleh aplikasi ini?',
    a: 'Kids-CodePlay dapat diakses melalui tablet iPad/Android, smartphone Android/iPhone, serta laptop/komputer melalui browser modern tanpa perlu instalasi aplikasi berat.',
  },
  {
    q: 'Apakah aman untuk anak? Apakah ada iklan atau interaksi chat dengan orang luar?',
    a: '100% Aman. Kids-CodePlay mematuhi standar privasi anak global (COPPA certified). Tidak ada iklan pihak ketiga, tidak ada pembelian tanpa verifikasi orang tua, dan tidak ada obrolan publik terbuka.',
  },
  {
    q: 'Berapa lama waktu belajar ideal per hari?',
    a: 'Kami menyarankan 15 hingga 25 menit per hari. Di dalam aplikasi, orang tua dapat mengaktifkan fitur pembatas waktu otomatis (Daily Screen Time Limit) yang memicu pesan istirahat ramah dari mascot saat waktu habis.',
  },
  {
    q: 'Bagaimana jika anak mengalami kesulitan dalam menyelesaikan level?',
    a: 'Tersedia tombol "Hint" dengan mascot cerdas yang memberikan petunjuk logika langkah demi langkah tanpa langsung memberi tahu jawaban, sehingga anak tetap belajar berpikir kritis.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Semua yang Perlu Anda Ketahui
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Jawaban lengkap untuk pertanyaan yang paling sering diajukan orang tua.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#1E293B] hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="font-heading">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down text-xs" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200 font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
