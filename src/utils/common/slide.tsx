import { Slide, SlideProps } from 'react-awesome-reveal';
interface SlideCustomProps extends SlideProps {
  children?: React.ReactNode;
}
export function SlideComponent({ children, duration, direction, triggerOnce, className }: { children: React.ReactNode; duration?: any; direction?: any; triggerOnce?: boolean; className?: string }) {
  const SlidePresent: React.FC<SlideCustomProps> = Slide;

  return <SlidePresent duration={duration} direction={direction} triggerOnce={triggerOnce || true} className={className}>{children}</SlidePresent>
}