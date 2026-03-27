"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectFilter, type FilterCategory } from "./project-filter";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-8">
      <ProjectFilter active={filter} onChange={setFilter} />

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
