import {AcademicCapIcon, ArrowDownTrayIcon, ChartBarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';
import {FC, memo, ReactNode} from 'react';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import panopsysCameraModuleImage from '../images/airborne_tracker/camera-module.webp';
import deploymentMapImage from '../images/airborne_tracker/deployment-map.svg';
import panopsysAuroraImage from '../images/airborne_tracker/node-tracking-aurora.webp';
import heroImage from '../images/airborne_tracker/node-tracking-helicopter.webp';
import panopsysBackdrop from '../images/airborne_tracker/plane-backdrop.webp';
import aceOfSpadesImage from '../images/builds/ace-of-spades.webp';
import helldiversHelmetImage from '../images/builds/helldivers-helmet.webp';
import mp9SpeedloaderPoster from '../images/builds/mp9-speedloader.webp';
import ncrRangerHelmetImage from '../images/builds/ncr-ranger-helmet.webp';
import ncrRangerKitsImage from '../images/builds/ncr-ranger-kits.webp';
import ncrRangerMaskImage from '../images/builds/ncr-ranger-mask.webp';
import odstImage from '../images/builds/odst.webp';
import processBaseCoatImage from '../images/builds/process-base-coat.webp';
import processFillerPrimerImage from '../images/builds/process-filler-primer.webp';
import processPaintedImage from '../images/builds/process-painted.webp';
import processRawPrintImage from '../images/builds/process-raw-print.webp';
import psychoMaskImage from '../images/builds/psycho-mask.webp';
import reachSpartanImage from '../images/builds/reach-spartan.webp';
import scoutTroopersImage from '../images/builds/scout-troopers.webp';
import ultrakillFigurineImage from '../images/builds/ultrakill-figurine.webp';
import fieldAIBackdrop from '../images/fieldai/backdrop.webp';
import payloadExplodedImage from '../images/fieldai/payload-exploded.webp';
import payloadOnG1Image from '../images/fieldai/payload-on-g1.webp';
import payloadPrototypesImage from '../images/fieldai/payload-prototypes.webp';
import sensorTowerImage from '../images/fieldai/sensor-tower.webp';
import splashTestEnclosureImage from '../images/fieldai/splash-test-enclosure.webp';
import spotImage from '../images/fieldai/spot.webp';
import ultrasonicFixtureImage from '../images/fieldai/ultrasonic-fixture.webp';
import heroBackdrop from '../images/hero-backdrop.webp';
import contactBackdrop from '../images/road-backdrop.webp';
import uclaBackdrop from '../images/UCLA/backdrop.webp';
import cameraMountPoster from '../images/UCLA/camera-mount.webp';
import usvImage from '../images/UCLA/usv.webp';
import usvFairingPoster from '../images/UCLA/usv-fairing.webp';
import {
  About,
  ContactSection,
  ContactType,
  Figure,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  SliderCarousel,
  Social,
  TimelineItem,
} from './dataDef';

export const siteUrl = 'https://alexrjjacobs.github.io';
export const resumeHref = '/assets/Alex_Jacobs_Resume.pdf';

// The next co-op term being applied for. Waterloo terms: Winter is January – April, Spring is May – August, Fall is
// September – December. Spell out the months, since recruiters outside Waterloo won't know the term names.
export const nextCoopTerm = 'Winter 2027 (January – April)';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alex Jacobs | Mechanical Design Portfolio',
  description:
    'Mechanical design for robots by Alex Jacobs, Mechatronics Engineering at Waterloo: a humanoid payload at Field AI, the Panopsys sensor head, and USV hardware at UCLA.',
  ogImageUrl: `${siteUrl}/og-image.jpg`,
  ogImageAlt: 'Alex Jacobs, mechanical design for robots, beside a close-up of the Panopsys camera module',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Featured: 'featured',
  Resume: 'resume',
  Experience: 'experience',
  Projects: 'projects',
  Skills: 'skills',
  Builds: 'builds',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Header navigation, in page order
 */
export const navItems: {section: SectionId; label: string}[] = [
  {section: SectionId.About, label: 'About'},
  {section: SectionId.Featured, label: 'Featured'},
  {section: SectionId.Experience, label: 'Experience'},
  {section: SectionId.Projects, label: 'Projects'},
  {section: SectionId.Builds, label: 'Builds'},
  {section: SectionId.Contact, label: 'Contact'},
];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: 'Alex Jacobs',
  tagline: 'Mechanical design for robots',
  eyebrow: 'Mechatronics Engineering · University of Waterloo',
  description: (
    <>
      I lead mechanical design at <strong className="font-semibold text-white">Panopsys</strong>, an airborne object
      tracking venture I co-founded. At <strong className="font-semibold text-white">Field AI</strong>, I designed a
      back-mounted sensing and compute payload for the Unitree G1 humanoid.
    </>
  ),
  availability: `Available for a co-op term in ${nextCoopTerm}`,
  image: {
    image: heroImage,
    alt: 'An out-of-focus Panopsys sensor node in the foreground, with a helicopter flying over the lake and the Ontario Place dome on the far shore',
    caption: 'A Panopsys node tracking a helicopter at our first field deployment',
  },
  // A Waterloo campus photo, darkened behind the text by a gradient in Hero.tsx
  backdrop: heroBackdrop,
  actions: [
    {href: resumeHref, text: 'Resume + portfolio (PDF)', primary: true, Icon: ArrowDownTrayIcon},
    {href: `#${SectionId.Contact}`, text: 'Contact me'},
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImage: {
    image: spotImage,
    alt: 'Alex Jacobs crouching beside a yellow Boston Dynamics Spot robot in a lab',
    caption: "With one of the Spot units at Field AI's Irvine office",
  },
  description: (
    <>
      <p>
        I'm a Mechatronics Engineering student at the University of Waterloo. My co-op terms have taken me from SLAM and
        simulation at UCLA's Sensing and Robotics for Infrastructure Lab, to mechanical design for quadrupeds and
        humanoids at Field AI, to Panopsys, the airborne object tracking venture I co-founded.
      </p>
      <p>
        Outside of work I build costumes and props from films and video games, take landscape photographs, including
        several of the backdrops on this site, and explore whichever city I find myself in.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Degree', text: 'BASc Mechatronics Engineering, expected April 2029', Icon: AcademicCapIcon},
    {label: 'Cumulative average', text: '90.79%', Icon: ChartBarIcon},
    {label: 'Interests', text: 'Science fiction, photography, painting', Icon: SparklesIcon},
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
 * Personal builds gallery. Engineering parts live with their project write-ups instead.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Halo Reach Spartan',
    description:
      "The costume build I'm proudest of. Over about 3 months I modified, 3D-printed, finished, and painted a scaled-down wearable replica of the Halo Reach armour, customized to match the character I played in a friend's basement on his Xbox 360.",
    image: reachSpartanImage,
    alt: 'Alex in green and red Halo Reach Spartan armour, holding a large hammer prop',
    credit: 'Riley Marini',
    position: 'center 20%',
  },
  {
    title: 'NCR Ranger Kits',
    description:
      'Two full NCR Ranger kits from Fallout: New Vegas, one for me and one for a friend, built on and off across the summer of 2026. I modelled and printed the helmets and masks, assembled the armour and dusters, then weathered everything so it looked like it had spent time in the wasteland.',
    image: ncrRangerKitsImage,
    alt: 'Two people in weathered NCR Ranger armour, helmets, and long dusters at a convention',
    position: 'center 25%',
  },
  {
    title: '41st Scout Troopers',
    description:
      'Two wearable Scout Trooper costumes from Star Wars: Revenge of the Sith, one for me and one for a friend, built in just under a month.',
    image: scoutTroopersImage,
    alt: 'A camouflaged Scout Trooper costume seated on a speeder bike prop',
    position: 'center 30%',
  },
  {
    title: 'Halo Reach ODST',
    description:
      'My oldest costume build, and the least documented. I modified the original files to fit me, then 3D-printed, sanded, painted, and rigged the suit to wear at conventions, on and off over about a year.',
    image: odstImage,
    alt: 'Armoured Halo ODST costume on a footbridge',
    credit: 'Dan Pickard',
    position: 'center 25%',
  },
  {
    title: 'Helldivers 2 Helmet',
    description: 'A wearable helmet from Helldivers 2, commissioned by a client in the USA.',
    image: helldiversHelmetImage,
    alt: 'Black helmet with yellow stripes and a dark visor, from Helldivers 2',
  },
  {
    title: 'NCR Ranger Helmet',
    description: 'A full NCR Ranger helmet from Fallout: New Vegas, commissioned by a friend.',
    image: ncrRangerHelmetImage,
    alt: 'Weathered NCR Ranger helmet with gas-mask respirator',
  },
  {
    title: 'NCR Ranger Custom Mask',
    description: 'A customized NCR Ranger mask from Fallout: New Vegas, commissioned by a client in Singapore.',
    image: ncrRangerMaskImage,
    alt: 'Weathered metal NCR Ranger mask with red eye lenses, lying on grass',
  },
  {
    title: 'Borderlands Psycho Mask',
    description: 'A wearable Psycho mask from the Borderlands series, made as a gift for a friend.',
    image: psychoMaskImage,
    alt: 'White Psycho mask with orange stripes and a metal mouth grille',
  },
  {
    title: 'Ace of Spades Replica',
    description: "A replica of a friend's favourite weapon from his favourite game, Destiny.",
    image: aceOfSpadesImage,
    alt: 'Painted replica of the Ace of Spades revolver from Destiny',
  },
  {
    title: 'Ultrakill Figurine',
    description:
      'A printed and painted figurine of the character V1 from Ultrakill, commissioned by a client in the USA.',
    image: ultrakillFigurineImage,
    alt: 'Blue robot figurine of V1 from Ultrakill, posed against a red Ultrakill logo',
  },
  {
    title: 'Airsoft MP9 Speedloader',
    description:
      'Modelled and printed to fit my own airsoft magazines. A small part, but one that had to match the real magazine geometry closely enough to actually work.',
    image: mp9SpeedloaderPoster,
    alt: 'Rotating CAD model of a rectangular speedloader with a round loading port',
    video: '/media/mp9-speedloader.mp4',
  },
];

/**
 * Build stages under the personal builds gallery. Each photo is from a different build, so captions say what the photo
 * shows rather than which costume it belongs to.
 */
export const buildProcess: Figure[] = [
  {
    image: processRawPrintImage,
    alt: 'A white 3D-printed Scout Trooper helmet straight off the printer, with stringing still on the dome',
    caption: 'Printed: a Scout Trooper helmet before any cleanup',
  },
  {
    image: processFillerPrimerImage,
    alt: 'An NCR Ranger helmet in grey primer with red spot filler, on a paint-stained bench with sandpaper scraps',
    caption: 'Filled and primed: spot filler over primer, sanded back between coats',
  },
  {
    image: processBaseCoatImage,
    alt: 'A Helldivers 2 helmet in black base coat, mostly covered in green masking tape with its yellow stripe sprayed',
    caption: 'Base coats: a Helldivers 2 helmet masked off for its stripes',
  },
  {
    image: processPaintedImage,
    alt: 'A finished green Halo helmet with worn silver edges, a tinted visor and a side-mounted lamp',
    caption: 'Painted and weathered: a finished Halo helmet',
  },
];

/**
 * Resume section
 */

// Experiences mirror page 1 of the resume PDF, and Professional Projects mirror its portfolio pages, line for line.
// Change the resume first, then copy the new wording here. Figure captions follow the PDF's where it has one.
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
          Own all mechanical design: sensor head, camera and antenna mounts, and compute, RF, and power integration on a
          portable tripod mast; one latch releases the whole head for transport and setup.
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
          Built custom fixtures to splash-test a sensing payload's enclosures, fans, and speakers against the water half
          of IP54 (IPX4), identifying insufficient seal clearances that would require a payload redesign.
        </li>
        <li>
          Designed and built a modular sensor tower test rig for LiDAR, camera, ultrasonic, and compute payload testing,
          with adjustable camera mounts and configurable extrinsics in place of the specified fixed design.
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
          Benchmarked 5+ open-source SLAM systems, including DLIO, LIO-SAM, Coco-LIC, and ORB-SLAM, on datasets outside
          their design domains, characterizing localization and mapping failure modes.
        </li>
        <li>
          Built a Gazebo simulation for a quadruped from existing campus models via a Blender conversion pipeline, and
          wrote Python to add Gaussian noise to its otherwise ideal simulated sensor readings.
        </li>
      </ul>
    ),
    figures: [
      {
        image: cameraMountPoster,
        alt: 'Rotating CAD model of a two-part camera mount with mounting faces at several angles',
        caption:
          'A two-part camera mount for lab tests: one base carries a mounting face for every angle the camera needed, instead of a bracket per angle',
        video: '/media/camera-mount.mp4',
        fit: 'contain',
        background: '#c5c5c5',
      },
    ],
  },
];

