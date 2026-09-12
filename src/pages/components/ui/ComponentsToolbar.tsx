"use client";

import Link from "next/link";

import type { CanvasBackground, CatalogGroup, CatalogStory } from "../model/types";

const BACKGROUNDS: { id: CanvasBackground; label: string }[] = [
  { id: "neutral", label: "Neutral" },
  { id: "secondary", label: "Secondary" },
  { id: "white", label: "White" },
];

export function ComponentsToolbar({
  group,
  story,
  background,
  onBackgroundChange,
}: {
  group: CatalogGroup;
  story: CatalogStory;
  background: CanvasBackground;
  onBackgroundChange: (value: CanvasBackground) => void;
}) {
  return (
    <header className="catalog-toolbar">
      <div className="catalog-toolbar__breadcrumbs">
        <Link href="/" className="catalog-toolbar__link">
          MAX UI
        </Link>
        <span className="catalog-toolbar__sep">/</span>
        <span>{group.title}</span>
        <span className="catalog-toolbar__sep">/</span>
        <span className="catalog-toolbar__current">{story.name}</span>
      </div>

      <div className="catalog-toolbar__controls">
        <div className="catalog-toolbar__backgrounds" role="group" aria-label="Фон canvas">
          {BACKGROUNDS.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => onBackgroundChange(item.id)}
              className={
                background === item.id
                  ? "catalog-toolbar__chip catalog-toolbar__chip--active"
                  : "catalog-toolbar__chip"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        <code className="catalog-toolbar__id">{story.id}</code>
      </div>
    </header>
  );
}
