import React from 'react';
import { AppScreenId } from '../../types';

interface BottomNavProps {
  currentScreen: AppScreenId;
  onNavigate: (screen: AppScreenId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  // Only render on main screens: home, progress/game, profile
  if (currentScreen === 'welcome' || currentScreen === 'reward') {
    return null;
  }

  const isHomeActive = currentScreen === 'home';
  const isProgressActive = currentScreen === 'progress' || currentScreen === 'game';
  const isProfileActive = currentScreen === 'profile';

  return (
    <div className="relative w-full z-40">
      {/* Curved wave dock matching reference */}
      <div className="bg-[#4C8BF5] text-white px-6 pt-3 pb-4 flex items-center justify-around rounded-t-[28px] shadow-[0_-4px_20px_rgba(76,139,245,0.25)]">
        {/* Home Item */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 transition-all cursor-pointer ${
            isHomeActive ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-100'
          }`}
          aria-label="Home"
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isHomeActive ? 'bg-white text-[#4C8BF5] shadow-md' : 'text-white'
            }`}
          >
            <i className="fa-solid fa-house text-sm" />
          </div>
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* Progress Item (Elevated circular bubble in center like reference) */}
        <button
          type="button"
          onClick={() => onNavigate('progress')}
          className={`relative -top-3 flex flex-col items-center gap-1 transition-all cursor-pointer ${
            isProgressActive ? 'opacity-100 scale-110' : 'opacity-85 hover:opacity-100'
          }`}
          aria-label="Progress"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isProgressActive
                ? 'bg-white text-[#4C8BF5] shadow-lg ring-4 ring-[#4C8BF5]/30'
                : 'bg-white/20 text-white'
            }`}
          >
            <i className="fa-solid fa-stairs text-base" />
          </div>
          <span className="text-[10px] font-bold">Progress</span>
        </button>

        {/* Profile Item */}
        <button
          type="button"
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center gap-1 transition-all cursor-pointer ${
            isProfileActive ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-100'
          }`}
          aria-label="Profile"
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isProfileActive ? 'bg-white text-[#4C8BF5] shadow-md' : 'text-white'
            }`}
          >
            <i className="fa-solid fa-user text-sm" />
          </div>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
};
