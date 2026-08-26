import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { PageID } from '../types';
import { getPathFromPageId, getRouteFromPath } from '../utils/routes';

interface SiteContextValue {
  currentPage: PageID;
  isContactOpen: boolean;
  contactSubject: string;
  navigateTo: (page: PageID, hash?: string, routePath?: string) => void;
  setIsContactOpen: (open: boolean) => void;
  setContactSubject: (subject: string) => void;
  openContactModal: (subject?: string) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within SiteProvider');
  return ctx;
}

interface SiteProviderProps {
  initialPage?: PageID;
  initialOpenContact?: boolean;
  children: React.ReactNode;
}

export const SiteProvider: React.FC<SiteProviderProps> = ({ initialPage = 'home', initialOpenContact = false, children }) => {
  const [currentPage, setCurrentPage] = useState<PageID>(initialPage);
  const [isContactOpen, setIsContactOpen] = useState(initialOpenContact);
  const [contactSubject, setContactSubject] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    if (subject) {
      setContactSubject(subject);
      setIsContactOpen(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      const route = getRouteFromPath(window.location.pathname);
      if (route.openContact) {
        setIsContactOpen(true);
      } else {
        setCurrentPage(route.page);
        setIsContactOpen(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((page: PageID, hash?: string, routePath?: string) => {
    const path = routePath || getPathFromPageId(page);
    const route = getRouteFromPath(path);

    if (route.openContact) {
      setIsContactOpen(true);
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', path);
      }
    } else {
      setCurrentPage(route.page);
      setIsContactOpen(false);

      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', path);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (hash && route.page === 'home') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    }
  }, []);

  const openContactModal = useCallback((subject?: string) => {
    if (subject) setContactSubject(subject);
    setIsContactOpen(true);
  }, []);

  return (
    <SiteContext.Provider value={{ currentPage, isContactOpen, contactSubject, navigateTo, setIsContactOpen, setContactSubject, openContactModal }}>
      {children}
    </SiteContext.Provider>
  );
};
