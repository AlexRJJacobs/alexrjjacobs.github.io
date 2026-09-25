import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, tagline, eyebrow, description, availability, image, backdrop, actions} = heroData;

  return (
    <Section className="relative overflow-hidden bg-neutral-900" noPadding sectionId={SectionId.Hero}>
      {backdrop && (
        <Image
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
          loading="eager"
          placeholder="blur"
          sizes="100vw"
          src={backdrop}
        />
      )}
      {/* Dark enough behind the text to keep it readable, then clearing behind the photo so the backdrop keeps its colour */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950/45 lg:bg-[linear-gradient(to_right,rgb(10_10_10/0.8)_0%,rgb(10_10_10/0.75)_50%,rgb(10_10_10/0.2)_75%,rgb(10_10_10/0.1)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-800"
      />
      <div className="relative mx-auto grid max-w-screen-lg items-center gap-10 px-4 pb-16 pt-24 sm:pt-28 lg:min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 sm:text-sm">{eyebrow}</p>
          <h1 className="flex flex-col gap-y-3 font-bold text-white">
            <span className="text-5xl tracking-tight sm:text-6xl lg:text-7xl">{name}</span>
            <span className="sr-only"> — </span>
            <span className="text-2xl font-semibold text-neutral-200 sm:text-3xl">{tagline}</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">{description}</p>
          {availability && (
            <p className="flex items-center gap-x-2 text-sm font-medium text-emerald-300 sm:text-base">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              {availability}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            {actions.map(({href, text, primary, Icon}) => {
              const opensFile = href.endsWith('.pdf');
              return (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors sm:text-base',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
                    primary ? 'bg-indigo-600 hover:bg-indigo-500' : 'ring-1 ring-inset ring-white/40 hover:bg-white/10',
                  )}
                  href={href}
                  key={text}
                  rel={opensFile ? 'noopener noreferrer' : undefined}
                  target={opensFile ? '_blank' : undefined}>
                  {text}
                  {Icon && <Icon aria-hidden="true" className="h-5 w-5" />}
                </a>
              );
            })}
            <div className="flex items-center gap-x-4 pl-1 text-neutral-300">
              <Socials />
            </div>
          </div>
        </div>

        <figure className="mx-auto flex w-full max-w-xl flex-col gap-y-3 lg:max-w-none">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <Image
              alt={image.alt}
              className="h-full w-full object-cover"
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 576px, 100vw"
              src={image.image}
            />
          </div>
          <figcaption className="text-xs leading-snug text-neutral-100 sm:text-sm">{image.caption}</figcaption>
        </figure>
      </div>
      <div className="absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
        <a
          aria-label="Scroll to About"
          className="rounded-full bg-white/90 p-2 text-neutral-900 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          href={`#${SectionId.About}`}>
          <ChevronDownIcon aria-hidden="true" className="h-6 w-6" />
        </a>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
