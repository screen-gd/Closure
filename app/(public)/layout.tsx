import type React from "react";
import { getProjects } from "@/lib/data";
import { PublicNav } from "@/components/public-nav";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const projects = await getProjects();

  return (
    <div className="flex min-h-dvh flex-col bg-[#f4f3ef] text-[#07111d]">
      <PublicNav projects={projects} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
