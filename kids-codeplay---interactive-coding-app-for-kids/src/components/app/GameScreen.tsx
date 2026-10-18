import React, { useState } from 'react';
import { MascotPointingKid } from '../illustrations/AppArt';
import confetti from 'canvas-confetti';

interface GameScreenProps {
  onBack: () => void;
  onNextLesson: () => void;
  onSuccessReward: () => void;
}

type CommandType = 'Move Forward' | 'Turn Right' | 'Repeat';

export const GameScreen: React.FC<GameScreenProps> = ({
  onBack,
  onNextLesson,
  onSuccessReward,
}) => {
  const [sequence, setSequence] = useState<CommandType[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [avatarStep, setAvatarStep] = useState<number>(1); // 1, 2, or 3
  const [collected, setCollected] = useState<number[]>([1]);
  const [hintOpen, setHintOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Available blocks from reference:
  const blocks: { type: CommandType; color: string; hover: string }[] = [
    { type: 'Move Forward', color: 'bg-[#FF6699]', hover: 'hover:bg-[#F43F5E]' },
    { type: 'Turn Right', color: 'bg-[#FFAE1A]', hover: 'hover:bg-[#F59E0B]' },
    { type: 'Repeat', color: 'bg-[#22C55E]', hover: 'hover:bg-[#16A34A]' },
  ];

  const handleAddCommand = (cmd: CommandType) => {
    if (isPlaying) return;
    if (sequence.length >= 4) return;
    setSequence([...sequence, cmd]);
  };

  const handleRemoveCommand = (index: number) => {
    if (isPlaying) return;
    setSequence(sequence.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setSequence([]);
    setAvatarStep(1);
    setCollected([1]);
    setIsPlaying(false);
    setSuccessMessage(null);
  };

  const handleRunCode = () => {
    if (isPlaying) return;
    if (sequence.length === 0) {
      alert('Tambahkan blok perintah terlebih dahulu!');
      return;
    }

    setIsPlaying(true);
    setSuccessMessage(null);
    setAvatarStep(1);
    setCollected([1]);

    // Animate mascot moving from 1 -> 2 -> 3
    setTimeout(() => {
      setAvatarStep(2);
      setCollected([1, 2]);
    }, 900);

    setTimeout(() => {
      setAvatarStep(3);
      setCollected([1, 2, 3]);
      setIsPlaying(false);
      setSuccessMessage('Luar biasa! Semua angka berhasil dikumpulkan!');
      
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 1900);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8FAFC] text-slate-800 overflow-y-auto no-scrollbar select-none">
      {/* Top Header */}
      <div className="p-4 pt-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <button
                type="button"
                onClick={onBack}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                aria-label="Kembali"
              >
                <i className="fa-solid fa-chevron-left text-xs" />
              </button>
              <h2 className="text-[19px] font-extrabold text-[#1E293B] font-heading tracking-tight">
                The lost Number
              </h2>
            </div>
            <p className="text-slate-500 text-[12px] font-medium max-w-[210px] leading-snug">
              Help collect all the missing numbers using 3 move commands.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <MascotPointingKid className="w-14 h-14 drop-shadow-sm -mt-2 animate-float-slow" />
          </div>
        </div>

        {/* 5-Star progress indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-2 bg-white/70 py-1.5 px-3 rounded-full shadow-xs border border-slate-100 max-w-[160px] mx-auto">
          {[1, 2, 3].map((star) => (
            <span key={star} className="text-amber-400 text-sm">⭐</span>
          ))}
          {[4, 5].map((star) => (
            <span key={star} className="text-slate-300 text-sm">☆</span>
          ))}
        </div>
      </div>

      {/* Visual Coding Playfield (Numbers 1, 2, 3 on grid) */}
      <div className="relative mx-4 my-1 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm min-h-[175px] flex items-center justify-center">
        {/* Playfield SVG path */}
        <div className="relative w-full max-w-[280px] h-[130px]">
          {/* Dashed Path connecting 1 -> 2 -> 3 */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 280 130" fill="none">
            {/* Horizontal line from 1 to 2 corner */}
            <path
              d="M 40 40 L 190 40 L 190 100 L 250 100"
              stroke="#60A5FA"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Node 1 */}
          <div
            className={`absolute left-4 top-4 w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-transform duration-300 ${
              collected.includes(1)
                ? 'bg-[#3B82F6] text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-400'
            }`}
          >
            1
          </div>

          {/* Node 2 */}
          <div
            className={`absolute left-[170px] top-[80px] w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-transform duration-300 ${
              collected.includes(2)
                ? 'bg-[#3B82F6] text-white shadow-md scale-105'
                : 'bg-slate-200 text-slate-600'
            }`}
          >
            2
          </div>

          {/* Node 3 */}
          <div
            className={`absolute left-[230px] top-[18px] w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-transform duration-300 ${
              collected.includes(3)
                ? 'bg-[#3B82F6] text-white shadow-md scale-105'
                : 'bg-slate-200 text-slate-600'
            }`}
          >
            3
          </div>

          {/* Animated Mascot Position on grid */}
          <div
            className="absolute transition-all duration-700 ease-in-out pointer-events-none"
            style={{
              left: avatarStep === 1 ? '16px' : avatarStep === 2 ? '170px' : '230px',
              top: avatarStep === 1 ? '16px' : avatarStep === 2 ? '80px' : '18px',
              transform: 'translate(-50%, -70%)',
            }}
          >
            <div className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center text-sm shadow-lg ring-2 ring-white animate-bounce">
              🧒🏾
            </div>
          </div>

          {/* Command Blocks Palette on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
            {blocks.map((block) => (
              <button
                key={block.type}
                onClick={() => handleAddCommand(block.type)}
                type="button"
                className={`px-3 py-1 text-[11px] font-bold text-white rounded-full shadow-xs active:scale-95 transition-all cursor-pointer ${block.color} ${block.hover}`}
              >
                {block.type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Tray (Sequence selected by kid) */}
      <div className="px-4 py-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Urutan Kode ({sequence.length}/3)
          </span>
          {sequence.length > 0 && (
            <button
              onClick={handleReset}
              type="button"
              className="text-[11px] text-red-500 font-bold hover:underline cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        <div className="min-h-[38px] bg-slate-100/80 rounded-xl p-1.5 flex items-center gap-1.5 border border-dashed border-slate-300 overflow-x-auto no-scrollbar">
          {sequence.length === 0 ? (
            <span className="text-slate-400 text-[11px] italic mx-auto">
              Ketuk blok di atas untuk menyusun perintah...
            </span>
          ) : (
            sequence.map((cmd, idx) => {
              const bg =
                cmd === 'Move Forward'
                  ? 'bg-[#FF6699]'
                  : cmd === 'Turn Right'
                  ? 'bg-[#FFAE1A]'
                  : 'bg-[#22C55E]';
              return (
                <div
                  key={idx}
                  onClick={() => handleRemoveCommand(idx)}
                  className={`px-2.5 py-1 ${bg} text-white text-[11px] font-bold rounded-lg shadow-xs flex items-center gap-1 cursor-pointer hover:opacity-90 active:scale-95 transition-all`}
                  title="Klik untuk menghapus"
                >
                  <span>{cmd}</span>
                  <i className="fa-solid fa-xmark text-[9px] opacity-80" />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Mascot Tip Card */}
      <div className="mx-4 my-1 p-2.5 bg-slate-100/90 rounded-2xl flex items-center gap-2.5 border border-slate-200/60">
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-base">
          💡
        </div>
        <p className="text-[#334155] text-[11px] font-medium leading-snug">
          <strong className="text-slate-800">Tip:</strong> Remember- fewer blocks, better logic
        </p>
      </div>

      {/* Success banner if won */}
      {successMessage && (
        <div className="mx-4 p-2 bg-emerald-50 border border-emerald-200 rounded-xl text-center animate-in fade-in">
          <p className="text-emerald-700 text-xs font-bold mb-1">🎉 {successMessage}</p>
          <button
            onClick={onSuccessReward}
            type="button"
            className="text-[11px] bg-emerald-600 text-white font-bold px-3 py-1 rounded-full shadow-xs hover:bg-emerald-700 cursor-pointer"
          >
            Buka Peti Hadiah! 🎁
          </button>
        </div>
      )}

      {/* Bottom Action Buttons (Hint, Play, Next Lesson) */}
      <div className="p-4 pt-1 pb-6 grid grid-cols-3 gap-2">
        <button
          onClick={() => setHintOpen(true)}
          type="button"
          className="py-2.5 px-2 bg-[#FFB400] hover:bg-[#F59E0B] active:scale-95 text-white font-extrabold text-xs rounded-full shadow-[0_4px_10px_rgba(245,158,11,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1"
        >
          <span>💡</span>
          <span>Hint</span>
        </button>

        <button
          onClick={handleRunCode}
          disabled={isPlaying}
          type="button"
          className="py-2.5 px-2 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 disabled:opacity-50 text-white font-extrabold text-xs rounded-full shadow-[0_4px_10px_rgba(34,197,94,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1"
        >
          <span>▶</span>
          <span>{isPlaying ? 'Running...' : 'Play'}</span>
        </button>

        <button
          onClick={onNextLesson}
          type="button"
          className="py-2.5 px-2 bg-[#FF6699] hover:bg-[#F43F5E] active:scale-95 text-white font-extrabold text-xs rounded-full shadow-[0_4px_10px_rgba(255,102,153,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1"
        >
          <span>Next</span>
          <i className="fa-solid fa-arrow-right text-[10px]" />
        </button>
      </div>

      {/* Hint Modal */}
      {hintOpen && (
        <div className="absolute inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-[280px] w-full text-center shadow-xl border border-slate-100 animate-in fade-in zoom-in-95">
            <div className="text-3xl mb-2">💡</div>
            <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-heading">Petunjuk Langkah</h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Mulai dengan <strong>Move Forward</strong> menuju angka 2, lalu <strong>Turn Right</strong>, dan <strong>Move Forward</strong> lagi untuk mencapai angka 3!
            </p>
            <button
              onClick={() => {
                setSequence(['Move Forward', 'Turn Right', 'Move Forward']);
                setHintOpen(false);
              }}
              type="button"
              className="w-full py-2 bg-[#FFB400] text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer hover:bg-[#F59E0B]"
            >
              Pasang Kode Otomatis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
