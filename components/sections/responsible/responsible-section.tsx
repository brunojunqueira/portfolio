"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneFrame } from "./phone-frame";

export function ResponsibleSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  /* Grande no meio da tela — atinge escala final em 50% do scroll */
  const phoneScale = useTransform(scrollYProgress, [0, 1], [0.82, 1.5]);

  return (
    <section ref={ref} id="responsible" className="relative h-dvh snap-start">
      <div className="sticky top-0 h-screen bg-background overflow-hidden flex flex-col items-center justify-center gap-10">
        {/* Celular — cresce em direção ao usuário */}
        <motion.div style={{ scale: phoneScale }}>
          <PhoneFrame />
        </motion.div>
      </div>
    </section>
  );
}
