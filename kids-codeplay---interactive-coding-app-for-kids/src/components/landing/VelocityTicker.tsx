import React, { useEffect, useState, useRef } from 'react';

const tickerItems = [
  { text: '🧩 Visual Block Coding', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { text: '🚀 Python & Logic Quest', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { text: '⭐ 500+ Tantangan Puzzle', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { text: '🎨 Desain Karakter Unik', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { text: '🛡️ 100% Kid-Safe & Tanpa Iklan', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { text: '🏆 Sertifikat Prestasi Resmi', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { text: '💡 Berpikir Komputasional', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { text: '🎮 Belajar Lewat Bermain', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
];

export const VelocityTicker: React.FC = () => {
  const [velocity, setVelocity] = useState(1);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      // Accelerate speed dynamically based on scroll velocity!
      const boost = Math.min(Math.max(delta / 8, 1), 5);
      setVelocity(boost);

      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        setVelocity(1);
      }, 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="relative w-full py-4 bg-white border-y border-slate-100 overflow-hidden shadow-xs select-none">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${30 / velocity}s`,
        }}
      >
        {/* Repeating two sets for infinite seamless loop */}
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2 px-4 py-2 mx-2 rounded-full border text-xs sm:text-sm font-extrabold shadow-2xs transition-transform duration-200 hover:scale-105 ${item.color}`}
          >
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
