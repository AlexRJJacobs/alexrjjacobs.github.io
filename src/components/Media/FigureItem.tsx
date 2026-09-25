import {ArrowsPointingOutIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {CSSProperties, FC, memo, useCallback, useMemo, useState} from 'react';

import {Figure} from '../../data/dataDef';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import Lightbox from './Lightbox';
import LoopingVideo from './LoopingVideo';

// A captioned figure. Photos open full size in a lightbox; CAD videos loop in place. `dark` is for the dark sections.
// Figures crop to 4:3 unless `natural` (or a wide figure) keeps the image's own aspect ratio.
const FigureItem: FC<{figure: Figure; dark?: boolean; natural?: boolean}> = memo(({figure, dark, natural}) => {
  const {image, alt, caption, video, fit = 'cover', position, background, wide} = figure;
  const keepAspect = natural || wide;
  const [open, setOpen] = useState(false);
  const openLightbox = useCallback(() => setOpen(true), []);
  const closeLightbox = useCallback(() => setOpen(false), []);

  const frameStyle = useMemo<CSSProperties | undefined>(
    () => ({
      ...(background ? {background} : {}),
      ...(keepAspect ? {aspectRatio: `${image.width} / ${image.height}`} : {}),
    }),
    [background, keepAspect, image.width, image.height],
  );
  const imageStyle = useMemo<CSSProperties | undefined>(
    () => (position ? {objectPosition: position} : undefined),
    [position],
  );
  const mediaClass = classNames('h-full w-full', fit === 'contain' ? 'object-contain' : 'object-cover');

  return (
    <figure className={classNames('flex flex-col gap-y-2', wide && 'sm:col-span-2')}>
      <div
        className={classNames(
          'relative overflow-hidden rounded-md ring-1',
          !keepAspect && 'aspect-[4/3]',
          dark ? 'bg-neutral-700 ring-white/10' : 'bg-neutral-200 ring-neutral-200',
        )}
        style={frameStyle}>
        {video ? (
          <LoopingVideo className={mediaClass} label={alt} poster={image.src} src={video} />
        ) : (
          <button
            aria-label={`View full size: ${caption}`}
            className="group block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
            onClick={openLightbox}
            type="button">
            <ImageWithPlaceholder
              alt={alt}
              className={classNames(mediaClass, 'transition-transform duration-300 group-hover:scale-[1.03]')}
              sizes={wide ? '(min-width: 640px) 700px, 100vw' : '(min-width: 640px) 340px, 100vw'}
              src={image}
              style={imageStyle}
              wrapperClassName="h-full w-full"
            />
            <span className="absolute right-2 top-2 rounded-full bg-neutral-900/70 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <ArrowsPointingOutIcon className="h-4 w-4" />
            </span>
          </button>
        )}
      </div>
      <figcaption
        className={classNames('text-xs leading-snug sm:text-sm', dark ? 'text-neutral-300' : 'text-neutral-600')}>
        {caption}
      </figcaption>
      {!video && <Lightbox alt={alt} image={image} onClose={closeLightbox} open={open} text={caption} wide={wide} />}
    </figure>
  );
});

FigureItem.displayName = 'FigureItem';
export default FigureItem;
