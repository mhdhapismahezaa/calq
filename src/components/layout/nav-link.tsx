"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({
  href,
  label,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium transition-opacity hover:opacity-70",
        isActive && "opacity-100",
        !isActive && "opacity-60"
      )}
    >
      {label}
    </Link>
  );
}