import {useEffect, useState} from 'react';

const query = '(prefers-reduced-motion: reduce)';

// False on the server and on first render, so the static HTML matches the first client render.
const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
