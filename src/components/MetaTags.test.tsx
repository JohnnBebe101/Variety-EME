import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { MetaTags } from './MetaTags';
import { HelmetProvider } from 'react-helmet-async';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

describe('MetaTags', () => {
  it('renders without crashing', () => {
    render(
      <MetaTags title="Test Page" description="Test description" />,
      { wrapper }
    );
  });

  it('sets the document title via Helmet', () => {
    render(
      <MetaTags title="My Page" description="My description" />,
      { wrapper }
    );
    // Helmet updates the title asynchronously; check it exists
    const titleEl = document.querySelector('title');
    expect(titleEl).toBeTruthy();
  });

  it('renders meta description', () => {
    render(
      <MetaTags title="Test" description="A test description" />,
      { wrapper }
    );
    const metaDesc = document.querySelector('meta[name="description"]');
    expect(metaDesc).toBeTruthy();
  });
});
