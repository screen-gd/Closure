import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell min-h-dvh px-6 py-24 text-center">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
