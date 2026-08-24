import { PageID } from '../types';
import { ROUTE_MAP, PAGE_PATH_MAP } from '../config/routes.config';

export type { RouteEntry } from '../config/routes.config';

export interface RouteInfo {
  page: PageID;
  openContact?: boolean;
}

const normalizePath = (pathname: string): string => {
  const cleaned = pathname.trim().replace(/\/\/+$/, '');
  return cleaned === '' ? '/' : cleaned;
};

export const getRouteFromPath = (pathname: string): RouteInfo => {
  const path = normalizePath(pathname);
  return ROUTE_MAP[path] ?? { page: 'home' };
};

export const getPathFromPageId = (pageId: PageID): string => {
  return PAGE_PATH_MAP[pageId] ?? '/';
};
