import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-cream">
      {/* Gradient Overlay for Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream z-10"></div>
      
      {/* Perspective Container */}
      <div className="absolute inset-0 perspective-grid flex items-center justify-center opacity-30">
        <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,#140206_1px,transparent_1px),linear-gradient(to_bottom,#140206_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] animate-grid-move origin-center"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-light/30 rounded-full blur-3xl mix-blend-multiply animate-drift"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-3xl mix-blend-multiply animate-drift" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};