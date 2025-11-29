import React from 'react';

interface BeamButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const BeamButton: React.FC<BeamButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative rounded-full p-[1px] text-lg font-semibold shadow-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
        {children}
      </span>
    </button>
  );
};