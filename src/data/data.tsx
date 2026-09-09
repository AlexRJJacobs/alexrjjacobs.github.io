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
import porfolioImage11 from '../images/boathull.gif';
import porfolioImage13 from '../images/CameraMount.gif';
import spotImage from '../images/fieldai/Spot.jpeg';
import JetpackFeatured from '../images/jetpack2.gif';
import porfolioImage10 from '../images/mp9speedloader.gif';
import ODSTFeatured from '../images/ODST/46-Halo_Shoot_Oct_28_hi_res-46.jpg'
import sliderImageCosplay from '../images/ODST/137-Halo_Shoot_Oct_28_hi_res-137.jpg';
import sliderImageUCLA from '../images/UCLA/backdrop.jpeg';
import sliderImageFieldAI from '../images/fieldai/backdrop.jpeg';
import sliderImagePanopsys from '../images/airborne_tracker/plane.jpeg';
import panopsysFeatured from '../images/airborne_tracker/tracker_and_plane.jpeg';
import NCRRangerFeatured from '../images/NCR_ranger_cosplay.jpg';
import porfolioImage14 from '../images/Plate.gif';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import ReachFeatured from '../images/ReachCosplayPhotos/AR503291.jpg'
import ScoutTrooperFeatured from '../images/ScoutTrooper/featured.jpg';
import USVFeatured from '../images/usv.jpg';
import backpackFeatured from '../images/fieldai/Exploded_View_No_Logo.gif';
import porfolioImage4 from '../images/VariousProjects/AceOfSpades.jpg';
import porfolioImage5 from '../images/VariousProjects/helldivershelmet.jpg';
import porfolioImage9 from '../images/VariousProjects/IMG_3549.jpg';
import porfolioImage8 from '../images/VariousProjects/NCRRangerHelmet.jpg';
import porfolioImage6 from '../images/VariousProjects/NCRRangerMask.jpg';
import porfolioImage7 from '../images/VariousProjects/ultrakill_thingy.png';
 import cubeFeatured from '../images/fieldai/Cube.jpeg';
