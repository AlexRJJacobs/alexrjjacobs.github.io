import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, slider} from '../../data/data';
import {Slider} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

const Sliders: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {SliderimageSrc, sliders} = slider;

  const resolveSrc = useMemo(() => {
    if (!SliderimageSrc) return undefined;
    return typeof SliderimageSrc === 'string' ? SliderimageSrc : SliderimageSrc.src;
  }, [SliderimageSrc]);

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
      setActiveIndex(newIndex);
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
  const next = useCallback(() => {
    if (activeIndex + 1 === sliders.length) {
      setSlider(0)();
    } else {
      setSlider(activeIndex + 1)();
    }
  }, [activeIndex, setSlider, sliders.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  // If no sliders, don't render the section
  if (!sliders.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Sliders}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !SliderimageSrc},
        )}
        style={SliderimageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {sliders.map((slider, index) => {
                const isActive = index === activeIndex;
                return (
                  <Slider isActive={isActive} key={`${slider.title}-${index}`} slider={slider} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(sliders.length)].map((_, index) => {
                const isActive = index === activeIndex;
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
    </Section>
  );
});

const Slider: FC<{slider: Slider; isActive: boolean}> = memo(
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
