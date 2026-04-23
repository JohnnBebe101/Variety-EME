import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Brand } from './Brand';
import { SITE } from '../data/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleFocusMessage = () => {
    if (message === DEFAULT_MESSAGE) {
      setMessage('');
    }
  };

  const handleBlurMessage = () => {
    if (message === '') {
      setMessage('');
    }
  };

  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setService('');
      setMessage('');
      setHoneypot('');
      setStatus('idle');
      setStatusMessage('');
    }
  }, [isOpen]);

  const DEFAULT_MESSAGE = 'Tell us about your project requirements, timeline, and how we can help...';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      setStatus('error');
      setStatusMessage('Bot detection triggered.');
      return;
    }

    if (!fullName || !email || !service) {
      setStatus('error');
      setStatusMessage('Please fill all required fields.');
      return;
    }

    if (message === DEFAULT_MESSAGE || !message.trim()) {
      setStatus('error');
      setStatusMessage('Please describe your project requirements.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending your inquiry...');

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          company,
          phone,
          service,
          message: message === DEFAULT_MESSAGE ? '' : message,
          honeypot,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you! We will be in touch within 24 hours.');
        setFullName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setService('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Server error. Please try again later.');
    }
  };

  const SERVICES = [
    'Telecommunications',
    'Power & Energy', 
    'ICT & Data Center',
    'Academy & Training',
    'Managed Services',
    'Other'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6 bg-brand-primary/95 backdrop-blur-xl"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-5xl bg-brand-surface rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl max-h-[90vh] md:max-h-auto border border-white/5"
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-xl text-brand-foreground hover:text-brand-accent transition-all min-w-[40px] min-h-[40px] flex items-center justify-center" 
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            {/* Left Sidebar - Contact Info */}
            <div className="hidden lg:flex lg:w-5/12 bg-brand-primary p-8 md:p-10 text-brand-foreground flex-col justify-between">
              <div>
                <Brand forceInvert={true} className="mb-8" />
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-6">Let's Start Your Project</h2>
                <p className="text-brand-muted text-sm mb-8 leading-relaxed">
                  Share your project requirements and we'll get back to you within 24 hours with a tailored proposal.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-brand-muted mb-1">Address</p>
                    <p className="text-sm">Bole Sub-city, Woreda 04<br/>Haile Gebreselassie Avenue<br/>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-brand-muted mb-1">Phone</p>
                    <p className="text-sm">+251 11 635 4312</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-brand-muted mb-1">Email</p>
                    <p className="text-sm">info@infineth.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-brand-muted mb-1">Office Hours</p>
                    <p className="text-sm">Sun - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-brand-muted">
                  ISO 9001, 14001, 45001, 27001, 22301 Certified
                </p>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full lg:w-7/12 p-6 md:p-10 bg-brand-surface overflow-y-auto">
              <h3 className="text-xl font-semibold mb-6 text-brand-foreground">Send Us a Message</h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-brand-muted">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full bg-brand-primary/30 p-3.5 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50"
                      required 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-brand-muted">
                      Email <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-brand-primary/30 p-3.5 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50"
                      required 
                    />
                  </div>
                </div>
                
                {/* Company & Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-brand-muted">
                      Company
                    </label>
                    <input 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                      type="text" 
                      placeholder="Your company name"
                      className="w-full bg-brand-primary/30 p-3.5 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-brand-muted">
                      Phone
                    </label>
                    <input 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      type="tel" 
                      placeholder="+251 xxx xxxx"
                      className="w-full bg-brand-primary/30 p-3.5 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50"
                    />
                  </div>
                </div>
                
                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-brand-muted">
                    Service Interested In <span className="text-brand-accent">*</span>
                  </label>
                  <select 
                    value={service} 
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-brand-primary/30 p-3.5 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all"
                    required
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                
                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-brand-muted">
                    Project Details <span className="text-brand-accent">*</span>
                  </label>
                  <textarea 
                    ref={messageInputRef}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={handleFocusMessage}
                    onBlur={handleBlurMessage}
                    rows={5}
                    placeholder={DEFAULT_MESSAGE}
                    className={`w-full bg-brand-primary/30 p-4 rounded-xl outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 resize-none ${
                      message === DEFAULT_MESSAGE ? 'italic' : ''
                    }`}
                    required
                  />
                </div>
                
                {/* Honeypot */}
                <input 
                  type="text" 
                  value={honeypot} 
                  onChange={(e) => setHoneypot(e.target.value)} 
                  style={{ display: 'none' }} 
                  autoComplete="off" 
                  tabIndex={-1} 
                  name="website" 
                />
                
                {/* Status Message */}
                {statusMessage && (
                  <div className={`text-sm font-medium ${
                    status === 'success' ? 'text-green-500' : 
                    status === 'error' ? 'text-red-500' : 
                    'text-brand-muted'
                  }`}>
                    {status === 'success' && <Send size={16} className="inline mr-2" />}
                    {statusMessage}
                  </div>
                )}
                
                <button 
                  disabled={status === 'sending'} 
                  type="submit" 
                  className="w-full bg-brand-accent text-brand-primary py-4 rounded-xl font-semibold tracking-wide uppercase shadow-lg hover:bg-white hover:text-brand-primary active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};