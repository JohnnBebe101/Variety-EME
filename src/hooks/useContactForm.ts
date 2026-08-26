import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface UseContactFormOptions {
  initialService?: string;
  onSuccess?: () => void;
}

const DEFAULT_MESSAGE = 'Tell us about your project requirements, timeline, and how we can help...';

export function useContactForm({ initialService = '', onSuccess }: UseContactFormOptions = {}) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: initialService,
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const resetForm = useCallback(() => {
    setFormData({ fullName: '', email: '', company: '', phone: '', service: '', message: '' });
    setHoneypot('');
    setStatus('idle');
    setStatusMessage('');
  }, []);

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleFocusMessage = useCallback(() => {
    setFormData(prev => {
      if (prev.message === DEFAULT_MESSAGE) {
        return { ...prev, message: '' };
      }
      return prev;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      setStatus('error');
      setStatusMessage('Bot detection triggered.');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.service) {
      setStatus('error');
      setStatusMessage('Please fill all required fields.');
      return;
    }

    if (formData.message === DEFAULT_MESSAGE || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please describe your project requirements.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending your inquiry...');

    try {
      const formBody = new URLSearchParams({
        'form-name': 'contact-modal',
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message === DEFAULT_MESSAGE ? '' : formData.message,
      }).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Thank you! We will be in touch within 24 hours.');
        resetForm();
        onSuccess?.();
      } else {
        setStatus('error');
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Server error. Please try again later.');
    }
  };

  return {
    formData,
    honeypot,
    setHoneypot,
    status,
    statusMessage,
    messageInputRef,
    DEFAULT_MESSAGE,
    handleChange,
    handleFocusMessage,
    handleSubmit,
    resetForm,
  };
}
