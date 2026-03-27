"use client";

import { motion } from "framer-motion";

export function SafeText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2
        className="font-semibold leading-none text-white"
        style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
      >
        Safe
      </h2>
      <p className="mt-6 text-white/60 text-lg max-w-sm">
        Every UX decision is also a security decision. Protecting data means
        protecting people.
      </p>
    </motion.div>
  );
}
