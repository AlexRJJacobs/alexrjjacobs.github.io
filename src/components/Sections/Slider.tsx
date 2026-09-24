import {ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {CSSProperties, FC, memo, PointerEventHandler, useCallback, useEffect, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {Carousel, SectionId} from '../../data/data';
import {Slider as SliderType} from '../../data/dataDef';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import Section from '../Layout/Section';

const arrowButtonClass =
  'rounded-full p-2 text-white ring-1 ring-white/30 backdrop-blur transition-colors duration-200 disabled:opacity-30';

// A horizontal drag shorter than this is treated as a tap rather than a swipe.
const SWIPE_THRESHOLD = 40;

const Sliders: FC = memo(() => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [previousSectionIndex, setPreviousSectionIndex] = useState<number>(0);
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const dragStart = useRef<{x: number; y: number} | null>(null);

  const {slidersections} = Carousel;
  const currentSection = slidersections[activeSectionIndex];
  const {sliders} = currentSection;

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
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
      setPreviousSectionIndex(activeSectionIndex);
      setIsFading(true);
      setTimeout(() => {
        setActiveSectionIndex(index);
        setActiveSliderIndex(0);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 200);
    },
    [activeSectionIndex],
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
    <Section noPadding sectionId={SectionId.Sliders}>
      <div className="relative w-full bg-neutral-700">
        {/* Render all background layers to preload images */}
        {slidersections.map((section, index) => {
          const resolvedSrc = section.SliderimageSrc
            ? typeof section.SliderimageSrc === 'string'
              ? section.SliderimageSrc
              : section.SliderimageSrc.src
            : undefined;

          const isPrevious = index === previousSectionIndex;
          const isCurrent = index === activeSectionIndex;
          const isVisible = (isPrevious && isFading) || (isCurrent && !isFading);

          return (
            <div
              className={classNames(
                'absolute inset-0 h-full w-full bg-cover transition-opacity duration-300',
                parallaxEnabled && 'bg-fixed',
                isVisible ? 'opacity-100' : 'opacity-0',
                isCurrent ? 'z-10' : 'z-0',
              )}
              key={`bg-${index}`}
              style={
                resolvedSrc
                  ? {
                      backgroundImage: `url(${resolvedSrc})`,
                      backgroundPosition: section.backgroundPosition ?? 'center',
                    }
                  : undefined
              }
            />
          );
        })}

        {/* Content Layer */}
        <div className="relative z-20 flex w-full items-center justify-center px-4 py-16 md:py-24 lg:px-8">
          <div className="w-full max-w-screen-lg">
            {/* Experience controls, sitting above the cards */}
            <div className="mb-8 flex flex-col items-center gap-y-4">
              <div className="flex w-full items-center justify-between gap-x-4">
                <button
                  aria-label="Previous group"
                  className={classNames(arrowButtonClass, 'bg-gray-900/70 hover:bg-gray-900/90')}
                  disabled={slidersections.length <= 1}
                  onClick={prevSection}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col items-center gap-y-1 rounded-xl bg-gray-900/70 px-5 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                    Featured Projects
                  </span>
                  <h2 className="text-center text-xl font-bold text-white sm:text-2xl">{currentSection.title}</h2>
                </div>

                <button
                  aria-label="Next group"
                  className={classNames(arrowButtonClass, 'bg-gray-900/70 hover:bg-gray-900/90')}
                  disabled={slidersections.length <= 1}
                  onClick={nextSection}>
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {slidersections.map((section, index) => (
                  <button
                    className={classNames(
                      'rounded-full border px-3 py-1 text-xs font-medium backdrop-blur transition-colors duration-200 sm:text-sm',
                      activeSectionIndex === index
                        ? 'border-white bg-white text-neutral-900'
                        : 'border-white/40 bg-gray-900/60 text-neutral-100 hover:bg-gray-900/80',
                    )}
                    key={`section-${index}`}
                    onClick={() => changeSection(index)}>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Card stage: the active project sits in front, its neighbours behind it */}
            <div
              className="relative h-[520px] touch-pan-y select-none overflow-hidden sm:h-[470px] lg:h-[430px]"
              onPointerCancel={handlePointerCancel}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}>
              {sliders.map((slider, index) => {
                const offset = index - activeSliderIndex;
                const distance = Math.abs(offset);
                const isVisible = distance <= 2;
                const style: CSSProperties = {
                  transform: `translate(-50%, -50%) translateX(${offset * 42}%) scale(${1 - distance * 0.12})`,
                  zIndex: 30 - distance * 10,
                  opacity: isVisible ? 1 - distance * 0.3 : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                };
                return (
                  <SliderItem
                    isActive={offset === 0}
                    key={`${slider.title}-${index}`}
                    slider={slider}
                    style={style}
                  />
                );
              })}

              {sliders.length > 1 && (
                <>
                  <button
                    aria-label="Previous project"
                    className={classNames(
                      arrowButtonClass,
                      'absolute left-0 top-1/2 z-40 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900',
                    )}
                    disabled={activeSliderIndex === 0}
                    onClick={prevSlide}>
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next project"
                    className={classNames(
                      arrowButtonClass,
                      'absolute right-0 top-1/2 z-40 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900',
                    )}
                    disabled={activeSliderIndex === sliders.length - 1}
                    onClick={nextSlide}>
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Project navigation, below the cards */}
            {sliders.length > 1 && (
              <div className="mt-6 flex flex-col items-center gap-y-2">
                <div className="flex gap-x-3">
                  {sliders.map((slider, index) => (
                    <button
                      aria-label={`Go to ${slider.title}`}
                      className={classNames(
                        'h-3 w-3 rounded-full transition-all duration-300',
                        index === activeSliderIndex ? 'scale-100 bg-white' : 'scale-75 bg-white/50 hover:bg-white/80',
                      )}
                      key={`select-button-${index}`}
                      onClick={() => setActiveSliderIndex(index)}
                    />
                  ))}
                </div>
                <span className="rounded-full bg-gray-900/60 px-3 py-1 text-xs text-neutral-200 backdrop-blur-sm">
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

const SliderItem: FC<{slider: SliderType; style: CSSProperties; isActive: boolean}> = memo(
  ({slider: {title, image, imagePosition, description, href}, style, isActive}) => (
    <div
      className="absolute left-1/2 top-1/2 flex h-full w-[88%] max-w-[740px] flex-col gap-4 rounded-xl bg-gray-800/90 p-4 shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-[transform,opacity] duration-300 ease-out will-change-transform sm:p-5 lg:flex-row lg:gap-6"
      style={style}>
      {/* Image Section */}
      <div className="h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-52 lg:h-full lg:w-[280px]">
        <ImageWithPlaceholder
          alt={title}
          className="h-full w-full rounded-lg object-cover object-top"
          src={image}
          style={imagePosition ? {objectPosition: imagePosition} : undefined}
          wrapperClassName="h-full w-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="text-left text-base font-bold uppercase text-gray-100 underline decoration-indigo-400 sm:text-lg">
          {title}
        </h3>
        <p className="no-scrollbar mt-3 overflow-y-auto break-normal text-left text-sm text-white sm:text-base">
          {description}
        </p>
        {href && (
          <a
            className="mt-3 flex shrink-0 items-center gap-x-1 self-start rounded-md text-sm font-medium text-indigo-300 hover:text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-base"
            href={href}
            tabIndex={isActive ? undefined : -1}>
            See the full write-up
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  ),
);

SliderItem.displayName = 'SliderItem';
Sliders.displayName = 'Sliders';
export default Sliders;
