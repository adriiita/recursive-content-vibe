import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false }) => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Alpha Masks - adjusted for Cream background */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10"></div>

      <div className={`flex w-fit animate-marquee ${reverse ? 'reverse-direction' : ''}`}>
        {[0, 1, 2].map((groupIndex) => (
          <div key={`group-${groupIndex}`} className="flex shrink-0 gap-8 px-4 items-center">
            {items.map((item, i) => (
              <div 
                key={`item-${groupIndex}-${i}`} 
                className="px-4 py-2 border border-ink/20 bg-white/50 text-ink/80 text-xs font-mono uppercase tracking-widest shadow-[2px_2px_0_rgba(20,2,6,0.1)]"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};