import React from 'react';
import { ZoomProps, Zoom } from 'react-awesome-reveal';

interface ZoomCustomProps extends ZoomProps {
  children?: React.ReactNode;
}

export function ZoomComponent({ children, duration, direction, triggerOnce, className, delay }: { children: React.ReactNode; duration?: any; direction?: any; triggerOnce?: boolean; className?: string, delay?: any }) {
  const ZoomPresent: React.FC<ZoomCustomProps> = Zoom
  return <ZoomPresent duration={duration} direction={direction} triggerOnce={triggerOnce || true} delay={delay} className={className}>{children}</ZoomPresent>
}