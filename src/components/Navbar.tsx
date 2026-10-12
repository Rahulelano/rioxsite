import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { RoutePath } from '../data/rionxtData';
import { RionxtLogo } from './RionxtLogo';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, sectionId?: string) => void;
}

const SERVICE_SUBLINKS: { label: string; meta: string; path: RoutePath }[] = [
  {
    label: 'Services Overview',
    meta: 'Complete Lifecycle Capabilities',
    path: '/services',
  },
  {
    label: 'PCB Assembly & Manufacturing',
    meta: 'Schematic Capture · Layout · PCBA',
    path: '/services/pcb-assembly',
  },
  {
    label: 'SMT / THT & EMS Solutions',
    meta: 'Surface Mount · Through-Hole · Box Build',
    path: '/services/smt-tht-ems',
  },
  {
    label: 'Embedded Systems & Firmware',
    meta: 'MCU Design · C/C++ RTOS · Diagnostics',
    path: '/services/embedded-firmware',
  },
  {
    label: 'IoT / IIoT Solutions',
    meta: 'RIONXT Smart OEE · Edge Gateways',
    path: '/services/iot-iiot',
  },
  {
    label: 'Industrial Automation',
    meta: 'Manual-to-Automated Machine Transition',
    path: '/services/industrial-automation',
  },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServiceActive = currentPath.startsWith('/services');

  const handleNavClick = (path: RoutePath, sectionId?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path, sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071426]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (Single element wordmark) */}
        <RionxtLogo onNavigate={(path) => handleNavClick(path)} theme="dark" />

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#A8B3C2]"
          aria-label="Primary Navigation"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/' ? 'text-white border-[#1677FF]' : 'border-transparent'
            }`}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/about');
            }}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/about' ? 'text-white border-[#1677FF]' : 'border-transparent'
            }`}
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              className={`inline-flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                isServiceActive ? 'text-white border-[#1677FF]' : 'border-transparent'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#1677FF]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 mt-3 w-80 bg-[#0B192E] border border-white/15 rounded-lg shadow-2xl py-2 z-50"
                >
                  {SERVICE_SUBLINKS.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }}
                      className={`block px-4 py-2.5 hover:bg-white/5 transition-colors ${
                        currentPath === item.path ? 'bg-[#1677FF]/15 text-white' : 'text-white/90'
                      }`}
                    >
                      <div className="text-sm font-medium text-white flex items-center justify-between">
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1677FF]" />
                      </div>
                      <div className="text-xs text-[#A8B3C2] mt-0.5">{item.meta}</div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/services/smt-tht-ems"
            onClick={(e) => {
              e.preventDefault();
              if (currentPath === '/') {
                handleNavClick('/', 'manufacturing-section');
              } else {
                handleNavClick('/services/smt-tht-ems');
              }
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent"
          >
            Manufacturing
          </a>

          <a
            href="/#industries-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/', 'industries-section');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent"
          >
            Industries
          </a>

          <a
            href="/quality-capabilities"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/quality-capabilities');
            }}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/quality-capabilities'
                ? 'text-white border-[#1677FF]'
                : 'border-transparent'
            }`}
          >
            Quality &amp; Capabilities
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/contact');
            }}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/contact' ? 'text-white border-[#1677FF]' : 'border-transparent'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('/contact', 'project-enquiry-form')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Discuss Your Project
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#071426] border-b border-white/15 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/about');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                About RION TECHNOLOGIES
              </a>

              <div className="pt-2 pb-1 px-3 text-xs font-mono-tech text-[#A8B3C2]">
                Engineering &amp; EMS Services
              </div>
              <div className="pl-3 space-y-1 border-l border-white/15 ml-3">
                {SERVICE_SUBLINKS.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      currentPath === item.path
                        ? 'text-[#1677FF] font-semibold bg-white/5'
                        : 'text-[#A8B3C2] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href="/#manufacturing-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'manufacturing-section');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                Manufacturing Workflow
              </a>
              <a
                href="/#industries-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'industries-section');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                Industries &amp; Applications
              </a>
              <a
                href="/quality-capabilities"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/quality-capabilities');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                Quality &amp; Capabilities
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/contact');
                }}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10"
              >
                Contact Us
              </a>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleNavClick('/contact', 'project-enquiry-form')}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#1677FF]/90 rounded-lg transition-colors"
                >
                  Discuss Your Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
