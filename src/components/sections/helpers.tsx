import React from 'react';

export const SectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4 mb-10">
    <h3 className="text-h4 font-semibold tracking-tight text-brand-foreground">{title}</h3>
    <div className="text-brand-muted text-sm leading-relaxed">{children}</div>
  </div>
);

export const ReferenceBlock = ({ items }: { items: string[] }) => (
  <div className="bg-brand-surface border border-white/10 rounded-[2rem] p-8 mb-10">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Reference Projects</h3>
    <ul className="list-disc list-inside space-y-3 text-brand-muted text-sm">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

export const CalloutBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 border border-brand-accent/20 rounded-[2rem] p-8 mb-10 text-brand-foreground">
    <p className="text-sm font-semibold leading-relaxed">{children}</p>
  </div>
);

export const RelatedServices = ({ links, onNavigate }: { links: Array<{ label: string; path: string }>; onNavigate?: (path: string) => void }) => (
  <div className="bg-brand-surface border border-white/10 rounded-[2rem] p-8">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">Related Services</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {links.map((link) => (
        onNavigate ? (
          <button key={link.path} onClick={() => onNavigate(link.path)} className="text-left block rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-brand-foreground hover:border-brand-accent hover:bg-white/10 transition-colors">
            {link.label} →
          </button>
        ) : (
          <a key={link.path} href={link.path} className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-brand-foreground hover:border-brand-accent hover:bg-white/10 transition-colors">
            {link.label} →
          </a>
        )
      ))}
    </div>
  </div>
);

export const PageCtaBar = ({ onNavigate }: { onNavigate?: (path: string) => void } = {}) => (
  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-[2rem] p-8 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <p className="text-brand-foreground font-semibold">Discuss Your Project</p>
    {onNavigate ? (
      <button onClick={() => onNavigate('/contact')} className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
        Discuss Your Project →
      </button>
    ) : (
      <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
        Discuss Your Project →
      </a>
    )}
  </div>
);
