import React, { useState } from 'react';
import { PricingPlan } from '../../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Penjelajah Cilik',
    priceMonthly: 0,
    priceAnnually: 0,
    description: 'Cocok untuk mencoba petualangan awal dan mengenal logika kode.',
    features: [
      'Akses 50 Quest Level 1',
      '1 Profil Anak',
      'Puzzle "The lost Number" Dasar',
      'Lencana Digital Pemula',
      'Kompatibel Android & iOS',
    ],
    ctaText: 'Mulai Gratis Sekarang',
  },
  {
    id: 'super-coder',
    name: 'Super Coder',
    priceMonthly: 79000,
    priceAnnually: 63000,
    description: 'Paling favorit! Akses penuh tanpa batas untuk menguasai semua level.',
    features: [
      'Akses Seluruh 500+ Quest (Level 1 - 4)',
      '1 Profil Anak Utama',
      'Semua Peti Hadiah Misteri & Avatar Kustom',
      'Dashboard Analisis Orang Tua Lengkap',
      'Bisa Dimainkan 100% Offline Tanpa Kuota',
      'Sertifikat Resmi Kelulusan Tiap Level',
      'Dukungan Prioritas Guru Pembimbing',
    ],
    isPopular: true,
    ctaText: 'Coba 14 Hari Gratis',
  },
  {
    id: 'family-pack',
    name: 'Paket Keluarga & Sekolah',
    priceMonthly: 149000,
    priceAnnually: 119000,
    description: 'Solusi lengkap untuk keluarga dengan lebih dari satu anak atau kelas kursus.',
    features: [
      'Hingga 4 Profil Anak Terpisah',
      'Akses Seluruh 500+ Quest Lengkap',
      'Multi-device sinkronisasi realtime',
      'Laporan mingguan terpadu untuk orang tua',
      'Akses materi kurikulum tambahan & worksheet cetak',
      'Dukungan VIP & Konsultasi Edukasi',
    ],
    ctaText: 'Pilih Paket Keluarga',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 bg-[#F1F5F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Investasi Edukasi Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Pilihan Paket Berlangganan Fleksibel
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Semua paket dilengkapi jaminan kepuasan 30 hari uang kembali tanpa syarat.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-white rounded-full mt-8 border border-slate-200 shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              type="button"
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bulanan
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              type="button"
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Tahunan</span>
              <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                HEMAT 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;
            const formattedPrice =
              price === 0
                ? 'Gratis'
                : `Rp ${price.toLocaleString('id-ID')}`;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'border-2 border-blue-600 shadow-2xl scale-102 lg:-translate-y-2 ring-4 ring-blue-100'
                    : 'border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                    Paling Diminati ⭐
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-extrabold text-[#1E293B] font-heading mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pt-2 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] font-heading">
                        {formattedPrice}
                      </span>
                      {price > 0 && (
                        <span className="text-slate-400 text-xs font-semibold">
                          / bulan
                        </span>
                      )}
                    </div>
                    {isAnnual && price > 0 && (
                      <p className="text-[11px] text-emerald-600 font-bold mt-1">
                        Ditagihkan tahunan (Rp {(price * 12).toLocaleString('id-ID')}/thn)
                      </p>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Fasilitas yang Didapat:
                    </p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="font-semibold leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan, isAnnual)}
                  type="button"
                  className={`w-full py-3.5 px-6 rounded-full font-extrabold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-95 text-white shadow-[0_8px_20px_rgba(76,139,245,0.4)]'
                      : 'bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-xs" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
