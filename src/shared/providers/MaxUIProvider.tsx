"use client";

import { MaxUI } from "@maxhub/max-ui";

export function MaxUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <MaxUI className="flex h-full min-h-0 flex-1 flex-col" colorScheme="light" platform="ios">
      {children}
    </MaxUI>
  );
}
