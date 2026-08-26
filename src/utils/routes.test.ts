import { describe, it, expect } from 'vitest';
import { getPathFromPageId, getRouteFromPath } from '../utils/routes';

describe('routes utils', () => {
  it('getPathFromPageId returns / for home', () => {
    expect(getPathFromPageId('home')).toBe('/');
  });

  it('getPathFromPageId returns a string for any page', () => {
    const path = getPathFromPageId('telecommunications');
    expect(typeof path).toBe('string');
    expect(path.startsWith('/')).toBe(true);
  });

  it('getRouteFromPath returns home for /', () => {
    const route = getRouteFromPath('/');
    expect(route.page).toBe('home');
  });

  it('getRouteFromPath returns correct page for known path', () => {
    const route = getRouteFromPath('/telecommunications');
    expect(route.page).toBe('telecommunications');
  });

  it('getRouteFromPath returns home for unknown path', () => {
    const route = getRouteFromPath('/unknown');
    expect(route.page).toBe('home');
  });
});
