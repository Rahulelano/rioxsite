import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, RoutePath } from '../data/rionxtData';
import { RionxtLogo } from './RionxtLogo';

interface FooterProps {
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, path: RoutePath, sectionId?: string) => {
    e.preventDefault();
    onNavigate(path, sectionId);
  };

  return (
    <footer className="bg-[#050E1C] text-[#A8B3C2] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <RionxtLogo onNavigate={onNavigate} theme="dark" />
            <p className="text-sm text-[#A8B3C2] leading-relaxed max-w-sm">
              RION TECHNOLOGIES (RIONXT) is an electronics engineering, product development, and
              manufacturing solutions partner delivering PCB assembly, SMT/THT manufacturing,
              embedded systems, IIoT, and industrial automation.
            </p>
            <div className="pt-1 text-xs font-mono-tech text-white/80">
              “{COMPANY_INFO.tagline}”
            </div>
          </div>

          {/* Col 2: Main Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono-tech font-semibold text-white tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, '/about')}
                  className="hover:text-white transition-colors"
                >
                  About RION TECHNOLOGIES
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  Services Overview
                </a>
              </li>
              <li>
                <a
                  href="/quality-capabilities"
                  onClick={(e) => handleLink(e, '/quality-capabilities')}
                  className="hover:text-white transition-colors"
                >
                  Quality &amp; Capabilities
                </a>
              </li>
              <li>
                <a
                  href="/#industries-section"
                  onClick={(e) => handleLink(e, '/', 'industries-section')}
                  className="hover:text-white transition-colors"
                >
                  Industries &amp; Applications
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, '/contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono-tech font-semibold text-white tracking-wider">
              Verified Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services/pcb-assembly"
                  onClick={(e) => handleLink(e, '/services/pcb-assembly')}
                  className="hover:text-white transition-colors"
                >
                  PCB Design &amp; Assembly
                </a>
              </li>
              <li>
                <a
                  href="/services/smt-tht-ems"
                  onClick={(e) => handleLink(e, '/services/smt-tht-ems')}
                  className="hover:text-white transition-colors"
                >
                  SMT / THT &amp; EMS Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/embedded-firmware"
                  onClick={(e) => handleLink(e, '/services/embedded-firmware')}
                  className="hover:text-white transition-colors"
                >
                  Embedded Systems &amp; Firmware
                </a>
              </li>
              <li>
                <a
                  href="/services/iot-iiot"
                  onClick={(e) => handleLink(e, '/services/iot-iiot')}
                  className="hover:text-white transition-colors"
                >
                  IoT / IIoT &amp; Smart OEE Solution
                </a>
              </li>
              <li>
                <a
                  href="/services/industrial-automation"
                  onClick={(e) => handleLink(e, '/services/industrial-automation')}
                  className="hover:text-white transition-colors"
                >
                  Industrial Automation &amp; R&amp;D
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono-tech font-semibold text-white tracking-wider">
              Facility &amp; Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                <span className="leading-relaxed text-xs sm:text-sm">
                  {COMPANY_INFO.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1677FF] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-mono-tech text-white hover:text-[#1677FF] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#1677FF] shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1677FF] hover:underline text-xs sm:text-sm"
                >
                  <span>WhatsApp Technical Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Sitemap Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A8B3C2]">
          <div>
            © {currentYear} {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              XML Sitemap
            </a>
            <span>·</span>
            <span>Sriperumbudur Taluk, Kanchipuram - 602105</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
