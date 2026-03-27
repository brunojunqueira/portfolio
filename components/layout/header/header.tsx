"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { Navigation } from "./navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setScrolled(false);
    setOpen(false);
  }

  useEffect(() => {
    if (pathname === "/") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          open
            ? "bg-white text-foreground"
            : scrolled
              ? "bg-white/70 backdrop-blur-md border-b border-transparent shadow-sm text-foreground"
              : "bg-transparent mix-blend-difference text-white",
        )}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <Navigation />
          </div>
          <button
            className="md:hidden flex flex-col justify-center gap-1.25 p-2 -mr-1"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-px w-5 bg-current transition-all duration-200 origin-center block",
                open && "rotate-45 `-translate-y-1.75",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-current transition-all duration-200 block",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-current transition-all duration-200 origin-center block",
                open && "-rotate-45 `-translate-y-1.75",
              )}
            />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-7">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-3xl font-semibold tracking-tight transition-colors",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
