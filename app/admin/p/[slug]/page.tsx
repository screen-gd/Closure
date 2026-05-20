import type { Metadata } from "next";
import { ArrowLeft, Map, FileText, MessagesSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getAdminStats } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.name} — Admin — Roadmap Nexus`, description: `Admin dashboard for ${project.name}.` };
}

export default async function ProjectAdminPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const stats = await getAdminStats(slug);

  const cards = [
    { label: "Roadmap items", value: stats.totalRoadmapItems, icon: Map, href: `/admin/p/${slug}/roadmap`, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Changelog entries", value: stats.totalChangelogEntries, icon: FileText, href: `/admin/p/${slug}/changelog`, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { label: "Feedback posts", value: stats.totalFeedbackPosts, icon: MessagesSquare, href: `/admin/p/${slug}/feedback`, color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Total votes", value: stats.totalVotes, icon: ThumbsUp, href: `/admin/p/${slug}/feedback`, color: "text-amber-600", bgColor: "bg-amber-50" },
  ];

  return (
    <div className="p-6">
      <Link
        href="/admin"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[#5c6878] transition hover:text-[#07111d]"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">{project.name}</h1>
        <p className="mt-1 text-[#5c6878]">{project.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-lg border border-[#dde4ec] bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className={`rounded-lg ${card.bgColor} p-2.5 ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#07111d]">{card.value}</p>
                <p className="text-sm text-[#5c6878]">{card.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href={`/p/${slug}/roadmap`}
          className="rounded-lg border border-[#dde4ec] bg-white px-4 py-2 text-sm font-semibold text-[#5c6878] transition hover:bg-[#f1f3f5]"
        >
          View public roadmap
        </Link>
        <Link
          href={`/admin/p/${slug}/settings`}
          className="rounded-lg border border-[#dde4ec] bg-white px-4 py-2 text-sm font-semibold text-[#5c6878] transition hover:bg-[#f1f3f5]"
        >
          Project settings
        </Link>
      </div>
    </div>
  );
}
