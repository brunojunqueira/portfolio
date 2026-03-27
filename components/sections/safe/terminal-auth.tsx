"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "$ init auth-check --secure", style: "text-white/50" },
  { text: "> Verifying credentials...", style: "text-white/50" },
  { text: "> Scanning session token...", style: "text-white/50" },
  { text: "> Checking permissions...", style: "text-white/50" },
  { text: "✓ ACCESS GRANTED", style: "text-emerald-400 font-semibold" },
];

const CHAR_SPEED = 38;
const LINE_PAUSE = 180;
const FINAL_PAUSE = 300;

interface Progress {
  line: number;
  char: number;
}

const IDLE: Progress = { line: -1, char: 0 };

export function TerminalAuth() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [progress, setProgress] = useState<Progress>(IDLE);
  const [prevInView, setPrevInView] = useState(inView);

  if (inView && !prevInView) {
    setPrevInView(true);
    setProgress({ line: 0, char: 0 });
  }

  useEffect(() => {
    const { line, char } = progress;
    if (line < 0 || line >= LINES.length) return;

    const text = LINES[line].text;

    if (char < text.length) {
      const id = setTimeout(
        () => setProgress({ line, char: char + 1 }),
        CHAR_SPEED,
      );
      return () => clearTimeout(id);
    }

    if (line < LINES.length - 1) {
      const pause = line === LINES.length - 2 ? FINAL_PAUSE : LINE_PAUSE;
      const id = setTimeout(
        () => setProgress({ line: line + 1, char: 0 }),
        pause,
      );
      return () => clearTimeout(id);
    }
  }, [progress]);

  const { line: currentLine, char: currentChar } = progress;
  const lastLine = LINES[LINES.length - 1];
  const done =
    currentLine === LINES.length - 1 && currentChar === lastLine.text.length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl self-stretch md:self-auto"
      role="log"
      aria-label="Authentication terminal"
      aria-live="polite"
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs font-mono">auth.sh</span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#0d0d0d] px-5 py-5 min-h-40 flex flex-col gap-2.5 font-mono text-sm">
        {LINES.map((line, i) => {
          if (i > currentLine) return null;

          const text =
            i < currentLine ? line.text : line.text.slice(0, currentChar);
          const isCurrent = i === currentLine;

          return (
            <div key={i} className={`leading-relaxed ${line.style}`}>
              {text}
              {isCurrent && (
                <motion.span
                  className="inline-block w-2.25 h-[1.1em] bg-current ml-px align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </div>
          );
        })}

        {done && (
          <motion.div
            className="mt-1 h-px w-full rounded-full bg-emerald-400/40"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </motion.div>
  );
}
