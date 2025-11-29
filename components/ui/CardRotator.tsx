import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "The Manual Loop",
    desc: "Brainstorm > Draft > Revise. It feels productive but hides your creative ruts.",
    bg: "bg-paper",
    accent: "bg-pink"
  },
  {
    title: "Recursive Mirror",
    desc: "Feeding strategy back to AI to expose gaps and biases you can't see.",
    bg: "bg-ink text-cream",
    accent: "bg-emerald-400"
  },
  {
    title: "Quantum Leap",
    desc: "Output triples. Engagement jumps. Authenticity is refined, not replaced.",
    bg: "bg-white",
    accent: "bg-lavender"
  }
];

export const CardRotator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[240px] h-64 mb-6">
        {cards.map((card, index) => {
          const offset = (index - activeIndex + cards.length) % cards.length;
          let zIndex = 0;
          let scale = 1;
          let translateY = 0;
          let opacity = 1;
          let rotate = 0;

          if (offset === 0) {
            zIndex = 30;
            scale = 1;
            translateY = 0;
            rotate = 0;
            opacity = 1;
          } else if (offset === 1) {
            zIndex = 20;
            scale = 0.95;
            translateY = 15;
            rotate = 3;
            opacity = 0.7;
          } else if (offset === 2) {
             zIndex = 10;
            scale = 0.9;
            translateY = 30;
            rotate = 6;
            opacity = 0.4;
          }

          const isVisible = offset < 3;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full border border-ink p-5 flex flex-col justify-between transition-all duration-500 ease-out shadow-lg ${card.bg}`}
              style={{
                zIndex,
                transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                opacity: isVisible ? opacity : 0,
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            >
              <div className={`w-8 h-1 ${card.accent} mb-4`}></div>
              <div>
                <h3 className={`text-xl font-serif font-bold mb-3 leading-tight ${card.bg.includes('text-cream') ? 'text-white' : 'text-ink'}`}>
                    {card.title}
                </h3>
                <p className={`text-xs font-mono leading-relaxed opacity-80 ${card.bg.includes('text-cream') ? 'text-cream' : 'text-ink'}`}>
                    {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 z-40">
        <button 
          onClick={prev}
          className="p-2 border border-ink hover:bg-ink hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={next}
          className="p-2 border border-ink hover:bg-ink hover:text-white transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};