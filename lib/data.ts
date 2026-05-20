import type {
  RoadmapItemData,
  ChangelogEntryData,
  FeedbackPostData,
  ProjectData,
  AdminStats,
  ProjectSummary,
} from "./types";

interface ProjectStore {
  project: ProjectData;
  roadmapItems: RoadmapItemData[];
  changelogEntries: ChangelogEntryData[];
  feedbackPosts: FeedbackPostData[];
}

const MAX_PROJECTS = 3;

const stores: ProjectStore[] = [
  {
    project: {
      name: "Roadmap Nexus",
      slug: "roadmap-nexus",
      description: "The open-source, self-hostable roadmap, changelog, and feedback platform.",
      logoUrl: "/brand/logo-text-cropped.webp",
      primaryColor: "#07111d",
    },
    roadmapItems: [
      { id: "rn-1", title: "Public API", summary: "REST API for roadmap items, changelog entries, and feedback posts.", status: "in_progress", category: "Platform", votes: 128, comments: 23 },
      { id: "rn-2", title: "Custom domains", summary: "Serve your roadmap from your own domain with automatic SSL.", status: "in_progress", category: "Infrastructure", votes: 96, comments: 19 },
      { id: "rn-3", title: "Team permissions", summary: "Role-based access for editors, reviewers, and admins.", status: "planned", category: "Admin", votes: 74, comments: 12 },
      { id: "rn-4", title: "Advanced analytics", summary: "Track views, votes, and conversion metrics.", status: "planned", category: "Analytics", votes: 42, comments: 7 },
      { id: "rn-5", title: "SAML SSO", summary: "Enterprise single sign-on for team access.", status: "planned", category: "Enterprise", votes: 31, comments: 5 },
      { id: "rn-6", title: "Dark mode", summary: "System-aware dark theme for all public and admin pages.", status: "shipped", category: "UI", votes: 185, comments: 28 },
      { id: "rn-7", title: "Email subscriptions", summary: "Let users subscribe to roadmap and changelog updates via email.", status: "shipped", category: "Notifications", votes: 112, comments: 15 },
      { id: "rn-8", title: "Feedback voting", summary: "Upvote and comment on feature requests from the community.", status: "shipped", category: "Feedback", votes: 94, comments: 11 },
    ],
    changelogEntries: [
      { id: "rn-cl-1", version: "v1.2.0", date: "May 12, 2024", sections: [{ type: "new", title: "New Features", items: ["Added custom domain support with automatic SSL", "Public API beta for roadmap and changelog data"] }, { type: "improved", title: "Improvements", items: ["Dashboard performance improved by 40%", "Reduced bundle size by 25%"] }] },
      { id: "rn-cl-2", version: "v1.1.0", date: "Apr 28, 2024", sections: [{ type: "new", title: "New Features", items: ["Team permissions system", "Invite links for team members", "Basic audit logging"] }, { type: "fixed", title: "Fixes", items: ["Fixed pagination on feedback board", "Resolved markdown rendering in changelog entries"] }] },
      { id: "rn-cl-3", version: "v1.0.0", date: "Apr 10, 2024", sections: [{ type: "new", title: "Initial Release", items: ["Public roadmap with planned, in-progress, and shipped columns", "Changelog with release notes grouped by type", "Feedback board with voting and comments", "Admin dashboard for managing all content", "Self-hostable core with PostgreSQL and Prisma"] }] },
    ],
    feedbackPosts: [
      { id: "rn-fb-1", title: "Add dark mode support", description: "Would love to see a dark theme option for public roadmap pages.", status: "shipped", votes: 128, comments: 23, authorName: "Alex Chen", createdAt: "2024-03-15" },
      { id: "rn-fb-2", title: "SAML SSO support", description: "Enterprise teams need SSO for admin access.", status: "planned", votes: 96, comments: 19, authorName: "Sarah Miller", createdAt: "2024-03-18" },
      { id: "rn-fb-3", title: "Webhook events", description: "Send webhooks when roadmap items or changelog entries are updated.", status: "in_progress", votes: 74, comments: 12, authorName: "Jordan Lee", createdAt: "2024-03-20" },
      { id: "rn-fb-4", title: "Export analytics data", description: "Ability to export view and vote data to CSV or JSON.", status: "under_review", votes: 42, comments: 7, authorName: "Priya Patel", createdAt: "2024-03-22" },
      { id: "rn-fb-5", title: "Mobile app", description: "Native mobile app for managing roadmap and reviewing feedback.", status: "planned", votes: 31, comments: 5, authorName: "Mike Torres", createdAt: "2024-03-25" },
    ],
  },
  {
    project: {
      name: "Project Alpha",
      slug: "alpha",
      description: "Sample second project with demo data.",
      logoUrl: "/brand/logo-text-cropped.webp",
      primaryColor: "#145ee8",
    },
    roadmapItems: [
      { id: "al-1", title: "User onboarding flow", summary: "Streamlined signup and first-run experience.", status: "in_progress", category: "UX", votes: 45, comments: 8 },
      { id: "al-2", title: "Payment integration", summary: "Stripe and PayPal checkout support.", status: "planned", category: "Payments", votes: 67, comments: 14 },
      { id: "al-3", title: "Search functionality", summary: "Full-text search across all content.", status: "planned", category: "Core", votes: 33, comments: 6 },
      { id: "al-4", title: "Notification system", summary: "Email and in-app notifications.", status: "shipped", category: "Notifications", votes: 52, comments: 9 },
    ],
    changelogEntries: [
      { id: "al-cl-1", version: "v0.5.0", date: "Jun 1, 2024", sections: [{ type: "new", title: "New", items: ["Notification system", "Basic search"] }, { type: "fixed", title: "Fixes", items: ["Fixed login redirect loop", "Resolved dark mode toggle persistence"] }] },
      { id: "al-cl-2", version: "v0.4.0", date: "May 15, 2024", sections: [{ type: "new", title: "New", items: ["Initial public release", "Core roadmap and changelog"] }] },
    ],
    feedbackPosts: [
      { id: "al-fb-1", title: "Dark mode", description: "Need dark mode for late-night usage.", status: "shipped", votes: 89, comments: 12, authorName: "Tim Clark", createdAt: "2024-04-01" },
      { id: "al-fb-2", title: "API access", description: "Would love a public API for integrations.", status: "planned", votes: 56, comments: 9, authorName: "Lisa Wong", createdAt: "2024-04-05" },
      { id: "al-fb-3", title: "Mobile responsiveness", description: "The dashboard is hard to use on mobile.", status: "under_review", votes: 34, comments: 5, authorName: "Raj Patel", createdAt: "2024-04-10" },
    ],
  },
];

