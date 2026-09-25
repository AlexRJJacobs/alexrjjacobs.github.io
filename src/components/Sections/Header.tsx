import {Dialog, Transition} from '@headlessui/react';
import {ArrowDownTrayIcon, Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useState} from 'react';

import {navItems, resumeHref, SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

const headerID = 'headerNav';

// The hero is tracked as well, so nothing is highlighted before the first nav section.
const navSelector = [SectionId.Hero, ...navItems.map(({section}) => section)].map(section => `#${section}`).join(',');

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSelector, intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} />
      <DesktopNav currentSection={currentSection} />
    </>
  );
});

const DesktopNav: FC<{currentSection: SectionId | null}> = memo(({currentSection}) => {
  const baseClass =
    'rounded-md px-1 py-1 text-sm font-semibold transition-colors duration-200 hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400';
  const activeClass = classNames(baseClass, 'text-indigo-300');
  const inactiveClass = classNames(baseClass, 'text-neutral-200');
  return (
    <header
      className="fixed top-0 z-50 hidden w-full border-b border-white/10 bg-neutral-900/90 backdrop-blur sm:block"
      id={headerID}>
      <div className="mx-auto flex max-w-screen-lg items-center justify-center gap-x-6 px-4 py-3 md:justify-between lg:px-8">
        <a
          className="hidden rounded-md text-base font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:block"
          href={`/#${SectionId.Hero}`}>
          Alex Jacobs
        </a>
        <nav aria-label="Sections" className="flex gap-x-5 lg:gap-x-6">
          {navItems.map(({section, label}) => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              label={label}
              section={section}
            />
          ))}
        </nav>
        <ResumeLink className="hidden md:flex" />
      </div>
    </header>
  );
});

const MobileNav: FC<{currentSection: SectionId | null}> = memo(({currentSection}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

  const baseClass =
    'rounded-md p-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400';
  const activeClass = classNames(baseClass, 'bg-neutral-900 font-bold text-white');
  const inactiveClass = classNames(baseClass, 'font-medium text-neutral-200');
  return (
    <>
      <button
        aria-label="Open menu"
        className="fixed right-2 top-2 z-40 rounded-md bg-indigo-600 p-2 shadow-lg shadow-black/30 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon aria-hidden="true" className="h-8 w-8 text-white" />
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative flex w-4/5 max-w-xs flex-col gap-y-6 bg-neutral-800 px-4 py-6">
              <Dialog.Title className="px-2 text-lg font-bold text-white">Alex Jacobs</Dialog.Title>
              <nav aria-label="Sections" className="flex flex-col gap-y-1">
                {navItems.map(({section, label}) => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    label={label}
                    onClick={toggleOpen}
                    section={section}
                  />
                ))}
              </nav>
              <ResumeLink className="flex self-start" />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: SectionId;
  label: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, label, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      aria-current={current ? 'true' : undefined}
      className={current ? activeClass : inactiveClass}
      href={`/#${section}`}
      onClick={onClick}>
      {label}
    </Link>
  );
});

const ResumeLink: FC<{className?: string}> = memo(({className}) => (
  <a
    className={classNames(
      'items-center gap-x-1.5 rounded-full bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
      className,
    )}
    href={resumeHref}
    rel="noopener noreferrer"
    target="_blank">
    Resume
    <ArrowDownTrayIcon aria-hidden="true" className="h-4 w-4" />
  </a>
));

Header.displayName = 'Header';
export default Header;