// import fieldaiImage2 from '../images/fieldai/backpack_1.jpeg';
import fieldaiImage4 from '../images/fieldai/ultrasonic.jpeg';
//import Carousel from 'react-elastic-carousel'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  SliderCarousel,
  // SliderSection,
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
  SliderCarousel: 'carousel',
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
        I'm a University of Waterloo <strong className="text-stone-100">Mechatronics student</strong>, currently in 2nd
        year with years of prior experience in <strong className="text-stone-100">3D-Modelling, 3D-Printing,</strong>{' '}
        and <strong className="text-stone-100">Programming</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I am often found creating <strong className="text-stone-100">Costumes and Props</strong> from
        movies and video games, taking <strong className="text-stone-100">Landscape Photography</strong>, or{' '}
        <strong className="text-stone-100">Exploring</strong> whichever city I find myself in.
        {/* <strong className="text-stone-100">Vancouver Island</strong>. */}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Alex_Jacobs_Resume_2026.pdf',
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
  profileImageSrc: spotImage,
  description: `I am a second-year student studying mechatronics engineering at the University of Waterloo.
   Ever since I could hold a screwdriver, I've been disassembling, reimagining, and reassembling mechanical and electrical devices.
   Fortunately for me, these are transferable skills that have allowed me to pursue a career in engineering.`,
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Science Fiction, Photography, Painting', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Design & CAD',
    skills: [
      {
        name: 'SolidWorks',
        level: 10,
      },
      {
        name: 'Onshape',
        level: 8,
      },
      {
        name: 'Fusion 360',
        level: 8,
      },
      {
        name: 'Blender',
        level: 6,
      },
    ],
  },
  {
    name: 'Robotics & Software',
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
        name: 'ROS2',
        level: 6,
      },
      {
        name: 'Gazebo',
        level: 6,
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
        name: 'Detail Finishing',
        level: 7,
      },
      {
        name: 'Machining (Lathe & Mill)',
        level: 7,
      },
    ],
  },
  {
    name: 'Electronics & Test',
    skills: [
      {
        name: 'Sensor Integration',
        level: 7,
      },
      {
        name: 'Wiring & Harnessing',
        level: 7,
      },
      {
        name: 'Microcontrollers (Teensy)',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
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
  {
    title: 'Airsoft MP9 Speedloader',
    description: 'I modelled and printed this speedloader for my airsoft magazines.',
    // url: '',
    image: porfolioImage10,
  },
  {
    title: 'Boat Hull',
    description: "When I was 16, I modelled this for the hull of an autonomous aquatic robot for UCLA's SRI Lab. ",
    // url: '',
    image: porfolioImage11,
  },
  {
    title: 'Camera Mount',
    description: "This is a two-part camera mount I modelled for the UCLA SRI Lab. It was designed with different mounts at different angles for the camera to mount onto.",
    // url: '',
    image: porfolioImage13,
  },
  {
    title: 'Mounting Plate',
    description: "This is a mounting plate I modified for the UCLA SRI Lab.",
    // url: '',
    image: porfolioImage14,
  },
      {
    title: 'Ultrasonic Testing Apparatus',
    description: 'This was a testing apparatus designed to compare two perpendicular ultrasonic sensors at varying distances.',
    // url: '',
    image: fieldaiImage4,
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
    date: 'September 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Mechanical Designer, Quadrupedal & Humanoid Robotics',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Led end-to-end mechanical development of a modular, back-mounted sensing and compute payload for the Unitree
          G1 humanoid, porting existing hardware onto a new platform under tight timelines.
        </li>
        <li>
          Developed and validated ingress protection solutions, expanding the range of environments the robot could
          operate in.
        </li>
        <li>
          Designed and built modular test infrastructure, including a reconfigurable sensor tower rig, accelerating
          iteration on new sensor and payload configurations.
        </li>
        <li>
          Built sensor validation frameworks and apparatus to characterize components and guide part selection.
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2025 - April 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Research Assistant, Mobile Robotics & SLAM',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Developed a custom Gazebo simulator in C++ and Python to collect LiDAR, visual, and inertial data from a
          quadrupedal robot performing waypoint navigation.
        </li>
        <li>
          Evaluated open-source SLAM implementations on datasets outside the domains they were designed for,
          characterizing where localization and mapping broke down.
        </li>
        <li>
          Debugged and tested proprietary laboratory software for robotic sensor data collection, processing, and
          visualization.
        </li>
        <li>Designed and 3D printed SolidWorks models to integrate new modules into ground and aquatic robot platforms.</li>
      </ul>
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
    date: 'August 2025 - Present',
    location: 'Panopsys, Remote',
    title: 'Airborne Object Tracking System',
    content: (
      <p>
        Co-founded a three-person venture building a ground-based system that localizes airborne objects in 3D by fusing
        detections from multiple distributed cameras on a node-based ROS2 architecture. As Mechanical Lead I own camera
        and antenna mounting, the sensor-head enclosure, and structural integration of compute and RF hardware on a
        portable tripod mast. I also led the system's first outdoor deployment at an airshow, capturing three hours of
        three-node data across 14 aircraft out to roughly 5 km.
      </p>
    ),
  },
  {
    date: 'November 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Back-Mounted Sensing and Compute Payload',
    content: (
      <p>
        Owned mechanical design, internal cable routing, and thermal integration of a rigid backpack payload for the
        Unitree G1 humanoid, from concept through fabricated prototype. Fabricated multiple iterations via 3D printing to
        enable parallel cross-office testing, and authored the design documentation and file-structure guides that
        enabled a clean handoff to downstream engineers.
      </p>
    ),
  },
  {
    date: 'September 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Sensor Tower Test Rig',
    content: (
      <p>
        Designed and manufactured a modular rigid sensor tower supporting LiDAR, camera, ultrasonic, and compute payload
        testing with configurable extrinsics. Built custom 3D printed fixtures and a Teensy 4.0-based validation
        framework to streamline sensor characterization and comparison, delivering a reconfigurable platform that
        supports ongoing perception development rather than a single test.
      </p>
    ),
  },
  {
    date: 'August 2023, January 2025 - April 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Unmanned Surface Vehicle',
    content: (
      <p>
        Maintained and extended SolidWorks models of the platform's above- and below-water sensing kits, including
        prototype hull components and camera mounts for evolving sensor configurations. Modeled and 3D printed a
        hydrodynamic fairing to reduce drag around the underwater sensors, and assisted with data collection for a
        visual-inertial navigation ablation study.
      </p>
    ),
  },
  {
    date: 'January 2025 - April 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Simulation and SLAM Evaluation',
    content: (
      <p>
        Built a custom Gazebo simulator in C++ and Python to collect synchronized LiDAR, visual, and inertial data from a
        quadrupedal robot running waypoint navigation. Ran open-source SLAM implementations against datasets outside
        their intended domain, comparing reconstructed point clouds and localization behaviour to identify failure cases.
      </p>
    ),
  },

//  {
//    date: 'August 2023',
//    location: 'New Haven Learning Centre',
//    title: 'Forearm Guard',
//    content: <p>I designed, modelled, and 3D-printed a bite guard for therapists working with autistic children</p>,
//  },
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
export const Carousel: SliderCarousel = {
  slidersections: [
    {
    SliderimageSrc: sliderImagePanopsys,
    title: 'Panopsys Projects',
    sliders: [
      {
        image: panopsysFeatured,
        imagePosition: 'center',
        title: 'Airborne Object Tracking System',
        description: "Panopsys is a three-person venture I co-founded that builds a ground-based system for locating airborne objects in 3D, fusing detections from several distributed cameras on a node-based ROS2 architecture. I own the mechanical side of it: camera housings and mounts, antenna placement, the sensor-head structure, and integrating the compute, RF, and power hardware onto a portable tripod mast. Our first outdoor deployment ran three camera nodes at an airshow and captured about three hours of data across 14 aircraft, out to roughly 5 km.",
      //  href: 'idfk',
      },
    ],
  },
    {
    SliderimageSrc: sliderImageFieldAI,
    backgroundPosition: 'center 25%',
    title: 'Field AI Projects',
    sliders: [
        {
        image: spotImage,
        imagePosition: 'center',
        title: 'Field AI',
        description: "Field AI develops autonomy software for robots working in unstructured environments, and I spent my fall 2025 co-op on their hardware team in Irvine. My work was the physical side of that: a back-mounted payload for the Unitree G1 humanoid, ingress protection to widen the range of conditions the robots could be sent into, and test hardware for characterizing sensors and guiding part selection. That is one of the office Spot units in the photo.",
      //  href: 'idfk',
      },
      {
        image: backpackFeatured,
        title: 'Back-Mounted Payload',
        description: "Field AI needed its existing sensing and compute payload to run on a new platform, the Unitree G1 humanoid, on a compressed timeline. I owned the mechanical development end to end: a rigid backpack enclosure, internal cable routing, and thermal integration, with the mounting arranged so the existing sensing and compute hardware integrated cleanly. Connectors and fans remain accessible for servicing without disassembling the payload. I fabricated multiple iterations by 3D printing to support parallel testing across offices, and authored design and file-structure documentation for handoff to downstream engineers.",
      //  href: 'idfk',
      },
      {
        image: cubeFeatured,
        imagePosition: 'center 30%',
        title: 'Sensor Tower Testing Rig',
        description: "Field AI needed to iterate on sensor and payload configurations without building a dedicated mount for each one. I designed and manufactured a modular rigid tower from miniature T-slot extrusion and custom 3D printed fixtures, supporting LiDAR, camera, ultrasonic, and compute payload testing at configurable extrinsics, along with a Teensy 4.0 validation framework for characterizing and comparing components. The sensors themselves are confidential, but the rig was built to support ongoing perception development rather than a single test.",
      //  href: 'idfk',
      },
  ],
},
{
    SliderimageSrc: sliderImageUCLA,
    backgroundPosition: 'center 25%',
    title: 'UCLA Projects',
    sliders: [
            {
        image: USVFeatured,
        imagePosition: 'center',
        title: 'Unmanned Surface Vehicle',
        description: "An unmanned surface vehicle the UCLA SRI Lab uses for visual-inertial navigation research. I maintained and extended the SolidWorks models of its sensing kits above and below the waterline, including prototype hull components and camera mounts that had to keep up with changing sensor configurations, and modelled and printed a hydrodynamic fairing to cut drag around the underwater sensors. I also helped run data collection with the detachable above-water sensors for an ablation study. Still one of my favourite things I have gotten to work on.",
      //  href: 'idfk',
      },
    ],
  },{
    SliderimageSrc: sliderImageCosplay,
    backgroundPosition: 'center 25%',
    title: 'Costume Projects',
    sliders: [
      {
        image: ODSTFeatured,
        title: 'Halo Reach ODST',
        description: "This is the project with by far the least documentation as it is my oldest project. I made this when I was 16 and worked on it for about a year on and off. It is a wearable replica of the jetpack ODSTs featured in Halo Reach. I modified the original files to fit me better, 3D-printed, sanded, painted and rigged up this suit to take to conventions!",
      //  href: 'idfk',
      },
      {
        image: ReachFeatured,
        imagePosition: 'center 15%',
        title: 'Halo Reach Spartan',
        description: "By far the cosplay I am the most proud of! Over the course of approximately 3 months, I modified, 3D-printed, finished and painted a scaled-down wearable replica of the armour you can find in Halo Reach! This one is customized to appear like the character I would play as in my friend's basement on his Xbox 360.",
    //   href: 'idfk',
      },
      {
        image: NCRRangerFeatured,
        title: 'NCR Ranger',
        description: "My most recent costume project, built on and off across the summer of 2026. I made two full NCR Ranger kits from Fallout: New Vegas, one for me and one for a friend, modelling and printing the helmets and masks, assembling the armour and dusters, then weathering everything so it looked like it had actually spent time in the wasteland. We took them to a convention together once they were finished.",
    //   href: 'idfk',
      },
      {
        image: ScoutTrooperFeatured,
        title: '41st Trooper',
        description: "In just under a month, I constructed two wearable cosplays of Scout Troopers from Star Wars: Revenge of the Sith for me and my friend. It was a very busy month but one of the best summers of my life.",
    //   href: 'idfk',
      },
      {
        image: JetpackFeatured,
        imagePosition: 'center',
        title: 'Motorized Halo Jetpack',
        description: "This is my first cosplay project I modelled from scratch. I modelled this at school in grade 12 with the free time I had during robotics class, with the hope of later printing it out and incorporating it into my cosplays. Unfortunately school took priority and I haven't had enough time since. Please take a look at the exploded view in the gallery if you are interested!",
     //   href: 'idfk',
      },
    ],
  },
]
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
      text: 'ajrjacob@uwaterloo.ca',
      href: 'mailto:ajrjacob@uwaterloo.ca',
    },
    {
      type: ContactType.Location,
      text: 'Waterloo, ON, Canada',
      href: 'https://www.google.ca/maps/place/Waterloo,+ON',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Alex Jacobs',
      href: 'https://www.linkedin.com/in/alex-jacobs-4bb0b6328/',
    },
    {
      type: ContactType.Github,
      text: 'AlexRJJacobs',
      href: 'https://github.com/AlexRJJacobs',
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
