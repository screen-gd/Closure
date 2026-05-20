import type { Metadata } from "next";
import { Plus, Sparkles } from "lucide-react";
import { getChangelogEntries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Manage Changelog — Roadmap Nexus",
  description: "Manage changelog entries.",
};

export default async function AdminChangelogPage() {
  const entries = await getChangelogEntries();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Changelog</h1>
          <p className="mt-1 text-[#5c6878]">Manage changelog entries.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[#07111d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]">
          <Plus className="h-4 w-4" />
          Add entry
        </button>
      </div>

      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-lg border border-[#dde4ec] bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-[#07111d]">{entry.version}</h3>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                Latest
              </span>
              <span className="ml-auto text-sm text-[#8a95a3]">{entry.date}</span>
              <button className="text-sm font-semibold text-[#145ee8] transition hover:text-[#0f4bc7]">
                Edit
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.sections.map((section, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    section.type === "new"
                      ? "bg-emerald-50 text-emerald-700"
                      : section.type === "improved"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-amber-50 text-amber-700"
                  }`}
                >
                  <Sparkles className="h-3 w-3" />
                  {section.items.length} {section.type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
