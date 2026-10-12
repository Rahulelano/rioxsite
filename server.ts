import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ProjectEnquiry {
  id: string;
  referenceCode: string;
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceRequired: string;
  projectDescription: string;
  submittedAt: string;
  status: 'received';
}

const enquiriesStore: ProjectEnquiry[] = [];

const VALID_SERVICES = [
  'PCB Design & Assembly',
  'SMT / THT Manufacturing',
  'Electronic Manufacturing Services (EMS)',
  'Embedded Systems & Firmware',
  'IoT / IIoT Solutions (Smart OEE)',
  'Industrial Automation & Machine Transition',
  'Electronics Repair & Technical Support',
  'Full Turnkey Product Development',
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().+]/g, '');
  return /^\d{7,15}$/.test(cleaned);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // Health & verification info endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      company: 'RION TECHNOLOGIES',
      brand: 'RIONXT',
      timestamp: new Date().toISOString(),
    });
  });

  // Get recent session enquiries (masked email/phone for privacy)
  app.get('/api/enquiries', (_req, res) => {
    const publicList = enquiriesStore.slice(0, 10).map((item) => ({
      referenceCode: item.referenceCode,
      companyName: item.companyName,
      serviceRequired: item.serviceRequired,
      submittedAt: item.submittedAt,
      status: item.status,
    }));
    res.json({ enquiries: publicList });
  });

  // Submit a new project enquiry
  app.post('/api/enquiries', (req, res) => {
    const {
      fullName = '',
      companyName = '',
      businessEmail = '',
      phoneNumber = '',
      serviceRequired = '',
      projectDescription = '',
    } = req.body || {};

    const errors: Record<string, string> = {};

    if (!String(fullName).trim() || String(fullName).trim().length < 2) {
      errors.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    if (!String(companyName).trim() || String(companyName).trim().length < 2) {
      errors.companyName = 'Please enter your organization or company name.';
    }
    if (!String(businessEmail).trim() || !validateEmail(String(businessEmail))) {
      errors.businessEmail = 'Please enter a valid business email address.';
    }
    if (!String(phoneNumber).trim() || !validatePhone(String(phoneNumber))) {
      errors.phoneNumber = 'Please enter a valid contact phone number (7–15 digits).';
    }
    if (!String(serviceRequired).trim()) {
      errors.serviceRequired = 'Please select the primary engineering or manufacturing service required.';
    }
    if (!String(projectDescription).trim() || String(projectDescription).trim().length < 20) {
      errors.projectDescription =
        'Please provide a brief technical summary of your requirements (at least 20 characters).';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: 'Please review the highlighted fields before submitting your enquiry.',
        errors,
      });
      return;
    }

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `RNX-${new Date().getFullYear()}-${randomDigits}`;

    const newEnquiry: ProjectEnquiry = {
      id: `${Date.now()}-${randomDigits}`,
      referenceCode,
      fullName: String(fullName).trim(),
      companyName: String(companyName).trim(),
      businessEmail: String(businessEmail).trim(),
      phoneNumber: String(phoneNumber).trim(),
      serviceRequired: VALID_SERVICES.includes(String(serviceRequired).trim())
        ? String(serviceRequired).trim()
        : String(serviceRequired).trim(),
      projectDescription: String(projectDescription).trim(),
      submittedAt: new Date().toISOString(),
      status: 'received',
    };

    enquiriesStore.unshift(newEnquiry);

    res.status(201).json({
      success: true,
      message:
        'Your project enquiry has been logged with the RION TECHNOLOGIES engineering desk. Keep your reference code for technical follow-up.',
      enquiry: {
        referenceCode: newEnquiry.referenceCode,
        fullName: newEnquiry.fullName,
        companyName: newEnquiry.companyName,
        serviceRequired: newEnquiry.serviceRequired,
        submittedAt: newEnquiry.submittedAt,
      },
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RION TECHNOLOGIES (RIONXT) server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
