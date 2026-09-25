import {useEffect} from 'react';

import {SectionId} from '../data/data';

// How far down the viewport a section's top has to pass before it counts as the current one.
const ACTIVE_LINE = 0.3;

/**
 * Reports the last section whose top has scrolled above the line 30% down the viewport, or the last section once the
 * page is scrolled to the bottom. Works for sections of any height, unlike an IntersectionObserver threshold, which a
 * section taller than the observed band can never reach.
 */
export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    // querySelectorAll returns elements in document order, which the loop below relies on.
    const sections = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVE_LINE;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: HTMLElement | undefined;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = section;
        }
      }
      if (atBottom && sections.length) {
        current = sections[sections.length - 1];
      }
      handler((current?.id as SectionId | undefined) ?? null);
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, {passive: true});
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
