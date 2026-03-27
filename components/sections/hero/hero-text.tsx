"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroTextProps {
  scrollYProgress: MotionValue<number>;
  textOpacity: MotionValue<number>;
}

export function HeroText({ scrollYProgress, textOpacity }: HeroTextProps) {
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center z-10 pointer-events-none select-none"
      style={{ x: textX, opacity: textOpacity }}
    >
      <div className="px-8 lg:px-40 2xl:px-90 mx-auto w-full">
        <h1
          className="font-bold leading-none text-white"
          style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
        >
          From
          <br />
          <span className="text-blue-400">Complex</span>
        </h1>
      </div>
    </motion.div>
  );
}
