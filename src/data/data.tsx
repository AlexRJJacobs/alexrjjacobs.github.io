import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  ChartBarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {FC, memo, ReactNode} from 'react';

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
        sensing and compute payload for a <strong className="text-stone-100">humanoid at Field AI</strong>, and all
        mechanical design of the sensor head for an airborne object tracking system at{' '}
        <strong className="text-stone-100">Panopsys</strong>, a 3-person venture I co-founded.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Mechatronics Engineering</strong> student at the University of
        Waterloo, expected to graduate in <strong className="text-stone-100">April 2029</strong>.
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
      href: '/assets/Alex_Jacobs_Resume.pdf',
      text: 'Resume + Portfolio',
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
  description: `I am a mechatronics engineering student at the University of Waterloo, expected to graduate in April 2029.
   Ever since I could hold a screwdriver, I've been disassembling, reimagining, and reassembling mechanical and electrical devices.
   Fortunately for me, these are transferable skills that have allowed me to pursue a career in engineering.`,
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Studying', text: 'BASc Mechatronics Engineering, University of Waterloo', Icon: AcademicCapIcon},
    {label: 'Cumulative average', text: '90.79%', Icon: ChartBarIcon},
    {label: 'Interests', text: 'Science Fiction, Photography, Painting', Icon: SparklesIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'CAD & Modeling',
    skills: [
      {
        name: 'SolidWorks',
        evidence: [
          'Back-mounted sensing and compute payload for the Unitree G1 at Field AI',
          'Sensor tower test rig',
          'USV sensing kits and hydrodynamic fairing at the UCLA SRI Lab',
        ],
      },
      {
        name: 'Onshape',
        evidence: ['Used throughout high school'],
      },
      {
        name: 'Blender',
        evidence: ['Converted existing campus models for the Gazebo simulation at UCLA'],
      },
    ],
  },
  {
    name: 'Mechanical Design',
    skills: [
      {
        name: 'Enclosures',
        evidence: [
          'Frame, modular shelf layout, and mounting interface of the G1 payload',
          'Three lead-shot ballast enclosures for a quadruped, sized from the random packing fraction',
          'Camera housings on the Panopsys sensor head',
        ],
      },
      {
        name: 'Mounts and fixtures',
        evidence: [
          'Camera and antenna mounts on the Panopsys sensor head, with one latch releasing the whole head',
          'Adjustable camera mounts with configurable extrinsics on the sensor tower',
          'Splash-test fixtures and an ultrasonic characterization fixture at Field AI',
        ],
      },
      {
        name: 'Cable routing',
        evidence: ['Internal cable routing and thermal integration in the G1 payload'],
      },
      {
        name: 'Design for 3D printing',
        evidence: [
          "Hydrodynamic fairing for the USV's underwater sensors",
          'The v2 Panopsys sensor head, now in progress, a single printed structure replacing the 20 mm extrusion frame',
        ],
      },
    ],
  },
  {
    name: 'Fabrication & Test',
    skills: [
      {
        name: 'FDM 3D printing',
        evidence: [
          'Five G1 payload iterations in 4 weeks for testing at the Boston office',
          'Printed fixtures for the sensor tower rig',
          'Every costume and prop build in the gallery',
        ],
      },
      {
        name: 'Splash testing',
        evidence: [
          "Tested a sensing payload's enclosures, fans, and speakers against the water half of IP54 (IPX4)",
          'Found insufficient seal clearances that would require a payload redesign',
        ],
      },
      {
        name: 'Sensor characterization',
        evidence: [
          'Built a Teensy 4.0 data logger to characterize ultrasonic sensor noise across distances',
          "Identified off-axis beam-spread reflections, informing the team's sensor-adoption decision",
        ],
      },
      {
        name: 'Field testing',
        evidence: [
          'Led the first outdoor Panopsys deployment at an airshow, with no structural failures',
          'The deployment surfaced an unseated antenna that blocked an RTK fix, to fix before the next one',
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
    ],
  },
  {
    name: 'Software & Electronics',
    skills: [
      {
        name: 'ROS 2',
        evidence: [
          'Design hardware around the node-based ROS 2 architecture behind Panopsys, and review its fusion assumptions with our software lead',
          'Debugged recorded datasets in ROS 1, inspecting topics for sensor data',
        ],
      },
      {
        name: 'Gazebo',
        evidence: [
          'Built a Gazebo simulation for a quadruped from existing campus models via a Blender conversion pipeline',
          'Collected LiDAR, visual, and inertial data from the simulated quadruped on waypoint navigation runs',
        ],
      },
      {
        name: 'SLAM evaluation',
        evidence: [
          'Benchmarked 5+ open-source systems, including DLIO, LIO-SAM, Coco-LIC, and ORB-SLAM, on out-of-domain datasets',
          'Deployed the packages on lab workstations, patching source and build dependencies to get them running',
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
      {
        name: 'Teensy and wiring harnesses',
        evidence: [
          'Teensy 4.0 data logger for the ultrasonic fixture',
          'Compute, RF, and power hardware on the Panopsys mast',
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
      "A fixture from my Field AI co-op holding 2 perpendicular ultrasonic sensors at fixed, known offsets, so distance was the only thing that changed between runs. What it found informed the team's sensor-adoption decision; the full write-up is under Sensor Tower Test Rig above.",
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
      "Modeled on a 2023 high-school placement for the hull of the UCLA SRI Lab's unmanned surface vehicle. That is the same platform as the Unmanned Surface Vehicle project above, which I came back to during my 2025 term at the lab.",
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

// Experiences mirror page 1 of the resume PDF, and Professional Projects mirror its portfolio pages, line for line.
// Change the resume first, then copy the new wording here.
export const experience: TimelineItem[] = [
  {
    id: 'experience-panopsys',
    date: 'Aug. 2025 – Present',
    location: 'Panopsys, Toronto, ON',
    note: 'Co-op work term, May – Aug. 2026',
    title: 'Co-Founder & Mechanical Lead — Airborne Object Tracking',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Co-founded a 3-person venture building a ground-based system that localizes airborne objects in 3D by fusing
          detections from distributed camera nodes, running on a node-based ROS 2 architecture.
        </li>
        <li>
          Own all mechanical design: sensor head, camera and antenna mounts, and compute, RF, and power integration on
          a portable tripod mast; one latch releases the whole head for transport and setup.
        </li>
        <li>
          Led the first outdoor field deployment at an airshow with no structural failures: 3 camera nodes on ~100 m
          baselines captured ~3 h of data across 14 display acts, at ranges from overhead out to ~5 km.
        </li>
        <li>
          Driving the v2 sensor-head design, replacing the 20 mm extrusion frame with a single printed structure to
          remove the mounting constraints that dictated sensor placement on the v1 prototype.
        </li>
      </ul>
    ),
  },
  {
    id: 'experience-field-ai',
    date: 'Sep. 2025 – Dec. 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Mechanical Design Co-op — Quadrupedal & Humanoid Robotics',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Owned mechanical design of a back-mounted sensing and compute payload for the Unitree G1 humanoid from a
          requirements-only brief, building five 3D-printed iterations in 4 weeks alongside 3 other projects.
        </li>
        <li>
          Designed 3 enclosures adding 20 kg of lead shot to a quadruped in 3 days to meet competition weight rules,
          sized from the ~63.5% random packing fraction; final ballast mass was within 0.2% of target.
        </li>
        <li>
          Built custom fixtures to splash-test a sensing payload's enclosures, fans, and speakers against the water
          half of IP54 (IPX4), identifying insufficient seal clearances that would require a payload redesign.
        </li>
        <li>
          Designed and built a modular sensor tower test rig for LiDAR, camera, ultrasonic, and compute payload
          testing, with adjustable camera mounts and configurable extrinsics in place of the specified fixed design.
        </li>
        <li>
          Built a test fixture and Teensy 4.0 data logger to characterize ultrasonic sensor noise across distances,
          identifying off-axis beam-spread reflections and informing the team's sensor-adoption decision.
        </li>
      </ul>
    ),
  },
  {
    id: 'experience-ucla',
    date: 'Jan. 2025 – Apr. 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    note: 'Co-op work term',
    title: 'Research Assistant — Mobile Robotics & SLAM',
    content: (
      <ul className="flex list-disc flex-col gap-y-1 pl-5 text-left">
        <li>
          Extended SolidWorks models of an unmanned surface vehicle's above- and below-water sensing kits, including
          camera mounts, and designed a 3D-printed hydrodynamic fairing for its underwater sensors.
        </li>
        <li>
          Benchmarked 5+ open-source SLAM systems, including DLIO, LIO-SAM, Coco-LIC, and ORB-SLAM, on datasets
          outside their design domains, characterizing localization and mapping failure modes.
        </li>
        <li>
          Built a Gazebo simulation for a quadruped from existing campus models via a Blender conversion pipeline, and
          wrote Python to add Gaussian noise to its otherwise ideal simulated sensor readings.
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
const ProjectNote: FC<{label: string; children: ReactNode}> = memo(({label, children}) => (
  <p>
    <span className="font-semibold text-neutral-900">{label}:</span> {children}
  </p>
));

export const education: TimelineItem[] = [
  {
    id: 'project-panopsys',
    date: 'Aug. 2025 – Present',
    location: 'Panopsys, Toronto, ON',
    title: 'Airborne Object Tracking System',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="First field deployment">
          3 camera nodes · ~100 m baselines · 14 display acts · out to ~5 km · ~3 h capture
        </ProjectNote>
        <ProjectNote label="Goal">
          Locate airborne objects in 3D by fusing detections from distributed ground camera nodes on ROS 2.
        </ProjectNote>
        <ProjectNote label="Design">
          As co-founder, own all mechanical design: camera housings and mounts, antenna placement, sensor-head
          structure, and integration of compute, RF, and power hardware on a portable tripod mast.
        </ProjectNote>
        <ProjectNote label="Design">
          One latch frees the whole 20 mm extrusion head from the tripod for fast transport and setup.
        </ProjectNote>
        <ProjectNote label="Result">
          Led the first outdoor deployment at an airshow, with no structural failures over ~3 h of capture. It surfaced
          issues to fix before the next deployment, including an unseated antenna that blocked an RTK fix.
        </ProjectNote>
        <ProjectNote label="Next">
          The v2 sensor head, now in progress, replaces the 20 mm extrusion frame with a single printed structure,
          removing the mounting constraints that dictated sensor placement on the v1 prototype.
        </ProjectNote>
      </div>
    ),
  },
  {
    id: 'project-payload',
    date: 'Nov. 2025 – Dec. 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Back-Mounted Sensing and Compute Payload',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="Goal">
          Port existing sensing and compute hardware onto the Unitree G1 humanoid, from a requirements-only brief.
        </ProjectNote>
        <ProjectNote label="Design">
          Architected the frame, modular shelf layout, and mounting interface, with internal cable routing and thermal
          integration so the hardware dropped in cleanly and its connectors and fans stayed serviceable.
        </ProjectNote>
        <ProjectNote label="Result">
          Built five 3D-printed iterations in 4 weeks, alongside 3 other projects, for testing at the Boston office,
          and wrote the design documentation and file-structure guides for handoff to downstream engineers.
        </ProjectNote>
      </div>
    ),
  },
  {
    id: 'project-sensor-tower',
    date: 'Sep. 2025 – Dec. 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Sensor Tower Test Rig',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="Goal">
          Build a modular tower for testing LiDAR, camera, ultrasonic, and compute payload setups.
        </ProjectNote>
        <ProjectNote label="Design">
          Chose adjustable camera mounts with configurable extrinsics over the specified fixed design.
        </ProjectNote>
        <ProjectNote label="Design">
          Built a fixture holding 2 perpendicular ultrasonic sensors at fixed, known offsets, so distance was the only
          thing that changed between runs, plus a Teensy 4.0 logger recording their readings over time.
        </ProjectNote>
        <ProjectNote label="Result">
          Found off-axis beam-spread reflections in the noise, informing the team's adoption decision.
        </ProjectNote>
      </div>
    ),
  },
  {
    id: 'project-ballast-ip',
    date: 'Sep. 2025 – Dec. 2025',
    location: 'Field AI, Irvine, CA',
    title: 'Competition Ballast & Ingress Protection',
    content: (
      <div className="flex flex-col gap-y-3">
        <h4 className="font-bold text-neutral-900">Competition ballast</h4>
        <ProjectNote label="Goal">
          Add 20 kg to a quadruped in 3 days to meet weight rules at an international event in Singapore.
        </ProjectNote>
        <ProjectNote label="Design">
          Sized 3 lead-shot enclosures for minimum volume, <i>V</i> = <i>m</i>/(<i>φρ</i>
          <sub>Pb</sub>), at random packing <i>φ</i> ≈ 0.635.
        </ProjectNote>
        <ProjectNote label="Result">Final ballast mass within 0.2% of target.</ProjectNote>
        <h4 className="mt-2 font-bold text-neutral-900">IP54 feasibility</h4>
        <ProjectNote label="Goal">Check if a sensing payload could reach IP54.</ProjectNote>
        <ProjectNote label="Design">
          Built splash-test fixtures for its enclosures, fans, and speakers, covering IP54's water half (IPX4).
        </ProjectNote>
        <ProjectNote label="Result">
          Found insufficient seal clearances, meaning the payload would need a redesign to reach IP54.
        </ProjectNote>
      </div>
    ),
  },
  {
    id: 'project-usv',
    date: 'Aug. 2023, Jan. – Apr. 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Unmanned Surface Vehicle',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="Goal">
          Support the lab's evolving sensor configurations on its unmanned surface vehicle (USV).
        </ProjectNote>
        <ProjectNote label="Design">
          Modeled the hull on a 2023 high-school placement, then returned in 2025 to extend SolidWorks models of the
          above- and below-water sensing kits, including hull parts and camera mounts.
        </ProjectNote>
        <ProjectNote label="Design">
          Modeled and 3D-printed a hydrodynamic fairing to reduce drag on the underwater sensors.
        </ProjectNote>
      </div>
    ),
  },
  {
    id: 'project-slam',
    date: 'Jan. – Apr. 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Simulation and SLAM Evaluation',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="Design">
          Built a Gazebo simulation for a quadruped from campus models via Blender, with Python adding Gaussian noise
          to otherwise ideal sensor readings.
        </ProjectNote>
        <ProjectNote label="Design">
          Deployed SLAM packages on lab workstations, patching their source code and build dependencies to resolve
          compatibility issues.
        </ProjectNote>
        <ProjectNote label="Result">
          Benchmarked 5+ open-source SLAM systems, including DLIO, LIO-SAM, Coco-LIC, and ORB-SLAM, on out-of-domain
          datasets, comparing point clouds and localization to document failures.
        </ProjectNote>
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
      cellnumber: '+1 (437) 688-2039',
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
        description: "Panopsys is a venture I co-founded that builds a ground-based system for locating airborne objects in 3D, fusing detections from distributed camera nodes. I own all of its mechanical design: the sensor head, its camera and antenna mounts, and the compute, RF, and power integration on a portable tripod mast. The photo is from our first field deployment, at an airshow.",
        href: '#project-panopsys',
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
        description: "Field AI develops autonomy software for robots working in unstructured environments, and I spent my fall 2025 co-op on their hardware team in Irvine. My work was the physical side of that: a back-mounted payload for the Unitree G1 humanoid, competition ballast for a quadruped, splash testing toward ingress protection, and test hardware for characterizing sensors. That is one of the office Spot units in the photo.",
        href: '#experience-field-ai',
      },
      {
        image: backpackFeatured,
        title: 'Back-Mounted Payload',
        description: "Field AI needed its existing sensing and compute hardware to run on a new platform, the Unitree G1 humanoid. Working from a requirements-only brief, I designed the frame, modular shelf layout, and mounting interface, with the cabling and cooling arranged so connectors and fans stay serviceable without disassembling the payload.",
        href: '#project-payload',
      },
      {
        image: cubeFeatured,
        imagePosition: 'center 30%',
        title: 'Sensor Tower Testing Rig',
        description: "Field AI needed to iterate on sensor and payload configurations without building a dedicated mount for each one. I designed and built a modular tower from miniature T-slot extrusion and printed fixtures, with adjustable camera mounts, for LiDAR, camera, ultrasonic, and compute payload testing. The sensors themselves are confidential.",
        href: '#project-sensor-tower',
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
        description: "An unmanned surface vehicle the UCLA SRI Lab uses for visual-inertial navigation research. I first modeled its hull on a high-school placement, then came back to extend the SolidWorks models of its sensing kits above and below the waterline and to design a printed fairing for the underwater sensors. Still one of my favourite things I have gotten to work on.",
        href: '#project-usv',
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
