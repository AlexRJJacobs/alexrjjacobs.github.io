import {DocumentTextIcon, EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../data/data';
import {ContactIcon, ContactItem, ContactType} from '../../data/dataDef';
import LinkedInIcon from '../Icon/LinkedInIcon';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';

const contactIcons: Record<ContactType, ContactIcon> = {
  [ContactType.Email]: EnvelopeIcon,
  [ContactType.Phone]: PhoneIcon,
  [ContactType.Location]: MapPinIcon,
  [ContactType.LinkedIn]: LinkedInIcon,
  [ContactType.Resume]: DocumentTextIcon,
};

const Contact: FC = memo(() => {
  const {headerText, description, backgroundImage, email, items} = contact;

  return (
    <Section noPadding sectionId={SectionId.Contact}>
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-neutral-800 px-4 py-20 md:py-28 lg:px-8">
        {backgroundImage && (
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            placeholder="blur"
            sizes="100vw"
            src={backgroundImage}
          />
        )}
        <div className="relative z-10 w-full max-w-screen-md rounded-2xl bg-neutral-900/85 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-sm sm:p-10">
          <SectionHeading eyebrow="Contact" lead={description} title={headerText} />
          <a
            className="mt-6 inline-flex max-w-full items-center gap-x-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:text-base"
            href={`mailto:${email}`}>
            <EnvelopeIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span className="break-all">{email}</span>
          </a>
          <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
            {items.map(item => (
              <ContactDetail item={item} key={item.label} />
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
});

const ContactDetail: FC<{item: ContactItem}> = memo(({item: {type, label, text, href}}) => {
  const Icon = contactIcons[type];
  const external = !!href && !href.startsWith('mailto:') && !href.startsWith('tel:');
  return (
    <div>
      <dt className="flex items-center gap-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        <Icon aria-hidden="true" className="h-4 w-4" />
        {label}
      </dt>
      <dd className="mt-1.5 text-sm text-white sm:text-base">
        {href ? (
          <a
            className="rounded-sm underline decoration-indigo-400 decoration-2 underline-offset-4 transition-colors hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            href={href}
            rel={external ? 'noopener noreferrer' : undefined}
            target={external ? '_blank' : undefined}>
            {text}
          </a>
        ) : (
          text
        )}
      </dd>
    </div>
  );
});

Contact.displayName = 'Contact';
ContactDetail.displayName = 'ContactDetail';
export default Contact;
