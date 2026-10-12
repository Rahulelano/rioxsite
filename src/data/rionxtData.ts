export type RoutePath =
  | '/'
  | '/about'
  | '/services'
  | '/services/pcb-assembly'
  | '/services/smt-tht-ems'
  | '/services/embedded-firmware'
  | '/services/iot-iiot'
  | '/services/industrial-automation'
  | '/quality-capabilities'
  | '/contact'
  | '/privacy-policy';

export interface PageSEO {
  path: RoutePath;
  title: string;
  description: string;
  breadcrumb: string;
  schemaType: 'Organization' | 'Service' | 'AboutPage' | 'ContactPage' | 'WebPage';
}

export const IMAGES = {
  heroPcb: '/src/assets/images/hero_pcb_manufacturing_1791729903497.jpg',
  engineeringLab: '/src/assets/images/engineering_lab_rd_1791729915849.jpg',
  smtPickAndPlace: '/src/assets/images/smt_pick_and_place_1791729927596.jpg',
  embeddedIiot: '/src/assets/images/embedded_iiot_hardware_1791729938567.jpg',
  qualityAoi: '/src/assets/images/quality_aoi_inspection_1791729950387.jpg',
} as const;

export const COMPANY_INFO = {
  legalName: 'RION TECHNOLOGIES',
  brandName: 'RIONXT',
  tagline: 'From Intelligent Ideas to Engineered Reality.',
  heroHeadline: 'Engineering Intelligence. Manufacturing Possibilities.',
  websiteUrl: 'https://www.rionxt.com/',
  phoneDisplay: '+91 73588 65706',
  phoneRaw: '+917358865706',
  whatsappUrl:
    'https://wa.me/917358865706?text=Hello%20RION%20TECHNOLOGIES%20(RIONXT)%2C%20I%20would%20like%20to%20discuss%20an%20electronics%20engineering%20or%20manufacturing%20project.',
  address: {
    line1: 'Plot No. 67 & 68, Madhav Nagar',
    line2: 'No. 102 Irungattukottai Village, Sriperumbudur Taluk',
    cityStateZip: 'Kanchipuram - 602105, Tamil Nadu, India',
    full: 'Plot No. 67 & 68, Madhav Nagar, No. 102 Irungattukottai Village, Sriperumbudur Taluk, Kanchipuram - 602105, Tamil Nadu, India',
  },
  emailStatusNote:
    'Project enquiries submitted via this portal are routed directly to the RION TECHNOLOGIES engineering desk. For immediate coordination, call or message +91 73588 65706 or visit our Sriperumbudur facility.',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Irungattukottai+Sriperumbudur+Kanchipuram+602105&output=embed',
};

export const PAGE_SEO: Record<RoutePath, PageSEO> = {
  '/': {
    path: '/',
    title: 'RION TECHNOLOGIES (RIONXT) — Electronics Engineering & EMS',
    description:
      'From electronics design and embedded engineering to precision PCB assembly, SMT/THT manufacturing, IIoT, and industrial automation — RION TECHNOLOGIES turns technical ideas into production-ready solutions.',
    breadcrumb: 'Home',
    schemaType: 'Organization',
  },
  '/about': {
    path: '/about',
    title: 'About RION TECHNOLOGIES (RIONXT) — Engineering & EMS Partner',
    description:
      'Learn how RION TECHNOLOGIES (RIONXT) in Sriperumbudur, Kanchipuram delivers end-to-end electronic product development, R&D, PCB assembly, and industrial automation.',
    breadcrumb: 'About RION TECHNOLOGIES',
    schemaType: 'AboutPage',
  },
  '/services': {
    path: '/services',
    title: 'Electronics Engineering & Manufacturing Services — RIONXT',
    description:
      'Explore RION TECHNOLOGIES services: PCB design and assembly, SMT/THT manufacturing, EMS, embedded systems, firmware, Industrial IoT (IIoT), and automation support.',
    breadcrumb: 'Services Overview',
    schemaType: 'Service',
  },
  '/services/pcb-assembly': {
    path: '/services/pcb-assembly',
    title: 'PCB Design, Assembly & Manufacturing Services — RIONXT',
    description:
      'End-to-end PCB design, schematic capture, multi-layer layout, prototype assembly, and production PCB assembly services by RION TECHNOLOGIES.',
    breadcrumb: 'PCB Assembly & Manufacturing',
    schemaType: 'Service',
  },
  '/services/smt-tht-ems': {
    path: '/services/smt-tht-ems',
    title: 'SMT, THT Assembly & Electronic Manufacturing Services (EMS) — RIONXT',
    description:
      'Precision Surface Mount Technology (SMT), Through-Hole Technology (THT), mixed-technology board assembly, and scalable EMS solutions by RION TECHNOLOGIES.',
    breadcrumb: 'SMT / THT & EMS Solutions',
    schemaType: 'Service',
  },
  '/services/embedded-firmware': {
    path: '/services/embedded-firmware',
    title: 'Embedded Systems Engineering & Firmware Development — RIONXT',
    description:
      'Custom embedded hardware design, microcontroller firmware architecture, board bring-up, peripheral integration, and electronics repair services.',
    breadcrumb: 'Embedded Systems & Firmware',
    schemaType: 'Service',
  },
  '/services/iot-iiot': {
    path: '/services/iot-iiot',
    title: 'IoT, Industrial IoT (IIoT) & Smart OEE Solutions — RIONXT',
    description:
      'Connected industrial systems, sensor telemetry, edge gateways, and the RIONXT Smart OEE Product Solution for real-time manufacturing visibility.',
    breadcrumb: 'IoT / IIoT Solutions',
    schemaType: 'Service',
  },
  '/services/industrial-automation': {
    path: '/services/industrial-automation',
    title: 'Industrial Automation & Machine Transition Solutions — RIONXT',
    description:
      'Transition from manual to automated machine operations with hybrid control architectures, embedded controllers, and custom electronic product engineering.',
    breadcrumb: 'Industrial Automation',
    schemaType: 'Service',
  },
  '/quality-capabilities': {
    path: '/quality-capabilities',
    title: 'Quality Assurance & Manufacturing Capabilities — RIONXT',
    description:
      'Inspect RION TECHNOLOGIES quality assurance workflows, DFM validation, optical and functional PCB inspection, and continuous after-sales technical support.',
    breadcrumb: 'Quality & Capabilities',
    schemaType: 'WebPage',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact RION TECHNOLOGIES (RIONXT) — Discuss Your Project',
    description:
      'Contact RION TECHNOLOGIES at Irungattukottai, Sriperumbudur, Kanchipuram (+91 73588 65706) for PCB assembly, embedded systems, IIoT, and EMS project enquiries.',
    breadcrumb: 'Contact Us',
    schemaType: 'ContactPage',
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy & Technical Data Confidentiality — RIONXT',
    description:
      'Privacy policy and intellectual property protection guidelines for engineering files, schematics, BOMs, and project enquiries submitted to RION TECHNOLOGIES.',
    breadcrumb: 'Privacy Policy',
    schemaType: 'WebPage',
  },
};

