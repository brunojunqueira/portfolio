"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";

export function ColorCycler() {
  const { bg, text, label } = useColorCycle();

  return (
    <div
      className="flex flex-col items-center gap-4"
      aria-live="polite"
      aria-label="Accessible color contrast demonstration"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="w-48 h-32 rounded-xl flex items-center justify-center border border-border shadow-sm"
          style={{ backgroundColor: bg, color: text }}
        >
          <span className="text-xl font-bold">Aa</span>
        </motion.div>
      </AnimatePresence>
      <span className="text-xs text-muted-foreground">{label} — WCAG AA</span>
    </div>
  );
}
