import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SITE } from '../../data/constants';
import { PageID } from '../../types';
import { Section } from '../Section';

interface ContactQuoteFormProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const ContactQuoteForm: React.FC<ContactQuoteFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <Section variant="light" className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div>
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-2">
              {t('common.requestAQuote') || 'CONTACT'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t('common.contactFormTitle') || 'REQUEST A QUOTE'}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
              {t('common.contactFormDesc') || 'Have a project in mind? Fill out the form and our team will get back to you within 24 hours with a personalized quote.'}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">{t('common.address') || 'Our Office'}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{SITE.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">{t('common.phone') || 'Call Us'}</h3>
                  <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="text-gray-500 text-sm hover:text-brand-primary transition-colors mt-0.5 block">
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">{t('common.email') || 'Email Us'}</h3>
                  <a href={`mailto:${SITE.contact.email}`} className="text-gray-500 text-sm hover:text-brand-primary transition-colors mt-0.5 block">
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {t('common.formSuccessTitle') || 'Message Sent Successfully!'}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t('common.formSuccessDesc') || 'Thank you for reaching out. Our team will contact you within 24 hours.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      {t('common.name') || 'Full Name'} <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      placeholder={t('common.namePlaceholder') || 'John Doe'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      {t('common.email') || 'Email Address'} <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      placeholder={t('common.emailPlaceholder') || 'john@company.com'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      {t('common.phone') || 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      placeholder={t('common.phonePlaceholder') || '+251 9XX XXX XXX'}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                      {t('common.subject') || 'Project Type'} <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all bg-white"
                    >
                      <option value="">{t('common.selectSubject') || 'Select a service area'}</option>
                      <option value="telecommunications">{t('common.services.telecom.title') || 'Telecommunications'}</option>
                      <option value="power">{t('common.services.power.title') || 'Power & Energy'}</option>
                      <option value="ict">{t('common.services.ict.title') || 'ICT & Data Center'}</option>
                      <option value="msp">{t('common.services.msp.title') || 'Managed Services'}</option>
                      <option value="training">{t('common.services.training.title') || 'Training & Academy'}</option>
                      <option value="other">{t('common.other') || 'Other'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                    {t('common.message') || 'Project Details'} <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                    placeholder={t('common.messagePlaceholder') || 'Describe your project requirements, timeline, budget range, and any specific needs...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:bg-brand-primary hover:text-white active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t('common.sending') || 'Sending...'}
                    </>
                  ) : (
                    <>
                      {t('common.submitQuote') || 'Submit Quote Request'}
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {t('common.privacyNote') || 'By submitting, you agree to our Privacy Policy and Terms of Service.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactQuoteForm;
