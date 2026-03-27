"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const EarthScene = dynamic(
  () => import("@/components/three/earth-scene").then((m) => m.EarthScene),
  { ssr: false },
);

export function HeroCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      className="absolute inset-0"
      aria-hidden="true"
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeIn" }}
    >
      <EarthScene />
    </motion.div>
  );
}
