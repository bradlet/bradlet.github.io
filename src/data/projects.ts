export interface Project {
  name: string;
  url: string;
  description: string;
  techStack: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    name: "TCG Sandbox",
    url: "https://www.tcg-sandbox.com",
    description:
      "A full-stack, real-time multiplayer platform for creating and playing custom trading card games. Designed and built end-to-end — from infrastructure to UI.",
    techStack: [
      "React 19 + TypeScript",
      "Kotlin / Ktor",
      "GCP (Cloud Run, GKE, Firestore, Cloud Storage)",
      "WebSockets + Protocol Buffers",
      "Terraform IaC",
      "GitHub Actions CI/CD",
    ],
    features: [
      "Custom game creation with configurable rules and play grids",
      "Card design with artwork uploads and attribute schemas",
      "Deck building with per-set quantity tracking",
      "Real-time multiplayer lobbies via WebSocket",
      "Lore and content management with Markdown support",
      "Contract-first development: OpenAPI + Protobuf type generation",
    ],
  },
];

export const githubUrl = "https://github.com/bradlet";
