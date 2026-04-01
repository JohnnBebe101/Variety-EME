import React from 'react';
import { Section } from './Section';

interface PageStubProps {
  title: string;
}

export const PageStub: React.FC<PageStubProps> = ({ title }) => {
  return (
    <Section className="bg-brand-primary text-brand-foreground min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight">{title}</h1>
      </div>
    </Section>
  );
};
