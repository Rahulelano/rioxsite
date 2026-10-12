import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import {
  CAPABILITY_SHOWCASES,
  COMPANY_INFO,
  CORE_CAPABILITIES,
  IMAGES,
  PROCESS_TIMELINE,
  RoutePath,
  TARGET_INDUSTRIES,
  VERIFIED_STRENGTHS,
} from '../data/rionxtData';
import { SmartImage } from '../components/SmartImage';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

interface HomePageProps {
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

const MANUFACTURING_STAGES = [
  {
    id: 'smt-placement',
    index: '01',
    title: 'SMT Pick-and-Place & Reflow',
    meta: 'Surface Mount Assembly · Fine-Pitch Placement',
    description:
      'Automated pick-and-place equipment mounts surface-mount integrated circuits, microcontrollers, and passive networks onto stencil-printed solder paste pads before multi-zone thermal reflow.',
    image: IMAGES.smtPickAndPlace,
    imageAlt: 'High-speed SMT pick-and-place head placing microchips onto PCB',
    highlights: [
      'Precision stencil alignment and solder paste deposition',
      'Automated feeder setup for SMD reels and trays',
      'Controlled convection reflow soldering thermal profiles',
    ],
  },
  {
    id: 'tht-mixed',
    index: '02',
    title: 'THT & Mixed-Technology Assembly',
    meta: 'Through-Hole Soldering · Power & Connector Stages',
    description:
      'Industrial control and power electronics frequently require mechanical rigidity. We combine high-density SMT population with Through-Hole Technology (THT) assembly for transformers, relays, and terminal blocks.',
    image: IMAGES.heroPcb,
    imageAlt: 'Mixed-technology PCB assembly line at RION TECHNOLOGIES',
    highlights: [
      'Through-hole component forming, insertion, and soldering',
      'Mixed-technology double-sided and multi-layer board handling',
      'Wire harness, heatsink, and mechanical enclosure integration',
    ],
  },
  {
    id: 'inspection-validation',
    index: '03',
    title: 'Inspection, Testing & Prototype-to-Production',
    meta: 'Optical Verification · Board Bring-Up · Production Scaling',
    description:
      'Every board transitions through visual and optical solder joint inspection, electrical continuity checks, and functional firmware validation—supporting both initial prototypes and repeatable production batches.',
    image: IMAGES.qualityAoi,
    imageAlt: 'Automated optical inspection system verifying populated PCB assembly',
    highlights: [
      'Solder joint, polarity, and placement accuracy verification',
      'Benchtop power-rail and oscilloscope signal checks',
      'Smooth transition from engineering prototypes to series EMS',
    ],
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [activeMfgStage, setActiveMfgStage] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const toggleVideoPlay = () => {
    if (videoPlayerRef.current) {
      if (videoPlayerRef.current.paused) {
        videoPlayerRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoPlayerRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.muted = !videoPlayerRef.current.muted;
      setIsVideoMuted(videoPlayerRef.current.muted);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-hero-reveal',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    const handleScroll = () => {
      if (!heroBgRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY < 900) {
        heroBgRef.current.style.transform = `translate3d(0, ${scrollY * 0.14}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentMfg = MANUFACTURING_STAGES[activeMfgStage];

  return (
    <div>
      {/* =====================================================================
          SECTION 1 — CINEMATIC HERO
      ===================================================================== */}
      <section
        ref={heroRef}
        className="relative min-h-[86vh] flex items-center bg-[#071426] text-white overflow-hidden border-b border-white/10"
      >
        {/* Parallax Background Video + Measured Scrim */}
        <div ref={heroBgRef} className="absolute inset-0 z-0 will-change-transform">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.heroPcb}
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          >
            <source src="/resgatandoorock_pindown.io_1791732415.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-[#071426]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/60" />
        </div>

        {/* Subtle Circuit-Inspired SVG Pattern Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-circuit" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M 0 60 H 40 L 55 45 H 95 M 60 0 V 35 L 75 50 V 120"
                fill="none"
                stroke="#1677FF"
                strokeWidth="1"
              />
              <circle cx="95" cy="45" r="2.5" fill="#1677FF" />
              <circle cx="40" cy="60" r="2" fill="#A8B3C2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-circuit)" />
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="gsap-hero-reveal text-xs sm:text-sm font-mono-tech text-[#A8B3C2] tracking-wide">
                RION TECHNOLOGIES <span className="text-[#1677FF] mx-1.5">·</span> RIONXT{' '}
                <span className="text-[#1677FF] mx-1.5">·</span> Electronics Engineering &amp; EMS
              </div>

              <h1
                className="gsap-hero-reveal font-display font-bold tracking-tight text-white leading-[1.12]"
                style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)' }}
              >
                Engineering Intelligence. Manufacturing Possibilities.
              </h1>

              <p className="gsap-hero-reveal text-base sm:text-lg text-[#A8B3C2] leading-relaxed max-w-2xl">
                From electronics design and embedded engineering to precision PCB assembly and
                scalable manufacturing, RION TECHNOLOGIES helps turn technical ideas into reliable,
                production-ready solutions.
              </p>

              <div className="gsap-hero-reveal pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'project-enquiry-form')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-[#1677FF]/25"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('core-capabilities-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('/services');
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Explore Our Capabilities
                </button>
              </div>

              <div className="gsap-hero-reveal pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tech text-[#A8B3C2]">
                <span>“{COMPANY_INFO.tagline}”</span>
                <span aria-hidden="true">·</span>
                <span>Sriperumbudur Taluk, Kanchipuram - 602105</span>
              </div>
            </div>

            {/* Right Column: Engineering Video Showcase & Capability Snapshot */}
            <div className="lg:col-span-5 gsap-hero-reveal">
              <div className="bg-[#101820]/95 border border-cyan-500/25 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(22,119,255,0.22)] ring-1 ring-white/10 backdrop-blur-md">
                {/* Featured PCB & Silicon Dynamics Video Player */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden group">
                  <video
                    ref={videoPlayerRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src="/resgatandoorock_pindown.io_1791732415.mp4" type="video/mp4" />
                  </video>

                  {/* Video Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-black/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono-tech text-cyan-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>LIVE SILICON R&amp;D</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-black/55 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#A8B3C2]">
                      CIRCUIT DYNAMICS
                    </div>
                  </div>

                  {/* Bottom Video Controls & Caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="text-xs font-mono-tech text-white drop-shadow-md">
                      Electronics R&amp;D &amp; PCBA
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleVideoPlay}
                        aria-label={isVideoPlaying ? 'Pause Video' : 'Play Video'}
                        className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#1677FF] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                      >
                        {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={toggleVideoMute}
                        aria-label={isVideoMuted ? 'Unmute Audio' : 'Mute Audio'}
                        className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#1677FF] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                      >
                        {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Capability Scope Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="text-xs font-mono-tech text-[#1677FF]">
                      Integrated Engineering &amp; EMS Scope
                    </div>
                    <span className="text-[11px] font-mono-tech text-[#A8B3C2]">Lifecycle</span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-start justify-between gap-4 pb-2 border-b border-white/5">
                      <span className="text-white font-medium">PCB Design &amp; Assembly</span>
                      <span className="font-mono-tech text-xs text-[#A8B3C2] shrink-0">
                        SMT · THT · Mixed
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 pb-2 border-b border-white/5">
                      <span className="text-white font-medium">Embedded &amp; Firmware</span>
                      <span className="font-mono-tech text-xs text-[#A8B3C2] shrink-0">
                        MCU · RTOS · Bring-Up
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 pb-2 border-b border-white/5">
                      <span className="text-white font-medium">Industrial IoT (IIoT)</span>
                      <span className="font-mono-tech text-xs text-cyan-400 shrink-0">
                        RIONXT Smart OEE
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-white font-medium">Industrial Automation</span>
                      <span className="font-mono-tech text-xs text-[#A8B3C2] shrink-0">
                        Manual-to-Auto
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/services');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677FF] hover:text-cyan-400 transition-colors"
                    >
                      <span>View Complete Service Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2 — COMPANY INTRODUCTION
      ===================================================================== */}
      <section className="py-20 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  01 · Corporate Profile · RION TECHNOLOGIES (RIONXT)
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071426]">
                  Technology Built Around Real-World Engineering.
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  RION TECHNOLOGIES (operating under the brand identity{' '}
                  <strong className="font-semibold text-[#071426]">RIONXT</strong>) is an
                  electronics engineering, product development, and manufacturing solutions company
                  located in the industrial corridor of Irungattukottai, Sriperumbudur Taluk,
                  Kanchipuram.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  We bridge the gap between initial hardware concepts and dependable shop-floor
                  deployment. Our engineering teams work across the complete electronic product
                  lifecycle—combining circuit research and development, multi-layer PCB assembly,
                  embedded firmware architecture, Industrial IoT telemetry, and machine automation
                  transition support.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-xs font-mono-tech text-slate-500">
                    Lifecycle Responsibility
                  </div>
                  <div className="text-sm font-semibold text-[#071426] mt-1">
                    Concept &amp; R&amp;D → PCBA → Deployment &amp; Maintenance
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-500">
                    Field &amp; Shop-Floor Support
                  </div>
                  <div className="text-sm font-semibold text-[#071426] mt-1">
                    Remote Diagnostics, On-Site Service &amp; Board Repair
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#071426] hover:bg-[#101820] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Discover RIONXT</span>
                  <ArrowRight className="w-4 h-4 text-[#1677FF]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col">
                <div className="relative flex-1 min-h-[320px]">
                  <SmartImage
                    src={IMAGES.engineeringLab}
                    alt="Electronics engineer inspecting multi-layer PCB with oscilloscope and digital microscope at RION TECHNOLOGIES"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-5 py-3.5 bg-[#071426] text-xs font-mono-tech text-[#A8B3C2] flex flex-wrap items-center justify-between gap-2">
                  <span>Hardware Bring-Up, Embedded R&amp;D &amp; Diagnostic Laboratory</span>
                  <span className="text-white">RIONXT Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3 — CORE CAPABILITIES (6 INTERACTIVE CATEGORIES)
      ===================================================================== */}
      <section
        id="core-capabilities-section"
        className="py-20 lg:py-24 bg-[#F8FAFC] bg-light-tech-grid text-[#101820] border-b border-slate-200"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                02 · Core Business Areas &amp; Engineering Services
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071426]">
                Integrated Electronics Engineering &amp; Manufacturing Capabilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md">
              Six specialized disciplines operating under one technical roof to take electronic
              products from schematic design to industrial operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((service) => (
              <motion.article
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
                className="group bg-white border border-slate-200 hover:border-[#1677FF]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#071426]">
                    <SmartImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono-tech text-white">
                      <span>{service.index}. Capability</span>
                      <span className="text-[#A8B3C2]">{service.shortTitle}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-mono-tech text-slate-500 mb-2">
                      {service.categoryMeta}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#071426] group-hover:text-[#1677FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="font-mono-tech text-[#1677FF] font-bold">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100">
                  <a
                    href={service.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(service.route);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071426] group-hover:text-[#1677FF] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4 — ELECTRONICS MANUFACTURING
      ===================================================================== */}
      <section
        id="manufacturing-section"
        className="py-20 lg:py-24 bg-[#071426] bg-circuit-grid text-white border-b border-white/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                03 · Electronics Manufacturing &amp; Assembly Line
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Precision at Every Stage. Reliability in Every Connection.
              </h2>
              <p className="mt-3 text-base text-[#A8B3C2] leading-relaxed">
                Explore how RION TECHNOLOGIES executes PCB assembly, surface-mount and through-hole
                component placement, inspection, and prototype-to-production manufacturing workflows.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('/services/smt-tht-ems')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Manufacturing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Stage Selector Tabs */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
            role="tablist"
            aria-label="Manufacturing Process Stages"
          >
            {MANUFACTURING_STAGES.map((stage, idx) => {
              const isSelected = activeMfgStage === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveMfgStage(idx)}
                  className={`text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#101820] border-[#1677FF] text-white'
                      : 'bg-[#101820]/50 border-white/10 text-[#A8B3C2] hover:text-white hover:border-white/25'
                  }`}
                >
                  <div className="text-xs font-mono-tech text-[#1677FF]">
                    Stage {stage.index}
                  </div>
                  <div className="font-display text-base font-semibold mt-1">{stage.title}</div>
                  <div className="text-xs text-[#A8B3C2] mt-1">{stage.meta}</div>
                </button>
              );
            })}
          </div>

          {/* Active Manufacturing Stage Display */}
          <div className="bg-[#101820] border border-white/15 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px]">
                <SmartImage
                  src={currentMfg.image}
                  alt={currentMfg.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono-tech text-[#1677FF]">
                    {currentMfg.index} · {currentMfg.meta}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {currentMfg.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8B3C2] leading-relaxed">
                    {currentMfg.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <div className="text-xs font-mono-tech text-white">
                      Verified Production Workflow Controls:
                    </div>
                    {currentMfg.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                        <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('/services/pcb-assembly')}
                    className="text-xs font-semibold text-[#1677FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>PCB Assembly Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/quality-capabilities')}
                    className="text-xs font-semibold text-white/80 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Quality Inspection Workflow →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5 — FROM CONCEPT TO PRODUCTION (HORIZONTAL TIMELINE)
      ===================================================================== */}
      <section className="py-20 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
              04 · Illustrative Delivery Workflow · End-to-End Execution
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071426]">
              From Concept to Production
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              An illustrative five-stage engineering and manufacturing workflow demonstrating how
              RION TECHNOLOGIES guides hardware projects from initial requirement analysis to
              ongoing post-deployment technical support.
            </p>
          </div>

          {/* Horizontal Process Timeline with Connecting Line */}
          <div className="relative">
            <div
              className="hidden lg:block absolute top-7 left-10 right-10 h-[2px] bg-slate-200 z-0"
              aria-hidden="true"
            >
              <div
                className="h-full bg-[#1677FF] transition-transform duration-300 origin-left"
                style={{
                  transform: `scaleX(${(activeProcessStep + 1) / PROCESS_TIMELINE.length})`,
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {PROCESS_TIMELINE.map((stage, idx) => {
                const isActive = idx === activeProcessStep;
                const isCompleted = idx <= activeProcessStep;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveProcessStep(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveProcessStep(idx);
                      }
                    }}
                    className={`p-5 rounded-xl border transition-colors cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#071426] text-white border-[#071426]'
                        : 'bg-slate-50/70 text-[#101820] border-slate-200 hover:border-[#1677FF]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`w-9 h-9 rounded-lg font-mono-tech text-xs font-bold flex items-center justify-center border ${
                            isActive
                              ? 'bg-[#1677FF] text-white border-[#1677FF]'
                              : isCompleted
                              ? 'bg-white text-[#1677FF] border-[#1677FF]'
                              : 'bg-white text-slate-600 border-slate-300'
                          }`}
                        >
                          {stage.step}
                        </span>
                        <span
                          className={`text-xs font-mono-tech ${
                            isActive ? 'text-[#A8B3C2]' : 'text-slate-400'
                          }`}
                        >
                          Stage {stage.step}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-base font-bold ${
                          isActive ? 'text-white' : 'text-[#071426]'
                        }`}
                      >
                        {stage.step}. {stage.title}
                      </h3>

                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isActive ? 'text-[#A8B3C2]' : 'text-slate-600'
                        }`}
                      >
                        {stage.summary}
                      </p>
                    </div>

                    <div
                      className={`mt-4 pt-3 border-t text-[11px] font-mono-tech ${
                        isActive
                          ? 'border-white/10 text-[#1677FF]'
                          : 'border-slate-200 text-slate-500'
                      }`}
                    >
                      {stage.phaseMeta}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded Detail Strip for Selected Stage */}
            <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  Stage {PROCESS_TIMELINE[activeProcessStep].step} Deliverables ·{' '}
                  {PROCESS_TIMELINE[activeProcessStep].title}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                  {PROCESS_TIMELINE[activeProcessStep].keyActivities.map((act) => (
                    <span key={act} className="inline-flex items-center gap-2">
                      <span className="text-[#1677FF] font-bold">·</span>
                      <span>{act}</span>
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'project-enquiry-form')}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#071426] hover:bg-[#1677FF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Start at Stage {PROCESS_TIMELINE[activeProcessStep].step}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6 — WHY CHOOSE RIONXT? (SPLIT-LAYOUT DESIGN)
      ===================================================================== */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Technical Photography & Sticky Summary (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#071426] text-white rounded-xl overflow-hidden border border-slate-200">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  05 · Verified Engineering Strengths
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Why Choose RIONXT?
                </h2>
                <p className="text-sm text-[#A8B3C2] leading-relaxed">
                  We focus on verifiable engineering discipline, direct technical communication, and
                  long-term support across the life of your electronic product or automated machine.
                </p>
              </div>

              <div className="relative h-64 sm:h-72">
                <SmartImage
                  src={IMAGES.embeddedIiot}
                  alt="Industrial IoT gateway hardware and oscilloscope test bench at RION TECHNOLOGIES"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-xs font-mono-tech text-white/90">
                  Integrated Hardware · Firmware · Manufacturing · Field Support
                </div>
              </div>
            </div>

            {/* Right Column: 6 Concise Verified Strengths Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VERIFIED_STRENGTHS.map((item) => (
                <div
                  key={item.index}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 mb-3">
                      <span className="text-[#1677FF] font-semibold">{item.index}.</span>
                      <span>{item.meta}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#071426]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7 — INDUSTRIES WE SERVE (TARGET APPLICATIONS & SOLUTION AREAS)
      ===================================================================== */}
      <section
        id="industries-section"
        className="py-20 lg:py-24 bg-white text-[#101820] border-b border-slate-200"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                06 · Target Applications &amp; Solution Areas
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071426]">
                Industries &amp; Application Sectors
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Core industrial sectors and target application domains supported by RION TECHNOLOGIES’
              PCB assembly, embedded engineering, IIoT, and machine automation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_INDUSTRIES.map((sector) => (
              <div
                key={sector.index}
                className="bg-[#F8FAFC] border border-slate-200 hover:border-[#1677FF]/60 rounded-xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="text-xs font-mono-tech text-slate-500 mb-2">
                    {sector.index} · {sector.classification}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#071426]">
                    {sector.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-mono-tech text-slate-500 mb-2">
                    Representative Engineering Applications:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {sector.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2">
                        <span className="text-[#1677FF] font-bold">·</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8 — FEATURED CAPABILITIES / PROJECTS (EDITORIAL SHOWCASES)
      ===================================================================== */}
      <section className="py-20 lg:py-24 bg-[#101820] text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                07 · Featured Solutions &amp; Capability Showcases
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engineered Systems &amp; Manufacturing Showcases
              </h2>
            </div>
            <p className="text-sm text-[#A8B3C2] max-w-md">
              Highlighting the verified RIONXT Smart OEE Product Solution alongside core capability
              showcases across PCB assembly, embedded systems, and industrial automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CAPABILITY_SHOWCASES.map((item) => (
              <article
                key={item.id}
                className="bg-[#071426] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-[#050E1C] overflow-hidden">
                    <SmartImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs font-mono-tech text-white">
                      <span>
                        {item.index} · {item.label}
                      </span>
                      <span className="text-[#1677FF]">{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-[#A8B3C2] leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                      <div className="text-xs font-mono-tech text-white/80">
                        Technical Architecture &amp; Scope:
                      </div>
                      {item.technicalHighlights.map((hl) => (
                        <div key={hl} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8B3C2]">
                          <span className="text-[#1677FF] font-bold">·</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 p-4 rounded-lg bg-[#101820] border border-white/5 text-xs text-white/90 leading-relaxed">
                      <strong className="font-semibold text-[#1677FF]">Operational Value: </strong>
                      {item.outcomeStatement}
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.route);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677FF] hover:underline"
                  >
                    <span>Explore Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact', 'project-enquiry-form')}
                    className="text-xs font-medium text-[#A8B3C2] hover:text-white cursor-pointer"
                  >
                    Enquire About This Capability →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9 — QUALITY AND RELIABILITY
      ===================================================================== */}
      <section className="py-20 lg:py-24 bg-white text-[#101820]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono-tech text-[#1677FF]">
                08 · Quality Assurance, Inspection &amp; Lifecycle Support
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071426]">
                Built with Precision. Focused on Reliability.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Electronic assemblies deployed in industrial environments cannot afford intermittent
                solder joints or unverified firmware states. At RION TECHNOLOGIES, quality is built
                into the engineering and assembly workflow through methodical inspection, benchtop
                validation, and structured documentation.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-display text-sm font-bold text-[#071426]">
                    01. Pre-Assembly DFM &amp; Component Verification
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Verification of Gerber layers, pad-to-stencil alignment, component footprints,
                    and BOM part numbers before manufacturing begins.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-display text-sm font-bold text-[#071426]">
                    02. Visual, Optical &amp; Electrical Inspection
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Inspection of SMT solder paste deposition, reflow wetting, component polarity,
                    through-hole solder fillets, and power-rail short/continuity checks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-display text-sm font-bold text-[#071426]">
                    03. Functional Testing &amp; Continuous After-Sales Support
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Firmware flashing, I/O signal verification, and post-deployment maintenance
                    schedules with remote troubleshooting and on-site engineering assistance.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/quality-capabilities')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#071426] hover:bg-[#1677FF] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>View Quality &amp; Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-[#071426]">
                <SmartImage
                  src={IMAGES.qualityAoi}
                  alt="Automated Optical Inspection and PCB verification station at RION TECHNOLOGIES"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-5 bg-[#071426] text-white border-t border-white/10">
                  <div className="text-xs font-mono-tech text-[#1677FF] mb-1">
                    Multi-Stage Quality Gate Architecture
                  </div>
                  <div className="grid grid-cols-4 gap-2 pt-2 text-center font-mono-tech text-[11px]">
                    <div className="p-2 rounded bg-[#101820] border border-white/10">
                      <div className="text-white font-semibold">Gate 01</div>
                      <div className="text-[#A8B3C2] mt-0.5">DFM / BOM</div>
                    </div>
                    <div className="p-2 rounded bg-[#101820] border border-white/10">
                      <div className="text-white font-semibold">Gate 02</div>
                      <div className="text-[#A8B3C2] mt-0.5">Paste / SMT</div>
                    </div>
                    <div className="p-2 rounded bg-[#101820] border border-white/10">
                      <div className="text-white font-semibold">Gate 03</div>
                      <div className="text-[#A8B3C2] mt-0.5">Optical QA</div>
                    </div>
                    <div className="p-2 rounded bg-[#101820] border border-white/10">
                      <div className="text-white font-semibold">Gate 04</div>
                      <div className="text-[#A8B3C2] mt-0.5">Bring-Up</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10 — CONTACT AND PROJECT ENQUIRY
      ===================================================================== */}
      <EnquiryFormSection />
    </div>
  );
};
