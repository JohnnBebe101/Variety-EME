import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PageID } from '../types';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageID, hash?: string, path?: string) => void;
}

interface ContentSection {
  title: string;
  content: string[];
}

interface LegalContent {
  title: string;
  tagline: string;
  lastUpdated: string;
  sections: ContentSection[];
}

const privacyContent: LegalContent = {
  title: 'Privacy Policy',
  tagline: 'How we protect and handle your information',
  lastUpdated: 'January 15, 2025',
  sections: [
    {
      title: '1. Introduction',
      content: [
        'InfinEth Solutions Plc ("we," "our," or "us") operates as an Ethiopian-based engineering and ICT solutions provider. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or interact with our business operations in Ethiopia and the wider East African region.',
        'We are committed to protecting the privacy and confidentiality of our clients, partners, employees, and website visitors. By accessing our services, you agree to the terms of this Privacy Policy.'
      ]
    },
    {
      title: '2. Information We Collect',
      content: [
        'Personal Information: When you contact us through our website or request proposal documents, we collect information such as your name, company name, email address, phone number, and business address. This is primarily collected through our contact inquiry forms and proposal submission processes.',
        'Project Data: In the course of delivering engineering and ICT services, we handle technical specifications, project proposals, network designs, and infrastructure documentation that may contain business-sensitive information from our clients.',
        'Technical Information: Our website automatically collects certain technical data including IP addresses, browser types, access times, and pages viewed to help us understand website traffic patterns and improve user experience.',
        'Academy Records: For training program participants, we maintain records of certification achievements, attendance, and professional development progress.'
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: [
        'Service Delivery: We use your information to respond to inquiries, prepare project proposals, and deliver the engineering and ICT services you request from our telecommunications, power, data center, and academy divisions.',
        'Communication: Your contact information enables us to send project updates, training schedules, service announcements, and respond to your inquiries. We may also contact you about new services that align with your business needs.',
        'Quality Improvement: Feedback and project data help us improve service delivery, tailor our offerings to Ethiopian market requirements, and maintain the high standards our clients expect.',
        'Legal Compliance: Certain information may be retained to comply with Ethiopian business regulations, tax requirements, and contractual obligations.'
      ]
    },
    {
      title: '4. Information Sharing & Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties. Information is only shared with trusted partners and subcontractors who assist us in delivering services—such as equipment suppliers, installation teams, and technical specialists—under strict confidentiality agreements.',
        'We may disclose information when required by Ethiopian law, court order, or government regulation, or when necessary to protect our rights, safety, or property.',
        'All partner organizations are bound by confidentiality terms and instructed to handle data in accordance with this Privacy Policy.'
      ]
    },
    {
      title: '5. Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Our systems include secure servers, encryption protocols, and access controls tailored to the sensitivity of data handled.',
        'For project documentation and technical designs, we maintain strict access permissions and require signed confidentiality agreements before sharing sensitive materials.',
        'While we strive to protect your information, no method of electronic transmission is completely secure. We encourage you to exercise caution when sharing sensitive business information.'
      ]
    },
    {
      title: '6. Your Rights',
      content: [
        'You have the right to request access to the personal information we hold about you. You may also request correction of inaccurate data or deletion of information that is no longer necessary for the purposes for which it was collected.',
        'To exercise these rights or ask questions about our data practices, please contact our office using the information provided below.',
        'We will respond to your requests within a reasonable timeframe, consistent with Ethiopian business practices.'
      ]
    },
    {
      title: '7. Contact Information',
      content: [
        'InfinEth Solutions Plc\nBole Road, Addis Ababa, Ethiopia\nEmail: infineth@infineth.com\nPhone: +251 11 635 4312',
        'Our office is open Sunday through Thursday, 8:00 AM to 6:00 PM East Africa Time.',
        'For data protection inquiries, please specify "Privacy" in your subject line.'
      ]
    },
    {
      title: '8. Policy Updates',
      content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. When significant changes occur, we will post the updated policy on our website and update the "Last Updated" date at the top of this page.',
        'We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.'
      ]
    }
  ]
};

