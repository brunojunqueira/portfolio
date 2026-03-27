import { ColorCycler } from "./color-cycler";
import { AccessibleText } from "./accessible-text";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function AccessibleSection() {
  return (
    <SectionWrapper id="accessible" className="bg-muted">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <ColorCycler />
        <AccessibleText />
      </div>
    </SectionWrapper>
  );
}
