import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group inline-block font-mono uppercase tracking-wider text-sm ${className}`}
    >
      <div className="absolute inset-0 bg-pink translate-x-1 translate-y-1 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5 border border-ink"></div>
      <div className="relative bg-ink text-white border border-ink px-6 py-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-active:translate-y-0.5">
        <span className="relative z-10 flex items-center gap-2">
            {children}
        </span>
      </div>
    </button>
  );
};