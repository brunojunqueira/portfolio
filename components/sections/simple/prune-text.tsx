"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WORDS = [
  { text: "Complicated", keep: false },
  { text: "Overwhelming", keep: false },
  { text: "Redundant", keep: false },
  { text: "Excessive", keep: false },
  { text: "Simple", keep: true },
];

const APPEAR_DURATION = 0.35;
const APPEAR_STAGGER = 0.12;
const STRIKE_STAGGER = 0.18;

const REMOVED = WORDS.filter((w) => !w.keep);

const STRIKE_START =
  (WORDS.length - 1) * APPEAR_STAGGER + APPEAR_DURATION + 0.2;

const ACCENT_DELAY = STRIKE_START + (REMOVED.length - 1) * STRIKE_STAGGER + 0.3;

export function PruneText() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  let removeIndex = 0;

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1.5"
      aria-label="Words being pruned down to Simple"
    >
      {WORDS.map(({ text, keep }, i) => {
        const appearDelay = i * APPEAR_STAGGER;
        const strikeDelay = keep
          ? 0
          : STRIKE_START + removeIndex * STRIKE_STAGGER;
        const fadeDelay = keep ? 0 : strikeDelay + 0.15;
        if (!keep) removeIndex++;

        return (
          <motion.div
            key={text}
            className="relative"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: APPEAR_DURATION,
              delay: appearDelay,
              ease: "easeOut",
            }}
          >
            {keep && (
              <motion.span
                className="absolute -left-5 top-0 bottom-0 w-0.75 rounded-full bg-primary origin-top"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={inView ? { scaleY: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.35,
                  delay: ACCENT_DELAY,
                  ease: "easeOut",
                }}
              />
            )}

            <motion.span
              className="text-3xl md:text-4xl font-semibold leading-tight block text-foreground"
              animate={inView && !keep ? { opacity: 0.18 } : {}}
              transition={{ duration: 0.3, delay: fadeDelay }}
            >
              {text}
            </motion.span>

            {!keep && (
              <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-foreground origin-left block"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.22,
                  delay: strikeDelay,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
