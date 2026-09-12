"use client";

import { MaxUI } from "@maxhub/max-ui";
import { useEffect, useState } from "react";

export function MaxUIProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // MaxUI reads window.matchMedia during render (useSystemColorScheme), which
  // breaks static generation. Render children on the server; MaxUIContext
  // defaults (ios/light) cover SSR for nested MAX UI components.
  if (!mounted) {
    return (
      <div className="flex h-full min-h-0 flex-1 flex-col">{children}</div>
    );
  }

  return (
    <MaxUI className="flex h-full min-h-0 flex-1 flex-col" colorScheme="light" platform="ios">
      {children}
    </MaxUI>
  );
}