export interface CoreCapabilityItem {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  categoryMeta: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  route: RoutePath;
}

export const CORE_CAPABILITIES: CoreCapabilityItem[] = [
  {
    id: 'pcb-design-assembly',
    index: '01',
    title: 'PCB Design & Assembly',
    shortTitle: 'PCB Assembly',
    categoryMeta: 'Schematic Capture · Layout · PCBA',
    description:
      'Complete printed circuit board engineering from schematic architecture and multi-layer layout optimization to rapid prototype build-outs and production assembly.',
    deliverables: [
      'Schematic capture & BOM structuring',
      'Design for Manufacturability (DFM) checks',
      'Prototype & production PCB assembly',
    ],
    image: IMAGES.heroPcb,
    imageAlt: 'Multi-layer PCB assembly passing through precision inspection line at RION TECHNOLOGIES',
    route: '/services/pcb-assembly',
  },
  {
    id: 'smt-tht-manufacturing',
    index: '02',
    title: 'SMT / THT Manufacturing',
    shortTitle: 'SMT & THT',
    categoryMeta: 'Surface Mount · Through-Hole · Mixed Tech',
    description:
      'Precision Surface Mount Technology (SMT) placement for fine-pitch components alongside robust Through-Hole Technology (THT) soldering for industrial power and connector assemblies.',
    deliverables: [
      'Automated SMT pick-and-place assembly',
      'Through-hole & mixed-technology soldering',
      'Solder paste stencil & reflow profiling',
    ],
    image: IMAGES.smtPickAndPlace,
    imageAlt: 'High-speed SMT pick-and-place head mounting surface-mount IC onto circuit board',
    route: '/services/smt-tht-ems',
  },
  {
    id: 'ems-solutions',
    index: '03',
    title: 'Electronic Manufacturing Services (EMS)',
    shortTitle: 'EMS Solutions',
    categoryMeta: 'Turnkey Build · Sub-Assembly · Testing',
    description:
      'Integrated Electronic Manufacturing Services covering component coordination, board population, functional verification, enclosure integration, and scheduled production delivery.',
    deliverables: [
      'End-to-end BOM & material coordination',
      'Functional board bring-up & testing',
      'Box-build & electro-mechanical assembly',
    ],
    image: IMAGES.qualityAoi,
    imageAlt: 'Automated optical inspection and verification station for Electronic Manufacturing Services',
    route: '/services/smt-tht-ems',
  },
  {
    id: 'embedded-firmware',
    index: '04',
    title: 'Embedded Systems & Firmware',
    shortTitle: 'Embedded & Firmware',
    categoryMeta: 'MCU Architecture · RTOS · Diagnostics',
    description:
      'Hardware-software co-design for industrial controllers, custom microcontroller boards, real-time C/C++ firmware, peripheral drivers, and board-level repair and diagnostics.',
    deliverables: [
      'Custom MCU / SoC hardware design',
      'Bare-metal & RTOS firmware development',
      'Board bring-up, troubleshooting & repair',
    ],
    image: IMAGES.engineeringLab,
    imageAlt: 'R&D electronics engineer testing embedded hardware with oscilloscope and digital microscope',
    route: '/services/embedded-firmware',
  },
  {
    id: 'iot-iiot-solutions',
    index: '05',
    title: 'IoT / IIoT Solutions',
    shortTitle: 'IoT & IIoT',
    categoryMeta: 'Smart OEE · Edge Telemetry · Connected Systems',
    description:
      'Industrial IoT hardware and telemetry architectures including the RIONXT Smart OEE Product Solution for tracking machine availability, performance, and shop-floor efficiency.',
    deliverables: [
      'RIONXT Smart OEE Product Solution',
      'Industrial sensor & gateway integration',
      'Real-time machine monitoring & updates',
    ],
    image: IMAGES.embeddedIiot,
    imageAlt: 'Industrial IoT gateway hardware connected to factory automation sensors on test bench',
    route: '/services/iot-iiot',
  },
  {
    id: 'industrial-automation',
    index: '06',
    title: 'Industrial Automation & Product Development',
    shortTitle: 'Automation & R&D',
    categoryMeta: 'Manual-to-Auto Transition · R&D · Support',
    description:
      'Practical engineering support for transitioning legacy manual equipment to automated or hybrid operations, coupled with custom electronic product R&D and lifecycle maintenance.',
    deliverables: [
      'Manual-to-automated machine transition',
      'Hybrid control & actuator integration',
      'On-site deployment & after-sales support',
    ],
    image: IMAGES.engineeringLab,
    imageAlt: 'Industrial automation control hardware and electronic R&D workbench',
    route: '/services/industrial-automation',
  },
];

