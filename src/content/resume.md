---
stylesheet: resume.css
marked_options:
  breaks: true
---

# Bradley Thompson

Portland, OR (Remote) | (971) 732-6272 | mail@bradlet.com | linkedin.com/in/thompson-bradley

## SUMMARY
Senior Platform Engineer who builds developer platforms and scales cloud infrastructure across AWS and GCP. Led a multi-terabyte database migration, architected internal deployment and provisioning systems that increased release velocity 5x, and scaled Kubernetes workloads supporting financial systems processing $700M+ in daily transactions. Career built from backend engineering at eBay through infrastructure modernization to full platform ownership — focused on developer velocity, system reliability, and cost efficiency.

## CORE SKILLS
- **Cloud:** AWS (EKS, MSK, RDS, VPC, IAM), GCP (GKE, AlloyDB, Cloud Run, Pub/Sub, Dataflow, GAR, IAM)
- **Infrastructure & IaC:** Kubernetes, Terraform, Helm, Kustomize, Docker, Pulumi, GitHub Actions, GitLab CI/CD
- **Databases:** PostgreSQL (AlloyDB, RDS Aurora, Cloud SQL), Firestore, Redis
- **Observability:** OpenTelemetry, Prometheus, Grafana, Datadog
- **Languages:** Go, Kotlin, Python, TypeScript, HCL, Rust
- **Networking & Service Mesh:** Istio, Envoy, gRPC
- **Security & Compliance:** SOC2, Workload Identity Federation, HashiCorp Vault
- **Other:** Agentic & Context Engineering, Mentorship & Hiring

## EXPERIENCE

### Flexa · Portland, OR (Remote)
**Senior Platform Engineer** · Feb 2026 – Apr 2026 *(laid off, ~50% company-wide reduction)*
*Tech: Kubernetes, GCP, OpenTelemetry, Grafana*
- Automated Kubernetes node upgrades and redesigned access control to enforce least-privilege principles, improving cluster reliability and simplifying developer onboarding.
- Stood up distributed tracing (OpenTelemetry + Grafana) from zero, enabling production debugging and reducing incident time-to-resolution.
- Prototyped and co-onboarded a durable feature flag service supporting secure client- and server-side usage, enabling safer progressive delivery.

### Glide (Typeguard Inc.) · Portland, OR (Remote)
**Senior Platform Engineer** · Apr 2025 – Feb 2026  
**Software Engineer, Platform & Infra** · Apr 2024 – Apr 2025
*Tech: GCP, Kubernetes (GKE), Cloud Run, Terraform, PostgreSQL, AlloyDB, Pub/Sub*
- Built and owned an internal developer platform serving ~20 engineers, increasing deployment frequency 5x (from <1/day to 5+ deployments/day) through improved CI/CD pipelines and infrastructure workflows.
- Led decomposition of a monolithic system into microservices using a slim, custom service mesh and Pub/Sub event-driven architecture, enabling independent service scaling and faster iteration.
- Drove a stalled multi-terabyte AlloyDB migration to completion, resolving complex PostgreSQL compatibility issues and mentoring a junior engineer through the process.
- Reduced critical query latency by 98% (34ms → <1ms) via index-only scans, cutting database CPU usage by 90%.
- Architected migration of private npm package registry from npmjs to Google Artifact Registry (GAR), implementing workload identity federation for keyless authentication. Eliminated ~2 production outages/month caused by credential rotation failures across multiple microservices.
- Designed and built an internal infrastructure provisioning platform (YAML-based interface + GitHub Actions), enabling self-service infrastructure for engineering teams and standardizing deployment workflows.
- Cut infrastructure costs by ~$47K/year through database access optimization, GKE resource tuning, and replacing Terraform Cloud with self-hosted state management in GCS.
- Owned production infrastructure spanning 10+ Cloud Run services and a GKE cluster with 100+ workloads, providing on-call support and ensuring system reliability.

### Tradewell Technologies
**Platform Engineer** · Nov 2022 – Apr 2024
*Tech: AWS, EKS, RDS Aurora, Kafka (MSK), Prometheus, Grafana, Redis*
- Scaled AWS EKS workloads supporting financial systems that grew from $100M to $700M+ in daily transaction volume, serving clients including JP Morgan, Trumid, Two Sigma, and Brevan Howard.
- Drove major Kubernetes cluster upgrades in-house, eliminating external consultant dependency and maintaining zero-downtime across production trading systems.
- Redesigned observability stack (Prometheus/Grafana), improving alert quality and reducing mean time to detection (MTTD).
- Led RDS Aurora migration, owning data model design and performance tuning for high-throughput financial systems.
- Refactored analytics service architecture, replacing complex graph processing with Redis caching — removing 5,500+ lines of code while improving query performance and maintainability.
- Automated client onboarding workflow, reducing tenant setup time from ~45 minutes to under 3 minutes (around a 15x improvement).
- Built RFQ gateway integrations for automated bond trading, connecting the platform to institutional trading venues.
- Established penetration testing infrastructure and coordinated security assessments as part of SOC2 compliance program.

### Bumped
**Software Engineer** · Oct 2021 – Oct 2022
*Tech: GCP, Terraform, Dataflow, Microservices*
- Rebuilt GCP infrastructure using Terraform, improving system reliability and reducing developer onboarding time by 3x.
- Developed microservices and Dataflow (Apache Beam) pipelines for stock reward processing systems.
- Partnered with fintech providers (Plaid, Apex) on secure integrations for financial transaction workflows.

### eBay
**Software Engineer** · Apr 2020 – Oct 2021
*Tech: Kotlin, Java, Scala, GraphQL, REST*
- Built backend services for Seller Hub and eBay Collection, serving millions of users.
- Led GraphQL and OpenAPI modernization efforts, reducing technical debt and improving API developer experience.

## EDUCATION
- **M.S. Computer Science**, Portland State University, 2024
  Focus: Cybersecurity, Machine Learning, Language Models
- **B.S. Computer Science**, Portland State University, 2020

## PROJECTS & INTERESTS
- **Projects:** Custom OS kernel in Rust; Custom Trading Card Game builder & player (www.tcg-sandbox.com)
- **Interests:** Marathon running, D&D (Dungeon Master), guitar
