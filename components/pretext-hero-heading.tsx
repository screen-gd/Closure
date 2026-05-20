'use client';

import { measureNaturalWidth, prepareWithSegments } from '@chenglou/pretext';
import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';

type WordToken = {
  text: string;
  index: number;
};

type PretextHeroHeadingProps = {
  children: string;
};

function splitWords(text: string): WordToken[] {
  const matches = text.match(/\S+\s*/g) ?? [];

  return matches.map((word, index) => ({
    text: word,
    index,
  }));
}

export function PretextHeroHeading({ children }: PretextHeroHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) {
      return;
    }

    let cancelled = false;
    let observer: ResizeObserver | null = null;

    const measureWithPretext = () => {
      if (cancelled || !heading.isConnected) {
        return;
      }

      const styles = window.getComputedStyle(heading);
      const font = [
        styles.fontStyle,
        styles.fontVariant,
        styles.fontWeight,
        styles.fontSize,
        styles.fontFamily,
      ].join(' ');

      const prepared = prepareWithSegments(children, font);
      const naturalWidth = measureNaturalWidth(prepared);

      heading.style.setProperty('--pretext-natural-width', `${naturalWidth}px`);
    };

    const ready = document.fonts?.ready ?? Promise.resolve();

    ready.then(() => {
      if (cancelled) {
        return;
      }

      measureWithPretext();
      observer = new ResizeObserver(measureWithPretext);
      observer.observe(heading);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [children]);

  const fallbackWords = splitWords(children);

  return (
    <h1 ref={headingRef} className="pretext-heading" aria-label={children}>
      <span className="pretext-heading-fallback" aria-hidden="true">
        {fallbackWords.map((word) => (
          <span
            key={`${word.text}-${word.index}`}
            className="pretext-word"
            style={{ '--word-index': word.index } as CSSProperties}
          >
            {word.text}
          </span>
        ))}
      </span>
    </h1>
  );
}
