"use client";

import { motion } from "framer-motion";

export function SimpleText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2
        className="font-semibold leading-none text-foreground"
        style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
      >
        To Simple
      </h2>
      <p className="mt-6 text-muted-foreground text-lg max-w-sm">
        Remove the unnecessary until nothing more can be taken away.
      </p>
    </motion.div>
  );
}
