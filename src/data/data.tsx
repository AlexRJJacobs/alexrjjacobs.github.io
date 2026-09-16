import {
  AcademicCapIcon,
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
import porfolioImage11 from '../images/boathull.webp';
import porfolioImage13 from '../images/CameraMount.webp';
import spotImage from '../images/fieldai/Spot.jpeg';
import JetpackFeatured from '../images/jetpack2.webp';
import porfolioImage10 from '../images/mp9speedloader.webp';
import ODSTFeatured from '../images/ODST/46-Halo_Shoot_Oct_28_hi_res-46.jpg'
import sliderImageCosplay from '../images/ODST/137-Halo_Shoot_Oct_28_hi_res-137.jpg';
import sliderImageUCLA from '../images/UCLA/backdrop.jpeg';
import sliderImageFieldAI from '../images/fieldai/backdrop.jpeg';
import sliderImagePanopsys from '../images/airborne_tracker/plane.jpeg';
import panopsysFeatured from '../images/airborne_tracker/tracker_and_plane.jpeg';
import NCRRangerFeatured from '../images/NCR_ranger_cosplay.jpg';
import porfolioImage14 from '../images/Plate.webp';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import ReachFeatured from '../images/ReachCosplayPhotos/AR503291.jpg'
import ScoutTrooperFeatured from '../images/ScoutTrooper/featured.jpg';
import USVFeatured from '../images/usv.jpg';
import backpackFeatured from '../images/fieldai/Exploded_View_No_Logo.webp';
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
        I do <strong className="text-stone-100">mechanical design for robots</strong>. Most recently a back-mounted
        sensing and compute payload for a <strong className="text-stone-100">humanoid at Field AI</strong>, and the
        sensor head and mast for an airborne object tracking system at{' '}
        <strong className="text-stone-100">Panopsys</strong>, a three-person venture I co-founded.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Mechatronics Engineering</strong> student at the University of
        Waterloo, graduating in <strong className="text-stone-100">2029</strong>.
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
  description: `I am a mechatronics engineering student at the University of Waterloo, graduating in 2029.
   Ever since I could hold a screwdriver, I've been disassembling, reimagining, and reassembling mechanical and electrical devices.
   Fortunately for me, these are transferable skills that have allowed me to pursue a career in engineering.`,
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Studying', text: 'Mechatronics Engineering, cGPA 4.00', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Science Fiction, Photography, Painting', Icon: SparklesIcon},
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
        evidence: [
          'G1 backpack payload at Field AI',
          'Sensor tower test rig',
          'USV sensing kits and hydrodynamic fairing at the UCLA SRI Lab',
        ],
      },
      {
        name: 'Fusion 360',
        evidence: ['2nd place, Toronto CAD modelling competition'],
      },
      {
        name: 'Blender',
        evidence: ['Eight years of modelling and mesh work'],
      },
      {
        name: 'Onshape',
        evidence: ['Used throughout high school'],
      },
    ],
  },
  {
    name: 'Robotics & Software',
    skills: [
      {
        name: 'Gazebo',
        evidence: [
          'Built a custom Gazebo world from a campus building model',
          'Ran a simulated quadruped through waypoint navigation in it, logging LiDAR, visual, and inertial data',
        ],
      },
      {
        name: 'SLAM evaluation',
        evidence: [
          'Benchmarked 5+ open-source systems (DLIO, LIO-SAM, Coco-LIC, ORB-SLAM) on out-of-domain datasets',
          'Deployed the packages on lab workstations, patching source and build dependencies to get them running',
        ],
      },
      {
        name: 'ROS and ROS2',
        evidence: [
          'Debugged recorded datasets in ROS1, inspecting topics for sensor data',
          'Design hardware around the node-based ROS2 architecture behind Panopsys, and review its fusion assumptions with our software lead',
        ],
      },
      {
        name: 'Python',
        evidence: ['Added Gaussian noise to otherwise ideal simulated sensor readings'],
      },
      {
        name: 'C++, VHDL, and ladder logic',
        evidence: ['University coursework'],
      },
    ],
  },
  {
    name: 'Manufacturing',
    skills: [
      {
        name: 'FDM 3D printing',
        evidence: [
          'Multiple G1 payload iterations for parallel cross-office testing',
          'Printed fixtures for the sensor tower rig',
          'Every costume and prop build in the gallery',
        ],
      },
      {
        name: 'Finishing and paint',
        evidence: [
          'Halo Reach Spartan and ODST armour',
          '41st Scout Troopers',
          'Two full NCR Ranger kits',
        ],
      },
      {
        name: 'Machining',
        evidence: ['Shop trained through university and school on the lathe, mill, drill press, band saw, and scroll saw'],
      },
    ],
  },
  {
    name: 'Electronics & Test',
    skills: [
      {
        name: 'Microcontrollers (Teensy)',
        evidence: [
          'Built a Teensy 4.0 data logger to characterize ultrasonic sensor noise',
          "Identified off-axis beam-spread reflections, informing the team's decision on sensor adoption",
        ],
      },
      {
        name: 'Sensor integration',
        evidence: [
          'LiDAR, camera, and ultrasonic hardware at configurable extrinsics on the tower rig',
          'Camera and antenna mounting on the Panopsys sensor head',
        ],
      },
      {
        name: 'Wiring and harnessing',
        evidence: [
          'Internal cable routing and thermal integration in the G1 payload',
          'Compute, RF, and power hardware on the Panopsys mast',
        ],
      },
      {
        name: 'Ingress protection',
        evidence: [
          'Assessed IP54 sealing feasibility for a sensing payload using custom splash-test fixtures',
          'Found insufficient seal clearances that would require a payload redesign, and stayed on as ingress protection point of contact',
        ],
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ultrasonic Testing Apparatus',
    description:
      'A fixture from my Field AI co-op for comparing two perpendicular ultrasonic sensors across a range of distances. Holding both at fixed, known offsets meant distance was the only thing changing between runs, so the readings could be compared directly. Part of the sensor validation work that fed component selection.',
    // url: '',
    image: fieldaiImage4,
  },
  {
    title: 'Camera Mount',
    description:
      'A two-part camera mount for the UCLA SRI Lab. The camera had to sit at several different angles depending on the test, so rather than a separate bracket for each one I modelled a common base carrying mounting faces at every angle we needed.',
    // url: '',
    image: porfolioImage13,
  },
  {
    title: 'Mounting Plate',
    description: 'A mounting plate I modified for the UCLA SRI Lab.',
    // url: '',
    image: porfolioImage14,
  },
  {
    title: 'Boat Hull',
    description:
      "Modelled when I was 16 for the hull of the UCLA SRI Lab's autonomous surface vehicle. That is the same platform as the unmanned surface vehicle in the featured projects above, which I came back to and worked on directly during my 2025 term at the lab.",
    // url: '',
    image: porfolioImage11,
  },
  {
    title: 'Airsoft MP9 Speedloader',
    description:
      'Modelled and printed to fit my own airsoft magazines. A small part, but one that had to match the real magazine geometry closely enough to actually work.',
    // url: '',
    image: porfolioImage10,
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
    title: 'NCR Ranger Helmet',
    description: 'I was commissioned by a friend to recreate the entire helmet of an NCR Ranger from the video game Fallout: New Vegas.',
    // url: '',
    image: porfolioImage8,
  },
  {
    title: 'Ultrakill Figurine',
    description: 'Another commission from a different client in the USA. I printed and painted a custom figurine of the character V1 from the video game Ultrakill.',
    // url: '',
    image: porfolioImage7,
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
    date: 'September 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Mechanical Design Co-op, Quadrupedal & Humanoid Robotics',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Led end-to-end mechanical design of a modular sensing and compute payload for the Unitree G1 humanoid across
          five iterations in 4 weeks alongside three parallel projects, porting existing hardware onto a new platform.
        </li>
        <li>
          Designed enclosures adding 20 kg of lead-shot ballast to a quadruped in 3 days, modelling roughly 63.5% random
          packing density to hit target mass within 0.2% error and meet international competition weight rules.
        </li>
        <li>
          Assessed IP54 sealing feasibility for a sensing payload using custom splash-test fixtures, identifying
          insufficient seal clearances that would require a payload redesign.
        </li>
        <li>
          Built a modular sensor tower test rig with adjustable camera mounts and configurable extrinsics, saving hours
          of reconfiguration and accelerating iteration on LiDAR and camera setups.
        </li>
        <li>
          Built a Teensy 4.0 data logger to characterize ultrasonic sensor noise, identifying off-axis beam-spread
          reflections and informing the team's decision on sensor adoption.
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
          Benchmarked 5+ open-source SLAM systems (DLIO, LIO-SAM, Coco-LIC, ORB-SLAM) on out-of-domain datasets,
          characterizing localization and mapping failure modes.
        </li>
        <li>
          Deployed SLAM packages on lab workstations, patching source and build dependencies to resolve
          incompatibilities.
        </li>
        <li>
          Built a Gazebo simulation from campus models via a Blender pipeline with Python Gaussian noise injection,
          improving the realism of simulated sensor data.
        </li>
        <li>
          Extended SolidWorks models of an unmanned surface vehicle's sensing kits and designed a 3D printed
          hydrodynamic fairing, reducing drag around its underwater sensors.
        </li>
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
    location: 'Panopsys, Toronto, ON',
    title: 'Airborne Object Tracking System',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>
          Co-founded a three-person venture building a ground-based system that localizes airborne objects in 3D by
          fusing detections from multiple distributed cameras on a node-based ROS2 architecture.
        </p>
        <p>
          As Mechanical Lead I own camera and antenna mounting, the sensor-head enclosure, and structural integration of
          compute and RF hardware on a portable tripod mast.
        </p>
        <p>
          I also led the system's first outdoor deployment at an airshow, with zero mechanical failures, capturing three
          hours of three-node data across 14 aircraft out to roughly 5 km.
        </p>
        <p>
          I am now driving a v2 sensor head that replaces the 20 mm extrusion frame with a single printed structure,
          removing the mounting constraints that dictated sensor placement on the prototype.
        </p>
      </div>
    ),
  },
  {
    date: 'November 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Back-Mounted Sensing and Compute Payload',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>
          Conceived and designed the full payload architecture for the Unitree G1 from a requirements-only brief,
          including the frame, modular shelf layout, and mounting interface, porting existing hardware onto a new
          platform.
        </p>
        <p>
          Architected internal cable routing and thermal integration so existing sensing and compute hardware dropped in
          cleanly, improving serviceability of connectors and fans.
        </p>
        <p>
          Fabricated five 3D printed iterations in 4 weeks for Boston office testing, alongside three other projects,
          and authored the design documentation that streamlined handoff to downstream engineers.
        </p>
      </div>
    ),
  },
  {
    date: 'September 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Sensor Tower Test Rig',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>
          Designed and manufactured a modular sensor tower for LiDAR, camera, ultrasonic, and compute payload testing.
        </p>
        <p>
          Designed adjustable camera mounts with configurable extrinsics in place of the specified fixed design, saving
          hours of reconfiguration between tests.
        </p>
        <p>
          Built fixtures and a Teensy 4.0 logger to characterize ultrasonic noise, identifying off-axis beam-spread
          reflections and informing the sensor adoption decision.
        </p>
      </div>
    ),
  },
  {
    date: 'September 2025 - December 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Competition Ballast & Ingress Protection',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>
          Designed three enclosures adding 20 kg of lead-shot ballast to a quadruped in 3 days, meeting the weight
          requirements for an international competition in Singapore.
        </p>
        <p>
          Sized the enclosures for minimum volume using a roughly 63.5% random packing density, landing target mass
          within 0.2% error.
        </p>
        <p>
          Ran splash-test feasibility checks toward IP54 for a sensing payload, building custom fixtures for enclosures,
          fans, and speakers. Identified insufficient seal clearances that would require a payload redesign, and
          continued as the ingress protection point of contact.
        </p>
      </div>
    ),
  },
  {
    date: 'August 2023, January 2025 - April 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Unmanned Surface Vehicle',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>Began as a high school placement in 2023, and returned to the lab in 2025.</p>
        <p>
          Extended SolidWorks models of the above- and below-water sensing kits, including hull components and camera
          mounts, supporting evolving sensor configurations.
        </p>
        <p>
          Modeled and 3D printed a hydrodynamic fairing for the underwater sensors, reducing drag, and assisted with
          data collection for a visual-inertial navigation ablation study.
        </p>
      </div>
    ),
  },
  {
    date: 'January 2025 - April 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Simulation and SLAM Evaluation',
    content: (
      <div className="flex flex-col gap-y-3">
        <p>
          Built a Gazebo simulation from campus models via a Blender pipeline with Python Gaussian noise injection,
          improving sensor realism for a simulated quadruped.
        </p>
        <p>
          Deployed SLAM packages on lab workstations, patching source and build dependencies to resolve compatibility
          issues.
        </p>
        <p>
          Benchmarked 5+ open-source SLAM systems (DLIO, LIO-SAM, Coco-LIC, ORB-SLAM) on out-of-domain datasets,
          comparing point clouds and localization behaviour to document failure cases.
        </p>
      </div>
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
        description: "Field AI needed to iterate on sensor and payload configurations without building a dedicated mount for each one. I designed and manufactured a modular rigid tower from miniature T-slot extrusion and custom 3D printed fixtures, supporting LiDAR, camera, ultrasonic, and compute payload testing at configurable extrinsics, along with a Teensy 4.0 logging setup for capturing sensor readings and comparing components. The sensors themselves are confidential, but the rig was built to support ongoing perception development rather than a single test.",
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
        description: "This is my first cosplay project I modelled from scratch. I modelled this at school in grade 12 with the free time I had during robotics class, with the hope of later printing it out and incorporating it into my cosplays. Unfortunately school took priority and I haven't had enough time since.",
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
