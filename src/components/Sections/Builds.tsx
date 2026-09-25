import {PlayIcon} from '@heroicons/react/24/solid';
import {CSSProperties, FC, memo, useCallback, useMemo, useState} from 'react';

import {buildProcess, portfolioItems, SectionId} from '../../data/data';
import {Figure, PortfolioItem} from '../../data/dataDef';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';
import FigureItem from '../Media/FigureItem';
import Lightbox from '../Media/Lightbox';

const Builds: FC = memo(() => (
  <Section className="bg-neutral-800" sectionId={SectionId.Builds}>
    <div className="flex flex-col gap-y-10">
      <SectionHeading
        eyebrow="Outside work"
        lead="Costumes, props, and small parts I've made in my own time. Select a photo to see it full size."
        title="Personal builds"
      />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {portfolioItems.map(item => (
          <BuildCard item={item} key={item.title} />
        ))}
      </ul>
      <div className="flex flex-col gap-y-5 border-t border-white/10 pt-10">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-bold text-white sm:text-xl">From print to paint</h3>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            The stages these builds go through, with each photo taken from a different build.
          </p>
        </div>
        <ProcessStrip figures={buildProcess} />
      </div>
    </div>
  </Section>
));

Builds.displayName = 'Builds';
export default Builds;

const aspect = ({image}: Figure) => image.width / image.height;

// Every photo shown whole at one shared height: each column is as wide as its photo's aspect ratio. Pairs stack on
// phones and tablets, then sit side by side as a single row from lg up.
const ProcessStrip: FC<{figures: Figure[]}> = memo(({figures}) => {
  const pairs = useMemo(
    () => Array.from({length: Math.ceil(figures.length / 2)}, (_, i) => figures.slice(i * 2, i * 2 + 2)),
    [figures],
  );
  const rowStyle = useMemo(
    () =>
      ({
        '--pair-columns': pairs.map(pair => `minmax(0,${pair.reduce((sum, f) => sum + aspect(f), 0)}fr)`).join(' '),
      }) as CSSProperties,
    [pairs],
  );
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[var(--pair-columns)]" style={rowStyle}>
      {pairs.map(pair => (
        <ProcessPair figures={pair} key={pair[0].caption} />
      ))}
    </div>
  );
});

const ProcessPair: FC<{figures: Figure[]}> = memo(({figures}) => {
  const style = useMemo<CSSProperties>(
    () => ({gridTemplateColumns: figures.map(f => `minmax(0,${aspect(f)}fr)`).join(' ')}),
    [figures],
  );
  return (
    <div className="grid items-start gap-4" style={style}>
      {figures.map(figure => (
        <FigureItem dark figure={figure} key={figure.caption} natural />
      ))}
    </div>
  );
});

ProcessStrip.displayName = 'ProcessStrip';
ProcessPair.displayName = 'ProcessPair';

const BuildCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, description, image, alt, video, credit, position} = item;
  const [open, setOpen] = useState(false);
  const openLightbox = useCallback(() => setOpen(true), []);
  const closeLightbox = useCallback(() => setOpen(false), []);
  const imageStyle = useMemo<CSSProperties | undefined>(
    () => (position ? {objectPosition: position} : undefined),
    [position],
  );

  return (
    <li>
      <figure className="flex flex-col gap-y-3">
        <button
          aria-label={`View ${title} full size`}
          className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-neutral-700 shadow-lg shadow-black/30 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          onClick={openLightbox}
          type="button">
          <ImageWithPlaceholder
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
            src={image}
            style={imageStyle}
            wrapperClassName="h-full w-full"
          />
          {video && (
            <span className="absolute bottom-2 right-2 flex items-center gap-x-1 rounded-full bg-neutral-900/80 px-2 py-1 text-xs font-medium text-white">
              <PlayIcon aria-hidden="true" className="h-3.5 w-3.5" />
              CAD
            </span>
          )}
        </button>
        <figcaption>
          <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
          <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-neutral-300 sm:text-sm">{description}</p>
          {credit && <p className="mt-1 text-xs text-neutral-400">Photo: {credit}</p>}
        </figcaption>
      </figure>
      <Lightbox
        alt={alt}
        credit={credit}
        image={image}
        onClose={closeLightbox}
        open={open}
        text={description}
        title={title}
        video={video}
      />
    </li>
  );
});

BuildCard.displayName = 'BuildCard';
