"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <CardHeader className="pb-2 gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base leading-tight">
              {project.title}
            </h3>
            <div className="flex flex-col items-end shrink-0 pt-0.5 gap-0.5">
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {project.role} <br className="block md:hidden" />
                {project.company && (
                  <span className="text-xs text-muted-foreground/60 whitespace-nowrap">
                    @ {project.company}
                  </span>
                )}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardHeader>

        {project.impact && (
          <div className="px-6 pb-2">
            <p className="text-xs font-medium text-primary border border-primary/20 bg-primary/5 rounded-md px-3 py-1.5 leading-relaxed">
              {project.impact}
            </p>
          </div>
        )}

        <CardContent className="flex-1 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {(project.liveUrl || project.githubUrl) && (
          <CardFooter className="gap-2 pt-0 pb-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                )}
              >
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                )}
              >
                GitHub
              </a>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
