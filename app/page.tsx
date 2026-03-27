import { HeroSection } from "@/components/sections/hero";
import { SimpleSection } from "@/components/sections/simple";
import { SafeSection } from "@/components/sections/safe";
import { AccessibleSection } from "@/components/sections/accessible";
import { ResponsibleSection } from "@/components/sections/responsible";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SimpleSection />
      <SafeSection />
      <AccessibleSection />
      <ResponsibleSection />
      <CTASection />
    </>
  );
}
