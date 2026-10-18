import React, { useState } from 'react';

interface CurriculumLevel {
  level: number;
  title: string;
  age: string;
  color: string;
  icon: string;
  badge: string;
  description: string;
  skills: string[];
}

const levels: CurriculumLevel[] = [
  {
    level: 1,
    title: 'Dasar & Navigasi Logika',
    age: 'Usia 5 - 7 Tahun',
    color: 'from-blue-500 to-cyan-500',
    icon: '🧭',
    badge: 'Pemula',
    description:
      'Mengenalkan urutan komputasi pertama melalui puzzle blok warna-warni. Anak belajar Move Forward, Turn Right, dan melacak jalur.',
    skills: ['Urutan Langkah (Sequencing)', 'Arah & Orientasi Spasial', 'Problem Solving Sederhana'],
  },
  {
    level: 2,
    title: 'Pengulangan & Loops',
    age: 'Usia 7 - 9 Tahun',
    color: 'from-amber-500 to-orange-500',
    icon: '🔁',
    badge: 'Penjelajah',
    description:
      'Mengurangi jumlah blok dengan logika perulangan. Membangun pola berulang untuk mengumpulkan bintang dengan langkah paling efisien.',
    skills: ['Loop Sederhana (Repeat 2x, 3x)', 'Optimalisasi Baris Kode', 'Pengenalan Algoritma'],
  },
  {
    level: 3,
    title: 'Kondisi & Percabangan',
    age: 'Usia 9 - 11 Tahun',
    color: 'from-pink-500 to-rose-600',
    icon: '⚡',
    badge: 'Mahir',
    description:
      'Membuat keputusan berdasarkan kondisi (If / Else). Mengatasi rintangan dinamis di peta quest dan memecahkan teka-teki logika bercabang.',
    skills: ['Logika If - Then - Else', 'Sensor & Deteksi Hambatan', 'Debugging & Perbaikan Bug'],
  },
  {
    level: 4,
    title: 'Kreator Game & Mini Proyek',
    age: 'Usia 10+ Tahun',
    color: 'from-purple-600 to-indigo-600',
    icon: '🎮',
    badge: 'Master Coder',
    description:
      'Anak dapat merancang aturan permainan mereka sendiri, menambahkan skor, karakter kustom, dan membagikan karyanya kepada teman sekelas.',
    skills: ['Variabel & Poin Skor', 'Fungsi Kustom (Functions)', 'Desain Game 2D Mandiri'],
  },
];

export const CurriculumSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const activeLevelData = levels.find((l) => l.level === selectedLevel) || levels[0];

  return (
    <section id="curriculum" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Jalur Pembelajaran Terstruktur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Kurikulum Berjenjang Sesuai Usia Anak
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Dirancang bersama pakar pedagogi anak dan software engineer untuk memastikan
            pembelajaran berlangsung bertahap, menggembirakan, dan terukur.
          </p>
        </div>

        {/* Level Switcher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {levels.map((lvl) => {
            const isSelected = lvl.level === selectedLevel;
            return (
              <div
                key={lvl.level}
                onClick={() => setSelectedLevel(lvl.level)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-400 shadow-lg scale-102 ring-2 ring-blue-300'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{lvl.icon}</span>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border text-slate-700">
                    Level {lvl.level}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-[#1E293B] font-heading mb-1">
                  {lvl.title}
                </h3>
                <p className="text-xs text-blue-600 font-bold">{lvl.age}</p>
              </div>
            );
          })}
        </div>

        {/* Level Deep-Dive Showcase Box */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activeLevelData.icon}</span>
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                    Level {activeLevelData.level} • {activeLevelData.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                    {activeLevelData.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {activeLevelData.description}
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Keahlian Utama yang Dikuasai:
                </p>
                {activeLevelData.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-black">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-slate-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Preview Badge */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-200 mx-auto flex items-center justify-center text-3xl mb-3 shadow-lg">
                🏅
              </div>
              <h4 className="font-extrabold text-lg mb-1 font-heading">
                Lencana & Sertifikat Terverifikasi
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Setiap kali anak menuntaskan seluruh quest di Level {activeLevelData.level}, sistem
                secara otomatis menerbitkan sertifikat digital dengan nama anak!
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-xs font-bold">
                <span>⭐ Target: 100 Bintang Quest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
