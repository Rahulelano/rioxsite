import React from 'react';
import { COMPANY_INFO, RoutePath } from '../data/rionxtData';

interface PrivacyPolicyPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-[#071426] text-white border-b border-white/10">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono-tech text-[#1677FF] mb-2">
            Legal &amp; Data Protection · {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy &amp; Engineering Data Confidentiality
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#A8B3C2]">
            How RION TECHNOLOGIES collects, uses, and safeguards business contact details and
            technical project documentation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-[#101820]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#071426]">
              01. Scope of This Policy
            </h2>
            <p>
              This Privacy Policy applies to corporate and technical interactions with{' '}
              <strong>{COMPANY_INFO.legalName}</strong> (operating under the brand identity{' '}
              <strong>{COMPANY_INFO.brandName}</strong>) via our website ({COMPANY_INFO.websiteUrl})
              and project enquiry channels.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#071426]">
              02. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry or request technical consultation, we collect only
              the business information necessary to evaluate and respond to your engineering or
              manufacturing requirement:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name and Corporate Title</li>
              <li>Company / Organization Name</li>
              <li>Business Email Address and Contact Phone Number</li>
              <li>Selected Engineering or Manufacturing Service Area</li>
              <li>Project Description and Technical Scope Details</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#071426]">
              03. Confidentiality of Schematics, Gerber Files &amp; BOMs
            </h2>
            <p>
              As an electronics research, development, and Electronic Manufacturing Services (EMS)
              provider, RION TECHNOLOGIES treats client schematics, PCB Gerber files, Bill of
              Materials (BOM), firmware source code, and shop-floor machine data as confidential
              proprietary information. Technical files shared during consultation or execution are
              used strictly for feasibility analysis, DFM verification, quotation, and contracted
              manufacturing or automation delivery.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#071426]">
              04. How We Use Your Information
            </h2>
            <p>We use submitted business contact and project information solely to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide engineering consultations, DFM feedback, and manufacturing quotations</li>
              <li>Coordinate prototype builds, production schedules, and after-sales support</li>
              <li>Communicate technical updates regarding your active enquiry</li>
            </ul>
            <p>
              We do not sell, rent, or trade business contact lists or project specifications to
              third-party marketers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#071426]">
              05. Contact &amp; Registered Office
            </h2>
            <p>
              For questions regarding data privacy, Non-Disclosure Agreements (NDAs), or technical
              records, please contact RION TECHNOLOGIES at:
            </p>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
              <div className="font-bold text-[#071426]">
                {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})
              </div>
              <div>{COMPANY_INFO.address.full}</div>
              <div>Phone: {COMPANY_INFO.phoneDisplay}</div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#071426] hover:bg-[#1677FF] rounded-lg transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
