import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background.webp';
import heroImage from '../images/backdrop1.jpeg';
import porfolioImage1 from '../images/ODST/46-Halo_Shoot_Oct_28_hi_res-46.jpg';
import testimonialImage from '../images/ODST/137-Halo_Shoot_Oct_28_hi_res-137.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile.jpeg';
import porfolioImage2 from '../images/ReachCosplayPhotos/IMG_9919_cropped.jpg';
import porfolioImage3 from '../images/ScoutTrooper/IMG_1490.jpg';
import porfolioImage4 from '../images/VariousProjects/AceOfSpades.jpg';
import porfolioImage5 from '../images/VariousProjects/helldivershelmet.jpg';
import porfolioImage9 from '../images/VariousProjects/IMG_3549.jpg';
import porfolioImage8 from '../images/VariousProjects/NCRRangerHelmet.jpg';
import porfolioImage6 from '../images/VariousProjects/NCRRangerMask.jpg';
import porfolioImage7 from '../images/VariousProjects/ultrakill_thingy.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  SliderSection,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alex Jacobs Engineering Portfolio',
  description: "A portfolio website of projects by Alex Jacobs",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  // Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Sliders: 'sliders',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Solutions From Scratch`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a University of Waterloo <strong className="text-stone-100">Mechatronics student</strong>, currently in 1st
        year with years of prior experience in <strong className="text-stone-100">3D-Modelling, 3D-Printing,</strong>{' '}
        and <strong className="text-stone-100">Programming</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I am found creating <strong className="text-stone-100">Costumes and Props</strong> from
        movies and video games, taking <strong className="text-stone-100">Landscape Photography</strong>, or <strong className="text-stone-100">Exploring</strong>
        whichever city I find myself in. {/* <strong className="text-stone-100">Vancouver Island</strong>. */}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AlexJacobsCV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a first year student studying mechatronics engineering at the University of Waterloo.
   Ever since I was a baby I've had a knack for technology, designing and creating. 
   Fortunately for me, these are transferable skills which has allowed me to pursue a career in engineering.`,
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Science fiction, Photography, Painting', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'CAD Programs',
    skills: [
      {
        name: 'Solidworks',
        level: 10,
      },
      {
        name: 'Fusion 360',
        level: 7,
      },
      {
        name: 'Onshape',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'Lua',
        level: 2,
      },
    ],
  },
  {
    name: 'Manufacturing',
    skills: [
      {
        name: '3D-Printing',
        level: 10,
      },
      {
        name: 'Machining',
        level: 4,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Halo ODST Cosplay',
    description: 'I made this when I was 16 and worked on it for about a year on and off. It is a wearable replica of the jetpack ODST featured in Halo Reach.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Halo Reach Noble Six Cosplay',
    description: 'Over the course of approximately 3 months, I modified, 3D-printed, finished and painted a scaled down wearable replica of the armour you can find in Halo Reach.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Revenge of the Sith Scout Trooper Cosplay',
    description: 'In just under a month I constructed two wearable cosplays of Scout Troopers from Revenge of the Sith for me and my friend.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Ace of Spades Replica',
    description: 'A friend of mine wanted a replica of his favourite weapon from his favourite game Destiny!',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Helldivers 2 Wearable Helmet',
    description: 'I was commissioned by a client in the USA to recreate the helmet featured in the video game Helldivers 2.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'NCR Ranger Custom Mask',
    description: 'I was commissioned by a client in Singapore to create a customized mask of an NCR Ranger from the video game Fallout: New Vegas.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Ultrakill Figurine',
    description: 'Another commission from a different client in the USA. I printed and painted a custom figurine of the character V1 from the video game Ultrakill.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'NCR Ranger Helmet',
    description: 'I was commissioned by a friend to recreate the entire helmet of an NCR Ranger from the video game Fallout: New Vegas.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Borderlands Psycho Mask',
    description: 'I made this wearable mask of the Psycho from the video game series Borderlands as a gift for a friend.',
    url: '',
    image: porfolioImage9,
  },
  
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'January 6th 2025 - April 21st 2025',
    location: 'Sensing and Robotics for Infrastructure Lab, UCLA',
    title: 'Student Lab Assistant Co-op',
    content: (
      <p>During this co-op I: 
        <ul>
      <li>◦ Wrote a program to add gaussian noise to LiDAR or IMU data within .bag files for Robot Operating System (ROS)</li>
      <li>◦ Created files and instructions to import buildings from CAD to the robotics simulator Gazebo</li>
      <li>◦ Designed and modelled multiple pre-existing mounting solutions to allow for newer parts to be installed</li>
      <li>◦ Debugged and tested numerous SLAM algorithms on several datasets</li>
      <li>◦ Debugged several deprecated programs related to Robot Operating System (ROS)</li>
      <li>◦ Designed multiple different logos for the lab as a whole</li>
      <li>◦ Other miscellaneous work to accelerate the lab’s research</li>
      </ul>
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];
export const education: TimelineItem[] = [
  {
    date: 'August 2023, January 6th 2025 - April 21st 2025',
    location: 'Sensing and Robotics for Infrastructure Lab, UCLA',
    title: 'Unmanned Surface Vehicle',
    content: <p>Did various work ranging from modelling parts of the hull to running SLAM algorthims on related datasets</p>,
  },
  {
    date: 'August 2023',
    location: 'New Haven Learning Centre',
    title: 'Forearm Guard',
    content: <p>I Designed, modelled, and 3D-Printed a bite guard for therapists working with autistic children</p>,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      cellnumber: '437-688-2039',
      cell: 'Call',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
      email: 'Email',
      emailaddress: 'ajrjacob@uwaterloo.ca',
      linkedin: 'LinkedIn',
      linkedinaddress: 'Alex Jacobs',
      href: 'https://www.linkedin.com/in/alex-jacobs-4bb0b6328/',
      name: '',
      text: '',
    },
  ],
};
export const slider: SliderSection = {
  SliderimageSrc: testimonialImage,
  sliders: [
    {
      image: porfolioImage1,
      title: 'aa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      href: 'idfk',
    },
    {
      image: porfolioImage2,
      title: 'cc',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      href: 'idfk',
    },
  ],
};
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alex-jacobs-4bb0b6328/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
