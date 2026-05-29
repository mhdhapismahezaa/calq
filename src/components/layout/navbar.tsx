import Link from "next/link";

import { Container } from "@/components/layout/container";
import { NavLink } from "@/components/layout/nav-link";

import { navigationLinks } from "@/constants/navigation";

import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  return (
    <header className="border-b border-(--border)">
      <Container>
        <div className="flex min-h-16 flex-col items-start justify-center gap-4 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Calq
          </Link>

          <nav className="flex items-center gap-4">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
