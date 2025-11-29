import React from 'react';

interface WindowCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const WindowCard: React.FC<WindowCardProps> = ({ children, className = '', title = 'SYSTEM.EXE' }) => {
  return (
    <div className={`relative group animate-drift ${className}`}>
      {/* Shadow Layers */}
      <div className="absolute inset-0 bg-pink-dim translate-x-2 translate-y-2 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
      <div className="absolute inset-0 border border-ink translate-x-1 translate-y-1 rounded-lg -z-10 bg-ink transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />

      {/* Main Window */}
      <div className="bg-cream border border-ink rounded-lg overflow-hidden h-full flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        {/* Window Header */}
        <div className="h-8 border-b border-ink bg-paper flex items-center justify-between px-3 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-ink bg-pink shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-ink bg-amber-300 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-ink bg-emerald-300 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink/60 select-none">
            {title}
          </div>
          <div className="w-8">
             {/* Spacer to balance header */}
          </div>
        </div>

        {/* Window Body */}
        <div className="flex-1 p-6 relative overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-cream">
           {children}
        </div>
      </div>
    </div>
  );
};