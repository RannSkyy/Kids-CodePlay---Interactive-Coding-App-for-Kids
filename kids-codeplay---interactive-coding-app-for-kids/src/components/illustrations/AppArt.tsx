import React from 'react';

/**
 * Handcrafted vector artwork accurately reproducing the cute cartoon characters
 * and 3D icons from the reference screenshot.
 */

// Screen 1: Two kids sitting on a bench coding on tablets
export const WelcomeBenchKids: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="benchWood" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Concentric signal waves */}
    <ellipse cx="200" cy="225" rx="160" ry="40" stroke="#93C5FD" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
    <ellipse cx="200" cy="225" rx="110" ry="26" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
    <ellipse cx="200" cy="225" rx="60" ry="14" stroke="#3B82F6" strokeWidth="2" opacity="0.9" />

    {/* Floating idea bubbles & icons */}
    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
      {/* Lightbulb 1 */}
      <circle cx="95" cy="80" r="16" fill="#FEF08A" />
      <path d="M95 68 C90 68 86 72 86 77 C86 80 88 83 90 85 L90 89 L100 89 L100 85 C102 83 104 80 104 77 C104 72 100 68 95 68 Z" fill="#EAB308" />
      <line x1="91" y1="91" x2="99" y2="91" stroke="#CA8A04" strokeWidth="2" />
    </g>

    <g className="animate-bounce" style={{ animationDuration: '3.6s' }}>
      {/* Lightbulb 2 */}
      <circle cx="305" cy="65" r="14" fill="#FEF08A" />
      <path d="M305 55 C301 55 297 58 297 62 C297 65 299 67 301 69 L301 72 L309 72 L309 69 C311 67 313 65 313 62 C313 58 309 55 305 55 Z" fill="#EAB308" />
    </g>

    {/* App nodes network */}
    <path d="M110 95 Q 160 80 190 110 Q 230 130 290 80" stroke="#93C5FD" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M150 140 Q 200 115 250 145" stroke="#FDBA74" strokeWidth="2" strokeDasharray="3 3" />

    {/* Small floating tech icons */}
    <rect x="180" y="85" width="22" height="22" rx="6" fill="#10B981" />
    <path d="M185 96 L189 100 L197 92" stroke="white" strokeWidth="2" strokeLinecap="round" />
    
    <rect x="155" y="125" width="20" height="20" rx="5" fill="#EF4444" />
    <circle cx="165" cy="135" r="4" fill="white" />

    <rect x="220" y="95" width="22" height="22" rx="6" fill="#F59E0B" />
    <rect x="225" y="101" width="12" height="10" rx="2" fill="white" />

    <rect x="235" y="135" width="20" height="20" rx="5" fill="#EC4899" />
    <path d="M241 148 C241 144 249 144 249 148" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Wooden Bench */}
    <rect x="60" y="215" width="280" height="16" rx="4" fill="url(#benchWood)" />
    {/* Legs */}
    <rect x="85" y="231" width="12" height="42" rx="2" fill="#78350F" />
    <rect x="115" y="231" width="10" height="42" rx="2" fill="#78350F" />
    <rect x="275" y="231" width="10" height="42" rx="2" fill="#78350F" />
    <rect x="305" y="231" width="12" height="42" rx="2" fill="#78350F" />

    {/* Left Kid (Boy with orange shirt & goggles) */}
    <g transform="translate(10, 0)">
      {/* Body & Clothes */}
      <rect x="110" y="170" width="48" height="46" rx="10" fill="#F97316" />
      {/* Shorts */}
      <rect x="112" y="210" width="44" height="20" rx="6" fill="#0284C7" />
      {/* Legs & Shoes */}
      <rect x="118" y="228" width="12" height="22" rx="4" fill="#FDBA74" />
      <rect x="140" y="228" width="12" height="22" rx="4" fill="#FDBA74" />
      {/* Shoes red */}
      <ellipse cx="122" cy="254" rx="12" ry="6" fill="#DC2626" />
      <ellipse cx="148" cy="254" rx="12" ry="6" fill="#DC2626" />

      {/* Head */}
      <ellipse cx="134" cy="132" rx="24" ry="26" fill="#FED7AA" />
      {/* Brown Hair with spiky bangs */}
      <path d="M106 130 C106 100 125 90 148 95 C162 98 162 118 160 134 C152 128 144 135 138 126 C130 135 120 128 114 134 Z" fill="#92400E" />
      {/* Goggles on forehead */}
      <ellipse cx="124" cy="116" rx="9" ry="7" fill="#67E8F9" stroke="#0891B2" strokeWidth="2" />
      <ellipse cx="144" cy="116" rx="9" ry="7" fill="#67E8F9" stroke="#0891B2" strokeWidth="2" />
      <line x1="133" y1="116" x2="135" y2="116" stroke="#0891B2" strokeWidth="2" />
      {/* Eyes & Smile */}
      <ellipse cx="126" cy="135" rx="3" ry="4" fill="#1E293B" />
      <ellipse cx="142" cy="135" rx="3" ry="4" fill="#1E293B" />
      <path d="M130 145 Q 134 150 138 145" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="122" cy="142" rx="3.5" ry="2" fill="#FCA5A5" opacity="0.8" />
      <ellipse cx="146" cy="142" rx="3.5" ry="2" fill="#FCA5A5" opacity="0.8" />

      {/* Arms holding tablet */}
      <path d="M120 185 L146 198" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
      <path d="M152 185 L148 198" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
      {/* Tablet */}
      <rect x="142" y="180" width="30" height="40" rx="4" fill="#334155" transform="rotate(-15 142 180)" />
      <rect x="145" y="184" width="24" height="32" rx="2" fill="url(#screenGlow)" transform="rotate(-15 145 184)" />
    </g>

    {/* Right Kid (Girl with pigtails & red overalls) */}
    <g transform="translate(15, 0)">
      {/* Body & Clothes */}
      <rect x="238" y="172" width="46" height="44" rx="10" fill="#EF4444" />
      {/* Yellow undershirt */}
      <ellipse cx="261" cy="172" rx="12" ry="6" fill="#FDE047" />
      {/* Yellow skirt */}
      <path d="M236 212 L286 212 L292 230 L230 230 Z" fill="#F59E0B" />
      {/* Legs & Shoes */}
      <rect x="244" y="230" width="10" height="22" rx="4" fill="#FED7AA" />
      <rect x="268" y="230" width="10" height="22" rx="4" fill="#FED7AA" />
      {/* White socks & sneakers */}
      <ellipse cx="248" cy="254" rx="11" ry="6" fill="#F8FAFC" stroke="#E2E8F0" />
      <ellipse cx="274" cy="254" rx="11" ry="6" fill="#F8FAFC" stroke="#E2E8F0" />

      {/* Head */}
      <ellipse cx="262" cy="132" rx="23" ry="25" fill="#FED7AA" />
      {/* Hair pigtails */}
      <path d="M236 128 C236 98 255 92 278 95 C290 98 290 118 288 132 C280 126 272 133 266 125 C258 133 248 126 242 132 Z" fill="#B45309" />
      {/* Left pigtail */}
      <ellipse cx="230" cy="136" rx="9" ry="16" fill="#B45309" transform="rotate(-20 230 136)" />
      <ellipse cx="236" cy="126" rx="4" ry="4" fill="#EF4444" />
      {/* Right pigtail */}
      <ellipse cx="292" cy="136" rx="9" ry="16" fill="#B45309" transform="rotate(20 292 136)" />
      <ellipse cx="286" cy="126" rx="4" ry="4" fill="#EF4444" />
      {/* Eyes & Smile */}
      <ellipse cx="254" cy="135" rx="3" ry="4" fill="#1E293B" />
      <ellipse cx="270" cy="135" rx="3" ry="4" fill="#1E293B" />
      <path d="M258 145 Q 262 149 266 145" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="250" cy="142" rx="3.5" ry="2" fill="#FCA5A5" opacity="0.8" />
      <ellipse cx="274" cy="142" rx="3.5" ry="2" fill="#FCA5A5" opacity="0.8" />

      {/* Arms holding tablet */}
      <path d="M272 186 L250 198" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
      <path d="M242 186 L246 198" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
      {/* Tablet */}
      <rect x="226" y="180" width="30" height="40" rx="4" fill="#334155" transform="rotate(12 226 180)" />
      <rect x="229" y="184" width="24" height="32" rx="2" fill="url(#screenGlow)" transform="rotate(12 229 184)" />
    </g>
  </svg>
);

