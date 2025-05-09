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
import testimonialImage from '../images/backdrop3.jpeg';
import ODSTFeatured from '../images/ODST/46-Halo_Shoot_Oct_28_hi_res-46.jpg'
import sliderImage from '../images/ODST/137-Halo_Shoot_Oct_28_hi_res-137.jpg';
import porfolioImage1 from '../images/ODST/164-Halo_Shoot_Oct_28_hi_res-164.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile.jpeg';
import porfolioImage2 from '../images/ReachCosplayPhotos/IMG_9889.jpg';
import ReachFeatured from '../images/ReachCosplayPhotos/IMG_9919_cropped.jpg'
import ScoutTrooperFeatured from '../images/ScoutTrooper/featured.jpg';
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
  Portfolio: 'gallery',
  Resume: 'resume',
  // Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Sliders: 'featured',
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
        movies and video games, taking <strong className="text-stone-100">Landscape Photography</strong>, or <strong className="text-stone-100">Exploring </strong>
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
    name: '3D CAD Programs',
    skills: [
      {
        name: 'Solidworks',
        level: 10,
      },
      {
        name: 'Fusion 360',
        level: 8,
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
        level: 9,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Lua',
        level: 5,
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
        level: 7,
      },
      {
        name: 'Detail Finishing',
        level: 7,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'AutoCAD',
        level: 10,
      },
      {
        name: 'Microsoft Excel',
        level: 8,
      },
      {
        name: 'Robot Operating System (ROS)',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Halo ODST Cosplay',
    description: 'I made this when I was 16 and worked on it for about a year on and off. It is a wearable replica of the jetpack ODST featured in Halo Reach.',
    // url: '',
    image: porfolioImage1,
  },
  {
    title: 'Halo Reach Noble Six Cosplay',
    description: 'Over the course of approximately 3 months, I modified, 3D-printed, finished and painted a scaled down wearable replica of the armour you can find in Halo Reach.',
    // url: '',
    image: porfolioImage2,
  },
  {
    title: 'Revenge of the Sith Scout Trooper Cosplay',
    description: 'In just under a month I constructed two wearable cosplays of Scout Troopers from Revenge of the Sith for me and my friend.',
    // url: '',
    image: porfolioImage3,
  },
  {
    title: 'Ace of Spades Replica',
    description: 'A friend of mine wanted a replica of his favourite weapon from his favourite game Destiny!',
    // url: '',
    image: porfolioImage4,
  },
  {
    title: 'Helldivers 2 Wearable Helmet',
    description: 'I was commissioned by a client in the USA to recreate the helmet featured in the video game Helldivers 2.',
    // url: '',
    image: porfolioImage5,
  },
  {
    title: 'NCR Ranger Custom Mask',
    description: 'I was commissioned by a client in Singapore to create a customized mask of an NCR Ranger from the video game Fallout: New Vegas.',
    // url: '',
    image: porfolioImage6,
  },
  {
    title: 'Ultrakill Figurine',
    description: 'Another commission from a different client in the USA. I printed and painted a custom figurine of the character V1 from the video game Ultrakill.',
    // url: '',
    image: porfolioImage7,
  },
  {
    title: 'NCR Ranger Helmet',
    description: 'I was commissioned by a friend to recreate the entire helmet of an NCR Ranger from the video game Fallout: New Vegas.',
    // url: '',
    image: porfolioImage8,
  },
  {
    title: 'Borderlands Psycho Mask',
    description: 'I made this wearable mask of the Psycho from the video game series Borderlands as a gift for a friend.',
    // url: '',
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
      <p> 
        <ul>
      <li>◦ Wrote a program to add gaussian noise to LiDAR or IMU data within .bag files for <strong>Robot Operating System (ROS)</strong></li>
      <li>◦ Created files and instructions to import buildings from CAD to the robotics simulator <strong>Gazebo</strong></li>
      <li>◦ Designed and modelled multiple pre-existing mounting solutions to allow for newer parts to be installed</li>
      <li>◦ Debugged and tested numerous SLAM algorithms on several datasets</li>
      <li>◦ Debugged several deprecated programs related to <strong>Robot Operating System (ROS)</strong></li>
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
  SliderimageSrc: sliderImage,
  sliders: [
    {
      image: ODSTFeatured,
      title: 'Halo Reach ODST',
      description: "This is the project with by far the least documentation as it is my oldest project. I made this when I was 16 and worked on it for about a year on and off. It is a wearable replica of the jetpack ODST's featured in Halo Reach. I modified the original files to fit me better, 3D-printed, sanded, painted and rigged up this suit to take to conventions!",
    //  href: 'idfk',
    },
    {
      image: ReachFeatured,
      title: 'Halo Reach Spartan',
      description: "By far the cosplay I am the most proud of! Over the course of approximately 3 months, I modified, 3D-printed, finished and painted a scaled down wearable replica of the armour you can find in Halo Reach! This one is customized to appear like the character I would play as in my friends basement on his Xbox 360",
   //   href: 'idfk',
    },
    {
      image: ScoutTrooperFeatured,
      title: '41st Trooper',
      description: "This was my most recent cosplay project, and one I am quite fond of. In just under a month I constructed two wearable cosplays of Scout Troopers from Revenge of the Sith for me and my friend. It was a very busy month but one of the best summers of my life.",
   //   href: 'idfk',
    },
  ],
};
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '',
  description: '',
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
