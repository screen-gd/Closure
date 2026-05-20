import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `Settings — ${project.name} — Roadmap Nexus`, description: `Configure ${project.name} settings.` };
}

export default async function ProjectAdminSettingsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <div className="p-6">
      <Link
        href={`/admin/p/${slug}`}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[#5c6878] transition hover:text-[#07111d]"
      >
        <ArrowLeft className="h-4 w-4" />
        {project.name}
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Settings</h1>
        <p className="mt-1 text-[#5c6878]">Configure {project.name} settings.</p>
      </div>

      <div className="max-w-xl space-y-6">
        <div className="rounded-lg border border-[#dde4ec] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#07111d]">Project details</h2>
          <p className="mt-1 text-sm text-[#5c6878]">These details appear on this project&apos;s public pages.</p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#07111d]">Project name</label>
              <input
                type="text"
                defaultValue={project.name}
                className="mt-1.5 block w-full rounded-lg border border-[#dde4ec] bg-white px-3 py-2 text-sm text-[#07111d] transition focus:border-[#145ee8] focus:outline-none focus:ring-2 focus:ring-[#145ee8]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#07111d]">Project slug</label>
              <input
                type="text"
                defaultValue={project.slug}
                className="mt-1.5 block w-full rounded-lg border border-[#dde4ec] bg-white px-3 py-2 text-sm text-[#8a95a3] transition focus:border-[#145ee8] focus:outline-none focus:ring-2 focus:ring-[#145ee8]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#07111d]">Description</label>
              <textarea
                rows={3}
                defaultValue={project.description}
                className="mt-1.5 block w-full rounded-lg border border-[#dde4ec] bg-white px-3 py-2 text-sm text-[#07111d] transition focus:border-[#145ee8] focus:outline-none focus:ring-2 focus:ring-[#145ee8]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#07111d]">Logo</label>
              <div className="mt-1.5 flex items-center gap-4">
                <img src={project.logoUrl} alt="Current logo" className="h-10 w-auto rounded object-contain" />
                <button className="rounded-lg border border-[#dde4ec] bg-white px-3 py-1.5 text-sm font-semibold text-[#5c6878] transition hover:bg-[#f1f3f5]">Change logo</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#07111d]">Primary color</label>
              <div className="mt-1.5 flex items-center gap-3">
                <input type="color" defaultValue={project.primaryColor || "#07111d"} className="h-9 w-9 cursor-pointer rounded-lg border border-[#dde4ec] bg-white" />
                <span className="text-sm text-[#5c6878]">{project.primaryColor || "#07111d"}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-[#dde4ec] pt-4">
            <button className="rounded-lg bg-[#07111d] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]">Save changes</button>
          </div>
        </div>

        <div className="rounded-lg border border-[#dde4ec] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#07111d]">Danger zone</h2>
          <p className="mt-1 text-sm text-[#5c6878]">Irreversible actions for this project.</p>
          <div className="mt-4">
            <button className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100">
              Delete project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