const ProjectNote: FC<{label: string; children: ReactNode}> = memo(({label, children}) => (
  <p>
    <span className="font-semibold text-neutral-900">{label}:</span> {children}
  </p>
));

export const projects: TimelineItem[] = [
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
    figures: [
      {
        image: deploymentMapImage,
        alt: 'Map diagram: three camera nodes about 100 m apart on a lakeshore park at the west end of the airshow display area, which runs about 5 km east along the Toronto waterfront towards the airport, with range rings at 1, 3 and 5 km',
        caption: 'Where the three nodes stood, and the airshow display area they covered',
        fit: 'contain',
        background: '#ffffff',
        wide: true,
      },
      {
        image: panopsysAuroraImage,
        alt: 'A Panopsys sensor node on its tripod mast against a blue sky, with a four-engine patrol aircraft passing behind it',
        caption: 'The v1 node on its portable tripod mast, tracking a CP-140 Aurora at the airshow',
        position: 'center 30%',
      },
      {
        image: panopsysCameraModuleImage,
        alt: 'Close-up of a Panopsys sensor node: a camera in a grey printed housing on a black mount, with radio hardware behind it',
        caption: 'Camera module and radio hardware on the mast',
        position: 'center 55%',
      },
    ],
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
          Built five 3D-printed iterations in 4 weeks, alongside 3 other projects, for testing at the Boston office, and
          wrote the design documentation and file-structure guides for handoff to downstream engineers.
        </ProjectNote>
      </div>
    ),
    figures: [
      {
        image: payloadOnG1Image,
        alt: 'A Unitree G1 humanoid hanging from a safety gantry, with the black Field AI payload and its antennas mounted on its back',
        caption: 'The payload mounted on the Unitree G1',
        position: 'center 40%',
      },
      {
        image: payloadExplodedImage,
        alt: 'Exploded CAD view of the payload, with frame panels, shelves, fans, and fasteners pulled apart along their assembly axes',
        caption: 'Exploded view of my payload design',
        fit: 'contain',
        background: '#c2c7d3',
      },
      {
        image: payloadPrototypesImage,
        alt: 'Two black 3D-printed payload prototypes with Field AI logos on a workbench',
        caption: 'Fabricated prototypes for cross-office testing',
        position: 'center 60%',
      },
    ],
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
    figures: [
      {
        image: sensorTowerImage,
        alt: 'A cube-shaped rig of miniature T-slot extrusion with black printed brackets and a sensor mounted on top, on a workbench',
        caption: 'The sensor tower test rig I designed and built',
      },
      {
        image: ultrasonicFixtureImage,
        alt: 'Two ultrasonic sensors held perpendicular to each other on a black fixture, wired to a breadboard',
        caption: 'The ultrasonic fixture, holding both sensors at fixed, known offsets',
      },
    ],
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
    figures: [
      {
        image: splashTestEnclosureImage,
        alt: 'An open grey gasketed enclosure on a workbench, holding a smaller sealed junction box with a cable gland and power leads',
        caption: 'The splash-test enclosure',
        position: 'center 60%',
      },
    ],
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
    figures: [
      {
        image: usvImage,
        alt: "Alex standing behind the lab's yellow Clearpath Heron USV, which sits on a cart with sensors mounted on its deck",
        caption: "The lab's USV, a Clearpath Heron; my work was its sensing-kit models and fairing",
        position: 'center 65%',
      },
      {
        image: usvFairingPoster,
        alt: 'Rotating CAD model of the fairing: a tapered section ending in a rounded nose',
        caption: 'The hydrodynamic fairing for the underwater sensors, at the front tip of the hull',
        video: '/media/usv-fairing.mp4',
        fit: 'contain',
        background: '#c5c5c5',
      },
    ],
  },
  {
    id: 'project-slam',
    date: 'Jan. – Apr. 2025',
    location: 'UCLA Sensing and Robotics for Infrastructure Lab, Los Angeles, CA',
    title: 'Simulation and SLAM Evaluation',
    content: (
      <div className="flex flex-col gap-y-3">
        <ProjectNote label="Design">
          Built a Gazebo simulation for a quadruped from campus models via Blender, with Python adding Gaussian noise to
          otherwise ideal sensor readings.
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
];

/**
 * Featured project carousel. Each card is a short intro that links to its full write-up, so keep numbers out of it.
 */
export const Carousel: SliderCarousel = {
  slidersections: [
    {
      SliderimageSrc: fieldAIBackdrop,
      backgroundPosition: 'center 25%',
      title: 'Field AI',
      summary:
        'Fall 2025 co-op on the hardware team in Irvine. Field AI develops autonomy software for robots working in unstructured environments.',
      sliders: [
        {
          image: payloadOnG1Image,
          alt: 'A Unitree G1 humanoid with the black Field AI payload mounted on its back',
          imagePosition: 'center 45%',
          title: 'Back-Mounted Payload',
          description:
            'Field AI needed its existing sensing and compute hardware to run on a new platform, the Unitree G1 humanoid. Working from a requirements-only brief, I designed the frame, modular shelf layout, and mounting interface, with the cabling and cooling arranged so connectors and fans stay serviceable without disassembling the payload.',
          href: '#project-payload',
        },
        {
          image: sensorTowerImage,
          alt: 'A cube-shaped test rig of miniature T-slot extrusion and printed brackets on a workbench',
          imagePosition: 'center 30%',
          title: 'Sensor Tower Test Rig',
          description:
            'Field AI needed to iterate on sensor and payload configurations without building a dedicated mount for each one. I designed and built a modular tower from miniature T-slot extrusion and printed fixtures, with adjustable camera mounts, for LiDAR, camera, ultrasonic, and compute payload testing. The sensors themselves are confidential.',
          href: '#project-sensor-tower',
        },
      ],
    },
    {
      SliderimageSrc: panopsysBackdrop,
      title: 'Panopsys',
      summary: 'A 3-person venture I co-founded, where I lead mechanical design.',
      sliders: [
        {
          image: panopsysAuroraImage,
          alt: 'A Panopsys sensor node on its tripod mast, with a patrol aircraft passing behind it',
          imagePosition: 'center',
          title: 'Airborne Object Tracking System',
          description:
            'Panopsys builds a ground-based system for locating airborne objects in 3D, fusing detections from distributed camera nodes. I own all of its mechanical design: the sensor head, its camera and antenna mounts, and the compute, RF, and power integration on a portable tripod mast. The photo shows the v1 prototype at our first field deployment, an airshow.',
          href: '#project-panopsys',
        },
      ],
    },
    {
      SliderimageSrc: uclaBackdrop,
      backgroundPosition: 'center 25%',
      title: 'UCLA SRI Lab',
      summary: 'Winter 2025 co-op at the Sensing and Robotics for Infrastructure Lab.',
      sliders: [
        {
          image: usvImage,
          alt: "Alex behind the lab's yellow Clearpath Heron USV on a cart",
          imagePosition: 'center 60%',
          title: 'Unmanned Surface Vehicle',
          description:
            "The UCLA SRI Lab uses a Clearpath Heron, a commercial unmanned surface vehicle, for visual-inertial navigation research. My part was modelling parts of its hull on a high-school placement, then coming back to extend the SolidWorks models of its sensing kits above and below the waterline and to design a printed fairing for the underwater sensors. Still one of my favourite things I've worked on.",
          href: '#project-usv',
        },
      ],
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: `I'm looking for a mechanical design co-op in ${nextCoopTerm}. Questions about that, or about a project? Send me an email or a LinkedIn message.`,
  backgroundImage: contactBackdrop,
  email: 'ajrjacob@uwaterloo.ca',
  // A phone number can go here too: {type: ContactType.Phone, label: 'Phone', text: '...', href: 'tel:...'}
  items: [
    {
      type: ContactType.LinkedIn,
      label: 'LinkedIn',
      text: 'Alex Jacobs',
      href: 'https://www.linkedin.com/in/alex-jacobs-4bb0b6328/',
    },
    {
      type: ContactType.Resume,
      label: 'Resume',
      text: 'Resume + portfolio (PDF)',
      href: resumeHref,
    },
    {
      type: ContactType.Location,
      label: 'Based in',
      text: 'Waterloo, ON, Canada',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alex-jacobs-4bb0b6328/'},
];
