"use client";

import { motion } from "framer-motion";

export function ResponsibleText() {
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
          Responsible
        </h2>
      </div>
      <p className="text-muted-foreground text-lg max-w-sm">
        Interfaces that work on any screen, connection, or context — leaving no
        one behind.
      </p>
      <div className="flex flex-wrap gap-3">
        {["Mobile-first", "Performance", "Offline-ready", "Inclusive"].map(
          (tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </motion.div>
  );
}
