"use client";

import type { ProjectCategory } from "@/types/project";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type FilterCategory = ProjectCategory;

const FILTERS: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "operational", label: "Operational" },
  { value: "dashboard", label: "Dashboard" },
];

interface ProjectFilterProps {
  active: FilterCategory;
  onChange: (value: FilterCategory) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <Tabs value={active} onValueChange={(v) => onChange(v as FilterCategory)}>
      <TabsList>
        {FILTERS.map((f) => (
          <TabsTrigger key={f.value} value={f.value}>
            {f.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
