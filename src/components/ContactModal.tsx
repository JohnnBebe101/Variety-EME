import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Brand } from './Brand';
import { SITE } from '../data/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, subject = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(subject);
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
            className="relative w-full max-w-4xl bg-brand-surface rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl max-h-[90vh] md:max-h-auto border border-white/5"
          >
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-xl text-brand-foreground hover:text-brand-accent transition-all min-w-[36px] min-h-[36px] flex items-center justify-center" 
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            
            {/* Left Sidebar - Contact Info */}
            <div className="hidden lg:flex lg:w-4/12 bg-brand-primary p-6 md:p-8 text-brand-foreground flex-col justify-between">
              <div>
                <Brand forceInvert={true} className="mb-6" />
                <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-4">Let's Start Your Project</h2>
                <p className="text-brand-muted text-xs mb-6 leading-relaxed">
                  Share your project requirements and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-brand-muted mb-0.5">Address</p>
                    <p className="text-xs">Bole, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-brand-muted mb-0.5">Phone</p>
                    <p className="text-xs">+251 11 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-brand-muted mb-0.5">Email</p>
                    <p className="text-xs">info@varietyeme.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] text-brand-muted">
                  ISO 9001, 14001, 45001 Certified
                </p>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full lg:w-8/12 p-5 md:p-8 bg-brand-surface overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 text-brand-foreground">Send Us a Message</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold uppercase text-brand-muted">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-brand-primary/30 p-2.5 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 text-sm"
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold uppercase text-brand-muted">
                      Email <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-brand-primary/30 p-2.5 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 text-sm"
                      required 
                    />
                  </div>
                </div>
                
                {/* Company & Phone Row */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold uppercase text-brand-muted">
                      Company
                    </label>
                    <input 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                      type="text" 
                      placeholder="Company name"
                      className="w-full bg-brand-primary/30 p-2.5 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold uppercase text-brand-muted">
                      Phone
                    </label>
                    <input 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      type="tel" 
                      placeholder="+251 xxx xxxx"
                      className="w-full bg-brand-primary/30 p-2.5 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 text-sm"
                    />
                  </div>
                </div>
                
                {/* Service Selection */}
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold uppercase text-brand-muted">
                    Service <span className="text-brand-accent">*</span>
                  </label>
                  <select 
                    value={service} 
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-brand-primary/30 p-2.5 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all text-sm"
                    required
                  >
                    <option value="">Select service</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                
                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold uppercase text-brand-muted">
                    Project Details <span className="text-brand-accent">*</span>
                  </label>
                  <textarea 
                    ref={messageInputRef}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={handleFocusMessage}
                    onBlur={handleBlurMessage}
                    rows={4}
                    placeholder={DEFAULT_MESSAGE}
                    className={`w-full bg-brand-primary/30 p-3 rounded-lg outline-none font-medium text-brand-foreground border border-white/5 focus:border-brand-accent/50 transition-all placeholder:text-brand-muted/50 resize-none text-sm ${
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
                  <div className={`text-xs font-medium ${
                    status === 'success' ? 'text-green-500' : 
                    status === 'error' ? 'text-red-500' : 
                    'text-brand-muted'
                  }`}>
                    {status === 'success' && <Send size={14} className="inline mr-1" />}
                    {statusMessage}
                  </div>
                )}
                
                <button 
                  disabled={status === 'sending'} 
                  type="submit" 
                  className="w-full bg-brand-accent text-brand-primary py-3 rounded-lg font-semibold tracking-wide uppercase shadow-lg hover:bg-white hover:text-brand-primary active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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