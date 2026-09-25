import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, ReactNode, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

type HeroIcon = ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;

export interface HomepageMeta {
  title: string;
  description: string;
  /** Absolute URL of the 1200x630 link-preview image */
  ogImageUrl?: string;
  ogImageAlt?: string;
}

/**
 * A photo, render, or looping CAD video with a caption. `image` doubles as the video's poster.
 */
export interface Figure {
  image: StaticImageData;
  alt: string;
  caption: string;
  /** Path under /public of a muted, looping MP4, e.g. '/media/camera-mount.mp4' */
  video?: string;
  /** 'contain' for renders on a flat background that must not be cropped */
  fit?: 'cover' | 'contain';
  /** CSS object-position for 'cover' crops */
  position?: string;
  /** Fill behind a 'contain' render, matched to the render's own background */
  background?: string;
  /** Span the full row at the image's own aspect ratio, for diagrams that are unreadable when cropped or shrunk */
  wide?: boolean;
}

/**
 * Hero section
 */
export interface Hero {
  name: string;
  tagline: string;
  eyebrow: string;
  description: ReactNode;
  /** The co-op term being sought. Rendered as a highlighted line when set. */
  availability?: string;
  image: Figure;
  /** Full-bleed photo behind the hero, blurred and darkened toward the text */
  backdrop?: StaticImageData;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: HeroIcon;
}

/**
 * About section
 */
export interface About {
  profileImage?: Figure;
  description: ReactNode;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: HeroIcon;
}

/**
 * Skills section
 */
export interface Skill {
  name: string;
  evidence: string[];
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Personal builds gallery
 */
export interface PortfolioItem {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  video?: string;
  /** Photographer, when the photo isn't mine */
  credit?: string;
  /** CSS object-position for the square thumbnail crop */
  position?: string;
}

/**
 * Resume section
 */
export interface TimelineItem {
  id?: string;
  date: string;
  location: string;
  note?: string;
  title: string;
  content: ReactNode;
  figures?: Figure[];
}

/**
 * Featured project carousel
 */
export interface SliderCarousel {
  slidersections: SliderSection[];
}

export interface SliderSection {
  SliderimageSrc?: StaticImageData;
  backgroundPosition?: string;
  title: string;
  /** One line of context shown under the group title */
  summary?: string;
  sliders: Slider[];
}

export interface Slider {
  image: StaticImageData;
  alt: string;
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
  title: string;
  description: string;
  href?: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText: string;
  description: string;
  backgroundImage?: StaticImageData;
  email: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  LinkedIn: 'LinkedIn',
  Resume: 'Resume',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export type ContactIcon = FC<IconProps> | HeroIcon;

export interface ContactItem {
  type: ContactType;
  label: string;
  text: string;
  href?: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
