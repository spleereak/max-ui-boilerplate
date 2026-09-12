import { cn } from "@/src/shared/lib/utils/cn";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-1024 px-24 py-40", className)}>
      {children}
    </div>
  );
}
