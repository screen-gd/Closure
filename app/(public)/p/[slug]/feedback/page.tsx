import type { Metadata } from "next";
import {
  ChevronUp,
  MessageCircle,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, getFeedbackPosts } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.name} Feedback — Roadmap Nexus`, description: `Submit and vote on feedback for ${project.name}.` };
}

const statusConfig: Record<string, { label: string; color: string; bgColor: string }> = {
  under_review: { label: "Under Review", color: "text-orange-700", bgColor: "bg-orange-50" },
  planned: { label: "Planned", color: "text-blue-700", bgColor: "bg-blue-50" },
  in_progress: { label: "In Progress", color: "text-amber-700", bgColor: "bg-amber-50" },
  shipped: { label: "Shipped", color: "text-emerald-700", bgColor: "bg-emerald-50" },
};

export default async function ProjectFeedbackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const posts = await getFeedbackPosts(slug);
  const sorted = [...posts].sort((a, b) => b.votes - a.votes);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-3.5 py-1 text-sm font-semibold text-[#145ee8]">
          <MessageCircle className="h-3.5 w-3.5" />
          {project.name} &middot; Feedback
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07111d] sm:text-4xl">
          Feature requests
        </h1>
        <p className="mt-2 max-w-2xl text-[#5c6878]">
          Vote on features you want and submit your own ideas.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-[#dde4ec] bg-white px-3 py-2 text-sm text-[#8a95a3]">
          <SlidersHorizontal className="h-4 w-4" />
          Trending
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[#07111d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]">
          <Plus className="h-4 w-4" />
          Submit feedback
        </button>
      </div>

      <div className="divide-y divide-[#edf1f5] overflow-hidden rounded-lg border border-[#dde4ec] bg-white shadow-sm">
        {sorted.map((post) => {
          const config = statusConfig[post.status];
          return (
            <div
              key={post.id}
              className="grid grid-cols-[3.5rem_1fr_auto_auto] items-center gap-3 px-4 py-3 transition hover:bg-[#fafbfc]"
            >
              <div className="flex flex-col items-center gap-0.5 rounded-md border border-[#dde4ec] px-2 py-1 text-xs font-bold text-[#07111d]">
                <ChevronUp className="h-3.5 w-3.5" />
                {post.votes}
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-[#07111d]">{post.title}</h3>
                <p className="truncate text-sm text-[#8a95a3]">{post.authorName}</p>
              </div>
              <span
                className={`hidden rounded-full px-2.5 py-0.5 text-xs font-semibold sm:inline-block ${config.bgColor} ${config.color}`}
              >
                {config.label}
              </span>
              <span className="hidden items-center gap-1 text-sm text-[#8a95a3] sm:flex">
                <MessageCircle className="h-3.5 w-3.5" />
                {post.comments}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
