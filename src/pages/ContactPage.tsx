import React from 'react';
import { Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/rionxtData';
import { EnquiryFormSection } from '../components/EnquiryFormSection';

export const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Dark Hero Header */}
      <section className="py-16 lg:py-20 bg-[#071426] bg-circuit-grid text-white border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-tech text-[#1677FF]">
              Contact RION TECHNOLOGIES (RIONXT) · Engineering &amp; EMS Desk
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Discuss Your Electronics Engineering or Manufacturing Project
            </h1>
            <p className="text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
              Connect with our engineering team in Sriperumbudur, Kanchipuram for PCB design and
              assembly, SMT/THT manufacturing, embedded firmware, RIONXT Smart OEE, or industrial
              automation support.
            </p>
          </div>

          {/* Direct Contact Summary Strip */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#101820] border border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-mono-tech text-[#1677FF]">
                <Phone className="w-4 h-4" />
                <span>Direct Phone Consultation</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="block font-display text-xl font-bold text-white hover:text-[#1677FF] mt-2"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
              <p className="text-xs text-[#A8B3C2] mt-1">
                Verified RION TECHNOLOGIES technical and project enquiry line.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#101820] border border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-mono-tech text-[#1677FF]">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Technical Desk</span>
              </div>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-display text-xl font-bold text-white hover:text-[#1677FF] mt-2"
              >
                Chat on WhatsApp →
              </a>
              <p className="text-xs text-[#A8B3C2] mt-1">
                Quick coordination for BOM reviews, prototype scheduling, or support visits.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#101820] border border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-mono-tech text-[#1677FF]">
                <Clock className="w-4 h-4" />
                <span>In-Person Facility Visits</span>
              </div>
              <div className="font-display text-base font-bold text-white mt-2">
                Irungattukottai, Sriperumbudur
              </div>
              <p className="text-xs text-[#A8B3C2] mt-1 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                <span>Plot No. 67 &amp; 68, Madhav Nagar, Kanchipuram - 602105</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Enquiry Form & Map Section */}
      <EnquiryFormSection compactHeader={true} />
    </div>
  );
};
