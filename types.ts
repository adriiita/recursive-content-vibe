import React from 'react';

export interface SlideData {
  id: number;
  windowTitle: string;
  title: string;
  content: string;
  type: 'intro' | 'text' | 'marquee' | 'rotator' | 'cta' | 'clip';
  icon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  flashlight?: boolean;
}