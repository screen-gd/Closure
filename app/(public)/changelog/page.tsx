import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { getChangelogEntries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Changelog — Roadmap Nexus",
  description: "Stay up to date with the latest changes and improvements.",
};

const typeConfig = {
  new: { label: "New", color: "text-emerald-700", bgColor: "bg-emerald-50" },
  improved: { label: "Improved", color: "text-blue-700", bgColor: "bg-blue-50" },
  fixed: { label: "Fixed", color: "text-amber-700", bgColor: "bg-amber-50" },
};

export default async function ChangelogPage() {
  const entries = await getChangelogEntries();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-3.5 py-1 text-sm font-semibold text-[#145ee8]">
          <Sparkles className="h-3.5 w-3.5" />
          Changelog
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07111d] sm:text-4xl">
          Release history
        </h1>
        <p className="mt-2 max-w-2xl text-[#5c6878]">
          Stay up to date with the latest changes and improvements.
        </p>
      </div>

      <div className="space-y-8">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-lg border border-[#dde4ec] bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#07111d]">{entry.version}</h2>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Latest
              </span>
              <span className="ml-auto text-sm text-[#8a95a3]">{entry.date}</span>
            </div>

            <div className="mt-5 space-y-5">
              {entry.sections.map((section, idx) => {
                const config = typeConfig[section.type];
                return (
                  <div key={idx}>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.bgColor} ${config.color}`}
                    >
                      {config.label}
                    </span>
                    {section.title && (
                      <h3 className="mt-2 font-semibold text-[#07111d]">{section.title}</h3>
                    )}
                    <ul className="mt-2 space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#5c6878]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dde4ec]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
