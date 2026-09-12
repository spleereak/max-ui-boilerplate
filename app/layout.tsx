import type { Metadata } from "next";

import "@maxhub/max-ui/dist/styles.css";
import "@/src/app/styles/globals.css";

import { MaxUIProvider } from "@/src/shared/providers/MaxUIProvider";

export const metadata: Metadata = {
  title: "Max UI Boilerplate",
  description: "Next.js boilerplate with FSD architecture and MAX UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex h-full min-h-full flex-col">
        <MaxUIProvider>{children}</MaxUIProvider>
      </body>
    </html>
  );
}
