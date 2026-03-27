"use client";

import { motion } from "framer-motion";
import { SpeakButton } from "./speak-button";

export function AccessibleText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2
          className="font-semibold leading-none text-foreground"
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
        >
          Accessible
        </h2>
      </div>
      <p className="text-muted-foreground text-lg max-w-sm">
        Accessibility isn&apos;t an extra feature — it&apos;s part of the design
        from the very start.
      </p>
      <SpeakButton />
    </motion.div>
  );
}
