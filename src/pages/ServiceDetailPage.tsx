import React from 'react';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import {
  DetailedServicePageData,
  PAGE_SEO,
  RoutePath,
  SERVICE_PAGES_DATA,
} from '../data/rionxtData';
import { SmartImage } from '../components/SmartImage';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

interface ServiceDetailPageProps {
  serviceRoute:
    | '/services/pcb-assembly'
    | '/services/smt-tht-ems'
    | '/services/embedded-firmware'
    | '/services/iot-iiot'
    | '/services/industrial-automation';
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceRoute,
  onNavigate,
}) => {
  const data: DetailedServicePageData = SERVICE_PAGES_DATA[serviceRoute];

  return (
    <div>
      {/* Dark Service Hero */}
      <section className="py-16 lg:py-24 bg-[#071426] bg-circuit-grid text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/services');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#A8B3C2] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>All Engineering &amp; EMS Services</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-mono-tech text-[#1677FF]">
                RION TECHNOLOGIES (RIONXT) · {data.kicker}
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
                {data.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const formEl = document.getElementById('project-enquiry-form');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/quality-capabilities')}
                  className="inline-flex items-center px-5 py-3 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Quality &amp; Inspection Process
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-[#101820]">
                <SmartImage
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  priority={true}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview & Key Capabilities */}
      <section className="py-16 lg:py-24 bg-white text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="text-xs font-mono-tech text-[#1677FF]">
              01 · Service Architecture &amp; Engineering Scope
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071426]">
              {data.overviewTitle}
            </h2>
            {data.overviewParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.keyCapabilities.map((cap) => (
              <div
                key={cap.index}
                className="p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-tech text-[#1677FF] font-semibold mb-2">
                    {cap.index}. Core Capability
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#071426]">{cap.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Scope Specification Table & 4-Step Execution Workflow */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Specification Table (6 cols) */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-6 py-5 bg-[#071426] text-white">
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  02 · Technical Scope &amp; Parameters
                </div>
                <h3 className="font-display text-lg font-bold mt-1">
                  Verified Capability Matrix
                </h3>
              </div>
              <div className="divide-y divide-slate-200">
                {data.technicalScope.map((row) => (
                  <div
                    key={row.parameter}
                    className="px-6 py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 text-sm"
                  >
                    <div className="sm:col-span-5 font-mono-tech text-xs font-semibold text-slate-500">
                      {row.parameter}
                    </div>
                    <div className="sm:col-span-7 text-[#071426] font-medium">
                      {row.specification}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Workflow Steps (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-mono-tech text-[#1677FF]">
                  03 · Execution Workflow
                </div>
                <h3 className="font-display text-2xl font-bold text-[#071426] mt-1">
                  How We Deliver {data.title}
                </h3>
              </div>

              <div className="space-y-4">
                {data.workflowSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#071426] text-[#1677FF] font-mono-tech text-xs font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-[#071426]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Services Internal Links for SEO & UX */}
              <div className="p-5 rounded-xl bg-[#071426] text-white">
                <div className="text-xs font-mono-tech text-[#A8B3C2] mb-3">
                  Related RIONXT Capabilities &amp; Pages:
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.relatedServices.map((relPath) => {
                    const relSeo = PAGE_SEO[relPath];
                    return (
                      <a
                        key={relPath}
                        href={relPath}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(relPath);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#101820] hover:bg-[#1677FF] text-xs font-medium text-white border border-white/10 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-[#1677FF]" />
                        <span>{relSeo?.breadcrumb || relPath}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryFormSection defaultService={data.title} />
    </div>
  );
};