export interface ProcessStage {
  step: string;
  title: string;
  phaseMeta: string;
  summary: string;
  keyActivities: string[];
}

export const PROCESS_TIMELINE: ProcessStage[] = [
  {
    step: '01',
    title: 'Understand the Requirement',
    phaseMeta: 'Consultation · Feasibility · Scope Definition',
    summary:
      'We review your operational challenge, target hardware specifications, existing schematics or legacy machine setup, and production goals.',
    keyActivities: [
      'Application environment & electrical requirement review',
      'Feasibility assessment for new R&D or manual-to-automated transition',
      'Bill of Materials (BOM) & lifecycle support scoping',
    ],
  },
  {
    step: '02',
    title: 'Design & Engineering',
    phaseMeta: 'Schematics · PCB Layout · Firmware Architecture',
    summary:
      'Our engineering team develops circuit schematics, multi-layer PCB layouts, embedded firmware architectures, and IIoT communication protocols.',
    keyActivities: [
      'Circuit design, component selection & DFM review',
      'Embedded microcontroller & sensor interface engineering',
      'Firmware driver development & telemetry logic',
    ],
  },
  {
    step: '03',
    title: 'Prototype Development',
    phaseMeta: 'Rapid PCBA · Board Bring-Up · Bench Validation',
    summary:
      'We build functional hardware prototypes, populate initial SMT/THT boards, and run benchtop oscilloscope and firmware verification.',
    keyActivities: [
      'Prototype PCB assembly (SMT & THT population)',
      'Hardware bring-up, power rail & signal integrity checks',
      'Iterative design refinement prior to pilot runs',
    ],
  },
  {
    step: '04',
    title: 'Assembly & Validation',
    phaseMeta: 'SMT / THT Line · Optical Inspection · Functional Test',
    summary:
      'Verified designs move into controlled SMT and THT assembly workflows with solder joint inspection, electrical testing, and operational burn-in.',
    keyActivities: [
      'Automated SMT placement & controlled reflow soldering',
      'Through-hole assembly & mixed-technology integration',
      'Visual, optical, and functional circuit validation',
    ],
  },
  {
    step: '05',
    title: 'Production & Technical Support',
    phaseMeta: 'Scalable EMS · Deployment · After-Sales Service',
    summary:
      'Beyond manufacturing delivery, RION TECHNOLOGIES provides deployment guidance, scheduled maintenance, remote troubleshooting, and on-site support.',
    keyActivities: [
      'Repeatable production assembly & box-build delivery',
      'On-site commissioning & automation transition assistance',
      'Continuous monitoring, firmware updates & electronics repair',
    ],
  },
];

export interface VerifiedStrength {
  index: string;
  title: string;
  description: string;
  meta: string;
}

export const VERIFIED_STRENGTHS: VerifiedStrength[] = [
  {
    index: '01',
    title: 'Engineering-Focused Approach',
    meta: 'R&D · Hardware · Firmware',
    description:
      'Every manufacturing or automation project is backed by practical electronics R&D, ensuring circuit designs and firmware are optimized for real-world operating conditions.',
  },
  {
    index: '02',
    title: 'Integrated Product Development Support',
    meta: 'Concept · Prototype · Deployment',
    description:
      'Single-partner continuity across schematic design, PCB layout, embedded software, prototype bring-up, and final assembly reduces handoff delays between vendors.',
  },
  {
    index: '03',
    title: 'Versatile PCB Assembly Capabilities',
    meta: 'SMT · THT · Mixed Technology',
    description:
      'Equipped for surface-mount (SMT), through-hole (THT), and mixed-technology PCB assemblies supporting both low-volume engineering prototypes and repeatable production batches.',
  },
  {
    index: '04',
    title: 'Structured Quality Inspection Processes',
    meta: 'DFM · Visual & Optical Checks · Functional Test',
    description:
      'Multi-stage verification including pre-assembly DFM checks, solder paste and placement inspection, continuity verification, and functional board testing.',
  },
  {
    index: '05',
    title: 'Practical Automation & IIoT Integration',
    meta: 'Smart OEE · Machine Retrofitting',
    description:
      'Specialized experience helping industrial operators transition from manual to automated workflows and deploy connected solutions like the RIONXT Smart OEE system.',
  },
  {
    index: '06',
    title: 'Technical Consultation & After-Sales Assistance',
    meta: 'Remote Diagnostics · On-Site Support · Repair',
    description:
      'Dedicated post-deployment support including scheduled maintenance, firmware updates, remote troubleshooting, on-site engineering assistance, and electronics repair.',
  },
];

