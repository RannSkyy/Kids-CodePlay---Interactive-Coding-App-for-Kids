import React, { useState } from 'react';
import { AppScreenId } from '../../types';
import { WelcomeScreen } from './WelcomeScreen';
import { HomeScreen } from './HomeScreen';
import { GameScreen } from './GameScreen';
import { RoadmapScreen } from './RoadmapScreen';
import { ProfileScreen } from './ProfileScreen';
import { RewardModal } from './RewardModal';
import { BottomNav } from './BottomNav';

interface AppSimulatorProps {
  initialScreen?: AppScreenId;
  viewMode?: 'single' | 'gallery';
  onScreenChange?: (screen: AppScreenId) => void;
}

export const AppSimulator: React.FC<AppSimulatorProps> = ({
  initialScreen = 'welcome',
  viewMode = 'single',
  onScreenChange,
}) => {
  const [currentScreen, setCurrentScreen] = useState<AppScreenId>(initialScreen);
  const [starsCount, setStarsCount] = useState(10);

  const navigateTo = (screen: AppScreenId) => {
    setCurrentScreen(screen);
    if (onScreenChange) onScreenChange(screen);
  };

  const handleGameWin = () => {
    setStarsCount((prev) => prev + 3);
    navigateTo('reward');
  };

  const handleClaimChest = () => {
    setStarsCount((prev) => prev + 3);
    navigateTo('reward');
  };

  // Helper to render screen content
  const renderScreenContent = (screenId: AppScreenId) => {
    switch (screenId) {
      case 'welcome':
        return <WelcomeScreen onStart={() => navigateTo('home')} />;
      case 'home':
        return (
          <HomeScreen
            starsCount={starsCount}
            onPlayGame={() => navigateTo('game')}
            onOpenRoadmap={() => navigateTo('progress')}
            onOpenProfile={() => navigateTo('profile')}
          />
        );
      case 'game':
        return (
          <GameScreen
            onBack={() => navigateTo('home')}
            onNextLesson={() => navigateTo('progress')}
            onSuccessReward={handleGameWin}
          />
        );
      case 'progress':
        return (
          <RoadmapScreen
            starsCount={starsCount}
            onBack={() => navigateTo('home')}
            onClaimReward={handleClaimChest}
          />
        );
      case 'profile':
        return <ProfileScreen onBack={() => navigateTo('home')} />;
      case 'reward':
        return (
          <RewardModal
            onClose={() => navigateTo('home')}
            onContinue={() => navigateTo('progress')}
          />
        );
      default:
        return <WelcomeScreen onStart={() => navigateTo('home')} />;
    }
  };

  // If in Gallery Mode, render the 6 screens in responsive layout
  if (viewMode === 'gallery') {
    const screensList: { id: AppScreenId; title: string; subtitle: string }[] = [
      { id: 'welcome', title: '1. Onboarding Splash', subtitle: "Kids-CodePlay Welcome" },
      { id: 'home', title: '2. Home Dashboard', subtitle: 'Hello Star & Quests' },
      { id: 'game', title: '3. Coding Game', subtitle: 'The lost Number' },
      { id: 'progress', title: '4. Level Roadmap', subtitle: "You're doing Great" },
      { id: 'profile', title: '5. Student Profile', subtitle: 'Star Stephanie Stats' },
      { id: 'reward', title: '6. Reward Celebration', subtitle: "Wow!! You've made it" },
    ];

    return (
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
          {screensList.map((sc) => (
            <div key={sc.id} className="flex flex-col items-center">
              <div className="mb-3 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {sc.title}
                </span>
                <p className="text-xs text-slate-500 font-semibold mt-1">{sc.subtitle}</p>
              </div>

              {/* iPhone Mockup Frame */}
              <div className="relative w-[300px] h-[610px] bg-slate-900 rounded-[44px] p-2.5 shadow-[0_25px_60px_-15px_rgba(30,41,59,0.3)] ring-1 ring-slate-800 flex flex-col justify-between">
                {/* Outer bezel reflection */}
                <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden flex flex-col justify-between border border-slate-200/50">
                  {/* Status Bar */}
                  <div className="h-9 px-6 pt-2 flex items-center justify-between text-[11px] font-bold z-50 select-none bg-transparent">
                    <span className={sc.id === 'progress' ? 'text-white' : 'text-slate-900'}>
                      9:41
                    </span>
                    <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                    <div
                      className={`flex items-center gap-1.5 ${
                        sc.id === 'progress' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      <i className="fa-solid fa-signal text-[9px]" />
                      <i className="fa-solid fa-wifi text-[9px]" />
                      <i className="fa-solid fa-battery-full text-[10px]" />
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="flex-1 overflow-hidden relative">
                    {renderScreenContent(sc.id)}
                  </div>

                  {/* Bottom Bar if applicable */}
                  <BottomNav currentScreen={sc.id} onNavigate={navigateTo} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Single Interactive Phone Frame
  return (
    <div className="flex flex-col items-center">
      {/* Quick Screen Pill Switchers */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center mb-5 max-w-xl mx-auto px-2">
        <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">Layar:</span>
        {[
          { id: 'welcome', label: '1. Welcome' },
          { id: 'home', label: '2. Beranda' },
          { id: 'game', label: '3. Game Puzzle' },
          { id: 'progress', label: '4. Roadmap' },
          { id: 'profile', label: '5. Profil' },
          { id: 'reward', label: '6. Hadiah' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigateTo(tab.id as AppScreenId)}
            type="button"
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currentScreen === tab.id
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Realistic Mobile Device Frame */}
      <div className="relative w-[320px] sm:w-[350px] h-[670px] bg-slate-900 rounded-[50px] p-3 shadow-[0_30px_70px_-15px_rgba(30,41,59,0.35)] ring-2 ring-slate-800 transition-all">
        {/* Device screen wrapper */}
        <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden flex flex-col justify-between border border-slate-200/50">
          {/* iOS Status Bar */}
          <div className="h-9 px-6 pt-2 flex items-center justify-between text-[11px] font-bold z-50 select-none bg-transparent">
            <span className={currentScreen === 'progress' ? 'text-white' : 'text-slate-900'}>
              9:41
            </span>
            {/* Dynamic Island */}
            <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto" />
            <div
              className={`flex items-center gap-1.5 ${
                currentScreen === 'progress' ? 'text-white' : 'text-slate-900'
              }`}
            >
              <i className="fa-solid fa-signal text-[9px]" />
              <i className="fa-solid fa-wifi text-[9px]" />
              <i className="fa-solid fa-battery-full text-[10px]" />
            </div>
          </div>

          {/* Active Screen */}
          <div className="flex-1 overflow-hidden relative">
            {renderScreenContent(currentScreen)}
          </div>

          {/* Bottom Bar */}
          <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
        </div>
      </div>
    </div>
  );
};
