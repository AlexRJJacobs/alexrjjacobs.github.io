import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import Image, {StaticImageData} from 'next/image';
import {FC, Fragment, memo} from 'react';

import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  image: StaticImageData;
  alt: string;
  video?: string;
  title?: string;
  text: string;
  credit?: string;
  /** Wide diagrams keep a readable size on phones and scroll sideways instead of shrinking to fit */
  wide?: boolean;
}

// Full-size view of a photo or CAD video. Esc, the close button, or a click outside the panel closes it.
const Lightbox: FC<LightboxProps> = memo(({open, onClose, image, alt, video, title, text, credit, wide}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Transition appear as={Fragment} show={open}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div aria-hidden="true" className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="flex w-full max-w-5xl flex-col items-center gap-y-4">
                <button
                  aria-label="Close"
                  className="self-end rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  onClick={onClose}
                  type="button">
                  <XMarkIcon className="h-6 w-6" />
                </button>
                {video ? (
                  <video
                    aria-label={alt}
                    autoPlay={!prefersReducedMotion}
                    className="max-h-[75vh] w-auto max-w-full rounded-lg"
                    controls
                    loop
                    muted
                    playsInline
                    poster={image.src}
                    src={video}
                  />
                ) : wide ? (
                  <>
                    <div className="w-full overflow-x-auto rounded-lg">
                      <Image alt={alt} className="h-auto w-[1000px] max-w-none sm:w-full sm:max-w-full" src={image} />
                    </div>
                    <p className="text-xs text-neutral-400 sm:hidden">Scroll sideways to see the whole diagram.</p>
                  </>
                ) : (
                  <Image
                    alt={alt}
                    className="h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
                    src={image}
                  />
                )}
                <div className="max-w-2xl text-center">
                  {title ? (
                    <>
                      <Dialog.Title className="text-lg font-semibold text-white">{title}</Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm leading-relaxed text-neutral-300">
                        {text}
                      </Dialog.Description>
                    </>
                  ) : (
                    <Dialog.Title className="text-sm leading-relaxed text-neutral-200">{text}</Dialog.Title>
                  )}
                  {credit && <p className="mt-2 text-xs text-neutral-400">Photo: {credit}</p>}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

Lightbox.displayName = 'Lightbox';
export default Lightbox;
