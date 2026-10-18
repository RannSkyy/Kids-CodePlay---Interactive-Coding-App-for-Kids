import React, { useState } from 'react';
import { AppSimulator } from '../app/AppSimulator';
import { AppScreenId } from '../../types';

interface ScreensShowcaseProps {
  onSelectScreenForSimulator: (screen: AppScreenId) => void;
}

export const ScreensShowcase: React.FC<ScreensShowcaseProps> = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'single'>('gallery');

  return (
    <section id="screens-showcase" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Desain 100% Sesuai Gambar Referensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            6 Layar Aplikasi Kids-CodePlay
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Setiap layar dirancang dengan palet warna lembut, tipografi ramah anak, dan navigasi
            wavy dock yang persis seperti pada acuan desain.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-100 rounded-full mt-6 border border-slate-200">
            <button
              onClick={() => setViewMode('gallery')}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'gallery'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-grid-2 mr-1.5" />
              Tampilkan Semua 6 Layar (Grid)
            </button>
            <button
              onClick={() => setViewMode('single')}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-mobile-screen mr-1.5" />
              Tampilan Perangkat Interaktif
            </button>
          </div>
        </div>

        {/* Simulator in selected view mode */}
        <div className="w-full">
          <AppSimulator viewMode={viewMode} />
        </div>
      </div>
    </section>
  );
};
