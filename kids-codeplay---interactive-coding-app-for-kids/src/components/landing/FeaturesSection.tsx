import React from 'react';

const features = [
  {
    icon: '🧩',
    title: 'Visual Block Coding',
    desc: 'Anak menyusun kode seperti bermain balok Lego. Memahami konsep tanpa takut typo atau sintaks rumit.',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    icon: '🎁',
    title: 'Peti Hadiah Misteri & Lencana',
    desc: 'Sistem reward psikologi positif yang memicu rasa ingin tahu anak untuk terus mencoba tantangan baru.',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    icon: '🛡️',
    title: '100% Kid-Safe & Tanpa Iklan',
    desc: 'Lingkungan tertutup tanpa konten luar, tanpa pesan instan asing, dan sepenuhnya sesuai standar privasi anak.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    icon: '📊',
    title: 'Dashboard Pantauan Orang Tua',
    desc: 'Atur batas waktu bermain harian (screen time) dan lihat laporan perkembangan logika berpikir si kecil.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: '🔊',
    title: 'Bimbingan Suara & Petunjuk Cerdas',
    desc: 'Mascot interaktif memberikan petunjuk suara bertahap jika anak mengalami kesulitan dalam memecahkan puzzle.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: '✈️',
    title: 'Bisa Dimainkan Tanpa Internet',
    desc: 'Unduh modul pembelajaran dan mainkan di mobil, pesawat, atau liburan keluarga tanpa memerlukan koneksi data.',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Mengapa Memilih Kids-CodePlay
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Dirancang Khusus untuk Tumbuh Kembang Si Kecil
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Menggabungkan kesenangan bermain video game dengan fondasi ilmu komputer yang kuat untuk
            mempersiapkan masa depan anak.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border transition-transform duration-300 group-hover:scale-110 ${feat.color}`}
                >
                  {feat.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#1E293B] font-heading mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feat.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                <span>Pelajari Lebih Lanjut</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
