import { describe, it, expect } from 'vitest';
import { ROUTES, ROUTE_MAP, PAGE_PATH_MAP } from '../config/routes.config';

describe('routes.config', () => {
  it('exports at least 31 routes', () => {
    expect(ROUTES.length).toBeGreaterThanOrEqual(31);
  });

  it('each route has required fields', () => {
    for (const route of ROUTES) {
      expect(route).toHaveProperty('page');
      expect(route).toHaveProperty('path');
      expect(route).toHaveProperty('prerender');
      expect(typeof route.page).toBe('string');
      expect(typeof route.path).toBe('string');
      expect(typeof route.prerender).toBe('boolean');
    }
  });

  it('all paths start with /', () => {
    for (const route of ROUTES) {
      expect(route.path.startsWith('/')).toBe(true);
    }
  });

  it('home route exists', () => {
    const home = ROUTES.find(r => r.path === '/');
    expect(home).toBeDefined();
    expect(home?.page).toBe('home');
  });

  it('ROUTE_MAP provides lookup by path', () => {
    expect(ROUTE_MAP['/']).toBeDefined();
    expect(ROUTE_MAP['/']?.page).toBe('home');
    expect(ROUTE_MAP['/telecommunications']).toBeDefined();
  });

  it('PAGE_PATH_MAP provides home path', () => {
    expect(PAGE_PATH_MAP['home']).toBe('/');
  });

  it('no duplicate paths in ROUTES', () => {
    const paths = ROUTES.map(r => r.path);
    const unique = new Set(paths);
    expect(unique.size).toBe(paths.length);
  });

  it('at least 20 prerender routes', () => {
    const prerenderCount = ROUTES.filter(r => r.prerender).length;
    expect(prerenderCount).toBeGreaterThanOrEqual(20);
  });
});
