import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { IMAGES, RoutePath } from '../data/rionxtData';
import { SmartImage } from '../components/SmartImage';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

interface QualityCapabilitiesPageProps {
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

const QA_GATES = [
  {
    index: '01',
    title: 'Design for Manufacturability (DFM) & BOM Verification',
    stage: 'Pre-Manufacturing Engineering Gate',
    description:
      'Before stencil generation or bare-board fabrication, our engineering team inspects Gerber layers, pad-to-mask clearances, thermal relief design, component footprints, and Bill of Materials (BOM) part numbers to eliminate design-induced assembly defects.',
    checks: [
      'Footprint-to-package geometry verification',
      'Fiducial mark & panelization review for automated SMT',
      'Alternate component screening for long-lead or obsolete parts',
    ],
  },
  {
    index: '02',
    title: 'Incoming Material & Solder Paste Process Control',
    stage: 'Line Setup & Material Intake Gate',
    description:
      'Bare PCBs and electronic components are verified against approved engineering documentation. Stencil alignment, solder paste condition, and pick-and-place feeder programming are validated prior to board population.',
    checks: [
      'BOM part number, value, and package verification',
      'ESD-safe handling and moisture-sensitive device care',
      'Laser stencil alignment and paste deposition check',
    ],
  },
  {
    index: '03',
    title: 'Visual, Optical & Post-Reflow Solder Joint Inspection',
    stage: 'In-Line & Post-Assembly Gate',
    description:
      'Populated SMT and THT assemblies undergo multi-point inspection to detect solder bridging, tombstoning, insufficient fillet wetting, missing components, or polarity reversals.',
    checks: [
      'Fine-pitch IC and SMD solder meniscus inspection',
      'Through-hole lead penetration and fillet verification',
      'Microscope rework and cleaning discipline',
    ],
  },
  {
    index: '04',
    title: 'Electrical Continuity, Board Bring-Up & Functional Testing',
    stage: 'Pre-Dispatch & Lifecycle Gate',
    description:
      'Completed circuit assemblies undergo power-rail impedance checks, regulated voltage verification, microcontroller firmware flashing, and functional I/O validation prior to shipment or field deployment.',
    checks: [
      'Power-rail short-circuit and voltage regulation checks',
      'MCU bootloader & production firmware programming',
      'Functional test fixture and communication bus validation',
    ],
  },
];

export const QualityCapabilitiesPage: React.FC<QualityCapabilitiesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div>
      {/* Dark Hero Header */}
      <section className="py-16 lg:py-24 bg-[#071426] bg-circuit-grid text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono-tech text-[#1677FF]">
                Quality Assurance &amp; Manufacturing Verification · RIONXT
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Built with Precision. Focused on Reliability.
              </h1>
              <p className="text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
                Methodical quality assurance, optical and electrical inspection, functional board
                bring-up, and continuous after-sales technical support across every RION
                TECHNOLOGIES engagement.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-[#101820]">
                <SmartImage
                  src={IMAGES.qualityAoi}
                  alt="Automated Optical Inspection and PCB testing station at RION TECHNOLOGIES"
                  priority={true}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Gate Quality Assurance Architecture */}
      <section className="py-16 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
              01 · Four-Gate Quality Verification Workflow
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071426]">
              Inspection &amp; Validation from Schematic to Dispatch
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Rather than relying on end-of-line checks alone, RION TECHNOLOGIES integrates quality
              gates at each transition point of PCB assembly, embedded firmware programming, and
              system integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {QA_GATES.map((gate) => (
              <div
                key={gate.index}
                className="p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-500 mb-3">
                    <span className="text-[#1677FF] font-bold">Gate {gate.index}</span>
                    <span>{gate.stage}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#071426]">{gate.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{gate.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <div className="text-xs font-mono-tech text-[#071426] font-semibold">
                    Standard Verification Checkpoints:
                  </div>
                  {gate.checks.map((chk) => (
                    <div key={chk} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-Sales Support, Documentation & Verification Transparency */}
      <section className="py-16 lg:py-24 bg-[#101820] text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-mono-tech text-[#1677FF]">
                02 · Post-Deployment Reliability &amp; Lifecycle Care
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Continuous Monitoring, Maintenance &amp; Technical Support
              </h2>
              <p className="text-sm sm:text-base text-[#A8B3C2] leading-relaxed">
                Reliability extends beyond factory shipment. RION TECHNOLOGIES supports deployed
                embedded hardware, IIoT nodes, and automated machine controllers with structured
                after-sales engineering services:
              </p>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1677FF] font-bold">·</span>
                  <span>
                    <strong>Remote Troubleshooting &amp; Firmware Updates:</strong> Diagnostic
                    assistance and firmware patch support for deployed embedded and IIoT units.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1677FF] font-bold">·</span>
                  <span>
                    <strong>On-Site Engineering Support:</strong> Field visits for machine
                    automation transitions, Smart OEE commissioning, and system calibration.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1677FF] font-bold">·</span>
                  <span>
                    <strong>Electronics Repair &amp; Preventive Maintenance:</strong> Component-level
                    board diagnostics, rework, and scheduled maintenance programs.
                  </span>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/pcb-assembly')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Explore PCB Assembly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-xl bg-[#071426] border border-white/10 space-y-4">
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  Technical Documentation &amp; Compliance Note
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Transparent Quality &amp; Verification Policy
                </h3>
                <p className="text-sm text-[#A8B3C2] leading-relaxed">
                  RION TECHNOLOGIES aligns its PCB layout, solder workmanship, and testing practices
                  with industry-standard electronics assembly guidelines. Specific compliance
                  testing, third-party laboratory certifications, or environmental qualification
                  requirements are scoped directly against each client’s target product
                  specifications during the project consultation phase.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs font-mono-tech text-white/80">
                  Request a technical consultation to review your project’s specific inspection and
                  acceptance test criteria.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryFormSection />
    </div>
  );
};
