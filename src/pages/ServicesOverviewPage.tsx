import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CORE_CAPABILITIES, PROCESS_TIMELINE, RoutePath } from '../data/rionxtData';
import { SmartImage } from '../components/SmartImage';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

interface ServicesOverviewPageProps {
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

const ENGAGEMENT_MODELS = [
  {
    index: '01',
    title: 'Turnkey Electronic Product Engineering',
    meta: 'Concept · R&D · Prototype · Production',
    description:
      'Ideal for organizations developing a new electronic device or industrial controller from functional specifications through PCB design, embedded firmware, and manufacturing.',
  },
  {
    index: '02',
    title: 'Contract PCB Assembly & EMS',
    meta: 'SMT · THT · Mixed-Tech · Box Build',
    description:
      'Ideal for engineering teams with existing Gerber and BOM packages seeking dependable prototype or production PCB assembly and functional testing.',
  },
  {
    index: '03',
    title: 'IIoT & Machine Automation Retrofitting',
    meta: 'Smart OEE · Manual-to-Auto Transition',
    description:
      'Ideal for manufacturing plants seeking real-time OEE visibility or upgrading manual machinery to automated or hybrid electro-mechanical operation.',
  },
  {
    index: '04',
    title: 'Technical Consultation, Repair & After-Sales Care',
    meta: 'Diagnostics · Maintenance · Updates',
    description:
      'Ideal for businesses requiring board-level repair, remote firmware troubleshooting, on-site technical assistance, or scheduled maintenance programs.',
  },
];

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Dark Hero Header */}
      <section className="py-16 lg:py-24 bg-[#071426] bg-circuit-grid text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-tech text-[#1677FF]">
              RION TECHNOLOGIES (RIONXT) · Complete Service Architecture
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Engineering, Manufacturing &amp; Automation Services
            </h1>
            <p className="text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
              Comprehensive technical capabilities spanning electronics research and development,
              multi-layer PCB assembly, SMT/THT manufacturing, embedded firmware, Industrial IoT,
              and machine automation support.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Catalog */}
      <section className="py-16 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {CORE_CAPABILITIES.map((service, idx) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden"
            >
              <div
                className={`lg:col-span-5 relative min-h-[260px] ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <SmartImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                    {service.index} · {service.categoryMeta}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071426]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {service.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.route)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#071426] hover:bg-[#1677FF] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Explore {service.shortTitle} Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact', 'project-enquiry-form')}
                    className="text-xs font-semibold text-[#1677FF] hover:underline cursor-pointer"
                  >
                    Request Consultation →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 lg:py-24 bg-[#101820] text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
              Flexible B2B Collaboration
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              How Engineering &amp; Industrial Teams Engage RIONXT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.index}
                className="p-6 sm:p-8 rounded-xl bg-[#071426] border border-white/10"
              >
                <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
                  {model.index} · {model.meta}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{model.title}</h3>
                <p className="mt-2.5 text-sm text-[#A8B3C2] leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>

          {/* Summary of 5-stage process */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="text-xs font-mono-tech text-[#A8B3C2] mb-6">
              Standard 5-Stage Execution Rhythm Across All Services:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROCESS_TIMELINE.map((st) => (
                <div
                  key={st.step}
                  className="p-4 rounded-lg bg-[#071426]/60 border border-white/10"
                >
                  <div className="text-xs font-mono-tech text-[#1677FF] font-bold">
                    Stage {st.step}
                  </div>
                  <div className="font-display text-sm font-semibold text-white mt-1">
                    {st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryFormSection />
    </div>
  );
};
