import type { Metadata } from "next";
import {
  FolderKanban,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { getProjectSummaries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin Dashboard — Roadmap Nexus",
  description: "Overview of all projects.",
};

export default async function AdminDashboard() {
  const summaries = await getProjectSummaries();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Dashboard</h1>
        <p className="mt-1 text-[#5c6878]">All projects overview.</p>
      </div>

      <div className="space-y-4">
        {summaries.map((project) => (
          <Link
            key={project.slug}
            href={`/admin/p/${project.slug}`}
            className="block rounded-lg border border-[#dde4ec] bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f3f5]">
                  <FolderKanban className="h-5 w-5 text-[#5c6878]" />
                </div>
                <div>
                  <h2 className="font-semibold text-[#07111d]">{project.name}</h2>
                  <p className="text-sm text-[#8a95a3]">/{project.slug}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#8a95a3]" />
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <span className="text-[#5c6878]">
                <strong className="text-[#07111d]">{project.roadmapCount}</strong> roadmap items
              </span>
              <span className="text-[#5c6878]">
                <strong className="text-[#07111d]">{project.changelogCount}</strong> changelog entries
              </span>
              <span className="text-[#5c6878]">
                <strong className="text-[#07111d]">{project.feedbackCount}</strong> feedback posts
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
