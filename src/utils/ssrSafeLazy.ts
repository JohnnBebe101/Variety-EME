import React, { lazy } from 'react';

type Factory<T> = () => Promise<{ default: T }>;

/**
 * Module registry for SSR-safe lazy loading.
 * During prerender, modules are registered here so renderToString() can access them
 * without needing React.Suspense (which renderToString doesn't support).
 */
const ssrRegistry = new Map<string, React.ComponentType<any>>();

/**
 * Register a component for SSR rendering.
 * Must be called in scripts/prerender.ts before renderToString() for each lazy page.
 *
 * @param key - The registry key (matches the second arg of ssrSafeLazy)
 * @param Component - The component to register
 */
export function registerSSRModule(key: string, Component: React.ComponentType<any>) {
  ssrRegistry.set(key, Component);
}

/**
 * SSR-safe wrapper around React.lazy().
 *
 * In the browser: delegates to React.lazy() normally.
 * During SSR (renderToString): looks up the component from the registry,
 * avoiding the need for Suspense boundaries which SSR doesn't support.
 *
 * @param factory - Dynamic import factory (e.g., () => import('./MyPage'))
 * @param registryKey - Unique key for SSR module registration
 * @returns A component that works in both browser and SSR contexts
 */
export function ssrSafeLazy<T extends React.ComponentType<any>>(
  factory: Factory<T>,
  registryKey: string
): React.LazyExoticComponent<T> {
  if (typeof window !== 'undefined') {
    return lazy(factory);
  }
  const SSRPage: React.FC<any> = (props) => {
    const Component = ssrRegistry.get(registryKey);
    if (!Component) {
      throw new Error(
        `[ssrSafeLazy] Module "${registryKey}" not pre-loaded. ` +
        `Add it to the lazyModules array in scripts/prerender.ts.`
      );
    }
    return React.createElement(Component, props);
  };
  return SSRPage as unknown as React.LazyExoticComponent<T>;
}
