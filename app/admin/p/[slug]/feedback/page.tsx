import type { Metadata } from "next";
import { ArrowLeft, ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";
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
  return { title: `Manage Feedback — ${project.name} — Roadmap Nexus`, description: `Review and moderate feedback for ${project.name}.` };
}

const statusStyles: Record<string, string> = {
  under_review: "bg-orange-50 text-orange-700",
  planned: "bg-blue-50 text-blue-700",
  in_progress: "bg-amber-50 text-amber-700",
  shipped: "bg-emerald-50 text-emerald-700",
};

export default async function ProjectAdminFeedbackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const posts = await getFeedbackPosts(slug);

  return (
    <div className="p-6">
      <Link
        href={`/admin/p/${slug}`}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[#5c6878] transition hover:text-[#07111d]"
      >
        <ArrowLeft className="h-4 w-4" />
        {project.name}
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Feedback</h1>
        <p className="mt-1 text-[#5c6878]">Review and moderate feedback for {project.name}.</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#dde4ec] bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#dde4ec] bg-[#fafbfc] text-left text-xs font-semibold uppercase tracking-wider text-[#8a95a3]">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Votes</th>
              <th className="px-4 py-3">Comments</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#edf1f5]">
            {posts.map((post) => (
              <tr key={post.id} className="transition hover:bg-[#fafbfc]">
                <td className="px-4 py-3 text-sm font-medium text-[#07111d]">{post.title}</td>
                <td className="px-4 py-3 text-sm text-[#5c6878]">{post.authorName}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[post.status] || ""}`}>
                    {post.status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-[#8a95a3]">
                    <ChevronUp className="h-3.5 w-3.5" />{post.votes}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm text-[#8a95a3]">
                    <MessageCircle className="h-3.5 w-3.5" />{post.comments}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-[#8a95a3]">{post.createdAt}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-sm font-semibold text-[#145ee8] transition hover:text-[#0f4bc7]">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
