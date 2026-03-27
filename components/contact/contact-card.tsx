"use client";

import { motion } from "framer-motion";

interface ContactCardProps {
  contact: {
    id: number;
    label: string;
    handle: string;
    href: string;
    description: string;
  };
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { id, label, handle, href, description } = contact;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + id * 0.12 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-2xl border border-border bg-muted px-6 py-5 transition-colors hover:bg-border"
      >
        <div>
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{handle}</span>
          <svg
            className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 16 16"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              d="M3 13L13 3M13 3H6M13 3v7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </motion.li>
  );
}
