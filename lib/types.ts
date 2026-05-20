export interface ProjectData {
  name: string;
  slug: string;
  description: string;
  logoUrl: string;
  primaryColor?: string;
}

export interface RoadmapItemData {
  id: string;
  title: string;
  summary: string;
  status: "planned" | "in_progress" | "shipped";
  category: string;
  votes: number;
  comments: number;
}

export interface ChangelogEntryData {
  id: string;
  version: string;
  date: string;
  sections: {
    type: "new" | "improved" | "fixed";
    title?: string;
    items: string[];
  }[];
}

export interface FeedbackPostData {
  id: string;
  title: string;
  description: string;
  status: "under_review" | "planned" | "in_progress" | "shipped";
  votes: number;
  comments: number;
  authorName: string;
  createdAt: string;
}

export interface AdminStats {
  totalRoadmapItems: number;
  totalChangelogEntries: number;
  totalFeedbackPosts: number;
  totalVotes: number;
  recentFeedback: FeedbackPostData[];
  statusCounts: Record<string, number>;
}

export interface ProjectSummary {
  name: string;
  slug: string;
  roadmapCount: number;
  changelogCount: number;
  feedbackCount: number;
}
