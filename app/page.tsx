import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  FileText,
  LockKeyhole,
  Map,
  MessageCircle,
  MessagesSquare,
  Minus,
  Monitor,
  Search,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import type React from "react";

import Github from "@thesvg/react/github";
import Postgresql from "@thesvg/react/postgresql";
import Prisma from "@thesvg/react/prisma";
import TailwindCss from "@thesvg/react/tailwind-css";
import Typescript from "@thesvg/react/typescript";

import { PretextHeroHeading } from "@/components/pretext-hero-heading";
import { SiteBackground } from "@/components/site-background";

const modules = [
  {
    title: "Public roadmap",
    description:
      "Publish planned, in-progress, and future work without moving users into a third-party roadmap tool.",
    icon: <Map />,
    tone: "green",
  },
  {
    title: "Changelog",
    description:
      "Turn shipped work into a clean release history your customers can scan, trust, and share.",
    icon: <FileText />,
    tone: "blue",
  },
  {
    title: "Feedback board",
    description:
      "Collect requests, votes, and status changes in a customer-facing workflow you fully own.",
    icon: <MessagesSquare />,
    tone: "purple",
  },
];

const stackItems = [
  { title: "Next.js", logo: <NextLogoMark /> },
  { title: "TypeScript", logo: <Typescript aria-hidden="true" /> },
  { title: "Tailwind", logo: <TailwindCss aria-hidden="true" /> },
  { title: "Prisma", logo: <Prisma aria-hidden="true" /> },
  { title: "PostgreSQL", logo: <Postgresql aria-hidden="true" /> },
];

const included = [
  ["Public roadmap", "Share what is planned and what is already moving."],
  ["Public changelog", "Publish releases in one readable customer-facing feed."],
  ["Feedback board", "Collect ideas, votes, and requests from your users."],
  ["Basic admin", "Manage roadmap items, changelog posts, and feedback."],
  ["Single-project setup", "Run one focused updates portal for one product."],
  ["Docs and examples", "Start with install, configure, run locally, and deploy."],
];

const notIncluded = [
  ["Multi-project workspace", "Reserved for a future Pro layer."],
  ["Premium themes", "Keep the open-source core clean and focused."],
  ["Advanced integrations", "Slack, email, CRM, and workflow sync come later."],
  ["Enterprise auth", "SSO, audit logs, and role systems stay out of the free core."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteBackground />
      <HeroSection />
      <SurfaceBridge />
      <ProductSystem />
      <WhyOwnIt />
      <ProductPreviewSection />
      <FreeIncludes />
      <StackSection />
      <DocsSection />
      <FinalCta />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-stage">
        <p className="hero-status">
          <span />
          100% Open Source
        </p>

        <img
          src="/brand/logo-text-cropped.webp"
          alt="Roadmap Nexus Free"
          className="hero-brand"
        />

        <PretextHeroHeading>
          The open-source, self-hostable roadmap, changelog, and feedback platform.
        </PretextHeroHeading>

        <p className="hero-lede">Ship transparently. Engage users. Build in the open.</p>

        <div className="hero-actions">
          <a href="#demo" className="button button-primary">
            <Monitor />
            View Demo
          </a>
          <a href="#github" className="button button-secondary">
            <Github aria-hidden="true" />
            Open GitHub
          </a>
        </div>

        <div className="hero-trust-row" aria-label="Product highlights">
          <span>
            <LockKeyhole />
            Self-hosted
          </span>
          <span>
            <Code2 />
            Developer Friendly
          </span>
          <span>
            <ShieldCheck />
            Privacy First
          </span>
          <span>
            <Sparkles />
            Loved by Developers
          </span>
        </div>

        <span className="hero-guide hero-guide-left" aria-hidden="true" />
        <span className="hero-guide hero-guide-right" aria-hidden="true" />

        <img
          src="/brand/hero-icon-server-final.png"
          alt=""
          className="hero-orbit-icon hero-orbit-icon-server"
          aria-hidden="true"
        />
        <img
          src="/brand/hero-icon-users-final.png"
          alt=""
          className="hero-orbit-icon hero-orbit-icon-users"
          aria-hidden="true"
        />
        <img
          src="/brand/hero-icon-chart-final.png"
          alt=""
          className="hero-orbit-icon hero-orbit-icon-chart"
          aria-hidden="true"
        />
        <img
          src="/brand/hero-icon-feedback-final.png"
          alt=""
          className="hero-orbit-icon hero-orbit-icon-feedback"
          aria-hidden="true"
        />

        <div className="hero-product-frame" aria-label="Roadmap Nexus product preview">
          <img
            src="/brand/hero-section-asset-final.png"
            alt="Roadmap Nexus interface with roadmap, changelog, and feedback modules"
            className="hero-product-image"
          />
        </div>
      </div>
    </section>
  );
}