export interface IndustrySector {
  index: string;
  title: string;
  classification: string;
  description: string;
  applications: string[];
}

export const TARGET_INDUSTRIES: IndustrySector[] = [
  {
    index: '01',
    title: 'Industrial Manufacturing',
    classification: 'Core Solution Area · Shop-Floor Systems',
    description:
      'OEE monitoring hardware, machine utilization tracking, ruggedized power and control PCBs, and production line telemetry for discrete and process manufacturers.',
    applications: ['RIONXT Smart OEE deployment', 'Machine health & cycle monitoring', 'Industrial power & relay boards'],
  },
  {
    index: '02',
    title: 'Industrial Automation',
    classification: 'Core Solution Area · Machine Modernization',
    description:
      'Transitioning manual industrial equipment to automated or hybrid electro-mechanical operation using custom embedded controllers, sensor arrays, and actuator drivers.',
    applications: ['Manual-to-automated machine retrofits', 'Custom PLC & I/O interface cards', 'Closed-loop sensor control'],
  },
  {
    index: '03',
    title: 'Smart Devices & IoT',
    classification: 'Target Application · Connected Hardware',
    description:
      'Compact multi-layer PCBs, low-power wireless firmware, and gateway hardware for connected commercial and industrial sensing products.',
    applications: ['Edge telemetry gateways', 'Wireless sensor nodes', 'OTA-upgradable embedded firmware'],
  },
  {
    index: '04',
    title: 'Connected Products & IIoT',
    classification: 'Core Solution Area · Telemetry & Dashboards',
    description:
      'End-to-end hardware and firmware stacks that bridge legacy industrial machinery with modern cloud and on-premise analytics platforms.',
    applications: ['Modbus / RS-485 / CAN data loggers', 'Energy & utility monitoring nodes', 'Preventive maintenance alerts'],
  },
  {
    index: '05',
    title: 'Custom Electronic Equipment',
    classification: 'Core Solution Area · OEM / ODM Engineering',
    description:
      'Turnkey electronic product design, prototype assembly, and production EMS for specialized test benches, instrumentation, and commercial hardware.',
    applications: ['Bespoke control consoles', 'Mixed SMT/THT instrumentation boards', 'Board-level repair & refurbishment'],
  },
  {
    index: '06',
    title: 'Healthcare & Laboratory Electronics',
    classification: 'Target Application · Precision Assemblies',
    description:
      'High-reliability PCB assembly and embedded control subsystems suitable for non-invasive diagnostic fixtures, laboratory automation, and environmental monitors.',
    applications: ['Precision sensor signal conditioning', 'Display & UI controller assemblies', 'Fine-pitch SMT prototype runs'],
  },
];

export interface CapabilityShowcase {
  id: string;
  index: string;
  label: string;
  category: string;
  title: string;
  summary: string;
  technicalHighlights: string[];
  outcomeStatement: string;
  image: string;
  imageAlt: string;
  route: RoutePath;
}

export const CAPABILITY_SHOWCASES: CapabilityShowcase[] = [
  {
    id: 'rionxt-smart-oee',
    index: '01',
    label: 'Verified RIONXT Product Solution',
    category: 'Industrial IoT · Shop-Floor Intelligence',
    title: 'RIONXT Smart OEE Product Solution',
    summary:
      'An integrated hardware-and-software Industrial IoT solution engineered by RION TECHNOLOGIES to capture real-time machine Availability, Performance, and Quality metrics directly from shop-floor equipment.',
    technicalHighlights: [
      'Direct digital/analog machine signal acquisition from legacy & modern equipment',
      'Real-time downtime categorization, cycle-time tracking, and shift-level OEE computation',
      'Continuous after-sales monitoring, firmware updates, and on-site commissioning support',
    ],
    outcomeStatement:
      'Provides plant supervisors and production engineers with actionable visibility into machine utilization without replacing existing production machinery.',
    image: IMAGES.embeddedIiot,
    imageAlt: 'RIONXT Smart OEE industrial IoT gateway and sensor interface hardware on test bench',
    route: '/services/iot-iiot',
  },
  {
    id: 'smt-tht-pcba-showcase',
    index: '02',
    label: 'Capability Showcase',
    category: 'PCB Assembly · SMT & THT Manufacturing',
    title: 'High-Density Mixed-Technology PCB Assembly Workflow',
    summary:
      'End-to-end board population combining automated surface-mount placement for fine-pitch ICs and passive networks with selective through-hole assembly for high-current connectors and transformers.',
    technicalHighlights: [
      'Design for Manufacturability (DFM) & BOM verification prior to stencil fabrication',
      'Automated pick-and-place execution with multi-zone thermal reflow profiling',
      'Post-reflow optical inspection and functional power-on verification',
    ],
    outcomeStatement:
      'Supports seamless scaling from initial 5–10 board engineering prototypes to repeatable production batches.',
    image: IMAGES.smtPickAndPlace,
    imageAlt: 'Precision SMT pick-and-place nozzle assembling surface-mount components on PCB',
    route: '/services/smt-tht-ems',
  },
  {
    id: 'manual-to-auto-transition',
    index: '03',
    label: 'Capability Showcase',
    category: 'Industrial Automation · Machine Retrofitting',
    title: 'Manual-to-Automated Machine Operation Transition',
    summary:
      'Engineering consultation and custom embedded control hardware designed to upgrade manually operated industrial machines into semi-automated or fully automated production assets.',
    technicalHighlights: [
      'Hybrid control architecture preserving manual override safety while automating repetitive cycles',
      'Custom embedded controller, relay driver board, and industrial sensor integration',
      'On-site installation, operator handover, and scheduled maintenance programs',
    ],
    outcomeStatement:
      'Reduces operator fatigue and cycle-to-cycle variability while extending the productive lifespan of existing factory machinery.',
    image: IMAGES.heroPcb,
    imageAlt: 'Automated electronics manufacturing and industrial control assembly line',
    route: '/services/industrial-automation',
  },
  {
    id: 'embedded-rd-diagnostics',
    index: '04',
    label: 'Capability Showcase',
    category: 'Embedded Product Development · R&D & Repair',
    title: 'Embedded Hardware Bring-Up, Firmware & Board Diagnostics',
    summary:
      'Comprehensive R&D laboratory workflow covering custom microcontroller board design, real-time firmware development, oscilloscope signal verification, and component-level electronics repair.',
    technicalHighlights: [
      'Bare-metal and RTOS firmware architecture in C/C++ for industrial microcontrollers',
      'Industrial bus integration including RS-485, Modbus, CAN, SPI, I2C, and UART',
      'Fault isolation, component-level repair, and lifecycle technical support',
    ],
    outcomeStatement:
      'Accelerates time-to-prototype for new electronic products while keeping deployed field hardware operational.',
    image: IMAGES.engineeringLab,
    imageAlt: 'Engineer conducting embedded hardware bring-up and oscilloscope diagnostics',
    route: '/services/embedded-firmware',
  },
];

