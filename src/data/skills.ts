export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Cloud",
    items: [
      "AWS (EKS, MSK, RDS, VPC, IAM)",
      "GCP (GKE, AlloyDB, Cloud Run, Pub/Sub, Dataflow, GAR, IAM)",
    ],
  },
  {
    category: "Infrastructure & IaC",
    items: [
      "Kubernetes",
      "Terraform",
      "Helm",
      "Kustomize",
      "Docker",
      "Pulumi",
      "GitHub Actions",
      "GitLab CI/CD",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (AlloyDB, RDS Aurora, Cloud SQL)", "Firestore", "Redis"],
  },
  {
    category: "Languages",
    items: ["Go", "Kotlin", "Python", "TypeScript", "HCL", "Rust"],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "Prometheus", "Grafana", "Datadog"],
  },
  {
    category: "Networking & Service Mesh",
    items: ["Istio", "Envoy", "gRPC"],
  },
  {
    category: "Security & Compliance",
    items: ["SOC2", "Workload Identity Federation", "HashiCorp Vault"],
  },
  {
    category: "Other",
    items: ["Agentic & Context Engineering", "Mentorship & Hiring"],
  },
];
