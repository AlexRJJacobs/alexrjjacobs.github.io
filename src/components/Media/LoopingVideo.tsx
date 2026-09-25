import {PauseIcon, PlayIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, memo, useCallback, useEffect, useRef, useState} from 'react';

import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

// A muted CAD turntable that stands in for an animated image. It only downloads and plays while on screen, stays on
// its poster for people who prefer reduced motion, and has its own pause button because the loop never ends.
const LoopingVideo: FC<{src: string; poster: string; label: string; className?: string}> = memo(
  ({src, poster, label, className}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const pausedByUser = useRef(false);
    const [playing, setPlaying] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
      const video = videoRef.current;
      if (!video) {
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !pausedByUser.current && !prefersReducedMotion) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        },
        {rootMargin: '100px 0px'},
      );
      observer.observe(video);
      return () => observer.disconnect();
    }, [prefersReducedMotion]);

    const toggle = useCallback(() => {
      const video = videoRef.current;
      if (!video) {
        return;
      }
      if (video.paused) {
        pausedByUser.current = false;
        video.play().catch(() => undefined);
      } else {
        pausedByUser.current = true;
        video.pause();
      }
    }, []);

    const handlePlay = useCallback(() => setPlaying(true), []);
    const handlePause = useCallback(() => setPlaying(false), []);

    return (
      <span className="relative block h-full w-full">
        <video
          aria-label={label}
          className={className}
          loop
          muted
          onPause={handlePause}
          onPlay={handlePlay}
          playsInline
          poster={poster}
          preload="none"
          ref={videoRef}
          src={src}
        />
        <button
          aria-label={playing ? 'Pause animation' : 'Play animation'}
          className={classNames(
            'absolute bottom-2 right-2 rounded-full bg-neutral-900/75 p-1.5 text-white transition-colors',
            'hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
          )}
          onClick={toggle}
          type="button">
          {playing ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </button>
      </span>
    );
  },
);

LoopingVideo.displayName = 'LoopingVideo';
export default LoopingVideo;
