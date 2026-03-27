"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="h-screen snap-start overflow-hidden flex items-center justify-center bg-muted px-8">
      <motion.div
        className="text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Ready to explore?
        </p>
        <h2
          className="font-semibold leading-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          Take a look at my work
        </h2>
        <p className="text-muted-foreground text-lg max-w-md">
          A selection of projects that bring all these principles together in
          real products.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/projects" className={cn(buttonVariants({ size: "lg" }))}>
            View projects
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Get in touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
