import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function SectionWrapper({
  children,
  className,
  id,
  style,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      style={style}
      className={cn(
        "h-screen overflow-hidden flex items-center justify-center px-4 md:px-8 snap-start",
        className,
      )}
    >
      <div className="max-w-6xl w-full mx-auto">{children}</div>
    </section>
  );
}
