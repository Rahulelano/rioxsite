import React from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_CAPABILITIES,
  IMAGES,
  RoutePath,
  VERIFIED_STRENGTHS,
} from '../data/rionxtData';
import { SmartImage } from '../components/SmartImage';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

interface AboutPageProps {
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Dark Hero Banner */}
      <section className="py-16 lg:py-24 bg-[#071426] bg-circuit-grid text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-tech text-[#1677FF]">
              Corporate Profile · {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              From Intelligent Ideas to Engineered Reality.
            </h1>
            <p className="text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
              RION TECHNOLOGIES (RIONXT) is an electronics engineering, research and development,
              and manufacturing solutions company dedicated to converting technical concepts into
              scalable, future-ready hardware and industrial systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Narrative & Engineering Philosophy */}
      <section className="py-16 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono-tech text-[#1677FF]">
                01 · Who We Are &amp; What We Do
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071426]">
                End-to-End Electronic Product Lifecycle Partner
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Operating from our facility in Irungattukottai Village, Sriperumbudur Taluk,
                Kanchipuram, <strong className="font-semibold text-[#071426]">RION TECHNOLOGIES</strong>{' '}
                supports businesses across the entire lifecycle of electronic products and automated
                industrial machinery.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Many organizations face fragmentation when developing hardware: one vendor drafts
                schematics, another manufactures circuit boards, a third writes embedded firmware,
                and internal teams are left to troubleshoot field issues alone. RIONXT eliminates
                these handoff gaps by uniting electronics R&amp;D, PCB design and assembly (SMT and
                THT), embedded firmware engineering, Industrial IoT (IIoT), and after-sales
                technical support under one roof.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono-tech text-[#1677FF] mb-1">
                    Engineering Mission
                  </div>
                  <h3 className="font-display text-base font-bold text-[#071426]">
                    Practical, Deployable Innovation
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Delivering electronic hardware, firmware, and automation upgrades engineered for
                    real industrial operating environments rather than laboratory-only prototypes.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono-tech text-[#1677FF] mb-1">
                    Lifecycle Continuity
                  </div>
                  <h3 className="font-display text-base font-bold text-[#071426]">
                    Concept to After-Sales Care
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Providing continuous post-deployment monitoring, scheduled maintenance, remote
                    troubleshooting, on-site technical assistance, and component-level repair.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between bg-[#071426] text-white rounded-xl overflow-hidden border border-slate-200">
              <div className="relative h-64 sm:h-72">
                <SmartImage
                  src={IMAGES.engineeringLab}
                  alt="RION TECHNOLOGIES R&D and embedded hardware laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  Verified Location &amp; Engineering Desk
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Sriperumbudur Industrial Corridor
                </h3>
                <div className="space-y-3 text-sm text-[#A8B3C2]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="font-mono-tech text-white hover:text-[#1677FF]"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Pillars */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
              02 · Verified Core Pillars
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071426]">
              Six Integrated Pillars of RIONXT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_STRENGTHS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                    {pillar.index} · {pillar.meta}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#071426]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-[#071426]">
                Explore Our Specific Engineering &amp; Manufacturing Services
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Review detailed technical scopes across PCB assembly, SMT/THT, embedded firmware,
                IIoT, and automation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View All Services ({CORE_CAPABILITIES.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <EnquiryFormSection />
    </div>
  );
};
