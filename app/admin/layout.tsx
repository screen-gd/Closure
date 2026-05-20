import type React from "react";
import { AdminSidebar } from "@/components/admin-nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-[#f4f3ef] text-[#07111d]">
      <AdminSidebar />
      <div className="flex flex-1 flex-col sm:ml-56">
        <header className="sticky top-0 z-30 flex h-14 items-center border-b border-[#dde4ec] bg-white/80 px-4 backdrop-blur-lg sm:px-6">
          <span className="text-sm font-semibold text-[#5c6878]">
            Admin
          </span>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
