export type ProjectCategory = "all" | "operational" | "dashboard";

export interface Project {
  id: string;
  title: string;
  description: string;
  company?: string;
  role: string;
  impact?: string;
  tags: string[];
  category: Exclude<ProjectCategory, "all">;
  liveUrl?: string;
  githubUrl?: string;
}
