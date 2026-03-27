import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Europe Account Opening",
    description:
      "Consolidated the entire European account opening process — previously manual across multiple teams — into a single graph-driven workflow with role-based stage assignments.",
    company: "BTG Pactual",
    role: "Lead Developer",
    impact: "Reduced account opening time from 30 days to 2 days",
    tags: [
      "Next.js",
      "FastAPI",
      "AWS Lambda",
      "SQS",
      "PostgreSQL",
      "Better-Auth",
      "Docker",
      "Kubernetes",
    ],
    category: "operational",
  },
  {
    id: "2",
    title: "Financial Movements Dashboard",
    description:
      "Tactical dashboard consolidating internal financial movement data to support Business Managers in high-stakes decision-making with precise, real-time insights.",
    company: "BTG Pactual",
    role: "Lead Developer",
    impact:
      "Improved decision quality, contributing to increased revenue and reduced client churn",
    tags: [
      "React",
      "MUI",
      "FastAPI",
      "Pandas",
      "MySQL",
      "AWS Lambda",
      "Docker",
    ],
    category: "dashboard",
  },
  {
    id: "3",
    title: "Investor Family Tree",
    company: "BTG Pactual",
    description:
      "Interactive family-tree visualization for the Wealth Management team, mapping investor relationships and financial ties with an algorithm that handles edge cases like divorces and business partnerships.",
    role: "Tech Lead",
    impact:
      "Increased visibility into investor networks, enabling faster cross-selling and relationship-based advisory",
    tags: [
      "Next.js",
      "React Flow",
      "FastAPI",
      "AWS Lambda",
      "SQLAlchemy",
      "Docker",
      "Kubernetes",
    ],
    category: "dashboard",
  },
  {
    id: "4",
    title: "Online Event Control",
    company: "BTG Pactual",
    description:
      "Centralized event management system integrating Teams and Zoom APIs with a dynamic day/week/month calendar, access control, and attendance tracking across internal teams.",
    role: "Tech Lead",
    impact:
      "Increased attendance accuracy and reduced scheduling conflicts across teams",
    tags: [
      "Next.js",
      "FastAPI",
      "Teams API",
      "Zoom API",
      "Microsoft Graph",
      "SQS",
      "PostgreSQL",
    ],
    category: "operational",
  },
];
