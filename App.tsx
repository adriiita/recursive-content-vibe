import React from 'react';
import { WindowCard } from './components/ui/WindowCard';
import { TextReveal } from './components/ui/TextReveal';
import { Marquee } from './components/ui/Marquee';
import { CardRotator } from './components/ui/CardRotator';
import { RetroButton } from './components/ui/RetroButton';
import { GridBackground } from './components/ui/GridBackground';
import { BrainCircuit, Activity, Layers, Fingerprint, RefreshCcw, Zap } from 'lucide-react';
import { SlideData } from './types';

const slides: SlideData[] = [
  {
    id: 1,
    windowTitle: "INTRO.SYS",
    title: "The Blind Spot",
    content: "Creators stare at their own blind spots. I found a mirror.",
    type: "intro",
    icon: <Fingerprint className="w-8 h-8 text-pink" />
  },
  {
    id: 2,
    windowTitle: "TRAP.ERR",
    title: "Linear Trap",
    content: "Brainstorm. Draft. Publish. Linear feels safe. It is actually suffocating.",
    type: "text",
    icon: <Layers className="w-8 h-8 text-ink" />
  },
  {
    id: 3,
    windowTitle: "GRIND.LOG",
    title: "The Grind",
    content: "60 hours/week. Flat engagement. Founders burning out on the 'human touch' myth.",
    type: "marquee"
  },
  {
    id: 4,
    windowTitle: "LOOP.EXE",
    title: "Recursive Loops",
    content: "Feed strategy to AI. Prompt: 'Mirror my patterns'. Don't generate. Reveal.",
    type: "rotator"
  },
  {
    id: 5,
    windowTitle: "DATA.BAT",
    title: "The Data",
    content: "One doc. Recursive mirroring. Gaps exposed. Output tripled.",
    type: "text",
    icon: <Activity className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 6,
    windowTitle: "TWIN.AI",
    title: "Digital Twins",
    content: "Stanford confirms: AI externalizes cognition. It sees the quantum refinements you miss.",
    type: "text",
    icon: <BrainCircuit className="w-8 h-8 text-lavender" />
  },
  {
    id: 7,
    windowTitle: "SHIFT.V2",
    title: "The Result",
    content: "Manual: Burnout. Recursive: Revelation. True scale starts when you see the invisible.",
    type: "clip",
    icon: <RefreshCcw className="w-8 h-8 text-pink" />
  },
  {
    id: 8,
    windowTitle: "VIBE.LIFE",
    title: "Vibe Life",
    content: "I build mind-mirrors. Recursive. Revealing. Liberating.",
    type: "cta",
    icon: <Zap className="w-8 h-8 text-amber-500" />
  }
];

interface SlideProps {
  data: SlideData;
  index: number;
  total: number;
}

const Slide: React.FC<SlideProps> = ({ 
  data, 
  index, 
  total 
}) => {
  return (
    <section className="h-screen w-full snap-center flex items-center justify-center relative overflow-hidden bg-cream p-6">
      <GridBackground />
      
      {/* Slide Number (Fixed Position styled) */}
      <div className="absolute top-8 right-8 font-mono text-xs text-ink/40">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      <WindowCard title={data.windowTitle} className="w-full max-w-[360px] aspect-[3/4] z-10">
        <div className="h-full flex flex-col">
          {/* Header Icon */}
          <div className="mb-6 flex justify-between items-start">
            {data.icon && (
               <div className="p-2 border border-ink/10 rounded bg-white/50 backdrop-blur-sm">
                 {data.icon}
               </div>
            )}
            <div className="h-1 w-12 bg-ink/10 rounded-full"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-serif font-bold text-ink mb-6 leading-[1.1]">
            <TextReveal text={data.title} type="letter" delay={0.1} />
          </h2>

          {/* Body Content */}
          <div className="flex-1 relative">
            {data.type === 'rotator' ? (
              <CardRotator />
            ) : data.type === 'marquee' ? (
              <div className="flex flex-col h-full">
                <p className="font-mono text-sm leading-relaxed text-ink/70 mb-8">
                  <TextReveal text={data.content} type="word" delay={0.3} />
                </p>
                <div className="mt-auto -mx-6">
                  <Marquee items={["BURNOUT", "FLATLINE", "GHOSTING", "MANUAL", "LINEAR"]} />
                  <Marquee items={["RECURSIVE", "SCALE", "VIBE", "FLOW", "MIRROR"]} reverse />
                </div>
              </div>
            ) : data.type === 'cta' ? (
              <div className="flex flex-col h-full justify-between">
                <p className="font-sans text-lg leading-relaxed text-ink/80">
                   <TextReveal text={data.content} type="word" delay={0.3} />
                </p>
                <div className="mt-auto flex justify-center pb-4">
                  <RetroButton onClick={() => window.open('https://www.linkedin.com/company/vibelife', '_blank')}>
                    START THE LOOP
                  </RetroButton>
                </div>
              </div>
            ) : (
              <p className="font-sans text-lg leading-relaxed text-ink/80">
                <TextReveal text={data.content} type="word" delay={0.3} />
              </p>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-end">
             <div className="font-mono text-[10px] text-ink/40 uppercase">
                MEM: {Math.floor(Math.random() * 50) + 20}KB
             </div>
             <div className="font-mono text-[10px] text-pink font-bold uppercase tracking-widest">
                {'{ REC_LOOP }'}
             </div>
          </div>
        </div>
      </WindowCard>
    </section>
  );
};

export default function App() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-cream no-scrollbar scroll-smooth">
      {slides.map((slide, index) => (
        <Slide 
          key={slide.id} 
          data={slide} 
          index={index} 
          total={slides.length} 
        />
      ))}
    </main>
  );
}