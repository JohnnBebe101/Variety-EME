
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

hydrateRoot(
  rootElement,
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
