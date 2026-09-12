import { AppHeader } from "@/src/widgets/app-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
