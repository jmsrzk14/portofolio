import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, type ReactNode } from 'react';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY || POSTHOG_KEY === 'phc_YOUR_KEY_HERE') {
      console.warn('[PostHog] VITE_POSTHOG_KEY belum diatur di .env — analytics dinonaktifkan.');
      return;
    }
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
    });
  }, []);

  if (!POSTHOG_KEY || POSTHOG_KEY === 'phc_YOUR_KEY_HERE') {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

export { posthog };
