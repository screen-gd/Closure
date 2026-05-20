import type { Metadata } from "next";
import { Plus, FolderKanban, AlertCircle } from "lucide-react";
import Link from "next/link";
import { getProjectSummaries, getProjectCount, getMaxProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Roadmap Nexus",
  description: "Manage your projects.",
};

export default async function AdminProjectsPage() {
  const summaries = await getProjectSummaries();
  const count = await getProjectCount();
  const max = await getMaxProjects();
  const atLimit = count >= max;

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Projects</h1>
          <p className="mt-1 text-[#5c6878]">
            Manage your projects. Free plan: {count}/{max} used.
          </p>
        </div>
        <button
          disabled={atLimit}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
            atLimit
              ? "cursor-not-allowed bg-[#dde4ec] text-[#8a95a3]"
              : "bg-[#07111d] text-white hover:bg-[#0f1a28]"
          }`}
        >
          <Plus className="h-4 w-4" />
          New project
        </button>
      </div>

      {atLimit && (
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Free plan limit reached ({max} projects). Upgrade to Pro for unlimited projects.
        </div>
      )}

      <div className="space-y-3">
        {summaries.map((project) => (
          <Link
            key={project.slug}
            href={`/admin/p/${project.slug}`}
            className="flex items-center justify-between rounded-lg border border-[#dde4ec] bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f3f5]">
                <FolderKanban className="h-5 w-5 text-[#5c6878]" />
              </div>
              <div>
                <h2 className="font-semibold text-[#07111d]">{project.name}</h2>
                <p className="text-sm text-[#8a95a3]">
                  {project.roadmapCount} roadmap &middot; {project.changelogCount} changelog &middot; {project.feedbackCount} feedback
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-[#145ee8]">Manage</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
