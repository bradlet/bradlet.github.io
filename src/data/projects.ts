export interface Project {
  name: string;
  url: string;
  description: string;
  techStack: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    name: "tcg-sandbox",
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
  {
    name: "perfi",
    url: "https://github.com/bradlet/perfi",
    description:
      "A Go CLI for personal finance tracking — specifically cost basis calculation for crypto and other assets. Syncs transaction data from Google Sheets into a local SQLite database, calculates gains/losses, and writes results back to the sheet.",
    techStack: [
      "Go (Cobra + Viper)",
      "SQLite",
      "Google Sheets API",
    ],
    features: [
      "Pull transaction data from Google Sheets into a local SQLite database",
      "FIFO and average cost basis calculation methods",
      "Long-term / short-term holding period classification",
      "Record sell transactions locally and sync back to the sheet",
      "Full pipeline command (pull → calc → push) with dry-run support",
      "YAML config with per-asset sheet ranges and CLI flag overrides",
    ],
  },
];

export const githubUrl = "https://github.com/bradlet";
