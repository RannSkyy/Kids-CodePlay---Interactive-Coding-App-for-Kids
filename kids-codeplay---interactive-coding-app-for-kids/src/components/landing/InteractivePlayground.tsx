import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MascotPointingKid, GlowingRewardBox } from '../illustrations/AppArt';

type BlockType = 'Move Forward' | 'Turn Right' | 'Turn Left' | 'Repeat 2x';

export const InteractivePlayground: React.FC = () => {
  const [codeSequence, setCodeSequence] = useState<BlockType[]>([]);
  const [robotPos, setRobotPos] = useState({ x: 0, y: 0, dir: 'right' });
  const [visitedNodes, setVisitedNodes] = useState<number[]>([1]);
  const [isRunning, setIsRunning] = useState(false);
  const [gameStatus, setGameStatus] = useState<'idle' | 'running' | 'won' | 'fail'>('idle');

  // Simple procedural Web Audio chime
  const playChime = (freq = 523.25) => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio fallback silent
    }
  };

  const handleAddBlock = (block: BlockType) => {
    if (isRunning) return;
    if (codeSequence.length >= 6) return;
    playChime(440);
    setCodeSequence([...codeSequence, block]);
  };

  const handleRemoveBlock = (index: number) => {
    if (isRunning) return;
    setCodeSequence(codeSequence.filter((_, i) => i !== index));
  };

  const handleResetGame = () => {
    setCodeSequence([]);
    setRobotPos({ x: 0, y: 0, dir: 'right' });
    setVisitedNodes([1]);
    setIsRunning(false);
    setGameStatus('idle');
  };

  const handleExecuteGame = () => {
    if (isRunning) return;
    if (codeSequence.length === 0) {
      alert('Pilih beberapa blok perintah dulu di sebelah kiri!');
      return;
    }

    setIsRunning(true);
    setGameStatus('running');
    setVisitedNodes([1]);
    setRobotPos({ x: 0, y: 0, dir: 'right' });

    // Step 1
    setTimeout(() => {
      playChime(587.33);
      setRobotPos({ x: 1, y: 0, dir: 'right' });
      setVisitedNodes([1, 2]);
    }, 800);

    // Step 2
    setTimeout(() => {
      playChime(659.25);
      setRobotPos({ x: 2, y: 1, dir: 'down' });
      setVisitedNodes([1, 2, 3]);
    }, 1600);

    // Completion check
    setTimeout(() => {
      playChime(880);
      setIsRunning(false);
      setGameStatus('won');
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2400);
  };

  return (
    <section id="interactive-game" className="relative py-20 bg-[#F1F5F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 uppercase tracking-wider">
            Uji Coba Langsung di Browser
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Mainkan Quest &apos;The lost Number&apos;
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Klik dan susun blok kode di bawah ini untuk mengarahkan karakter mengumpulkan angka 1, 2,
            dan 3. Rasakan betapa intuitif dan menyenangkannya belajar coding bagi anak!
          </p>
        </div>

        {/* Playground Arena Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Column 1: Block Palette & Sequence (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-extrabold text-slate-800 font-heading">
                  1. Pilih Blok Perintah
                </h3>
                <span className="text-xs text-slate-400 font-bold">Maks. 6 Blok</span>
              </div>

              {/* Block Options */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <button
                  onClick={() => handleAddBlock('Move Forward')}
                  type="button"
                  className="px-3.5 py-2.5 bg-[#FF6699] hover:bg-[#F43F5E] text-white font-extrabold text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Move Forward</span>
                  <i className="fa-solid fa-arrow-right text-[11px]" />
                </button>

                <button
                  onClick={() => handleAddBlock('Turn Right')}
                  type="button"
                  className="px-3.5 py-2.5 bg-[#FFAE1A] hover:bg-[#F59E0B] text-white font-extrabold text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Turn Right</span>
                  <i className="fa-solid fa-rotate-right text-[11px]" />
                </button>

                <button
                  onClick={() => handleAddBlock('Repeat 2x')}
                  type="button"
                  className="px-3.5 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Repeat 2x</span>
                  <i className="fa-solid fa-repeat text-[11px]" />
                </button>

                <button
                  onClick={() => handleAddBlock('Turn Left')}
                  type="button"
                  className="px-3.5 py-2.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-extrabold text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Turn Left</span>
                  <i className="fa-solid fa-rotate-left text-[11px]" />
                </button>
              </div>

              {/* Sequence Tray */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-extrabold text-slate-800 font-heading">
                  2. Urutan Logika ({codeSequence.length}/6)
                </h3>
                {codeSequence.length > 0 && (
                  <button
                    onClick={handleResetGame}
                    type="button"
                    className="text-xs text-red-500 font-bold hover:underline cursor-pointer"
                  >
                    Hapus Semua
                  </button>
                )}
              </div>

              <div className="min-h-[70px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-3 flex flex-wrap items-center gap-2">
                {codeSequence.length === 0 ? (
                  <p className="text-slate-400 text-xs italic mx-auto">
                    Klik tombol blok di atas untuk menambahkan logika...
                  </p>
                ) : (
                  codeSequence.map((block, idx) => {
                    const color =
                      block === 'Move Forward'
                        ? 'bg-[#FF6699]'
                        : block === 'Turn Right'
                        ? 'bg-[#FFAE1A]'
                        : block === 'Repeat 2x'
                        ? 'bg-[#22C55E]'
                        : 'bg-[#6366F1]';
                    return (
                      <span
                        key={idx}
                        onClick={() => handleRemoveBlock(idx)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-extrabold text-xs shadow-xs cursor-pointer hover:opacity-85 ${color}`}
                        title="Klik untuk menghapus"
                      >
                        <span>{block}</span>
                        <i className="fa-solid fa-xmark text-[10px]" />
                      </span>
                    );
                  })
                )}
              </div>
            </div>

            {/* Run & Hint Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleExecuteGame}
                disabled={isRunning}
                type="button"
                className="flex-1 py-3.5 px-6 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 disabled:opacity-50 text-white font-extrabold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-play text-xs" />
                <span>{isRunning ? 'Menjalankan Kode...' : 'Jalankan Kode Sekarang'}</span>
              </button>

              <button
                onClick={() => {
                  playChime(600);
                  setCodeSequence(['Move Forward', 'Turn Right', 'Move Forward']);
                }}
                type="button"
                className="py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-xs rounded-full shadow-md transition-all cursor-pointer flex items-center gap-1"
                title="Beri Petunjuk Otomatis"
              >
                <span>💡</span>
                <span className="hidden sm:inline">Petunjuk</span>
              </button>
            </div>
          </div>

          {/* Column 2: Visual Path Arena (Right) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-50/70 to-indigo-50/50 rounded-2xl p-6 border border-blue-100 relative min-h-[340px] flex flex-col justify-between">
            {/* Top Bar inside arena */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-blue-600 text-white text-[11px] font-black rounded-lg">
                  Level 1-3
                </span>
                <span className="text-xs font-bold text-slate-700">Misi: Kumpulkan Angka</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>

            {/* SVG Grid & Character */}
            <div className="relative w-full h-[220px] bg-white rounded-xl border border-slate-200 shadow-inner flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 220" fill="none">
                {/* Background grid dots */}
                <pattern id="gridDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#E2E8F0" />
                </pattern>
                <rect width="400" height="220" fill="url(#gridDots)" />

                {/* Connection Path */}
                <path
                  d="M 80 60 L 250 60 L 250 160 L 340 160"
                  stroke="#3B82F6"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Node 1 */}
              <div
                className={`absolute left-[60px] top-[40px] w-11 h-11 rounded-full flex items-center justify-center font-black text-base transition-all duration-300 ${
                  visitedNodes.includes(1)
                    ? 'bg-blue-600 text-white shadow-lg ring-4 ring-blue-200'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                1
              </div>

              {/* Node 2 */}
              <div
                className={`absolute left-[230px] top-[40px] w-11 h-11 rounded-full flex items-center justify-center font-black text-base transition-all duration-300 ${
                  visitedNodes.includes(2)
                    ? 'bg-blue-600 text-white shadow-lg ring-4 ring-blue-200'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                2
              </div>

              {/* Node 3 */}
              <div
                className={`absolute left-[230px] top-[140px] w-11 h-11 rounded-full flex items-center justify-center font-black text-base transition-all duration-300 ${
                  visitedNodes.includes(3)
                    ? 'bg-blue-600 text-white shadow-lg ring-4 ring-blue-200'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                3
              </div>

              {/* Goal Chest */}
              <div className="absolute right-5 bottom-4 flex flex-col items-center">
                <GlowingRewardBox className="w-14 h-14" isOpened={gameStatus === 'won'} />
                <span className="text-[10px] font-extrabold text-indigo-700">Peti Harta</span>
              </div>

              {/* Moving Mascot Avatar */}
              <div
                className="absolute transition-all duration-700 ease-in-out pointer-events-none z-30"
                style={{
                  left:
                    robotPos.x === 0
                      ? '60px'
                      : robotPos.x === 1
                      ? '230px'
                      : '230px',
                  top:
                    robotPos.y === 0
                      ? '40px'
                      : '140px',
                  transform: 'translate(-50%, -60%)',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl shadow-xl ring-4 ring-white animate-bounce">
                  🧒🏾
                </div>
              </div>
            </div>

            {/* Victory Callout */}
            {gameStatus === 'won' && (
              <div className="mt-3 p-3 bg-emerald-100 border border-emerald-300 rounded-xl flex items-center justify-between animate-in fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎉</span>
                  <span className="text-xs font-black text-emerald-800">
                    Selamat! Semua nomor terkumpul dengan 3 baris perintah!
                  </span>
                </div>
                <button
                  onClick={handleResetGame}
                  type="button"
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Main Ulang
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
