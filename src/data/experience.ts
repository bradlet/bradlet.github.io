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
    location: "Remote",
    roles: [{ title: "Senior Platform Engineer", period: "Feb 2026 — Present" }],
    highlights: [],
  },
  {
    company: "Glide (Typeguard Inc.)",
    location: "Portland, OR (Remote)",
    roles: [
      { title: "Senior Platform Engineer", period: "Apr 2025 - Feb 2026" },
      {
        title: "Software Engineer, Platform & Infra",
        period: "Apr 2024 — Apr 2025",
      },
    ],
    highlights: [
      "Architected and owned a core internal infrastructure & deployment platform serving ~20 engineers, increasing developer velocity from one release/day to many per day. Introduced service mesh architecture to decouple monolith into microservices with event-driven components.",
      "Led mission-critical database migrations from self-managed PostgreSQL to AlloyDB, improving durability, performance, and reducing operational overhead. Tuned PostgreSQL for high-traffic workloads (thousands of TPS). Reduced query latency by 98% via partial indexes, cutting DB CPU usage by 90%.",
      "Supported 10+ Cloud Run deployments (~30 containers), a 100+ workload (1000+ pod) GKE cluster, 5 AlloyDB clusters, and 3 Cloud SQL instances handling tens of thousands of txns/sec.",
    ],
  },
  {
    company: "Tradewell Technologies",
    location: "Remote",
    roles: [
      { title: "Platform Engineer", period: "Nov 2022 — Apr 2024" },
    ],
    highlights: [
      "Scaled 20+ AWS EKS workloads handling hundreds of millions of dollars in daily transaction volume; drove major cluster upgrades, SOC2 compliance, and secure VPC design trusted with sensitive financial data.",
      "Redesigned Prometheus/Grafana observability stack, reducing MTTD and improving alert quality.",
      "Managed AWS RDS Aurora migration, data model and performance tuning, and Kafka (MSK) ETL pipelines.",
    ],
  },
  {
    company: "Bumped",
    location: "Portland, OR",
    roles: [
      { title: "Software Engineer", period: "Oct 2021 — Oct 2022" },
    ],
    highlights: [
      "Modernized GCP infra with Terraform, improving reliability and cutting onboarding time 3x.",
      "Built microservices & Beam-SDK Dataflow pipelines for stock reward processing.",
    ],
  },
  {
    company: "eBay",
    location: "Portland, OR",
    roles: [
      { title: "Software Engineer", period: "Apr 2020 — Oct 2021" },
    ],
    highlights: [
      "Developed backend services in Kotlin, Java, and Scala for Seller Hub and eBay Collection.",
      "Supported team as Scrum Master; led GraphQL/OpenAPI modernization.",
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
