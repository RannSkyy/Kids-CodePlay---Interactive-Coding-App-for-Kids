import React from 'react';
import { WelcomeBenchKids } from '../illustrations/AppArt';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#4C8BF5] text-slate-800 overflow-hidden select-none">
      {/* Top area with sky blue background and bench kids */}
      <div className="relative flex-1 flex flex-col items-center justify-center pt-8 px-4">
        {/* Decorative cloud shapes */}
        <div className="absolute top-6 left-6 w-12 h-6 bg-white/20 rounded-full blur-[1px]" />
        <div className="absolute top-10 right-8 w-16 h-7 bg-white/25 rounded-full blur-[1px]" />

        {/* Kids on bench illustration */}
        <div className="relative z-10 w-full max-w-[340px] drop-shadow-md">
          <WelcomeBenchKids className="w-full h-auto max-h-[300px]" />
        </div>
      </div>

      {/* Bottom white curved card */}
      <div className="relative z-20 bg-white rounded-t-[40px] px-7 pt-9 pb-10 shadow-[0_-10px_35px_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
        {/* Subtle decorative handle */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mb-6 mx-auto" />

        <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#232758] tracking-tight leading-tight mb-3 font-heading">
          Kids-CodePlay
        </h1>

        <p className="text-[#555C75] text-[15px] sm:text-[16px] leading-relaxed max-w-[280px] mb-8 font-medium">
          Let&apos;s turn your ideas into code, one fun challenge at a time!
        </p>

        <button
          onClick={onStart}
          type="button"
          className="w-full max-w-[290px] py-4 px-8 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-[0.98] text-white font-bold text-[17px] rounded-full shadow-[0_8px_20px_rgba(76,139,245,0.4)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
        >
          <span>Let&apos;s Get Started</span>
          <i className="fa-solid fa-arrow-right text-sm transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        {/* Home indicator bar */}
        <div className="w-32 h-1 bg-slate-900/80 rounded-full mt-7" />
      </div>
    </div>
  );
};
