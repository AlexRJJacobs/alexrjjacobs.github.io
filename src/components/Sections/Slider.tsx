import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, UIEventHandler, useCallback, useEffect, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, Carousel} from '../../data/data';
import {Slider as SliderType} from '../../data/dataDef';
//import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

const Sliders: FC = memo(() => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [previousSectionIndex, setPreviousSectionIndex] = useState<number>(0);
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {slidersections} = Carousel;
  const currentSection = slidersections[activeSectionIndex];
  const {sliders} = currentSection;

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveSliderIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setSlider = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );

  // Navigation functions for slider sections
  const nextSection = useCallback(() => {
    setPreviousSectionIndex(activeSectionIndex);
    setIsFading(true);
    setTimeout(() => {
      const nextIndex = (activeSectionIndex + 1) % slidersections.length;
      setActiveSectionIndex(nextIndex);
      setActiveSliderIndex(0);
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = 0;
      }
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 50);
  }, [activeSectionIndex, slidersections.length]);

  const prevSection = useCallback(() => {
    setPreviousSectionIndex(activeSectionIndex);
    setIsFading(true);
    setTimeout(() => {
      const prevIndex = (activeSectionIndex - 1 + slidersections.length) % slidersections.length;
      setActiveSectionIndex(prevIndex);
      setActiveSliderIndex(0);
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = 0;
      }
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 50);
  }, [activeSectionIndex, slidersections.length]);

  const next = useCallback(() => {
    if (activeSliderIndex + 1 === sliders.length) {
      setSlider(0)();
    } else {
      setSlider(activeSliderIndex + 1)();
    }
  }, [activeSliderIndex, setSlider, sliders.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

//  useInterval(next, 10000);

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
            ? (typeof section.SliderimageSrc === 'string' ? section.SliderimageSrc : section.SliderimageSrc.src)
            : undefined;
          
          const isPrevious = index === previousSectionIndex;
          const isCurrent = index === activeSectionIndex;
          const isVisible = (isPrevious && isFading) || (isCurrent && !isFading);
          
          return (
            <div
              key={`bg-${index}`}
              className={classNames(
                'absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-300',
                parallaxEnabled && 'bg-fixed',
                isVisible ? 'opacity-100' : 'opacity-0',
                isCurrent ? 'z-10' : 'z-0'
              )}
              style={resolvedSrc ? {backgroundImage: `url(${resolvedSrc})`} : undefined}
            />
          );
        })}
        {/* Content Layer */}
        <div className="relative z-20 flex w-full items-center justify-center px-4 py-16 md:py-24 lg:px-8">
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            
            {/* Section Navigation Header */}
            <div className="flex items-center justify-between w-full mb-4">
              <button
                onClick={prevSection}
                className="p-2 text-white hover:text-gray-300 transition-colors duration-200 disabled:opacity-50"
                disabled={slidersections.length <= 1}
                aria-label="Previous section">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">{currentSection.title}</h2>
                <div className="flex gap-x-2">
                  {slidersections.map((_, index) => (
                    <button
                      key={`section-${index}`}
                      className={classNames(
                        'h-2 w-8 rounded-full transition-all duration-300',
                        activeSectionIndex === index ? 'bg-white' : 'bg-gray-400'
                      )}
                      onClick={() => {
                        setPreviousSectionIndex(activeSectionIndex);
                        setIsFading(true);
                        setTimeout(() => {
                          setActiveSectionIndex(index);
                          setActiveSliderIndex(0);
                          if (scrollContainer.current) {
                            scrollContainer.current.scrollLeft = 0;
                          }
                          setTimeout(() => {
                            setIsFading(false);
                          }, 50);
                        }, 300);
                      }}
                      aria-label={`Go to section ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={nextSection}
                className="p-2 text-white hover:text-gray-300 transition-colors duration-200 disabled:opacity-50"
                disabled={slidersections.length <= 1}
                aria-label="Next section">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Slider Items */}
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {sliders.map((slider, index) => {
                const isActive = index === activeSliderIndex;
                return (
                  <SliderItem isActive={isActive} key={`${slider.title}-${index}`} slider={slider} />
                );
              })}
            </div>
            
            {/* Item Navigation Dots */}
            <div className="flex gap-x-4">
              {[...Array(sliders.length)].map((_, index) => {
                const isActive = index === activeSliderIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-70' : 'scale-75 opacity-70',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setSlider(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
});

const SliderItem: FC<{slider: SliderType; isActive: boolean}> = memo(
  ({slider: {title, image, description}, isActive}) => (
<div
  className={classNames(
    'flex flex-col-reverse lg:flex-row w-full shrink-0 snap-start snap-always items-start p-0 transition-opacity duration-3000 ease-in-out gap-y-6 lg:gap-x-10 justify-between',
    isActive ? 'opacity-100' : 'opacity-0'
  )}
>
  {/* Text Section */}
  <div className="flex flex-col w-full lg:max-w-1/3 px-4">
    <h2 className="underline decoration-indigo-400 text-lg sm:text-xl font-bold uppercase text-gray-100 text-left">
      {title}
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg text-white text-left break-normal">
      {description}
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-[270px] lg:h-[340px] aspect-[3/5] max-w-[370px] mx-auto overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
    <Image 
      alt={title}
      src={image}
      // placeholder="blur"
      className="w-full h-full object-cover object-top rounded-lg"
    />
  </div>
</div>
  )
);

export default Sliders;
