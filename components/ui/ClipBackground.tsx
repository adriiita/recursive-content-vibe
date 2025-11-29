import React, { useEffect, useRef, useState } from 'react';

export const ClipBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
           // Optional: reset when out of view
           setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-0 flex">
      {[0, 1, 2, 3, 4].map((i) => (
        <div 
            key={i} 
            className="flex-1 bg-neutral-900 h-full border-r border-neutral-800/30"
            style={{
                clipPath: isVisible ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
                transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
                transitionDelay: `${i * 0.1}s`
            }}
        />
      ))}
      {/* Underlying decorative gradient that gets revealed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>
    </div>
  );
};