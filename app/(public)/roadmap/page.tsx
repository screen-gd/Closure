import type { Metadata } from "next";
import { ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getRoadmapItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Roadmap — Roadmap Nexus",
  description: "See what we have planned, what we are working on, and what has shipped.",
};

const statusConfig = {
  planned: { label: "Planned", color: "bg-blue-500", textColor: "text-blue-700", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
  in_progress: { label: "In Progress", color: "bg-amber-500", textColor: "text-amber-700", bgColor: "bg-amber-50", borderColor: "border-amber-200" },
  shipped: { label: "Shipped", color: "bg-emerald-500", textColor: "text-emerald-700", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" },
};

export default async function RoadmapPage() {
  const items = await getRoadmapItems();

  const grouped = {
    planned: items.filter((i) => i.status === "planned"),
    in_progress: items.filter((i) => i.status === "in_progress"),
    shipped: items.filter((i) => i.status === "shipped"),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-3.5 py-1 text-sm font-semibold text-[#145ee8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#145ee8]" />
          Public Roadmap
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07111d] sm:text-4xl">
          What we are building
        </h1>
        <p className="mt-2 max-w-2xl text-[#5c6878]">
          See what we have planned, what we are working on, and what has shipped.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {(["planned", "in_progress", "shipped"] as const).map((status) => {
          const config = statusConfig[status];
          const statusItems = grouped[status];
          return (
            <div key={status}>
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${config.color}`} />
                <h2 className="font-semibold text-[#07111d]">{config.label}</h2>
                <span className="ml-auto rounded-full bg-[#f1f3f5] px-2 py-0.5 text-xs font-semibold text-[#5c6878]">
                  {statusItems.length}
                </span>
              </div>
              <div className="space-y-3">
                {statusItems.length === 0 && (
                  <p className="rounded-lg border border-dashed border-[#dde4ec] p-6 text-center text-sm text-[#8a95a3]">
                    No items yet
                  </p>
                )}
                {statusItems.map((item) => (
                  <Link
                    key={item.id}
                    href="#"
                    className="group block rounded-lg border border-[#dde4ec] bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-[#07111d] group-hover:text-[#145ee8]">
                        {item.title}
                      </h3>
                      <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-[#8a95a3]" />
                    </div>
                    <p className="mt-1 text-sm text-[#5c6878] line-clamp-2">{item.summary}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs font-medium text-[#8a95a3]">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${config.bgColor} ${config.textColor}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChevronUp className="h-3 w-3" />
                        {item.votes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {item.comments}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