// Mascot Kid smiling and pointing (for "The lost Number" and roadmap)
export const MascotPointingKid: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Curly dark hair */}
    <ellipse cx="60" cy="42" rx="28" ry="30" fill="#292524" />
    <circle cx="38" cy="35" r="10" fill="#292524" />
    <circle cx="48" cy="22" r="12" fill="#292524" />
    <circle cx="68" cy="20" r="13" fill="#292524" />
    <circle cx="82" cy="32" r="11" fill="#292524" />
    {/* Cute face */}
    <ellipse cx="60" cy="50" rx="22" ry="22" fill="#8D5B4C" />
    {/* Eyes */}
    <ellipse cx="52" cy="48" rx="3.5" ry="4.5" fill="#1C1917" />
    <ellipse cx="68" cy="48" rx="3.5" ry="4.5" fill="#1C1917" />
    <circle cx="53" cy="46" r="1.5" fill="white" />
    <circle cx="69" cy="46" r="1.5" fill="white" />
    {/* Big happy smile */}
    <path d="M52 58 Q60 67 68 58" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="#DC2626" />
    {/* Red Hoodie Body */}
    <rect x="42" y="72" width="36" height="38" rx="10" fill="#DC2626" />
    <ellipse cx="60" cy="74" rx="12" ry="5" fill="#EF4444" />
    {/* Arm pointing up-right */}
    <path d="M74 80 L96 64" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
    <ellipse cx="98" cy="62" rx="5" ry="5" fill="#8D5B4C" />
    {/* Other arm */}
    <path d="M44 80 L28 88" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="26" cy="90" rx="4" ry="4" fill="#8D5B4C" />
    {/* Dark pants */}
    <rect x="45" y="106" width="13" height="20" rx="3" fill="#1E293B" />
    <rect x="62" y="106" width="13" height="20" rx="3" fill="#1E293B" />
    {/* Yellow sneakers */}
    <ellipse cx="48" cy="128" rx="9" ry="5" fill="#FBBF24" />
    <ellipse cx="71" cy="128" rx="9" ry="5" fill="#FBBF24" />
  </svg>
);

