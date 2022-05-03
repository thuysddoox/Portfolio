import React from 'react';
import { FadeProps, Fade } from 'react-awesome-reveal';

interface FadeCustomProps extends FadeProps {
  children?: React.ReactNode;
}

export function FadeComponent({ children, duration, direction, triggerOnce, className, delay }: { children: React.ReactNode; duration?: any; direction?: any; triggerOnce?: boolean; className?: string, delay?: any }) {
  const FadePresent: React.FC<FadeCustomProps> = Fade
  return <FadePresent duration={duration} direction={direction} triggerOnce={triggerOnce || true} delay={delay} className={className}>{children}</FadePresent>
}