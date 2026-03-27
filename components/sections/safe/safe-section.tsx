import { SafeText } from "./safe-text";
import { TerminalAuth } from "./terminal-auth";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function SafeSection() {
  return (
    <SectionWrapper id="safe" className="bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <SafeText />
        <TerminalAuth />
      </div>
    </SectionWrapper>
  );
}
