import {PhotoIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image, {ImageProps} from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

const ImageWithPlaceholder: FC<ImageProps & {wrapperClassName?: string}> = memo(
  ({className, wrapperClassName, ...imageProps}) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = useCallback(() => setLoaded(true), []);

    return (
      <span className={classNames('relative block overflow-hidden', wrapperClassName)}>
        <span
          className={classNames(
            'absolute inset-0 flex items-center justify-center bg-neutral-700 transition-opacity duration-500',
            loaded ? 'opacity-0' : 'animate-pulse opacity-100',
          )}>
          <PhotoIcon aria-hidden="true" className="h-8 w-8 text-neutral-500" />
        </span>
        <Image
          {...imageProps}
          className={classNames(
            'relative transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            className,
          )}
          onLoad={handleLoad}
        />
      </span>
    );
  },
);

ImageWithPlaceholder.displayName = 'ImageWithPlaceholder';
export default ImageWithPlaceholder;