export interface DetailedServicePageData {
  route: RoutePath;
  kicker: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  keyCapabilities: {
    index: string;
    title: string;
    description: string;
  }[];
  technicalScope: {
    parameter: string;
    specification: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  relatedServices: RoutePath[];
}

export const SERVICE_PAGES_DATA: Record<
  | '/services/pcb-assembly'
  | '/services/smt-tht-ems'
  | '/services/embedded-firmware'
  | '/services/iot-iiot'
  | '/services/industrial-automation',
  DetailedServicePageData
> = {
  '/services/pcb-assembly': {
    route: '/services/pcb-assembly',
    kicker: 'Core Engineering & Manufacturing Service',
    title: 'PCB Design, Assembly & Manufacturing',
    subtitle:
      'From schematic capture and multi-layer PCB layout to rapid prototype population and repeatable production assembly at our Sriperumbudur facility.',
    heroImage: IMAGES.heroPcb,
    heroImageAlt: 'Precision PCB assembly and manufacturing line at RION TECHNOLOGIES',
    overviewTitle: 'Engineered Circuit Boards Built for Production Reliability',
    overviewParagraphs: [
      'At RION TECHNOLOGIES (RIONXT), PCB design and assembly are treated as a unified engineering discipline. Layout decisions made during schematic capture directly affect thermal performance, signal integrity, and assembly yield on the manufacturing floor.',
      'Whether you are starting from a functional block diagram requiring complete schematic and layout engineering, or supplying production-ready Gerber and centroid files for contract PCBA, our team validates every design for manufacturability before assembly begins.',
    ],
    keyCapabilities: [
      {
        index: '01',
        title: 'Schematic Capture & Multi-Layer Layout',
        description:
          'Complete circuit design, component footprint verification, impedance-conscious routing, power plane partitioning, and thermal relief design for industrial and commercial electronics.',
      },
      {
        index: '02',
        title: 'Design for Manufacturability (DFM) Review',
        description:
          'Pre-build verification of pad geometries, solder mask clearances, fiducial placement, panelization, and BOM component availability to prevent assembly bottlenecks.',
      },
      {
        index: '03',
        title: 'Prototype PCB Assembly',
        description:
          'Fast-turn engineering prototype builds enabling hardware engineers to validate board bring-up, power rails, and firmware interfaces before committing to volume tooling.',
      },
      {
        index: '04',
        title: 'Production PCB Assembly',
        description:
          'Consistent, process-controlled batch PCB assembly combining automated surface-mount placement, through-hole soldering, and multi-stage inspection.',
      },
    ],
    technicalScope: [
      { parameter: 'Service Coverage', specification: 'Schematic Design, PCB Layout, Prototype PCBA, Production PCBA' },
      { parameter: 'Assembly Technologies', specification: 'Surface Mount (SMT), Through-Hole (THT), Mixed-Technology Boards' },
      { parameter: 'Design File Inputs', specification: 'Gerber RS-274X / X2, ODB++, IPC-2581, Pick & Place Centroid, BOM (CSV/XLSX)' },
      { parameter: 'Pre-Production Checks', specification: 'DFM / DFA Layout Audit, BOM Scrubbing & Alternate Component Consultation' },
      { parameter: 'Verification & Testing', specification: 'Visual & Optical Inspection, Continuity Checks, Functional Power-On Validation' },
      { parameter: 'Post-Build Support', specification: 'Board Bring-Up Assistance, Rework, Repair & Design Revision Management' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Gerber, BOM & Schematic Intake',
        detail: 'We review your design package or functional requirements to verify component footprints, package availability, and assembly constraints.',
      },
      {
        step: '02',
        title: 'Stencil Preparation & Line Setup',
        detail: 'Laser-cut stainless steel stencils and feeder configurations are prepared according to the board centroid data and thermal profile requirements.',
      },
      {
        step: '03',
        title: 'Board Population & Soldering',
        detail: 'Automated SMT placement and controlled reflow are executed, followed by secondary THT wave/selective soldering and mechanical hardware attachment.',
      },
      {
        step: '04',
        title: 'Inspection, Bring-Up & Delivery',
        detail: 'Every populated assembly undergoes visual/optical solder joint inspection and agreed functional testing prior to ESD-safe packaging.',
      },
    ],
    relatedServices: ['/services/smt-tht-ems', '/services/embedded-firmware', '/quality-capabilities'],
  },
  '/services/smt-tht-ems': {
    route: '/services/smt-tht-ems',
    kicker: 'Electronic Manufacturing Services (EMS)',
    title: 'SMT / THT Assembly & Turnkey EMS Solutions',
    subtitle:
      'High-precision Surface Mount Technology, robust Through-Hole assembly, and comprehensive Electronic Manufacturing Services tailored to your build schedule.',
    heroImage: IMAGES.smtPickAndPlace,
    heroImageAlt: 'SMT pick-and-place machine nozzle placing fine-pitch surface mount components',
    overviewTitle: 'Scalable Electronic Manufacturing from Pilot Runs to Series Production',
    overviewParagraphs: [
      'Modern industrial and IoT electronics frequently combine dense surface-mount microcontrollers and communication modules with heavy-duty through-hole power terminals, relays, and transformers. RION TECHNOLOGIES delivers both SMT and THT assembly under one coordinated Electronic Manufacturing Services (EMS) workflow.',
      'Our EMS approach is built to support hardware innovators and industrial OEMs with flexible batch sizes, clear engineering communication, and thorough quality verification at every stage of board and sub-system assembly.',
    ],
    keyCapabilities: [
      {
        index: '01',
        title: 'Surface Mount Technology (SMT) Assembly',
        description:
          'Precision solder paste printing, automated pick-and-place component mounting for passive and active SMD packages, and controlled convection reflow soldering.',
      },
      {
        index: '02',
        title: 'Through-Hole Technology (THT) Assembly',
        description:
          'Reliable leaded component insertion, dip/selective soldering, and hand-soldered high-mass connectors, inductors, and industrial terminal blocks.',
      },
      {
        index: '03',
        title: 'Turnkey & Consigned EMS Models',
        description:
          'Flexible engagement supporting full turnkey material coordination, kitted/consigned component builds, or hybrid sourcing arrangements.',
      },
      {
        index: '04',
        title: 'Electro-Mechanical Box Build & Testing',
        description:
          'Firmware flashing, wire harness integration, enclosure assembly, conformal coating coordination, and system-level functional validation.',
      },
    ],
    technicalScope: [
      { parameter: 'Primary Processes', specification: 'Automated SMT Line, THT Insertion & Soldering, Mixed-Tech PCBA' },
      { parameter: 'Engagement Models', specification: 'Turnkey EMS, Consigned / Kitted Assembly, Hybrid Material Sourcing' },
      { parameter: 'Volume Flexibility', specification: 'NPI / Engineering Prototypes, Pilot Batches, Scheduled Production Runs' },
      { parameter: 'Process Controls', specification: 'Solder Paste Inspection, Thermal Profile Verification, ESD-Safe Handling' },
      { parameter: 'System Integration', specification: 'MCU Firmware Programming, Cable Harnessing, Enclosure Sub-Assembly' },
      { parameter: 'Lifecycle Services', specification: 'After-Sales Field Repair, Diagnostic Troubleshooting & Engineering Updates' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Material & Kit Verification',
        detail: 'Incoming bare PCBs and electronic components are verified against the approved BOM, package dimensions, and moisture sensitivity handling requirements.',
      },
      {
        step: '02',
        title: 'SMT Paste Print, Placement & Reflow',
        detail: 'Precision stencil printing and automated pick-and-place machines populate surface-mount devices prior to thermal reflow soldering.',
      },
      {
        step: '03',
        title: 'THT Assembly & Secondary Operations',
        detail: 'Through-hole components, headers, and power stages are assembled and inspected for proper solder fillet wetting and mechanical rigidity.',
      },
      {
        step: '04',
        title: 'Firmware Flashing & Functional Validation',
        detail: 'Production firmware is flashed, test vectors are executed, and completed units are prepared for dispatch with build documentation.',
      },
    ],
    relatedServices: ['/services/pcb-assembly', '/services/embedded-firmware', '/quality-capabilities'],
  },
  '/services/embedded-firmware': {
    route: '/services/embedded-firmware',
    kicker: 'Hardware & Software Co-Design',
    title: 'Embedded Systems Engineering & Firmware Development',
    subtitle:
      'Custom microcontroller hardware, real-time embedded firmware, peripheral integration, and board-level diagnostic and repair services.',
    heroImage: IMAGES.engineeringLab,
    heroImageAlt: 'Embedded systems engineer debugging microcontroller board with oscilloscope',
    overviewTitle: 'Deterministic Hardware and Firmware Engineered Together',
    overviewParagraphs: [
      'Reliable electronic products depend on tight integration between hardware circuitry and embedded firmware. RION TECHNOLOGIES provides end-to-end embedded systems engineering—from selecting the right microcontroller or processor architecture to writing deterministic firmware and validating hardware on the lab bench.',
      'In addition to new product development, our team provides specialized technical support, remote and on-site troubleshooting, and electronics repair services to keep existing embedded equipment running reliably in the field.',
    ],
    keyCapabilities: [
      {
        index: '01',
        title: 'Embedded Hardware Architecture',
        description:
          'Custom 8-bit, 16-bit, and 32-bit microcontroller and microprocessor board design with analog front-ends, power management, and industrial I/O isolation.',
      },
      {
        index: '02',
        title: 'Bare-Metal & RTOS Firmware Development',
        description:
          'Clean, maintainable C/C++ firmware architectures, bootloader design, real-time task scheduling, interrupt handling, and watchdog reliability mechanisms.',
      },
      {
        index: '03',
        title: 'Industrial Interfaces & Sensor Integration',
        description:
          'Driver development and protocol implementation across UART, SPI, I2C, CAN, RS-232, RS-485, Modbus RTU/TCP, Ethernet, Wi-Fi, BLE, and cellular modules.',
      },
      {
        index: '04',
        title: 'Board Bring-Up, Diagnostics & Electronics Repair',
        description:
          'Oscilloscope and logic analyzer validation for new prototypes, alongside component-level fault diagnosis and repair for industrial electronic assemblies.',
      },
    ],
    technicalScope: [
      { parameter: 'Hardware Platforms', specification: 'ARM Cortex-M, ESP32, PIC, AVR, STM32, Custom Industrial Control Boards' },
      { parameter: 'Firmware Environments', specification: 'Bare-Metal C/C++, FreeRTOS, Embedded Linux Gateways' },
      { parameter: 'Communication Protocols', specification: 'RS-485, Modbus, CAN Bus, SPI, I2C, UART, MQTT, HTTP/REST, BLE, Wi-Fi' },
      { parameter: 'Lab Instrumentation', specification: 'Digital Storage Oscilloscopes, Logic Analyzers, SMD Rework & Microscope Stations' },
      { parameter: 'Support & Maintenance', specification: 'Remote Firmware Updates, On-Site Troubleshooting & Component-Level Repair' },
      { parameter: 'Deliverables', specification: 'Commented Source Code, Production Hex/Binaries, Schematics & Test Procedures' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'System Architecture & MCU Selection',
        detail: 'We map I/O counts, compute budgets, power envelopes, and environmental constraints to select long-lifecycle silicon and peripherals.',
      },
      {
        step: '02',
        title: 'Hardware Schematic & Driver Co-Design',
        detail: 'Pin multiplexing, hardware timers, and communication buses are allocated concurrently with schematic capture to avoid hardware-software conflicts.',
      },
      {
        step: '03',
        title: 'Bench Bring-Up & Signal Integrity Testing',
        detail: 'First-article boards are powered up in our lab, verifying voltage rails, clock stability, peripheral communication, and thermal behavior.',
      },
      {
        step: '04',
        title: 'Field Deployment & Ongoing Maintenance',
        detail: 'We support production programming, field commissioning, firmware revisions, and long-term maintenance schedules.',
      },
    ],
    relatedServices: ['/services/iot-iiot', '/services/pcb-assembly', '/services/industrial-automation'],
  },
  '/services/iot-iiot': {
    route: '/services/iot-iiot',
    kicker: 'Connected Industrial Intelligence',
    title: 'IoT, Industrial IoT (IIoT) & Smart OEE Solutions',
    subtitle:
      'Turn shop-floor machines and distributed equipment into connected, measurable assets—anchored by the RIONXT Smart OEE Product Solution.',
    heroImage: IMAGES.embeddedIiot,
    heroImageAlt: 'Industrial IoT gateway node and telemetry sensors on RION TECHNOLOGIES workbench',
    overviewTitle: 'Bridging Physical Machinery and Real-Time Operational Visibility',
    overviewParagraphs: [
      'RION TECHNOLOGIES develops practical IoT and Industrial IoT (IIoT) systems engineered for factory floors, utilities, and commercial equipment. Rather than deploying fragile consumer-grade kits, we design industrial sensor interfaces, edge gateways, and telemetry workflows that withstand electrical noise and continuous operation.',
      'Our flagship offering in this domain is the RIONXT Smart OEE Product Solution—purpose-built to help manufacturers measure and improve Overall Equipment Effectiveness (Availability, Performance, and Quality) with real-time shop-floor data.',
    ],
    keyCapabilities: [
      {
        index: '01',
        title: 'RIONXT Smart OEE Product Solution',
        description:
          'Dedicated hardware and software platform capturing machine run/stop states, cycle counts, reject reasons, and shift OEE analytics in real time.',
      },
      {
        index: '02',
        title: 'Industrial Edge Gateways & Data Loggers',
        description:
          'Custom edge hardware with isolated digital/analog inputs, RS-485/Modbus polling, local buffer storage for network dropouts, and secure cloud synchronization.',
      },
      {
        index: '03',
        title: 'Retrofitting Legacy Factory Equipment',
        description:
          'Non-intrusive sensor and PLC tap integration that brings older manual or relay-controlled machines online without voiding OEM controllers.',
      },
      {
        index: '04',
        title: 'Continuous Monitoring & After-Sales Support',
        description:
          'Scheduled system health checks, remote troubleshooting, firmware updates, and on-site calibration support to keep telemetry accurate.',
      },
    ],
    technicalScope: [
      { parameter: 'Featured Product', specification: 'RIONXT Smart OEE Product Solution (Availability × Performance × Quality)' },
      { parameter: 'Field Inputs', specification: '24V Industrial Digital I/O, 4–20mA / 0–10V Analog, Pulse Counters, Relay Dry Contacts' },
      { parameter: 'Industrial Fieldbuses', specification: 'Modbus RTU (RS-485), Modbus TCP, CAN Bus, Custom Serial Protocols' },
      { parameter: 'Uplink Connectivity', specification: 'Industrial Ethernet, Wi-Fi, 4G/LTE Cellular Telemetry, MQTT / HTTPS' },
      { parameter: 'Resilience Features', specification: 'Opto-Isolated Inputs, Local Flash Buffering, Watchdog Auto-Recovery' },
      { parameter: 'Lifecycle Support', specification: 'On-Site Installation, Operator Training, Continuous Monitoring & Updates' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Machine & Sensor Audit',
        detail: 'We inspect your production machines, existing PLCs, or target assets to identify reliable signal pickup points for cycle, fault, and status data.',
      },
      {
        step: '02',
        title: 'Gateway & Sensor Integration',
        detail: 'RIONXT IIoT nodes or custom edge hardware are installed with industrial terminal wiring, isolation protection, and verified communication links.',
      },
      {
        step: '03',
        title: 'Telemetry & Smart OEE Configuration',
        detail: 'Shift schedules, ideal cycle times, downtime codes, and alert thresholds are configured to match your actual manufacturing operations.',
      },
      {
        step: '04',
        title: 'Commissioning & Ongoing Maintenance',
        detail: 'Our team validates data accuracy against physical shop-floor counts and provides continuous after-sales monitoring and support.',
      },
    ],
    relatedServices: ['/services/industrial-automation', '/services/embedded-firmware', '/services/pcb-assembly'],
  },
  '/services/industrial-automation': {
    route: '/services/industrial-automation',
    kicker: 'Machine Modernization & Product Engineering',
    title: 'Industrial Automation & Product Development',
    subtitle:
      'Practical engineering support to transition from manual to automated machine operations, hybrid control systems, and custom electronic product R&D.',
    heroImage: IMAGES.heroPcb,
    heroImageAlt: 'Automated industrial manufacturing and electronic control system',
    overviewTitle: 'Practical Automation Transitions Without Unnecessary Complexity',
    overviewParagraphs: [
      'Transitioning from manual machine operations to automated workflows does not always require replacing entire production lines. RION TECHNOLOGIES specializes in helping industrial businesses migrate from manual to automated or hybrid machine operations by combining embedded systems, firmware, sensors, and custom control electronics.',
      'Alongside machine modernization, we provide end-to-end electronic product design and R&D—taking custom industrial equipment concepts from initial consultation and prototyping through deployment and scheduled maintenance.',
    ],
    keyCapabilities: [
      {
        index: '01',
        title: 'Manual-to-Automated Machine Transition',
        description:
          'Step-by-step engineering assessment and control retrofitting to automate repetitive manual machine sequences, improving consistency and operator safety.',
      },
      {
        index: '02',
        title: 'Hybrid Automation Solutions',
        description:
          'Balanced electro-mechanical control systems that combine automated sensing, timing, and actuation with intuitive manual operator supervision where needed.',
      },
      {
        index: '03',
        title: 'Custom Electronic Product Design & R&D',
        description:
          'Bespoke electronic controller boards, human-machine interfaces (HMI), power driver cards, and ruggedized enclosures engineered for industrial duty.',
      },
      {
        index: '04',
        title: 'Deployment Guidance & Scheduled Maintenance',
        description:
          'Hands-on installation support, operator walkthroughs, preventive maintenance schedules, and responsive on-site or remote technical assistance.',
      },
    ],
    technicalScope: [
      { parameter: 'Core Focus', specification: 'Manual-to-Automated Machine Migration, Hybrid Control Systems, Electronic Product R&D' },
      { parameter: 'Control Technologies', specification: 'Custom Embedded Controllers, PLC Interface Cards, Relay & Solid-State Drivers' },
      { parameter: 'Sensing & Actuation', specification: 'Proximity, Optical, Pressure & Temperature Sensors; Solenoid, Stepper & Motor Control' },
      { parameter: 'IIoT Readiness', specification: 'Native compatibility with RIONXT Smart OEE and remote telemetry modules' },
      { parameter: 'Consultation Scope', specification: 'Feasibility Study, Prototyping, Pilot Trial, Full Machine Deployment' },
      { parameter: 'After-Sales Support', specification: 'Preventive Maintenance Schedules, Remote Troubleshooting, On-Site Service' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'On-Site Machine & Process Assessment',
        detail: 'Our engineers study your current manual machine operation, cycle bottlenecks, safety interlocks, and target automation outcomes.',
      },
      {
        step: '02',
        title: 'Control Architecture & Prototype Build',
        detail: 'We design the custom embedded controller or hybrid automation interface, integrating sensors, actuators, and firmware logic.',
      },
      {
        step: '03',
        title: 'Machine Integration & Trial Validation',
        detail: 'The automation system is installed and tested under real production loads to verify repeatability, fault handling, and operator ergonomics.',
      },
      {
        step: '04',
        title: 'Handover, Monitoring & Maintenance',
        detail: 'Complete technical documentation, operator guidance, and regular maintenance schedules ensure dependable long-term operation.',
      },
    ],
    relatedServices: ['/services/iot-iiot', '/services/embedded-firmware', '/services/smt-tht-ems'],
  },
};
