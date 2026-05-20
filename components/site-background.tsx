'use client';

import { useEffect, useRef } from 'react';

export function SiteBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return;
    }

    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = background.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        background.style.setProperty('--pointer-x', `${x}px`);
        background.style.setProperty('--pointer-y', `${y}px`);
      });
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="interactive-site-background" aria-hidden="true">
      <div className="background-grid" />
    </div>
  );
}
