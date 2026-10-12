import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/rionxtData';

interface EnquiryFormProps {
  defaultService?: string;
  compactHeader?: boolean;
}

interface SubmittedEnquirySummary {
  referenceCode: string;
  companyName: string;
  serviceRequired: string;
  submittedAt: string;
}

const SERVICE_OPTIONS = [
  'PCB Design & Assembly',
  'SMT / THT Manufacturing',
  'Electronic Manufacturing Services (EMS)',
  'Embedded Systems & Firmware',
  'IoT / IIoT Solutions (Smart OEE)',
  'Industrial Automation & Machine Transition',
  'Electronics Repair & Technical Support',
  'Full Turnkey Product Development',
];

export const EnquiryFormSection: React.FC<EnquiryFormProps> = ({
  defaultService = '',
  compactHeader = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceRequired, setServiceRequired] = useState(defaultService || SERVICE_OPTIONS[0]);
  const [projectDescription, setProjectDescription] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState<SubmittedEnquirySummary | null>(null);
  const [recentEnquiries, setRecentEnquiries] = useState<SubmittedEnquirySummary[]>([]);

  useEffect(() => {
    if (defaultService) {
      setServiceRequired(defaultService);
    }
  }, [defaultService]);

  const fetchRecentEnquiries = async () => {
    try {
      const response = await fetch('/api/enquiries');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.enquiries)) {
          setRecentEnquiries(data.enquiries);
        }
      }
    } catch {
      // Quietly ignore background log fetch errors
    }
  };

  useEffect(() => {
    fetchRecentEnquiries();
  }, []);

  const validateClientSide = (): boolean => {
    const errors: Record<string, string> = {};
    if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    if (companyName.trim().length < 2) {
      errors.companyName = 'Please enter your company or organization name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail.trim())) {
      errors.businessEmail = 'Please enter a valid business email address.';
    }
    const cleanedPhone = phoneNumber.replace(/[\s\-().+]/g, '');
    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      errors.phoneNumber = 'Please enter a valid phone number (7–15 digits).';
    }
    if (!serviceRequired.trim()) {
      errors.serviceRequired = 'Please select a primary service area.';
    }
    if (projectDescription.trim().length < 20) {
      errors.projectDescription =
        'Please describe your technical or manufacturing requirements (minimum 20 characters).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');

    if (!validateClientSide()) {
      setFormStatus('error');
      setStatusMessage('Please correct the highlighted fields below before submitting.');
      return;
    }

    setFormStatus('submitting');
    setFieldErrors({});

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          companyName: companyName.trim(),
          businessEmail: businessEmail.trim(),
          phoneNumber: phoneNumber.trim(),
          serviceRequired,
          projectDescription: projectDescription.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data || data.success !== true) {
        setFormStatus('error');
        if (data?.errors) {
          setFieldErrors(data.errors);
        }
        setStatusMessage(
          data?.message ||
            'Submission could not be completed. Please review your entries or contact us directly at +91 73588 65706.'
        );
        return;
      }

      setFormStatus('success');
      setStatusMessage(data.message);
      setLastSubmitted(data.enquiry);
      setFullName('');
      setCompanyName('');
      setBusinessEmail('');
      setPhoneNumber('');
      setProjectDescription('');
      fetchRecentEnquiries();
    } catch {
      setFormStatus('error');
      setStatusMessage(
        'Network error while transmitting your project enquiry. Please retry or contact our engineering team directly at +91 73588 65706.'
      );
    }
  };

  return (
    <section
      id="project-enquiry-form"
      className="py-20 lg:py-24 bg-[#071426] text-white border-t border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {!compactHeader && (
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-tech text-[#1677FF] mb-3">
              Project Consultation · Engineering &amp; EMS Desk
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Have an Electronic Product in Mind?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A8B3C2] leading-relaxed">
              Tell us about your engineering or manufacturing requirements. Our team can help you
              explore the right next steps.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#101820] border border-white/10 rounded-xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              Submit a Technical Project Enquiry
            </h3>
            <p className="text-sm text-[#A8B3C2] mb-6">
              Share your schematic status, estimated batch scope, or machine automation goals.
            </p>

            {formStatus === 'error' && statusMessage && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 flex items-start gap-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-100">Enquiry Submission Error</div>
                  <p className="mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            {formStatus === 'success' && lastSubmitted && (
              <div
                role="status"
                className="mb-6 p-5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-100"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">
                      Enquiry Registered — Reference {lastSubmitted.referenceCode}
                    </div>
                    <p className="text-sm text-emerald-200/90 mt-1">{statusMessage}</p>
                    <div className="mt-3 pt-3 border-t border-emerald-500/20 text-xs font-mono-tech text-emerald-300 flex flex-wrap gap-x-4 gap-y-1">
                      <span>Organization: {lastSubmitted.companyName}</span>
                      <span>·</span>
                      <span>Scope: {lastSubmitted.serviceRequired}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-full-name"
                    className="block text-xs font-medium text-white/90 mb-1.5"
                  >
                    Full Name <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="enquiry-full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Karthik Sundaram"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-[#A8B3C2]/50 focus:outline-none focus:border-[#1677FF] transition-colors ${
                      fieldErrors.fullName ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-company-name"
                    className="block text-xs font-medium text-white/90 mb-1.5"
                  >
                    Company Name <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="enquiry-company-name"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g., Apex Industrial Controls Pvt Ltd"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-[#A8B3C2]/50 focus:outline-none focus:border-[#1677FF] transition-colors ${
                      fieldErrors.companyName ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {fieldErrors.companyName && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.companyName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-business-email"
                    className="block text-xs font-medium text-white/90 mb-1.5"
                  >
                    Business Email <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="enquiry-business-email"
                    type="email"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-[#A8B3C2]/50 focus:outline-none focus:border-[#1677FF] transition-colors ${
                      fieldErrors.businessEmail ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {fieldErrors.businessEmail && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.businessEmail}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone-number"
                    className="block text-xs font-medium text-white/90 mb-1.5"
                  >
                    Phone Number <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="enquiry-phone-number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98400 00000"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-[#A8B3C2]/50 focus:outline-none focus:border-[#1677FF] transition-colors ${
                      fieldErrors.phoneNumber ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {fieldErrors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="enquiry-service-required"
                  className="block text-xs font-medium text-white/90 mb-1.5"
                >
                  Service Required <span className="text-[#1677FF]">*</span>
                </label>
                <select
                  id="enquiry-service-required"
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border border-white/15 text-sm text-white focus:outline-none focus:border-[#1677FF] transition-colors"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-[#071426] text-white">
                      {option}
                    </option>
                  ))}
                </select>
                {fieldErrors.serviceRequired && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.serviceRequired}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-project-description"
                  className="block text-xs font-medium text-white/90 mb-1.5"
                >
                  Project Description <span className="text-[#1677FF]">*</span>
                </label>
                <textarea
                  id="enquiry-project-description"
                  rows={4}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Describe your board specifications, SMT/THT assembly volume, embedded firmware goals, or machine automation requirement..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-[#A8B3C2]/50 focus:outline-none focus:border-[#1677FF] transition-colors ${
                    fieldErrors.projectDescription ? 'border-red-500' : 'border-white/15'
                  }`}
                />
                {fieldErrors.projectDescription && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.projectDescription}</p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 disabled:opacity-60 text-sm font-semibold text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Enquiry</span>
                    </>
                  )}
                </button>
                <span className="text-xs text-[#A8B3C2]">
                  All design files, BOMs, and technical disclosures are treated with strict B2B
                  confidentiality.
                </span>
              </div>
            </form>

            {recentEnquiries.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono-tech text-[#A8B3C2] mb-3">
                  Recent Session Enquiries Logged
                </div>
                <div className="space-y-2">
                  {recentEnquiries.slice(0, 3).map((item) => (
                    <div
                      key={item.referenceCode}
                      className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A8B3C2] bg-[#071426]/70 px-3 py-2 rounded border border-white/5"
                    >
                      <span className="font-mono-tech text-white">{item.referenceCode}</span>
                      <span>{item.companyName}</span>
                      <span className="text-[#1677FF]">{item.serviceRequired}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Verified Contact Information & Embedded Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101820] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono-tech text-[#1677FF] mb-1">
                  Verified Corporate Contact Details
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  RION TECHNOLOGIES (RIONXT)
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#A8B3C2]">Direct Phone &amp; Technical Desk</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-mono-tech font-semibold text-white hover:text-[#1677FF] transition-colors mt-0.5 inline-block"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageSquare className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#A8B3C2]">
                      WhatsApp Engineering Consultation (Verified Number)
                    </div>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#1677FF] hover:underline mt-0.5 inline-block"
                    >
                      Message +91 73588 65706 on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#A8B3C2]">Digital Enquiry Routing</div>
                    <p className="text-xs text-white/80 leading-relaxed mt-0.5">
                      {COMPANY_INFO.emailStatusNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                  <MapPin className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#A8B3C2]">
                      Verified Facility &amp; Registered Location
                    </div>
                    <address className="not-italic text-sm text-white/95 leading-relaxed mt-1">
                      {COMPANY_INFO.address.line1}
                      <br />
                      {COMPANY_INFO.address.line2}
                      <br />
                      {COMPANY_INFO.address.cityStateZip}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Verified Facility Map */}
            <div className="bg-[#101820] border border-white/10 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between text-xs text-[#A8B3C2]">
                <span>Irungattukottai, Sriperumbudur Taluk · Kanchipuram 602105</span>
                <span className="font-mono-tech text-white">TN, IN</span>
              </div>
              <div className="w-full h-56 bg-[#071426]">
                <iframe
                  title="RION TECHNOLOGIES Facility Location — Irungattukottai, Sriperumbudur, Kanchipuram"
                  src={COMPANY_INFO.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
