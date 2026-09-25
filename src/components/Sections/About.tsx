import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const About: FC = memo(() => {
  const {profileImage, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-12">
        {profileImage && (
          <figure className="mx-auto flex w-52 flex-col gap-y-2 md:w-full">
            <div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10">
              <ImageWithPlaceholder
                alt={profileImage.alt}
                className="h-full w-full object-cover"
                sizes="240px"
                src={profileImage.image}
                wrapperClassName="h-full w-full"
              />
            </div>
            <figcaption className="text-center text-xs leading-snug text-neutral-400 md:text-left">
              {profileImage.caption}
            </figcaption>
          </figure>
        )}
        <div className="flex flex-col gap-y-6">
          <SectionHeading eyebrow="About" title="About me" />
          <div className="flex max-w-2xl flex-col gap-y-4 text-base leading-relaxed text-neutral-300">
            {description}
          </div>
          <dl className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}) => (
              <div className="flex items-start gap-x-3" key={label}>
                {Icon && <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />}
                <div>
                  <dt className="text-sm font-semibold text-white">{label}</dt>
                  <dd className="text-sm text-neutral-300">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
