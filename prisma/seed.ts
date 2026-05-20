import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.upsert({
    where: { slug: "roadmap-nexus" },
    update: {},
    create: {
      name: "Roadmap Nexus",
      slug: "roadmap-nexus",
      description: "The open-source, self-hostable roadmap, changelog, and feedback platform.",
      logoUrl: "/brand/logo-text-cropped.webp",
      primaryColor: "#07111d",
    },
  });

  const roadmapItems = [
    { title: "Public API", summary: "REST API for roadmap items, changelog entries, and feedback posts.", status: "in_progress", category: "Platform" },
    { title: "Custom domains", summary: "Serve your roadmap from your own domain with automatic SSL.", status: "in_progress", category: "Infrastructure" },
    { title: "Team permissions", summary: "Role-based access for editors, reviewers, and admins.", status: "planned", category: "Admin" },
    { title: "Advanced analytics", summary: "Track views, votes, and conversion metrics.", status: "planned", category: "Analytics" },
    { title: "SAML SSO", summary: "Enterprise single sign-on for team access.", status: "planned", category: "Enterprise" },
    { title: "Dark mode", summary: "System-aware dark theme for all public and admin pages.", status: "shipped", category: "UI", displayOrder: 1 },
    { title: "Email subscriptions", summary: "Let users subscribe to roadmap and changelog updates.", status: "shipped", category: "Notifications", displayOrder: 2 },
    { title: "Feedback voting", summary: "Upvote and comment on feature requests.", status: "shipped", category: "Feedback", displayOrder: 3 },
  ];

  for (const item of roadmapItems) {
    const slug = item.title.toLowerCase().replace(/\s+/g, "-");
    await prisma.roadmapItem.upsert({
      where: { projectId_slug: { projectId: project.id, slug } },
      update: {},
      create: { ...item, slug, projectId: project.id },
    });
  }

  const v1 = await prisma.changelogEntry.create({
    data: {
      version: "v1.2.0",
      slug: "v1-2-0",
      title: "Custom domains and Public API beta",
      summary: "New custom domain support and public API beta.",
      publishedAt: new Date("2024-05-12"),
      projectId: project.id,
      sections: {
        create: [
          {
            type: "new",
            title: "New Features",
            description: "Added custom domain support with automatic SSL\nPublic API beta for roadmap and changelog data",
          },
          {
            type: "improved",
            title: "Improvements",
            description: "Dashboard performance improved by 40%\nReduced bundle size by 25%",
          },
        ],
      },
    },
  });

  const v2 = await prisma.changelogEntry.create({
    data: {
      version: "v1.1.0",
      slug: "v1-1-0",
      title: "Team permissions and audit logs",
      summary: "New team permissions system and audit logging.",
      publishedAt: new Date("2024-04-28"),
      projectId: project.id,
      sections: {
        create: [
          {
            type: "new",
            title: "New Features",
            description: "Team permissions system\nInvite links for team members\nBasic audit logging",
          },
          {
            type: "fixed",
            title: "Fixes",
            description: "Fixed pagination on feedback board\nResolved markdown rendering in changelog entries",
          },
        ],
      },
    },
  });

  const v3 = await prisma.changelogEntry.create({
    data: {
      version: "v1.0.0",
      slug: "v1-0-0",
      title: "Initial release",
      summary: "First public release of Roadmap Nexus.",
      publishedAt: new Date("2024-04-10"),
      projectId: project.id,
      sections: {
        create: [
          {
            type: "new",
            title: "Initial Release",
            description: "Public roadmap with planned, in-progress, and shipped columns\nChangelog with release notes grouped by type\nFeedback board with voting and comments\nAdmin dashboard for managing all content\nSelf-hostable core with PostgreSQL and Prisma",
          },
        ],
      },
    },
  });

  const feedbackPosts = [
    { title: "Add dark mode support", content: "Would love to see a dark theme option for the public roadmap pages.", status: "shipped", authorName: "Alex Chen", votesCount: 128 },
    { title: "SAML SSO support", content: "Enterprise teams need SSO for admin access.", status: "planned", authorName: "Sarah Miller", votesCount: 96 },
    { title: "Webhook events", content: "Send webhooks when roadmap items or changelog entries are updated.", status: "in_progress", authorName: "Jordan Lee", votesCount: 74 },
    { title: "Export analytics data", content: "Ability to export view and vote data to CSV or JSON.", status: "under_review", authorName: "Priya Patel", votesCount: 42 },
    { title: "Mobile app", content: "Native mobile app for managing roadmap and reviewing feedback.", status: "planned", authorName: "Mike Torres", votesCount: 31 },
  ];

  for (const post of feedbackPosts) {
    await prisma.feedbackPost.create({
      data: {
        ...post,
        projectId: project.id,
      },
    });
  }

  await prisma.adminUser.upsert({
    where: { email: "admin@roadmapnexus.com" },
    update: {},
    create: {
      email: "admin@roadmapnexus.com",
      name: "Admin",
      role: "admin",
    },
  });

  console.log("Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
