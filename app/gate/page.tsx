import type { Metadata } from 'next';
import { Suspense } from 'react';

import { SiteBackground } from '@/components/site-background';
import { SiteGateForm } from '@/components/site-gate-form';

export const metadata: Metadata = {
  title: 'Roadmap Nexus — Coming Soon',
  description: 'Roadmap Nexus is under passive development and will be revealed soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SiteGatePage() {
  return (
    <main className="site-shell site-gate-shell">
      <SiteBackground />

      <section className="site-gate-panel" aria-labelledby="site-gate-title">
        <p className="site-gate-status">
          <span />
          Passive development
        </p>

        <img
          src="/brand/logo-text-cropped.webp"
          alt="Roadmap Nexus"
          className="site-gate-brand"
        />

        <h1 id="site-gate-title">We&apos;re building in the background.</h1>
        <p className="site-gate-lede">
          Roadmap Nexus is under passive development and will be revealed soon. If you have
          access, enter the password below to preview the site.
        </p>

        <Suspense fallback={<div className="site-gate-form-fallback" aria-hidden="true" />}>
          <SiteGateForm />
        </Suspense>
      </section>
    </main>
  );
}
