"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/navigation";

interface NavLinkProps {
  item: NavItem;
}

export function NavLink({ item }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        "text-sm transition-opacity rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:opacity-100",
        isActive ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100",
      )}
    >
      {item.label}
    </Link>
  );
}
