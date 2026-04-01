
/// <reference types="vite/client" />

/**
 * API Utility for calling the backend proxy.
 * No API keys or secrets are stored here.
 */

const PROXY_URL = import.meta.env.VITE_PROXY_URL || '';

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function callProxy<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, ...fetchOptions } = options;
  
  let url = `${PROXY_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API call failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error calling proxy endpoint ${endpoint}:`, error);
    throw error;
  }
}
