import React, { useState } from 'react';
import { GlowingRewardBox } from '../illustrations/AppArt';

interface RoadmapScreenProps {
  onBack: () => void;
  onClaimReward: () => void;
  starsCount?: number;
}

export const RoadmapScreen: React.FC<RoadmapScreenProps> = ({
  onBack,
  onClaimReward,
  starsCount = 10,
}) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    onClaimReward();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-slate-900 text-white overflow-hidden select-none">
      {/* Top Header */}
      <div className="relative z-20 bg-slate-900/90 backdrop-blur-md p-4 pt-5 pb-3 border-b border-slate-800">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              type="button"
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-90 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Kembali"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <h2 className="text-[18px] font-extrabold text-white font-heading tracking-tight">
              You&apos;re doing Great
            </h2>
          </div>

          {/* Level & Stars pill */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            <span className="w-5 h-5 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center">
              3
            </span>
            <span className="text-amber-400 text-xs font-bold flex items-center gap-0.5">
              <span>{starsCount}</span>
              <span>⭐</span>
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-xs font-medium pl-9">
          Keep coding to unlock new powers and lessons
        </p>

        {/* Linear progress bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-amber-400 h-full w-[65%] rounded-full animate-pulse" />
        </div>
      </div>

      {/* Main Roadmap Area with Visual 3D Kid celebration & winding trail */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-blue-950">
          {/* Animated bokeh orbs */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        {/* Kid Character Backdrop illustration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45 scale-110">
          <svg viewBox="0 0 300 400" className="w-full h-full object-cover">
            {/* Cheering Kid in 3D style */}
            <circle cx="150" cy="180" r="85" fill="#4338CA" opacity="0.3" filter="blur(20px)" />
            {/* Raised arms */}
            <path d="M 60 220 Q 80 120 100 80" stroke="#FDBA74" strokeWidth="22" strokeLinecap="round" />
            <path d="M 240 220 Q 220 120 200 80" stroke="#FDBA74" strokeWidth="22" strokeLinecap="round" />
            {/* Head & Joyous smile */}
            <circle cx="150" cy="150" r="55" fill="#FED7AA" />
            <ellipse cx="135" cy="140" rx="8" ry="10" fill="#1E293B" />
            <ellipse cx="165" cy="140" rx="8" ry="10" fill="#1E293B" />
            <path d="M 130 165 Q 150 195 170 165 Z" fill="#DC2626" />
            <rect x="140" y="165" width="20" height="5" fill="white" />
          </svg>
        </div>

        {/* Serpentine S-Curve Path with Milestone Badges */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 380" fill="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
          </defs>

          {/* S-curve path */}
          <path
            d="M 160 340 C 60 310, 80 250, 160 220 C 260 190, 240 120, 160 80"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="4 8"
            opacity="0.85"
          />
        </svg>

        {/* Milestone Nodes */}
        {/* Node 1: Completed */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-sm shadow-lg ring-4 ring-emerald-300">
            ✓
          </div>
          <div className="flex gap-0.5 mt-1">
            <span className="text-xs">⭐</span>
            <span className="text-xs">⭐</span>
            <span className="text-xs">⭐</span>
          </div>
        </div>

        {/* Node 2: Completed */}
        <div className="absolute top-[52%] left-[28%] flex flex-col items-center">
          <div className="w-11 h-11 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-lg ring-4 ring-blue-300">
            2
          </div>
          <div className="flex gap-0.5 mt-1">
            <span className="text-xs">⭐</span>
            <span className="text-xs">⭐</span>
            <span className="text-xs">⭐</span>
          </div>
        </div>

        {/* Node 3: Current Active */}
        <div className="absolute top-[34%] right-[26%] flex flex-col items-center animate-bounce">
          <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shadow-xl ring-4 ring-amber-300">
            3
          </div>
          <span className="text-[10px] font-extrabold bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded-full mt-1">
            NOW
          </span>
        </div>

        {/* Node 4: Golden Trophy Chest Peak */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-900 flex items-center justify-center text-2xl shadow-[0_0_25px_rgba(251,191,36,0.6)] ring-4 ring-yellow-200">
            🏆
          </div>
          <span className="text-[11px] font-bold text-yellow-300 mt-1">Trophy Chest</span>
        </div>

        {/* Bottom Floating Mystery Chest & Claim area */}
        <div className="absolute bottom-3 left-4 right-4 z-30 bg-slate-950/80 backdrop-blur-md rounded-2xl p-2.5 px-4 border border-slate-800 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="relative">
              <GlowingRewardBox className="w-11 h-11" isOpened={claimed} />
              <div className="absolute -top-1 -right-2 flex gap-0.5">
                <span className="bg-amber-400 text-slate-900 font-extrabold text-[9px] px-1 rounded-full">
                  +3
                </span>
                <span className="bg-pink-400 text-white font-extrabold text-[9px] px-1 rounded-full">
                  +3
                </span>
              </div>
            </div>
            <div>
              <p className="text-white text-xs font-bold">Mystery Chest</p>
              <p className="text-slate-400 text-[10px]">Tap claim to unbox reward</p>
            </div>
          </div>

          <button
            onClick={handleClaim}
            type="button"
            className="px-5 py-2 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white font-extrabold text-xs rounded-full shadow-[0_4px_12px_rgba(34,197,94,0.4)] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Claim</span>
            <i className="fa-solid fa-gift text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};
