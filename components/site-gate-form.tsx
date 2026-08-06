'use client';

import { LockKeyhole } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function SiteGateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTo = searchParams.get('from') || '/';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/site-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setError(data.error ?? 'Unable to verify password.');
        return;
      }

      router.replace(redirectTo);
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="site-gate-form" onSubmit={handleSubmit}>
      <label htmlFor="site-access-password">Access password</label>
      <div className="site-gate-input-row">
        <LockKeyhole aria-hidden="true" />
        <input
          id="site-access-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>

      {error ? (
        <p className="site-gate-error" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="button button-primary site-gate-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Checking...' : 'Unlock access'}
      </button>
    </form>
  );
}
