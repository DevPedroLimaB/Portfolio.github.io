'use client';

import { useEffect, useRef } from 'react';

// Cordão fixo no topo: o Q percorre a linha conforme a página rola.
export default function ScrollCord() {
  const track = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const loop = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = track.current;
      if (!el || !fill.current || !loop.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const travel = el.clientWidth - loop.current.getBoundingClientRect().width;
      const x = p * travel;
      loop.current.style.transform = `translateX(${x}px)`;
      fill.current.style.transform = `scaleX(${(x + 2) / el.clientWidth})`;
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-cord" ref={track} aria-hidden="true">
      <span className="scroll-cord-rest" />
      <span className="scroll-cord-fill" ref={fill} />
      <svg className="scroll-cord-loop" ref={loop} viewBox="0 0 140 120">
        <path
          d="M0,90 L40,90 A30,30 0 1 0 24.1,85.4 C39.1,112.4 73,90 100,90 L140,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
