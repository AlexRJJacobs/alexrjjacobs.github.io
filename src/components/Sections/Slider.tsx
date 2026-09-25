import {ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {CSSProperties, FC, memo, PointerEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {Carousel, SectionId} from '../../data/data';
import {Slider as SliderType} from '../../data/dataDef';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import Section from '../Layout/Section';

const arrowButtonClass =
  'rounded-full p-2 text-white ring-1 ring-white/30 backdrop-blur transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:opacity-30';

// A horizontal drag shorter than this is treated as a tap rather than a swipe.
const SWIPE_THRESHOLD = 40;

// How long to wait for the next backdrop to download before fading to it anyway.
const PRELOAD_TIMEOUT = 600;

const preloadImage = (src: string, onReady: () => void) => {
  let done = false;
  const finish = () => {
    if (!done) {
      done = true;
      onReady();
    }
  };
  const image = new window.Image();
  image.onload = finish;
  image.onerror = finish;
  image.src = src;
  window.setTimeout(finish, PRELOAD_TIMEOUT);
};

const Sliders: FC = memo(() => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [previousSectionIndex, setPreviousSectionIndex] = useState<number>(0);
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [isFading, setIsFading] = useState(false);
  // Backdrops are CSS backgrounds, which the browser fetches as soon as they are set, so hold them back until the
  // carousel is close to the viewport and then only ever set the current and outgoing ones.
  const [nearViewport, setNearViewport] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{x: number; y: number} | null>(null);
  const changeRequest = useRef(0);

  const {slidersections} = Carousel;
  const currentSection = slidersections[activeSectionIndex];
  const {sliders} = currentSection;

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      {rootMargin: '600px 0px'},
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSliderIndex(current => Math.min(current + 1, sliders.length - 1));
  }, [sliders.length]);

  const prevSlide = useCallback(() => {
    setActiveSliderIndex(current => Math.max(current - 1, 0));
  }, []);

  const handlePointerDown = useCallback<PointerEventHandler<HTMLDivElement>>(event => {
    dragStart.current = {x: event.clientX, y: event.clientY};
  }, []);

  const handlePointerUp = useCallback<PointerEventHandler<HTMLDivElement>>(
    event => {
      const start = dragStart.current;
      dragStart.current = null;
      if (!start) {
        return;
      }
      const deltaX = event.clientX - start.x;
      const deltaY = event.clientY - start.y;
      // One gesture advances one card, and mostly-vertical drags are left to the page scroll.
      if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    },
    [nextSlide, prevSlide],
  );

  const handlePointerCancel = useCallback(() => {
    dragStart.current = null;
  }, []);

  const changeSection = useCallback(
    (index: number) => {
      if (index === activeSectionIndex) {
        return;
      }
      // Only the latest request wins if someone clicks through groups faster than the backdrops load.
      const request = ++changeRequest.current;
      const fade = () => {
        if (request !== changeRequest.current) {
          return;
        }
        setPreviousSectionIndex(activeSectionIndex);
        setIsFading(true);
        window.setTimeout(() => {
          setActiveSectionIndex(index);
          setActiveSliderIndex(0);
          window.setTimeout(() => {
            setIsFading(false);
          }, 50);
        }, 200);
      };
      const nextBackdrop = slidersections[index].SliderimageSrc;
      if (nextBackdrop) {
        preloadImage(nextBackdrop.src, fade);
      } else {
        fade();
      }
    },
    [activeSectionIndex, slidersections],
  );

  const nextSection = useCallback(() => {
    changeSection((activeSectionIndex + 1) % slidersections.length);
  }, [activeSectionIndex, changeSection, slidersections.length]);

  const prevSection = useCallback(() => {
    changeSection((activeSectionIndex - 1 + slidersections.length) % slidersections.length);
  }, [activeSectionIndex, changeSection, slidersections.length]);

  // If no slider sections, don't render the section
  if (!slidersections.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Featured}>
      <div className="relative w-full bg-neutral-700" ref={rootRef}>
        {slidersections.map((section, index) => {
          const isPrevious = index === previousSectionIndex;
          const isCurrent = index === activeSectionIndex;
          const isVisible = (isPrevious && isFading) || (isCurrent && !isFading);
          const src = nearViewport && (isCurrent || isPrevious) ? section.SliderimageSrc?.src : undefined;

          return (
            <Backdrop
              isCurrent={isCurrent}
              isVisible={isVisible}
              key={`bg-${index}`}
              parallax={parallaxEnabled}
              position={section.backgroundPosition}
              src={src}
            />
          );
        })}

        {/* Content Layer */}
        <div className="relative z-20 flex w-full items-center justify-center px-4 py-16 md:py-24 lg:px-8">
          <div className="w-full max-w-screen-lg">
            {/* Group controls, sitting above the cards */}
            <div className="mb-8 flex flex-col items-center gap-y-4">
              <div className="flex w-full items-center justify-between gap-x-3">
                <button
                  aria-label="Previous group"
                  className={classNames(arrowButtonClass, 'shrink-0 bg-gray-900/70 hover:bg-gray-900/90')}
                  disabled={slidersections.length <= 1}
                  onClick={prevSection}>
                  <ChevronLeftIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div
                  aria-live="polite"
                  className="flex max-w-xl flex-col items-center gap-y-1 rounded-xl bg-gray-900/75 px-5 py-3 text-center shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                    Featured projects
                  </span>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{currentSection.title}</h2>
                  {currentSection.summary && (
                    <p className="text-xs leading-snug text-neutral-200 sm:text-sm">{currentSection.summary}</p>
                  )}
                </div>

                <button
                  aria-label="Next group"
                  className={classNames(arrowButtonClass, 'shrink-0 bg-gray-900/70 hover:bg-gray-900/90')}
                  disabled={slidersections.length <= 1}
                  onClick={nextSection}>
                  <ChevronRightIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {slidersections.map((section, index) => (
                  <GroupButton
                    active={activeSectionIndex === index}
                    index={index}
                    key={`section-${index}`}
                    onSelect={changeSection}
                    title={section.title}
                  />
                ))}
              </div>
            </div>

            {/* Card stage: the active project sits in front, its neighbours behind it */}
            <div
              className="relative h-[560px] touch-pan-y select-none overflow-hidden sm:h-[500px] lg:h-[440px]"
              onPointerCancel={handlePointerCancel}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}>
              {sliders.map((slider, index) => (
                <SliderItem
                  isActive={index === activeSliderIndex}
                  key={`${slider.title}-${index}`}
                  offset={index - activeSliderIndex}
                  slider={slider}
                />
              ))}

              {sliders.length > 1 && (
                <>
                  <button
                    aria-label="Previous project"
                    className={classNames(
                      arrowButtonClass,
                      'absolute left-0 top-1/2 z-40 hidden -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 sm:block',
                    )}
                    disabled={activeSliderIndex === 0}
                    onClick={prevSlide}>
                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next project"
                    className={classNames(
                      arrowButtonClass,
                      'absolute right-0 top-1/2 z-40 hidden -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 sm:block',
                    )}
                    disabled={activeSliderIndex === sliders.length - 1}
                    onClick={nextSlide}>
                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Project navigation, below the cards */}
            {sliders.length > 1 && (
              <div className="mt-6 flex flex-col items-center gap-y-2">
                <div className="flex items-center gap-x-3">
                  <button
                    aria-label="Previous project"
                    className={classNames(arrowButtonClass, 'bg-gray-900/80 hover:bg-gray-900 sm:hidden')}
                    disabled={activeSliderIndex === 0}
                    onClick={prevSlide}>
                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                  {sliders.map((slider, index) => (
                    <DotButton
                      active={index === activeSliderIndex}
                      index={index}
                      key={`select-button-${index}`}
                      onSelect={setActiveSliderIndex}
                      title={slider.title}
                    />
                  ))}
                  <button
                    aria-label="Next project"
                    className={classNames(arrowButtonClass, 'bg-gray-900/80 hover:bg-gray-900 sm:hidden')}
                    disabled={activeSliderIndex === sliders.length - 1}
                    onClick={nextSlide}>
                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
                <span className="rounded-full bg-gray-900/70 px-3 py-1 text-xs text-neutral-100 backdrop-blur-sm">
                  Project {activeSliderIndex + 1} of {sliders.length} · swipe or use the arrows
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
});

const Backdrop: FC<{src?: string; position?: string; parallax: boolean; isVisible: boolean; isCurrent: boolean}> = memo(
  ({src, position, parallax, isVisible, isCurrent}) => {
    const style = useMemo<CSSProperties | undefined>(
      () => (src ? {backgroundImage: `url(${src})`, backgroundPosition: position ?? 'center'} : undefined),
      [src, position],
    );
    return (
      <div
        aria-hidden="true"
        className={classNames(
          'absolute inset-0 h-full w-full bg-cover transition-opacity duration-300',
          parallax && 'bg-fixed',
          isVisible ? 'opacity-100' : 'opacity-0',
          isCurrent ? 'z-10' : 'z-0',
        )}
        style={style}
      />
    );
  },
);

const GroupButton: FC<{title: string; index: number; active: boolean; onSelect: (index: number) => void}> = memo(
  ({title, index, active, onSelect}) => {
    const handleClick = useCallback(() => onSelect(index), [index, onSelect]);
    return (
      <button
        aria-pressed={active}
        className={classNames(
          'rounded-full border px-3 py-1 text-xs font-medium backdrop-blur transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:text-sm',
          active
            ? 'border-white bg-white text-neutral-900'
            : 'border-white/40 bg-gray-900/70 text-neutral-100 hover:bg-gray-900/90',
        )}
        onClick={handleClick}>
        {title}
      </button>
    );
  },
);

const DotButton: FC<{title: string; index: number; active: boolean; onSelect: (index: number) => void}> = memo(
  ({title, index, active, onSelect}) => {
    const handleClick = useCallback(() => onSelect(index), [index, onSelect]);
    return (
      <button
        aria-label={`Go to ${title}`}
        aria-pressed={active}
        className={classNames(
          'h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300',
          active ? 'scale-100 bg-white' : 'scale-75 bg-white/50 hover:bg-white/80',
        )}
        onClick={handleClick}
      />
    );
  },
);

const SliderItem: FC<{slider: SliderType; offset: number; isActive: boolean}> = memo(
  ({slider: {title, image, alt, imagePosition, imageFit, description, href}, offset, isActive}) => {
    const distance = Math.abs(offset);
    const isVisible = distance <= 2;
    const style = useMemo<CSSProperties>(
      () => ({
        transform: `translate(-50%, -50%) translateX(${offset * 42}%) scale(${1 - distance * 0.12})`,
        zIndex: 30 - distance * 10,
        opacity: isVisible ? 1 - distance * 0.3 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }),
      [offset, distance, isVisible],
    );
    const imageStyle = useMemo<CSSProperties | undefined>(
      () => (imagePosition ? {objectPosition: imagePosition} : undefined),
      [imagePosition],
    );

    return (
      <div
        aria-hidden={!isActive}
        className="absolute left-1/2 top-1/2 flex h-full w-[88%] max-w-[760px] flex-col gap-4 rounded-xl bg-gray-800 p-4 shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-[transform,opacity] duration-300 ease-out will-change-transform sm:p-5 lg:flex-row lg:gap-6"
        style={style}>
        <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg min-[360px]:h-44 sm:h-52 lg:h-full lg:w-[300px]">
          <ImageWithPlaceholder
            alt={alt}
            className={classNames(
              'h-full w-full rounded-lg',
              imageFit === 'contain' ? 'object-contain' : 'object-cover object-top',
            )}
            sizes="(min-width: 1024px) 300px, 90vw"
            src={image}
            style={imageStyle}
            wrapperClassName="h-full w-full"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <h3 className="text-left text-base font-bold uppercase text-gray-100 underline decoration-indigo-400 underline-offset-4 sm:text-lg">
            {title}
          </h3>
          <p className="mt-3 min-h-0 overflow-y-auto break-normal text-left text-sm leading-relaxed text-neutral-100 sm:text-base">
            {description}
          </p>
          {href && (
            <a
              className="mt-3 flex shrink-0 items-center gap-x-1 self-start rounded-md text-sm font-semibold text-indigo-300 hover:text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-base"
              href={href}
              tabIndex={isActive ? undefined : -1}>
              Full write-up and photos
              <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    );
  },
);

Backdrop.displayName = 'Backdrop';
GroupButton.displayName = 'GroupButton';
DotButton.displayName = 'DotButton';
SliderItem.displayName = 'SliderItem';
Sliders.displayName = 'Sliders';
export default Sliders;
