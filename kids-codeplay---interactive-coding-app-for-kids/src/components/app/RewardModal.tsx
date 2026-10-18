import React, { useEffect } from 'react';
import { GlowingRewardBox } from '../illustrations/AppArt';
import confetti from 'canvas-confetti';

interface RewardModalProps {
  onClose: () => void;
  onContinue: () => void;
}

export const RewardModal: React.FC<RewardModalProps> = ({ onClose, onContinue }) => {
  useEffect(() => {
    // Trigger multi-angle celebration confetti burst
    const end = Date.now() + 1.8 * 1000;
    const colors = ['#FF6699', '#FFAE1A', '#22C55E', '#3B82F6', '#8B5CF6'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-white text-slate-800 overflow-hidden select-none p-6">
      {/* Top back button */}
      <div className="flex items-center justify-between w-full">
        <button
          onClick={onClose}
          type="button"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          aria-label="Kembali"
        >
          <i className="fa-solid fa-chevron-left text-xs" />
        </button>
        <div className="w-8" />
      </div>

      {/* Center Reward Artwork */}
      <div className="relative flex-1 flex flex-col items-center justify-center -mt-6">
        {/* Floating confetti dots in background */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-10 left-12 w-2.5 h-6 bg-pink-500 rounded-full rotate-45 animate-float-slow" />
          <span className="absolute top-16 right-14 w-2.5 h-6 bg-emerald-400 rounded-full -rotate-12 animate-float-delayed" />
          <span className="absolute top-28 left-6 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
          <span className="absolute bottom-32 left-10 w-2.5 h-6 bg-blue-500 rounded-full -rotate-45 animate-float-slow" />
          <span className="absolute bottom-28 right-10 w-2.5 h-6 bg-purple-500 rounded-full rotate-12 animate-float-delayed" />
          <span className="absolute bottom-40 right-6 w-3 h-3 bg-red-400 rounded-full" />
        </div>

        {/* 3D Glowing Reward Box */}
        <div className="relative z-10 animate-float-slow">
          <GlowingRewardBox className="w-48 h-48 drop-shadow-2xl" isOpened={true} />
        </div>

        {/* Text lockup from reference */}
        <div className="text-center mt-6 z-10">
          <h2 className="text-[26px] font-extrabold text-[#1E293B] font-heading tracking-tight mb-2 leading-tight">
            Wow!! <br />
            You&apos;ve made it.
          </h2>

          <p className="text-slate-500 text-sm font-medium max-w-[240px] mx-auto leading-relaxed">
            Congratulations you received a new badge.
          </p>
        </div>
      </div>

      {/* Action CTA */}
      <div className="w-full flex flex-col items-center gap-3 pb-4 z-20">
        <button
          onClick={onContinue}
          type="button"
          className="w-full max-w-[270px] py-3.5 px-6 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-95 text-white font-extrabold text-sm rounded-full shadow-[0_8px_20px_rgba(76,139,245,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Pasang Lencana Baru!</span>
          <i className="fa-solid fa-star text-amber-300 text-xs" />
        </button>

        <button
          onClick={onClose}
          type="button"
          className="text-xs text-slate-400 hover:text-slate-600 font-bold transition-colors cursor-pointer"
        >
          Nanti Saja
        </button>
      </div>
    </div>
  );
};
