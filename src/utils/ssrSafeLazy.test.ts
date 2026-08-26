import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { ssrSafeLazy, registerSSRModule } from '../utils/ssrSafeLazy';

// Mock window for SSR path testing
const originalWindow = globalThis.window;

afterEach(() => {
  if (originalWindow === undefined) {
    delete (globalThis as Record<string, unknown>).window;
  } else {
    (globalThis as Record<string, unknown>).window = originalWindow;
  }
});

describe('ssrSafeLazy', () => {
  it('returns a LazyExoticComponent in browser (window defined)', () => {
    const MockComponent = () => React.createElement('div', null, 'test');
    const LazyComp = ssrSafeLazy(
      () => Promise.resolve({ default: MockComponent }),
      '/browser/test'
    );
    expect(LazyComp).toBeDefined();
    expect(typeof LazyComp).toBe('object');
  });

  it('in SSR (no window) with registered module returns callable component', () => {
    delete (globalThis as Record<string, unknown>).window;
    const MockComponent = () => React.createElement('div', null, 'ssr-test');
    registerSSRModule('/ssr/test', MockComponent);

    const LazyComp = ssrSafeLazy(
      () => Promise.resolve({ default: MockComponent }),
      '/ssr/test'
    );
    expect(LazyComp).toBeDefined();
    expect(typeof LazyComp).toBe('function');
  });

  it('in SSR (no window) throws if module not registered', () => {
    delete (globalThis as Record<string, unknown>).window;
    const LazyComp = ssrSafeLazy(
      () => Promise.resolve({ default: () => null }),
      '/ssr/unregistered'
    );
    expect(() => {
      (LazyComp as (props: Record<string, unknown>) => React.ReactNode)({});
    }).toThrow('not pre-loaded');
  });
});

describe('registerSSRModule', () => {
  it('registers and retrieves a module', () => {
    const MockComp = () => null;
    registerSSRModule('/test/registry', MockComp);
    const Lazy = ssrSafeLazy(
      () => Promise.resolve({ default: MockComp }),
      '/test/registry'
    );
    expect(Lazy).toBeDefined();
  });
});
