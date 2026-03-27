"use client";

import { useRef } from "react";
import { HeroText } from "./hero-text";
import { HeroCanvas } from "./hero-canvas";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={ref} className="h-screen snap-start">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <HeroText scrollYProgress={scrollYProgress} textOpacity={textOpacity} />
        <div className="absolute inset-0 xl:z-20">
          <HeroCanvas />
        </div>

        <div className="absolute inset-0 z-30 pointer-events-none flex flex-col">
          <motion.p
            className="w-full text-center pt-20 md:pt-28 text-white/55 text-sm tracking-[0.3em] uppercase font-medium"
            style={{ opacity: labelOpacity }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Software Engineer
          </motion.p>
          <motion.div className="mt-auto" style={{ opacity: textOpacity }}>
            <ScrollIndicator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