// Kid with desk & computer (Home Screen Card 1)
export const KidComputerDesk: React.FC<{ className?: string }> = ({ className = 'w-24 h-20' }) => (
  <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Desk */}
    <rect x="20" y="80" width="100" height="8" rx="2" fill="#D97706" />
    <rect x="30" y="88" width="6" height="28" rx="1" fill="#92400E" />
    <rect x="104" y="88" width="6" height="28" rx="1" fill="#92400E" />
    {/* Monitor */}
    <rect x="52" y="42" width="36" height="28" rx="4" fill="#334155" />
    <rect x="55" y="45" width="30" height="22" rx="2" fill="#38BDF8" />
    <rect x="67" y="70" width="6" height="10" fill="#64748B" />
    <rect x="61" y="78" width="18" height="3" rx="1" fill="#475569" />
    {/* Kid 1 behind screen */}
    <circle cx="42" cy="40" r="14" fill="#FCD34D" />
    <rect x="30" y="52" width="24" height="28" rx="6" fill="#F97316" />
    {/* Kid 2 */}
    <circle cx="98" cy="38" r="13" fill="#92400E" />
    <rect x="86" y="50" width="24" height="30" rx="6" fill="#3B82F6" />
  </svg>
);

// Boy on books (Home Screen Card 2)
export const BoyOnBooks: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stack of books */}
    <rect x="24" y="94" width="72" height="14" rx="3" fill="#3B82F6" />
    <rect x="28" y="96" width="64" height="10" fill="#93C5FD" />
    
    <rect x="30" y="82" width="60" height="13" rx="3" fill="#EF4444" />
    <rect x="34" y="84" width="52" height="9" fill="#FCA5A5" />

    <rect x="34" y="70" width="52" height="13" rx="3" fill="#10B981" />
    <rect x="38" y="72" width="44" height="9" fill="#A7F3D0" />

    {/* Kid sitting on top */}
    <ellipse cx="60" cy="32" rx="14" ry="15" fill="#8D5B4C" />
    {/* Afro hair */}
    <circle cx="60" cy="26" r="18" fill="#1C1917" />
    <ellipse cx="60" cy="34" rx="13" ry="12" fill="#8D5B4C" />
    {/* Smile & eyes */}
    <circle cx="55" cy="33" r="2" fill="#1C1917" />
    <circle cx="65" cy="33" r="2" fill="#1C1917" />
    <path d="M57 40 Q60 44 63 40" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
    {/* Shirt */}
    <rect x="47" y="46" width="26" height="22" rx="6" fill="#6366F1" />
  </svg>
);

// Kid coder (Home Screen Card 3)
export const KidCoderCard: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Desk */}
    <rect x="15" y="88" width="90" height="6" rx="2" fill="#38BDF8" />
    {/* Monitor */}
    <rect x="42" y="58" width="36" height="24" rx="3" fill="#1E293B" />
    <rect x="45" y="61" width="30" height="18" rx="2" fill="#0284C7" />
    <rect x="56" y="82" width="8" height="6" fill="#64748B" />
    {/* Child with hoodie */}
    <circle cx="60" cy="40" r="14" fill="#F59E0B" />
    <ellipse cx="60" cy="44" rx="11" ry="11" fill="#78350F" />
    <circle cx="56" cy="42" r="2" fill="#1E293B" />
    <circle cx="64" cy="42" r="2" fill="#1E293B" />
    {/* Yellow Hoodie */}
    <rect x="46" y="54" width="28" height="24" rx="6" fill="#F59E0B" />
  </svg>
);

