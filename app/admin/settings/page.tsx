import type { Metadata } from "next";
import { getProject } from "@/lib/data";

export const metadata: Metadata = {
  title: "Settings — Roadmap Nexus",
  description: "Configure your project settings.",
};

export default async function AdminSettingsPage() {
  const project = (await getProject())!;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#07111d]">Settings</h1>
        <p className="mt-1 text-[#5c6878]">Configure your project settings.</p>
      </div>

      <div className="max-w-xl space-y-6">
        <div className="rounded-lg border border-[#dde4ec] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#07111d]">Project details</h2>
          <p className="mt-1 text-sm text-[#5c6878]">
            These details appear on your public roadmap, changelog, and feedback pages.
          </p>

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
                <img
                  src={project.logoUrl}
                  alt="Current logo"
                  className="h-10 w-auto rounded object-contain"
                />
                <button className="rounded-lg border border-[#dde4ec] bg-white px-3 py-1.5 text-sm font-semibold text-[#5c6878] transition hover:bg-[#f1f3f5]">
                  Change logo
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#07111d]">
                Primary color
              </label>
              <div className="mt-1.5 flex items-center gap-3">
                <input
                  type="color"
                  defaultValue={project.primaryColor || "#07111d"}
                  className="h-9 w-9 cursor-pointer rounded-lg border border-[#dde4ec] bg-white"
                />
                <span className="text-sm text-[#5c6878]">{project.primaryColor || "#07111d"}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-[#dde4ec] pt-4">
            <button className="rounded-lg bg-[#07111d] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1a28]">
              Save changes
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-[#dde4ec] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#07111d]">Danger zone</h2>
          <p className="mt-1 text-sm text-[#5c6878]">
            Irreversible actions for your project.
          </p>
          <div className="mt-4 space-y-3">
            <button className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100">
              Reset all data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
