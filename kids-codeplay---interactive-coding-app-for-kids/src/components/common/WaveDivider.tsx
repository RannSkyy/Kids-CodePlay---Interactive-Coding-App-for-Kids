import React from 'react';

interface WaveDividerProps {
  color?: string;
  fill?: string;
  flip?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fill = '#4C8BF5',
  flip = false,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none ${
        flip ? 'rotate-180 -mb-1' : '-mt-1'
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[50px] sm:h-[80px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const OverlappingCurve: React.FC<{
  bgColor?: string;
  textColor?: string;
  className?: string;
}> = ({ bgColor = 'bg-white', className = '' }) => {
  return (
    <div className={`relative -mt-10 sm:-mt-16 z-20 ${className}`}>
      <div className={`w-full rounded-t-[40px] sm:rounded-t-[60px] ${bgColor} pt-8 sm:pt-12 shadow-[0_-15px_30px_rgba(0,0,0,0.03)]`} />
    </div>
  );
};
