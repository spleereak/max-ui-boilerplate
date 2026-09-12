"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { STORYBOOK_URL, isExternalStorybookUrl } from "@/src/config/storybook";
import { cn } from "@/src/shared/lib/utils/cn";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: STORYBOOK_URL,
    label: "Storybook",
    external: isExternalStorybookUrl(),
  },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-56 max-w-1024 items-center justify-between px-24">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-neutral-900"
        >
          MAX UI
        </Link>
        <nav className="flex items-center gap-24">
          {navItems.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === href
                    ? "font-medium text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-800"
                )}
              >
                {label}
              </Link>
            )
          )}
          <a
            href="https://dev.max.ru/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
          >
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
