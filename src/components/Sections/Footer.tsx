import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

// Evaluated at build time and again in the browser; the two can differ after New Year until the next deploy, which
// is why the year below suppresses the hydration warning.
const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        aria-label="Back to top"
        className="rounded-full bg-neutral-100 p-1 text-neutral-900 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus-visible:ring-2 sm:p-2"
        href={`#${SectionId.Hero}`}>
        <ChevronUpIcon aria-hidden="true" className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-4 text-center">
      <div className="flex gap-x-4 text-neutral-400">
        <Socials />
      </div>
      <p className="text-sm text-neutral-400">Landscape photography by Alex Jacobs</p>
      <p className="text-sm text-neutral-400">
        © <span suppressHydrationWarning>{currentYear}</span> Alex Jacobs
      </p>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
