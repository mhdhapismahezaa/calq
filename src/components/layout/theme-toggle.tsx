// src/components/layout/theme-toggle.tsx

"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-(--card) outline-none opacity-0"
      >
        <span className="h-4.5 w-4.5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-(--card) outline-none interactive-button focus-visible:ring-2 focus-visible:ring-black/20"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
