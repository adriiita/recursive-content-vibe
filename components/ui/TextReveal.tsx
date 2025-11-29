import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  type?: 'letter' | 'word';
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, delay = 0, className = '', type = 'letter' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = type === 'letter' ? text.split('') : text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} aria-label={text}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`inline-block whitespace-pre transition-all duration-[800ms] ease-out will-change-transform ${
            type === 'word' ? 'mr-[0.3em]' : ''
          } ${
            isVisible
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-[0.01] -translate-y-4 blur-sm'
          }`}
          // Using 'both' behavior via transition delay logic effectively
          style={{ transitionDelay: `${delay + index * (type === 'letter' ? 0.02 : 0.05)}s` }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};