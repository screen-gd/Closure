import Link from "next/link";

export default function PublicNotFound() {
  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a95a3]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#07111d]">Page not found</h1>
        <p className="mt-2 text-[#5c6878]">This project or page does not exist.</p>
        <Link
          href="/roadmap"
          className="mt-6 inline-flex rounded-lg bg-[#07111d] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]"
        >
          Browse roadmap
        </Link>
      </div>
    </div>
  );
}