// 3D Isometric Mystery Reward Box (Reward Screen & Roadmap Claim)
export const GlowingRewardBox: React.FC<{ className?: string; isOpened?: boolean }> = ({ 
  className = 'w-36 h-36',
  isOpened = true 
}) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="boxFaceLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="boxFaceRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="boxInside" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <radialGradient id="beamGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FDF2F8" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#F472B6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
      </radialGradient>
      <filter id="boxShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#4338CA" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Radiant light beam from inside */}
    {isOpened && (
      <g>
        <polygon points="100,50 30,0 170,0" fill="url(#beamGlow)" opacity="0.85" />
        <circle cx="100" cy="50" r="30" fill="#FDF4FF" opacity="0.6" filter="blur(10px)" />
        {/* Floating golden stars/sparks */}
        <circle cx="70" cy="30" r="3" fill="#FDE047" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="130" cy="25" r="4" fill="#FDE047" className="animate-ping" style={{ animationDuration: '2.5s' }} />
        <circle cx="100" cy="18" r="3.5" fill="#67E8F9" className="animate-ping" style={{ animationDuration: '1.8s' }} />
      </g>
    )}

    {/* The Isometric Box Body */}
    <g filter="url(#boxShadow)">
      {/* Bottom base shadow */}
      <ellipse cx="100" cy="170" rx="60" ry="18" fill="#1E1B4B" opacity="0.25" />

      {/* Front Left Face */}
      <polygon points="40,90 100,120 100,165 40,135" fill="url(#boxFaceLeft)" />
      
      {/* Front Right Face */}
      <polygon points="100,120 160,90 160,135 100,165" fill="url(#boxFaceRight)" />

      {/* Ribbon stripe Left */}
      <polygon points="65,102 75,107 75,152 65,147" fill="#F43F5E" />
      {/* Ribbon stripe Right */}
      <polygon points="125,107 135,102 135,147 125,152" fill="#EC4899" />

      {/* Question marks on front faces */}
      <text x="65" y="136" fill="#E0E7FF" fontSize="24" fontWeight="800" fontFamily="sans-serif">?</text>
      <text x="125" y="136" fill="#F3E8FF" fontSize="24" fontWeight="800" fontFamily="sans-serif">?</text>

      {/* Inside / Lid Open */}
      {isOpened ? (
        <g>
          {/* Top inner cavity */}
          <polygon points="40,90 100,60 160,90 100,120" fill="url(#boxInside)" />
          {/* Inner glowing center */}
          <ellipse cx="100" cy="90" rx="35" ry="15" fill="#FFF1F2" opacity="0.8" />
          
          {/* Open Left Lid */}
          <polygon points="40,90 10,75 70,45 100,60" fill="#A5B4FC" opacity="0.9" />
          {/* Open Right Lid */}
          <polygon points="100,60 130,45 190,75 160,90" fill="#C084FC" opacity="0.9" />
        </g>
      ) : (
        <polygon points="40,90 100,60 160,90 100,120" fill="#C4B5FD" />
      )}
    </g>
  </svg>
);

// 6 Stat Icons from Screen 5 (Profile)
export const StatTargetIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="28" fill="#FEE2E2" />
    <circle cx="32" cy="32" r="22" stroke="#EF4444" strokeWidth="4" fill="white" />
    <circle cx="32" cy="32" r="14" fill="#FCA5A5" />
    <circle cx="32" cy="32" r="7" fill="#DC2626" />
    {/* Arrow */}
    <path d="M48 16 L34 30" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" />
    <polygon points="48,16 46,24 40,18" fill="#EF4444" />
  </svg>
);

export const StatHeartIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F87171" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    <path d="M32 54 C32 54 10 40 10 24 C10 16 16 10 24 10 C28 10 32 14 32 14 C32 14 36 10 40 10 C48 10 54 16 54 24 C54 40 32 54 32 54 Z" fill="url(#heartGrad)" />
    {/* Soft 3D shine */}
    <ellipse cx="22" cy="20" rx="5" ry="3" fill="white" opacity="0.6" transform="rotate(-30 22 20)" />
  </svg>
);

