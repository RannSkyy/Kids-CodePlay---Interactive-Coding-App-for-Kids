import React, { useState } from 'react';
import { KidComputerDesk, BoyOnBooks, KidCoderCard } from '../illustrations/AppArt';

interface HomeScreenProps {
  onPlayGame: () => void;
  onOpenRoadmap: () => void;
  onOpenProfile: () => void;
  starsCount?: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onPlayGame,
  onOpenRoadmap,
  onOpenProfile,
  starsCount = 10,
}) => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8FAFC] text-slate-800 overflow-y-auto no-scrollbar select-none">
      {/* Top Header with Sky Blue Wave background */}
      <div className="relative bg-[#4C8BF5] text-white pt-6 pb-9 px-5 shadow-sm rounded-b-[32px]">
        {/* Subtle wavy decorative underlay */}
        <div className="flex items-center justify-between mb-2">
          {/* User profile snippet */}
          <div 
            onClick={onOpenProfile} 
            className="flex items-center gap-3 cursor-pointer group"
            title="Lihat Profil"
          >
            <div className="w-11 h-11 rounded-full bg-indigo-700 ring-2 ring-white/80 p-0.5 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <span className="text-xl">🧑🏾‍💻</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[17px] tracking-tight">Hello Star</span>
                <span className="text-base animate-bounce">👋</span>
              </div>
              <p className="text-white/85 text-xs font-medium">Ready to code today?</p>
            </div>
          </div>

          {/* Stars & Notification Bell */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-inner">
              <span>{starsCount}</span>
              <span className="text-amber-300 text-sm">⭐</span>
            </div>

            <button
              type="button"
              onClick={() => setShowNotificationModal(true)}
              className="relative w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center transition-colors cursor-pointer"
              title="Notifikasi Quest"
              aria-label="Notifikasi"
            >
              <i className="fa-solid fa-bell text-sm" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400 ring-2 ring-[#4C8BF5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Quest Cards Container */}
      <div className="flex-1 px-4 py-4 space-y-4">
        {/* Card 1: Light Cyan Quest Card (Play Game) */}
        <div className="bg-[#E3F2FD] rounded-2xl p-4 sm:p-5 border border-sky-100 shadow-[0_4px_16px_rgba(56,189,248,0.12)] flex items-center justify-between gap-3 hover:shadow-md transition-shadow">
          <div className="flex-1 pr-1">
            <p className="text-[#1E293B] text-[13px] sm:text-[14px] font-bold leading-snug mb-3">
              Tap a block to start a new quest-fun awaits you!
            </p>
            <button
              onClick={onPlayGame}
              type="button"
              className="px-5 py-2.5 bg-[#FFB400] hover:bg-[#F59E0B] active:scale-95 text-white font-extrabold text-xs sm:text-[13px] rounded-full shadow-[0_4px_12px_rgba(245,158,11,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <i className="fa-solid fa-gamepad text-xs" />
              <span>Play Game</span>
            </button>
          </div>
          <div className="w-24 sm:w-28 flex-shrink-0 flex items-center justify-center">
            <KidComputerDesk className="w-full h-auto drop-shadow-sm" />
          </div>
        </div>

        {/* Card 2: Light Lavender Card (Start Lesson / Stars) */}
        <div className="bg-[#EBE6FF] rounded-2xl p-4 sm:p-5 border border-purple-100 shadow-[0_4px_16px_rgba(139,92,246,0.1)] flex items-center justify-between gap-3 hover:shadow-md transition-shadow">
          <div className="w-20 sm:w-24 flex-shrink-0 flex items-center justify-center">
            <BoyOnBooks className="w-full h-auto drop-shadow-sm" />
          </div>
          <div className="flex-1 pl-1">
            <p className="text-[#1E293B] text-[13px] sm:text-[14px] font-bold leading-snug mb-3">
              You&apos;re just 3 stars away from your next level-let&apos;s get coding!
            </p>
            <button
              onClick={onOpenRoadmap}
              type="button"
              className="px-5 py-2.5 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-95 text-white font-extrabold text-xs sm:text-[13px] rounded-full shadow-[0_4px_12px_rgba(76,139,245,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <i className="fa-solid fa-book-open text-xs" />
              <span>Start Lesson</span>
            </button>
          </div>
        </div>

        {/* Card 3: Light Pink / Coral Card (Continue Lesson / Badges) */}
        <div className="bg-[#FFE5EC] rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-[0_4px_16px_rgba(244,63,94,0.1)] flex items-center justify-between gap-3 hover:shadow-md transition-shadow">
          <div className="flex-1 pr-1">
            <p className="text-[#1E293B] text-[13px] sm:text-[14px] font-bold leading-snug mb-3">
              Choose a lesson below and earn your next badge!
            </p>
            <button
              onClick={onOpenRoadmap}
              type="button"
              className="px-5 py-2.5 bg-[#FFB400] hover:bg-[#F59E0B] active:scale-95 text-white font-extrabold text-xs sm:text-[13px] rounded-full shadow-[0_4px_12px_rgba(245,158,11,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <i className="fa-solid fa-medal text-xs" />
              <span>Continue Lesson</span>
            </button>
          </div>
          <div className="w-20 sm:w-24 flex-shrink-0 flex items-center justify-center">
            <KidCoderCard className="w-full h-auto drop-shadow-sm" />
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="absolute inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-[280px] w-full text-center shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-500 mx-auto flex items-center justify-center text-xl mb-3">
              🔔
            </div>
            <h4 className="font-extrabold text-[#1E293B] text-base mb-1 font-heading">Pemberitahuan Quest</h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Ada 2 quest baru yang siap diselesaikan hari ini! Dapatkan +6 ⭐ tambahan.
            </p>
            <button
              onClick={() => setShowNotificationModal(false)}
              type="button"
              className="w-full py-2 bg-[#4C8BF5] text-white font-bold text-xs rounded-xl hover:bg-[#3B7BE8] transition-colors cursor-pointer"
            >
              Siap Bermain!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
