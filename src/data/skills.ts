export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Cloud",
    items: [
      "AWS (EKS, MSK, RDS, VPC, S3, IAM)",
      "GCP (GKE, AlloyDB, Cloud SQL, Pub/Sub, Dataflow, Cloud Run, Cloud Storage, IAM)",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      "Terraform",
      "Kubernetes",
      "Docker",
      "Terraform CDK",
      "Pulumi",
      "GitHub Actions",
      "GitLab CI/CD",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Firestore", "Redis"],
  },
  {
    category: "Languages",
    items: ["Kotlin", "Go", "Python", "TypeScript", "HCL"],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "Prometheus", "Grafana", "DataDog"],
  },
  {
    category: "AI Tooling",
    items: ["Cursor", "Claude Code", "Copilot"],
  },
  {
    category: "Other",
    items: ["Security & Compliance (SOC2)", "Mentorship & Hiring"],
  },
];