function getStore(slug: string): ProjectStore | undefined {
  return stores.find((s) => s.project.slug === slug);
}

function defaultStore(): ProjectStore {
  return stores[0];
}

export async function getProjects(): Promise<ProjectData[]> {
  return stores.map((s) => s.project);
}

export async function getProject(slug?: string): Promise<ProjectData | undefined> {
  if (slug) return getStore(slug)?.project;
  return defaultStore().project;
}

export async function getProjectSummaries(): Promise<ProjectSummary[]> {
  return stores.map((s) => ({
    name: s.project.name,
    slug: s.project.slug,
    roadmapCount: s.roadmapItems.length,
    changelogCount: s.changelogEntries.length,
    feedbackCount: s.feedbackPosts.length,
  }));
}

export async function getRoadmapItems(slug?: string): Promise<RoadmapItemData[]> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.roadmapItems ?? [];
}

export async function getRoadmapItem(id: string, slug?: string): Promise<RoadmapItemData | undefined> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.roadmapItems.find((item) => item.id === id);
}

export async function getChangelogEntries(slug?: string): Promise<ChangelogEntryData[]> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.changelogEntries ?? [];
}

export async function getChangelogEntry(id: string, slug?: string): Promise<ChangelogEntryData | undefined> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.changelogEntries.find((entry) => entry.id === id);
}

export async function getFeedbackPosts(slug?: string): Promise<FeedbackPostData[]> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.feedbackPosts ?? [];
}

export async function getFeedbackPost(id: string, slug?: string): Promise<FeedbackPostData | undefined> {
  const store = slug ? getStore(slug) : defaultStore();
  return store?.feedbackPosts.find((post) => post.id === id);
}

export async function getAdminStats(slug?: string): Promise<AdminStats> {
  let items: RoadmapItemData[];
  let entries: ChangelogEntryData[];
  let posts: FeedbackPostData[];

  if (slug) {
    const store = getStore(slug);
    if (!store) return { totalRoadmapItems: 0, totalChangelogEntries: 0, totalFeedbackPosts: 0, totalVotes: 0, recentFeedback: [], statusCounts: {} };
    items = store.roadmapItems;
    entries = store.changelogEntries;
    posts = store.feedbackPosts;
  } else {
    items = stores.flatMap((s) => s.roadmapItems);
    entries = stores.flatMap((s) => s.changelogEntries);
    posts = stores.flatMap((s) => s.feedbackPosts);
  }

  const totalVotes = posts.reduce((sum, p) => sum + p.votes, 0);
  const statusCounts: Record<string, number> = {};
  for (const item of items) {
    statusCounts[item.status] = (statusCounts[item.status] || 0) + 1;
  }
  const recentFeedback = [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return {
    totalRoadmapItems: items.length,
    totalChangelogEntries: entries.length,
    totalFeedbackPosts: posts.length,
    totalVotes,
    recentFeedback,
    statusCounts,
  };
}

export async function getMaxProjects(): Promise<number> {
  return MAX_PROJECTS;
}

export async function getProjectCount(): Promise<number> {
  return stores.length;
}
