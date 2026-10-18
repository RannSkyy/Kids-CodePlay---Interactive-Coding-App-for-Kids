import React, { useState } from 'react';
import {
  StarStephanieAvatar,
  StatTargetIcon,
  StatHeartIcon,
  StatPuzzleIcon,
  StatNotebookIcon,
  StatLegoIcon,
  StatGiftBadgeIcon,
} from '../illustrations/AppArt';
import { UserStats } from '../../types';

interface ProfileScreenProps {
  onBack: () => void;
  stats?: UserStats;
}

const defaultStats: UserStats = {
  stars: 15,
  coins: 450,
  completedStages: 3,
  firstTry: 20,
  helpsMade: 9,
  hintsGiven: 3,
  areasCompleted: 1,
  badges: 15,
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onBack,
  stats = defaultStats,
}) => {
  const [userName, setUserName] = useState('Star Stephanie');
  const [isEditing, setIsEditing] = useState(false);
  const [activeMetricModal, setActiveMetricModal] = useState<string | null>(null);

  const metrics = [
    {
      id: 'firstTry',
      label: 'First Try',
      value: stats.firstTry,
      icon: <StatTargetIcon className="w-9 h-9" />,
      detail: 'Berhasil menyelesaikan puzzle pada percobaan pertama!',
    },
    {
      id: 'helpsMade',
      label: 'Helps Made',
      value: stats.helpsMade,
      icon: <StatHeartIcon className="w-9 h-9" />,
      detail: 'Membantu teman sekelas memecahkan bug logika.',
    },
    {
      id: 'hintsGiven',
      label: 'Hints Given',
      value: stats.hintsGiven,
      icon: <StatPuzzleIcon className="w-9 h-9" />,
      detail: 'Jumlah bantuan petunjuk yang dibuka selama belajar.',
    },
    {
      id: 'areasCompleted',
      label: 'Areas Completed',
      value: stats.areasCompleted,
      icon: <StatNotebookIcon className="w-9 h-9" />,
      detail: 'Menyelesaikan modul 1: Dasar Navigasi & Algoritma Sederhana.',
    },
    {
      id: 'completedStage',
      label: 'Completed Stage',
      value: stats.completedStages,
      icon: <StatLegoIcon className="w-9 h-9" />,
      detail: 'Telah menaklukkan 3 tahap dunia pemrograman visual.',
    },
    {
      id: 'badge',
      label: 'Badge',
      value: stats.badges,
      icon: <StatGiftBadgeIcon className="w-9 h-9" />,
      detail: '15 lencana kehormatan pembuat kode cilik telah dikoleksi!',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8FAFC] text-slate-800 overflow-y-auto no-scrollbar select-none">
      {/* Top Header */}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onBack}
            type="button"
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            aria-label="Kembali"
          >
            <i className="fa-solid fa-chevron-left text-xs" />
          </button>
          <h2 className="text-[19px] font-extrabold text-[#1E293B] font-heading tracking-tight">
            Profile
          </h2>
          <div className="w-7" /> {/* spacer for centered title */}
        </div>

        {/* Big Avatar Presentation */}
        <div className="flex flex-col items-center mt-2 mb-4">
          <StarStephanieAvatar className="w-24 h-24 mb-2" />

          {/* Name & Edit */}
          <div className="flex items-center gap-1.5">
            {isEditing ? (
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-2 py-0.5 text-sm font-extrabold text-[#1E293B] bg-white border border-blue-400 rounded-md outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-md font-bold cursor-pointer"
                >
                  Simpan
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[19px] font-extrabold text-[#1E293B] font-heading">
                  {userName}
                </h3>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer text-xs"
                  title="Ubah Nama"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                </button>
              </>
            )}
          </div>
          <span className="text-[11px] text-slate-400 font-semibold mt-0.5">
            Level 3 Junior Code Master
          </span>
        </div>
      </div>

      {/* 6-Grid Metric Cards */}
      <div className="flex-1 px-4 pb-6">
        <div className="grid grid-cols-3 gap-2.5">
          {metrics.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMetricModal(item.label)}
              className="bg-white rounded-2xl p-2.5 pt-3.5 flex flex-col items-center justify-between border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group active:scale-95"
            >
              <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-slate-500 text-center leading-tight mb-2 h-6 flex items-center justify-center">
                {item.label}
              </span>
              <div className="w-full bg-slate-100/80 rounded-lg py-1 text-center font-extrabold text-slate-800 text-xs">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric Detail Modal */}
      {activeMetricModal && (
        <div className="absolute inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-[280px] w-full text-center shadow-xl border border-slate-100 animate-in fade-in zoom-in-95">
            <h4 className="font-extrabold text-slate-800 text-base mb-1 font-heading">
              {activeMetricModal}
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              {metrics.find((m) => m.label === activeMetricModal)?.detail}
            </p>
            <button
              onClick={() => setActiveMetricModal(null)}
              type="button"
              className="w-full py-2 bg-[#4C8BF5] text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer hover:bg-[#3B7BE8]"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
