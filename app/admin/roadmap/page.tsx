import type { Metadata } from "next";
import { Plus, ChevronUp, MessageCircle } from "lucide-react";
import { getRoadmapItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Manage Roadmap — Roadmap Nexus",
  description: "Manage roadmap items.",
};

const statusStyles: Record<string, string> = {
  planned: "bg-blue-50 text-blue-700",
  in_progress: "bg-amber-50 text-amber-700",
  shipped: "bg-emerald-50 text-emerald-700",
};

export default async function AdminRoadmapPage() {
  const items = await getRoadmapItems();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Roadmap</h1>
          <p className="mt-1 text-[#5c6878]">Manage roadmap items.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[#07111d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]">
          <Plus className="h-4 w-4" />
          Add item
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#dde4ec] bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#dde4ec] bg-[#fafbfc] text-left text-xs font-semibold uppercase tracking-wider text-[#8a95a3]">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Votes</th>
              <th className="px-4 py-3">Comments</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#edf1f5]">
            {items.map((item) => (
              <tr key={item.id} className="transition hover:bg-[#fafbfc]">
                <td className="px-4 py-3 text-sm font-medium text-[#07111d]">{item.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[item.status] || ""}`}
                  >
                    {item.status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-[#5c6878]">{item.category}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-[#8a95a3]">
                    <ChevronUp className="h-3.5 w-3.5" />
                    {item.votes}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-[#8a95a3]">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {item.comments}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-sm font-semibold text-[#145ee8] transition hover:text-[#0f4bc7]">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
