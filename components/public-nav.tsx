"use client";

import { Map, FileText, MessagesSquare, Shield, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/roadmap", icon: Map, label: "Roadmap" },
  { href: "/changelog", icon: FileText, label: "Changelog" },
  { href: "/feedback", icon: MessagesSquare, label: "Feedback" },
];

export function PublicNav({ projects }: { projects: { name: string; slug: string }[] }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#dde4ec] bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/roadmap" className="flex items-center gap-2 font-semibold tracking-tight">
            <img
              src="/brand/logo-text-cropped.webp"
              alt="Roadmap Nexus"
              className="h-5 w-auto object-contain"
            />
          </Link>
          <div className="h-4 w-px bg-[#dde4ec]" />
          <ProjectSwitcher projects={projects} pathname={pathname} />
        </div>
        <nav className="flex items-center gap-1">
          {links.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#eaf1ff] text-[#145ee8]"
                    : "text-[#5c6878] hover:bg-[#f1f3f5] hover:text-[#07111d]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
          <div className="ml-2 h-5 w-px bg-[#dde4ec]" />
          <Link
            href="/admin"
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              pathname.startsWith("/admin")
                ? "bg-[#eaf1ff] text-[#145ee8]"
                : "text-[#5c6878] hover:bg-[#f1f3f5] hover:text-[#07111d]"
            }`}
          >
            <Shield className="h-4 w-4" />
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

function ProjectSwitcher({
  projects,
  pathname,
}: {
  projects: { name: string; slug: string }[];
  pathname: string;
}) {
  const currentSlug = pathname.match(/^\/p\/([^/]+)/)?.[1];
  const current = currentSlug
    ? projects.find((p) => p.slug === currentSlug)
    : projects[0];

  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-[#5c6878] transition-colors hover:bg-[#f1f3f5] hover:text-[#07111d]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {current?.name ?? "Select project"}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-1 w-56 origin-top-left scale-95 rounded-lg border border-[#dde4ec] bg-white p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        {projects.map((p) => {
          const isActive = currentSlug === p.slug || (!currentSlug && projects[0]?.slug === p.slug);
          return (
            <Link
              key={p.slug}
              href={`/p/${p.slug}/roadmap`}
              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#eaf1ff] text-[#145ee8]"
                  : "text-[#5c6878] hover:bg-[#f1f3f5] hover:text-[#07111d]"
              }`}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {p.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
