import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects";

export const metadata: Metadata = {
  title: "Portfolio — Bruno Junqueira",
  description: "A selection of web, mobile and design projects.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-20">
      <header className="mb-12">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h1
          className="font-semibold leading-none text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          Projects
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl">
          A selection of work combining simplicity, safety, accessibility and
          responsibility.
        </p>
      </header>
      <ProjectsGrid />
    </div>
  );
}
