export interface Role {
  title: string;
  period: string;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  roles: Role[];
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  year: number;
  focus?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Flexa",
    location: "Portland, OR (Remote)",
    roles: [{ title: "Senior Platform Engineer", period: "Feb 2026 – Apr 2026" }],
    highlights: [
      "Automated Kubernetes node upgrades and redesigned access control to enforce least-privilege principles, improving cluster reliability and simplifying developer onboarding.",
      "Stood up distributed tracing (OpenTelemetry + Grafana) from zero, enabling production debugging and reducing incident time-to-resolution.",
      "Prototyped and co-onboarded a durable feature flag service supporting secure client- and server-side usage, enabling safer progressive delivery.",
    ],
  },
  {
    company: "Glide (Typeguard Inc.)",
    location: "Portland, OR (Remote)",
    roles: [
      { title: "Senior Platform Engineer", period: "Apr 2025 – Feb 2026" },
      {
        title: "Software Engineer, Platform & Infra",
        period: "Apr 2024 – Apr 2025",
      },
    ],
    highlights: [
      "Built and owned an internal developer platform serving ~20 engineers, increasing deployment frequency 5x (from <1/day to 5+/day) through improved CI/CD pipelines and infrastructure workflows.",
      "Led decomposition of a monolithic system into microservices using a custom service mesh and Pub/Sub event-driven architecture, enabling independent service scaling and faster iteration.",
      "Drove a stalled multi-terabyte AlloyDB migration to completion, resolving PostgreSQL compatibility issues and mentoring a junior engineer through the process. Reduced critical query latency by 98% (34ms → <1ms) via index-only scans, cutting database CPU usage by 90%.",
      "Architected migration of private npm package registry from npmjs to Google Artifact Registry (GAR) with workload identity federation for keyless auth — eliminating ~2 production outages/month from credential rotation failures across multiple microservices.",
      "Designed and built an internal infrastructure provisioning platform (YAML-based interface + GitHub Actions), enabling self-service infrastructure for engineering teams and standardizing deployment workflows. Cut infrastructure costs by ~$47K/year.",
      "Owned production infrastructure spanning 10+ Cloud Run services and a GKE cluster with 100+ workloads, providing on-call support and ensuring system reliability.",
    ],
  },
  {
    company: "Tradewell Technologies",
    location: "Remote",
    roles: [
      { title: "Platform Engineer", period: "Nov 2022 – Apr 2024" },
    ],
    highlights: [
      "Scaled AWS EKS workloads supporting financial systems that grew from $100M to $700M+ in daily transaction volume, serving clients including JP Morgan, Trumid, Two Sigma, and Brevan Howard.",
      "Drove major Kubernetes cluster upgrades in-house, eliminating external consultant dependency and maintaining zero-downtime across production trading systems.",
      "Redesigned Prometheus/Grafana observability stack, improving alert quality and reducing mean time to detection (MTTD).",
      "Led RDS Aurora migration, owning data model design and performance tuning for high-throughput financial systems.",
      "Refactored analytics service architecture, replacing complex graph processing with Redis caching — removing 5,500+ lines of code while improving query performance and maintainability.",
      "Automated client onboarding workflow, reducing tenant setup time from ~45 minutes to under 3 minutes (15x improvement).",
      "Built RFQ gateway integrations for automated bond trading and established penetration testing infrastructure for SOC2 compliance.",
    ],
  },
  {
    company: "Bumped",
    location: "Portland, OR",
    roles: [
      { title: "Software Engineer", period: "Oct 2021 – Oct 2022" },
    ],
    highlights: [
      "Rebuilt GCP infrastructure using Terraform, improving system reliability and reducing developer onboarding time by 3x.",
      "Developed microservices and Dataflow (Apache Beam) pipelines for stock reward processing systems.",
      "Partnered with fintech providers (Plaid, Apex) on secure integrations for financial transaction workflows.",
    ],
  },
  {
    company: "eBay",
    location: "Portland, OR",
    roles: [
      { title: "Software Engineer", period: "Apr 2020 – Oct 2021" },
    ],
    highlights: [
      "Built backend services for Seller Hub and eBay Collection, serving millions of users.",
      "Led GraphQL and OpenAPI modernization efforts, reducing technical debt and improving API developer experience.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "M.S. Computer Science",
    school: "Portland State University",
    year: 2024,
    focus: "Cybersecurity, Machine Learning, Language Models",
  },
  {
    degree: "B.S. Computer Science",
    school: "Portland State University",
    year: 2020,
  },
];
