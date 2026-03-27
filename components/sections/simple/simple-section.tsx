import { PruneText } from "./prune-text";
import { SimpleText } from "./simple-text";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function SimpleSection() {
  return (
    <SectionWrapper id="simple" className="bg-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <PruneText />
        <SimpleText />
      </div>
    </SectionWrapper>
  );
}