export const StatPuzzleIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 16 H30 C30 18 32 20 34 20 C36 20 38 18 38 16 H50 V30 C48 30 46 32 46 34 C46 36 48 38 50 38 V48 H36 C36 46 34 44 32 44 C30 44 28 46 28 48 H16 V34 C18 34 20 32 20 30 C20 28 18 26 16 26 Z" fill="#F59E0B" />
    <path d="M32 16 H50 V34 C48 34 46 36 46 38 C46 40 48 42 50 42 V48 H32 V16 Z" fill="#3B82F6" opacity="0.85" />
    <circle cx="28" cy="28" r="3" fill="#10B981" />
  </svg>
);

export const StatNotebookIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="10" width="36" height="46" rx="4" fill="#EA580C" />
    <rect x="22" y="10" width="30" height="46" rx="2" fill="#F97316" />
    <rect x="14" y="16" width="6" height="4" rx="1" fill="#FEF08A" />
    <rect x="14" y="26" width="6" height="4" rx="1" fill="#FEF08A" />
    <rect x="14" y="36" width="6" height="4" rx="1" fill="#FEF08A" />
    <rect x="14" y="46" width="6" height="4" rx="1" fill="#FEF08A" />
    {/* Page bookmark ribbon */}
    <polygon points="34,10 40,10 40,24 37,21 34,24" fill="#FDE047" />
  </svg>
);

export const StatLegoIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Blue block */}
    <rect x="12" y="32" width="22" height="22" rx="3" fill="#2563EB" />
    <circle cx="18" cy="30" r="3" fill="#3B82F6" />
    <circle cx="28" cy="30" r="3" fill="#3B82F6" />
    {/* Red block */}
    <rect x="34" y="32" width="20" height="22" rx="3" fill="#DC2626" />
    <circle cx="44" cy="30" r="3" fill="#EF4444" />
    {/* Yellow block on top */}
    <rect x="22" y="14" width="24" height="18" rx="3" fill="#FBBF24" />
    <circle cx="28" cy="12" r="3" fill="#FDE047" />
    <circle cx="40" cy="12" r="3" fill="#FDE047" />
  </svg>
);

export const StatGiftBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="14" y="24" width="36" height="30" rx="3" fill="#F59E0B" />
    <rect x="11" y="18" width="42" height="10" rx="2" fill="#FBBF24" />
    {/* Vertical yellow ribbon */}
    <rect x="29" y="18" width="6" height="36" fill="#FEF08A" />
    {/* Ribbon bow */}
    <circle cx="27" cy="14" r="5" fill="#FEF08A" />
    <circle cx="37" cy="14" r="5" fill="#FEF08A" />
  </svg>
);

// Star Stephanie Avatar (Screen 5)
export const StarStephanieAvatar: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Soft floating pastel dots around */}
    <span className="absolute -top-1 -left-2 w-3.5 h-3.5 rounded-full bg-amber-200 animate-pulse" />
    <span className="absolute top-4 -right-3 w-4 h-4 rounded-full bg-blue-200 animate-pulse" style={{ animationDelay: '0.4s' }} />
    <span className="absolute -bottom-1 -left-2 w-3 h-3 rounded-full bg-pink-200 animate-pulse" style={{ animationDelay: '0.8s' }} />
    <span className="absolute -bottom-2 right-1 w-3.5 h-3.5 rounded-full bg-purple-200 animate-pulse" style={{ animationDelay: '1.2s' }} />

    {/* Main avatar circle */}
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-lg ring-4 ring-white flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {/* Background circle */}
        <circle cx="50" cy="50" r="50" fill="#6366F1" />
        {/* Curly hair afro puffs */}
        <circle cx="28" cy="40" r="14" fill="#3E2723" />
        <circle cx="72" cy="40" r="14" fill="#3E2723" />
        <circle cx="50" cy="30" r="22" fill="#3E2723" />
        {/* Cute face */}
        <ellipse cx="50" cy="54" rx="20" ry="22" fill="#A16207" />
        {/* Big bright eyes */}
        <circle cx="43" cy="52" r="3.5" fill="#1E293B" />
        <circle cx="57" cy="52" r="3.5" fill="#1E293B" />
        <circle cx="44" cy="50.5" r="1" fill="white" />
        <circle cx="58" cy="50.5" r="1" fill="white" />
        {/* Sweet smile */}
        <path d="M45 62 Q50 67 55 62" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
        {/* Cheeks */}
        <ellipse cx="40" cy="58" rx="2.5" ry="1.5" fill="#FDA4AF" />
        <ellipse cx="60" cy="58" rx="2.5" ry="1.5" fill="#FDA4AF" />
        {/* Blue collar sweater */}
        <path d="M30 84 Q50 76 70 84 L75 100 L25 100 Z" fill="#60A5FA" />
      </svg>
    </div>
  </div>
);
