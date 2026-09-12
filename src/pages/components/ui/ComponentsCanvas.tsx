"use client";

import { Panel } from "@maxhub/max-ui";

import { cn } from "@/src/shared/lib/utils/cn";

import type { CanvasBackground, CatalogStory } from "../model/types";

const backgroundClass: Record<CanvasBackground, string> = {
  neutral: "catalog-canvas--neutral",
  secondary: "catalog-canvas--secondary",
  white: "catalog-canvas--white",
};

export function ComponentsCanvas({
  story,
  background,
}: {
  story: CatalogStory;
  background: CanvasBackground;
}) {
  return (
    <div className={cn("catalog-canvas", backgroundClass[background])}>
      <div className="catalog-canvas__stage">
        <Panel mode="secondary" className="catalog-canvas__preview">
          {story.render()}
        </Panel>
      </div>
    </div>
  );
}