function SurfaceBridge() {
  const surfaces = [
    {
      title: "Roadmap",
      description: "Show what is planned, in progress, and coming next.",
      icon: <Map />,
    },
    {
      title: "Changelog",
      description: "Publish shipped work as a clean public release history.",
      icon: <FileText />,
    },
    {
      title: "Feedback",
      description: "Collect votes and requests without sending users elsewhere.",
      icon: <MessagesSquare />,
    },
  ];

  return (
    <section className="surface-bridge" aria-label="Product surfaces">
      <div className="surface-track">
        {surfaces.map((surface) => (
          <article key={surface.title} className="surface-card">
            <span>{surface.icon}</span>
            <div>
              <h2>{surface.title}</h2>
              <p>{surface.description}</p>
            </div>
            <ArrowRight />
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductSystem() {
  return (
    <section className="grid-section" id="demo">
      <div className="section-header section-header-wide">
        <h2>Everything buyers ask for</h2>
        <p>
          Give users one public place to see what is planned, what shipped, and
          where their feedback stands.
        </p>
      </div>

      <div className="module-grid">
        {modules.map((item) => (
          <article className="module-cell" key={item.title}>
            <div className={`icon-tile ${item.tone}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.title === "Public roadmap" ? <RoadmapPreview compact /> : null}
            {item.title === "Changelog" ? <ChangelogPreview compact /> : null}
            {item.title === "Feedback board" ? <FeedbackPreview compact /> : null}
          </article>
        ))}
      </div>

    </section>
  );
}

function WhyOwnIt() {
  return (
    <section className="grid-section">
      <div className="split-heading">
        <div>
          <h2>Stop renting the product ops layer.</h2>
        </div>
        <p>
          Roadmaps, changelogs, and feedback are customer trust surfaces. Keep
          them inside your own stack instead of spreading product context across
          rented dashboards.
        </p>
      </div>

      <div className="comparison-grid">
        <article>
          <p className="comparison-label muted">Hosted roadmap tools</p>
          <h3>Another bill that grows with your audience.</h3>
          <ul>
            <li>Recurring monthly pricing</li>
            <li>Data sits in a third-party workflow</li>
            <li>Branding and UX are vendor constrained</li>
            <li>Integrations decide your roadmap process</li>
          </ul>
        </article>

        <article className="comparison-positive">
          <p className="comparison-label">Roadmap Nexus</p>
          <h3>A code-owned portal your team can ship and extend.</h3>
          <ul>
            <li>Open-source core with no tracked-user fees</li>
            <li>Roadmap, releases, votes, and feedback in Postgres</li>
            <li>Built on Next.js, TypeScript, Tailwind, Prisma</li>
            <li>Designed to become your product&apos;s updates hub</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section className="grid-section">
      <div className="section-header">
        <h2>Not a placeholder template.</h2>
        <p>
          The free core includes working UI patterns for roadmap, changelog,
          and feedback so the product feels real before the backend grows.
        </p>
      </div>

      <div className="preview-grid">
        <ProductPanel title="Roadmap" description="Show what is planned and in progress.">
          <RoadmapPreview />
        </ProductPanel>
        <ProductPanel title="Changelog" description="Give every release a clean public home.">
          <ChangelogPreview />
        </ProductPanel>
        <ProductPanel title="Feedback" description="Let users vote without leaving your brand.">
          <FeedbackPreview />
        </ProductPanel>
      </div>
    </section>
  );
}

function FreeIncludes() {
  return (
    <section className="grid-section">
      <div className="free-layout">
        <div className="free-copy">
          <h2>What you get for free</h2>
          <p>
            Everything needed to launch a public roadmap, changelog, and
            feedback board for one product without asking for budget approval.
          </p>
        </div>

        <FeatureListCard
          title="Included in Free"
          marker="check"
          items={included}
        />
        <FeatureListCard
          title="Not in Free"
          marker="minus"
          items={notIncluded}
        />
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section className="grid-section">
      <div className="section-header section-header-wide">
        <h2>Familiar production stack</h2>
        <p>
          No mystery framework and no vendor-specific runtime. Clone it,
          change it, deploy it, and keep ownership.
        </p>
      </div>

      <div className="stack-grid">
        {stackItems.map((item) => (
          <article key={item.title}>
            <div className="stack-logo">{item.logo}</div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

    </section>
  );
}

function DocsSection() {
  return (
    <section className="grid-section docs-section" id="docs">
      <div className="docs-copy">
        <h2>Docs that reduce setup risk</h2>
        <p>
          Clear setup paths for local development, deployment, environment
          variables, and extension points.
        </p>
        <ul>
          {[
            "Clear, step-by-step instructions",
            "Copy-paste ready code and commands",
            "Deployment guides for popular platforms",
            "Keep your roadmap in sync everywhere",
          ].map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="docs-crop">
        <DocsMockup />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="grid-section final-cta">
      <img src="/brand/logo-text-cropped.webp" alt="Roadmap Nexus" />
      <h2>Own the roadmap layer. Stop renting it.</h2>
      <p>
        Start from a working product communication layer and spend engineering
        time on the parts that make your product different.
      </p>

      <div className="hero-actions">
        <a href="#demo" className="button button-primary">
          <Monitor />
          View Demo
        </a>
        <a href="#github" className="button button-secondary">
          <Github aria-hidden="true" />
          Open GitHub
        </a>
      </div>

      <footer>
        <a href="#github">
          <Github aria-hidden="true" />
          GitHub
        </a>
        <a href="#docs">
          <BookOpen />
          Docs
        </a>
        <a href="#demo">
          <Monitor />
          Demo
        </a>
        <a href="#license">MIT License</a>
      </footer>
    </section>
  );
}

function ProductPanel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="preview-panel">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  );
}

function RoadmapPreview({ compact = false }: { compact?: boolean }) {
  const groups = [
    {
      label: "In Progress",
      count: "2",
      dot: "green",
      rows: compact
        ? []
        : [
            ["Public API", "Q2 2024"],
            ["Custom domains", "Q2 2024"],
          ],
    },
    {
      label: "Planned",
      count: "3",
      dot: "blue",
      rows: compact
        ? []
        : [
            ["Team permissions", "Q3 2024"],
            ["Advanced analytics", "Q3 2024"],
            ["SAML SSO", "Q2 2024"],
          ],
    },
    {
      label: "Future",
      count: compact ? "2" : "3",
      dot: "gray",
      rows: compact
        ? []
        : [
            ["Mobile SDK", "Q4 2024"],
            ["Plugin marketplace", "Q1 2025"],
            ["Audit logs", "Q1 2025"],
          ],
    },
  ];

  return (
    <div className="mini-product">
      <h4>Roadmap</h4>
      <p>See what&apos;s planned and in progress.</p>
      <div className="roadmap-list">
        {groups.map((group) => (
          <div key={group.label} className="roadmap-group">
            <div className="roadmap-row">
              <span className={`dot ${group.dot}`} />
              <strong>{group.label}</strong>
              <em>{group.count}</em>
            </div>
            {group.rows.length > 0 ? (
              <div className="roadmap-items">
                {group.rows.map(([name, quarter]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <small>{quarter}</small>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <a href="#demo">
        View full roadmap
        <ArrowRight />
      </a>
    </div>
  );
}

function ChangelogPreview({ compact = false }: { compact?: boolean }) {
  const releases = compact
    ? [
        {
          version: "v1.2.0",
          date: "May 12, 2024",
          items: ["Custom domain support", "Public API beta", "Dashboard performance"],
        },
      ]
    : [
        {
          version: "v1.2.0",
          date: "May 12, 2024",
          items: ["Added custom domain support", "Public API beta", "Improved dashboard performance"],
        },
        {
          version: "v1.1.0",
          date: "Apr 28, 2024",
          items: ["Team permissions", "Invite links", "Audit logs"],
        },
        {
          version: "v1.0.0",
          date: "Apr 10, 2024",
          items: ["Initial release", "Roadmap, Changelog, Feedback", "Self-hostable core"],
        },
      ];

  return (
    <div className="mini-product">
      <h4>Changelog</h4>
      <p>Stay up to date with the latest changes.</p>
      <div className="release-list">
        {releases.map((release, index) => (
          <article key={release.version}>
            <div>
              <strong>{release.version}</strong>
              {index === 0 ? <span>Latest</span> : null}
              <small>{release.date}</small>
            </div>
            <ul>
              {release.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#demo">
              View changes
              <ArrowRight />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeedbackPreview({ compact = false }: { compact?: boolean }) {
  const rows = compact
    ? [
        ["128", "Add dark mode", "Planned", "23", "purple"],
        ["96", "SAML SSO", "Planned", "19", "purple"],
        ["74", "Webhooks", "In Progress", "12", "green"],
      ]
    : [
        ["128", "Add dark mode", "Planned", "23", "purple"],
        ["96", "SAML SSO support", "Planned", "10", "purple"],
        ["74", "Webhook events", "In Progress", "12", "green"],
        ["42", "Export analytics", "Under Review", "7", "orange"],
        ["31", "Mobile app", "Planned", "5", "purple"],
      ];

  return (
    <div className="mini-product feedback-mini">
      <div className="feedback-toolbar">
        <span>
          <Search />
          Search feedback...
        </span>
        <button>
          <SlidersHorizontal />
          Trending
          <ChevronDown />
        </button>
      </div>
      <div className="feedback-list">
        {rows.map(([votes, title, status, comments, tone]) => (
          <div key={title} className="feedback-row">
            <span className="vote-box">
              <ChevronUp />
              {votes}
            </span>
            <strong>{title}</strong>
            <em className={tone}>{status}</em>
            <small>
              <MessageCircle />
              {comments}
            </small>
          </div>
        ))}
      </div>
      {!compact ? (
        <button className="submit-feedback">Submit feedback</button>
      ) : null}
      <a href="#demo">
        View all feedback
        <ArrowRight />
      </a>
    </div>
  );
}

function FeatureListCard({
  title,
  marker,
  items,
}: {
  title: string;
  marker: "check" | "minus";
  items: string[][];
}) {
  return (
    <article className="feature-list-card">
      <div className="feature-card-title">
        <span>{marker === "check" ? <ShieldCheck /> : <Minus />}</span>
        <h3>{title}</h3>
      </div>
      <div>
        {items.map(([itemTitle, description]) => (
          <div className="feature-list-item" key={itemTitle}>
            <span>
              {marker === "check" ? <Check /> : <Shield />}
            </span>
            <div>
              <h4>{itemTitle}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function DocsMockup() {
  return (
    <div className="docs-mockup">
      <div className="docs-topbar">
        <img src="/brand/logo-text-cropped.webp" alt="Roadmap Nexus Free Docs" />
        <div className="docs-search">
          <Search />
          Search docs...
          <kbd>K</kbd>
        </div>
      </div>

      <div className="docs-body">
        <aside>
          <p className="active-dot">Introduction</p>
          <h5>Get started</h5>
          {["Install", "Configure", "Run Locally", "Deploy"].map((item, index) => (
            <span key={item} className={index === 0 ? "active" : ""}>
              <em>{index + 1}</em>
              {item}
            </span>
          ))}
          <h5>Guides</h5>
          {["Customization", "Integrations", "Analytics", "Feedback"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </aside>

        <div className="docs-content">
          <p className="step-pill">1 Install</p>
          <h3>Install Roadmap Nexus Free</h3>
          <p>Get started by installing the project and its dependencies.</p>
          <div className="tabs">
            <span className="active">npm</span>
            <span>pnpm</span>
            <span>yarn</span>
            <span>bun</span>
          </div>
          <Terminal command="npx create-next-app@latest roadmap-nexus --example roadmap-nexus-free" />
          <p>Then install dependencies and navigate into the project.</p>
          <Terminal command={"cd roadmap-nexus\nnpm install"} multiline />
          <div className="accordion">
            {[
              ["2", "Configure", "Set up environment variables and connect your services."],
              ["3", "Run Locally", "Start the development server and explore the app."],
              ["4", "Deploy", "Deploy to Vercel, Railway, Fly.io, or your own server."],
            ].map(([step, title, desc]) => (
              <div key={title}>
                <span>{step}</span>
                <strong>{title}</strong>
                <small>{desc}</small>
                <ChevronDown />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Terminal({ command }: { command: string; multiline?: boolean }) {
  return (
    <div className="terminal-block">
      <p>Terminal</p>
      <pre>{command}</pre>
      <Copy />
    </div>
  );
}

function NextLogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      role="img"
      aria-label="Next.js logo"
      className={className}
    >
      <circle cx="64" cy="64" r="64" fill="currentColor" />
      <path
        d="M38 36h10.7l45.8 70.9H83.8L38 36Z"
        fill="white"
      />
      <path
        d="M81.5 36H92v56.8L81.5 76.6V36Z"
        fill="white"
      />
      <path
        d="M38 92V36l10.7 16.6V92H38Z"
        fill="white"
      />
    </svg>
  );
}
