import React, { lazy } from 'react';

type Factory<T> = () => Promise<{ default: T }>;

const ssrRegistry = new Map<string, React.ComponentType<any>>();

export function registerSSRModule(key: string, Component: React.ComponentType<any>) {
  ssrRegistry.set(key, Component);
}

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
