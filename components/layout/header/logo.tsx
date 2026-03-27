import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
    >
      Bruno Junqueira
    </Link>
  );
}
