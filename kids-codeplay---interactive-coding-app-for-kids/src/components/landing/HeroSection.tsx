import React from 'react';
import { WelcomeBenchKids } from '../illustrations/AppArt';

interface HeroSectionProps {
  onScrollToSimulator: () => void;
  onScrollToScreens: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToSimulator,
  onScrollToScreens,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-[#EBF3FF] via-[#F0F6FF] to-white overflow-hidden"
    >
      {/* Decorative floating blur shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-pink-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Action CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill trust badges */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-xs mb-6 animate-float-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black text-blue-700 tracking-wide">
                🏆 APLIKASI CODING ANAK NO. 1 DI INDONESIA
              </span>
            </div>

            {/* Main Catchy Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#232758] tracking-tight leading-[1.12] mb-6 font-heading">
              Let&apos;s turn your ideas into code,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500">
                one fun challenge
              </span>{' '}
              at a time!
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Bimbing si kecil belajar computational thinking tanpa stres. Melalui visual block
              coding, petualangan quest &apos;The lost Number&apos;, dan reward peti misteri yang
              seru, anak belajar logika pemrograman sejak dini layaknya bermain game!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <button
                onClick={onScrollToSimulator}
                type="button"
                className="w-full sm:w-auto px-7 py-4 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-95 text-white font-extrabold text-base rounded-full shadow-[0_10px_25px_rgba(76,139,245,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <span>Coba Simulator Interaktif</span>
                <i className="fa-solid fa-play text-xs transition-transform group-hover:scale-125" />
              </button>

              <button
                onClick={onScrollToScreens}
                type="button"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 active:scale-95 text-[#232758] font-extrabold text-base rounded-full border border-slate-200 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-mobile-screen text-blue-600" />
                <span>Lihat 6 Layar Referensi</span>
              </button>
            </div>

            {/* Stats row */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#232758] font-heading">
                  500+
                </p>
                <p className="text-xs text-slate-500 font-semibold">Tantangan Logic</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">
                  100%
                </p>
                <p className="text-xs text-slate-500 font-semibold">Kid-Safe & No Ads</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-heading">
                  4.9 ⭐
                </p>
                <p className="text-xs text-slate-500 font-semibold">Rating Play Store</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Center Card with Vector Artwork matching Screen 1 */}
            <div className="relative w-full max-w-[420px] bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-blue-100 flex flex-col items-center">
              {/* Header wave bar */}
              <div className="w-full bg-[#4C8BF5] rounded-2xl p-4 text-white flex items-center justify-between mb-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                    💻
                  </div>
                  <div>
                    <p className="text-xs font-black">Kids-CodePlay Studio</p>
                    <p className="text-[10px] text-white/80">Petualangan Logika Cilik</p>
                  </div>
                </div>
                <span className="bg-white/20 px-2.5 py-1 rounded-full text-xs font-bold text-amber-300">
                  10 ⭐
                </span>
              </div>

              {/* Bench kids illustration */}
              <div className="w-full py-2 flex items-center justify-center drop-shadow-md">
                <WelcomeBenchKids className="w-full max-h-[220px]" />
              </div>

              {/* Floating interactive chips */}
              <div className="w-full mt-4 p-3 bg-blue-50/70 rounded-2xl flex items-center justify-between border border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-[#232758]">
                    Layar 1 s/d 6 Siap Dimainkan!
                  </span>
                </div>
                <button
                  onClick={onScrollToSimulator}
                  type="button"
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-lg cursor-pointer"
                >
                  Uji Coba
                </button>
              </div>
            </div>

            {/* Floating Achievement Badge 1 */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-delayed z-20">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-800">15 Badges</p>
                <p className="text-[10px] text-slate-400 font-semibold">Terkoleksi Stephanie</p>
              </div>
            </div>

            {/* Floating Achievement Badge 2 */}
            <div className="absolute -top-6 -right-2 sm:-right-6 bg-white rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-slow z-20">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-xl">
                🧩
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-800">The lost Number</p>
                <p className="text-[10px] text-emerald-600 font-bold">Quest Level 3 Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