const termsContent: LegalContent = {
  title: 'Terms of Service',
  tagline: 'Conditions governing your use of our services and website',
  lastUpdated: 'January 15, 2025',
  sections: [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing our website, engaging our services, or submitting a project inquiry, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
        'InfinEth Solutions Plc provides engineering, telecommunications, power infrastructure, ICT solutions, and professional training services primarily within Ethiopia and the broader East African region. These terms apply to all clients, partners, and website visitors.'
      ]
    },
    {
      title: '2. Service Description',
      content: [
        'InfinEth delivers integrated engineering solutions across four main divisions: Telecommunications (network rollout, fiber optics, tower infrastructure), Power & Energy (transmission, distribution, backup systems), ICT & Data Centers (infrastructure design, enterprise networking, system integration), and Academy (professional certification training, workforce development).',
        'Specific service scope, timelines, deliverables, and pricing are detailed in individual project proposals and service agreements signed between InfinEth and the client before work commences.'
      ]
    },
    {
      title: '3. User Obligations',
      content: [
        'When using our website, you agree to provide accurate information, refrain from attempting to breach security or access unauthorized systems, and not use the site for any unlawful purpose.',
        'Clients engaging our services agree to provide necessary site access, technical information, and timely responses to enable project execution. Delays caused by client-side requirements may affect project timelines and costs.',
        'Any technical data, designs, or documentation provided by InfinEth remains our intellectual property unless explicitly transferred through written agreement.'
      ]
    },
    {
      title: '4. Intellectual Property',
      content: [
        'All content on this website, including text, graphics, logos, images, and software, is the property of InfinEth Solutions Plc and is protected by Ethiopian and international copyright laws.',
        'Project designs, technical drawings, network architectures, and methodology documents created by InfinEth remain our intellectual property unless a separate written transfer agreement specifies otherwise.',
        'You may not reproduce, distribute, modify, or display our proprietary materials without prior written consent.'
      ]
    },
    {
      title: '5. Payment Terms',
      content: [
        'Payment terms for services are specified in individual project contracts. Standard terms typically include an initial deposit upon contract signing, milestone payments tied to project phases, and final payment upon completion and client acceptance.',
        'All fees are quoted in Ethiopian Birr (ETB) unless otherwise specified in writing. Payment is due within the timeframe specified in invoices, typically 30 days from invoice date.',
        'Projects may be suspended if payment schedules are not adhered to, with costs accrued for any delays resulting from non-payment.'
      ]
    },
    {
      title: '6. Limitation of Liability',
      content: [
        'InfinEth services are delivered with professional expertise and within industry standards applicable in Ethiopia. While we strive for excellence, our liability is limited to the scope and value of the specific services contracted.',
        'We are not liable for consequential, incidental, or indirect damages, including lost profits or business interruption, except where explicitly provided in signed service agreements.',
        'Liability for specific projects is capped at the total fees paid for that particular engagement, unless gross negligence is proven.'
      ]
    },
    {
      title: '7. Termination',
      content: [
        'Either party may terminate service agreements with written notice. Termination terms, including payment for work completed and any applicable termination fees, are governed by the specific contract signed for each project.',
        'InfinEth reserves the right to terminate services if client-provided information is materially inaccurate, site access is denied, or payment terms are persistently violated.',
        'Upon termination, all intellectual property rights previously transferred (if any) remain with the respective party, and outstanding payments become immediately due.'
      ]
    },
    {
      title: '8. Governing Law & Jurisdiction',
      content: [
        'These Terms of Service are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms or our services shall be resolved through binding arbitration or Ethiopian courts.',
        'For dispute resolution, parties agree to first attempt mediation through the Ethiopian Chamber of Commerce before pursuing formal legal proceedings.',
        'Our services are provided from Ethiopia, and all contractual negotiations and agreements are conducted under Ethiopian jurisdiction.'
      ]
    },
    {
      title: '9. Contact Information',
      content: [
        'InfinETH Solutions Plc\nBole Road, Addis Ababa, Ethiopia\nEmail: infineth@infineth.com\nPhone: +251 11 635 4312',
        'For contractual inquiries, please contact our Operations Department. For technical support related to academy services, contact training@infineth.com.',
        'Our office hours are Sunday through Thursday, 8:00 AM to 6:00 PM East Africa Time.'
      ]
    }
  ]
};

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const content = type === 'privacy' ? privacyContent : termsContent;
  
  return (
    <div className="min-h-screen bg-brand-primary">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/90" />
        <div className="relative z-10 flex items-center px-6 lg:px-24 max-w-7xl mx-auto h-full">
          <div className="max-w-3xl">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {content.title}
            </h1>
            <p className="text-white/60 text-lg mt-4">
              {content.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-24 max-w-4xl mx-auto">
        <div className="text-sm text-brand-muted mb-10 pb-6 border-b border-white/10">
          <span className="text-brand-accent font-medium">Last Updated:</span> {content.lastUpdated}
        </div>
        
        {content.sections.map((section, idx) => (
          <div key={idx} className="mb-12 last:mb-0">
            <h2 className="text-xl font-semibold text-brand-foreground mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent text-sm font-bold">
                {idx + 1}
              </span>
              {section.title}
            </h2>
            <div className="text-brand-muted leading-relaxed space-y-4 ml-11">
              {section.content.map((para, pIdx) => (
                <p key={pIdx} className="whitespace-pre-line">{para}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="bg-brand-surface rounded-xl p-8">
            <h3 className="text-lg font-semibold text-brand-foreground mb-3">
              Questions about these policies?
            </h3>
            <p className="text-brand-muted mb-6">
              Our team is available to clarify any aspects of our privacy practices or terms of service.
            </p>
            <button 
              onClick={() => onNavigate('contact', undefined, '/contact')}
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;