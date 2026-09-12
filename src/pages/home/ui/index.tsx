"use client";

import { Button, Flex, Typography } from "@maxhub/max-ui";

import { STORYBOOK_URL, isExternalStorybookUrl } from "@/src/config/storybook";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-512 flex-1 flex-col justify-center px-24 py-80">
      <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        Boilerplate
      </p>
      <Typography.Headline variant="large-strong" className="!tracking-tight">
        MAX UI
      </Typography.Headline>
      <Typography.Body
        variant="medium"
        className="mt-16 max-w-448 !leading-relaxed text-neutral-500"
      >
        Next.js, Feature-Sliced Design и компоненты{" "}
        <a
          href="https://dev.max.ru/ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950"
        >
          @maxhub/max-ui
        </a>
        .
      </Typography.Body>

      <Flex gap={8} className="mt-40">
        <Button asChild size="medium" variant="primary">
          <a
            href={STORYBOOK_URL}
            {...(isExternalStorybookUrl()
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Storybook
          </a>
        </Button>
        <Button asChild size="medium" variant="secondary">
          <a
            href="https://dev.max.ru/ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Документация
          </a>
        </Button>
      </Flex>

      <ul className="mt-64 space-y-12 border-t border-neutral-200 pt-32 text-sm text-neutral-500">
        <li>FSD — `src/pages`, `src/widgets`, `src/shared`</li>
        <li>Storybook для всех компонентов MAX UI</li>
        <li>TypeScript · React 19 · Tailwind CSS 4</li>
      </ul>
    </div>
  );
}
