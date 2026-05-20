"use client";

import {
  LayoutDashboard,
  Map,
  FileText,
  MessagesSquare,
  Settings,
  LogOut,
  FolderKanban,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/projects", icon: FolderKanban, label: "Projects" },
  { href: "/admin/roadmap", icon: Map, label: "Roadmap" },
  { href: "/admin/changelog", icon: FileText, label: "Changelog" },
  { href: "/admin/feedback", icon: MessagesSquare, label: "Feedback" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-56 flex-col border-r border-[#dde4ec] bg-white sm:flex">
      <div className="flex h-14 items-center gap-2 border-b border-[#dde4ec] px-5">
        <img
          src="/brand/logo-text-cropped.webp"
          alt="Roadmap Nexus"
          className="h-4 w-auto object-contain"
        />
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive =
            href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
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
      </nav>
      <div className="border-t border-[#dde4ec] p-3">
        <Link
          href="/roadmap"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#5c6878] transition-colors hover:bg-[#f1f3f5] hover:text-[#07111d]"
        >
          <LogOut className="h-4 w-4" />
          View public site
        </Link>
      </div>
    </aside>
  );
}
