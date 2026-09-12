"use client";

import { useCallback, useMemo, useState } from "react";

import {
  ALL_CATALOG_STORIES,
  CATALOG_GROUPS,
  findCatalogGroup,
  findCatalogStory,
} from "../model/catalog";
import type { CanvasBackground } from "../model/types";
import { ComponentsCanvas } from "./ComponentsCanvas";
import { ComponentsInspector } from "./ComponentsInspector";
import { ComponentsSidebar } from "./ComponentsSidebar";
import { ComponentsToolbar } from "./ComponentsToolbar";

export default function ComponentsPage() {
  const [selectedStoryId, setSelectedStoryId] = useState(
    ALL_CATALOG_STORIES[0]?.id ?? ""
  );
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState<CanvasBackground>("neutral");

  const story = useMemo(
    () => findCatalogStory(selectedStoryId),
    [selectedStoryId]
  );
  const group = useMemo(
    () => findCatalogGroup(story.id) ?? CATALOG_GROUPS[0],
    [story.id]
  );

  const handleSelect = useCallback((storyId: string) => {
    setSelectedStoryId(storyId);
  }, []);

  return (
    <div className="catalog">
      <ComponentsSidebar
        groups={CATALOG_GROUPS}
        query={query}
        onQueryChange={setQuery}
        selectedStoryId={story.id}
        onSelect={handleSelect}
      />
      <div className="catalog-main">
        <ComponentsToolbar
          group={group}
          story={story}
          background={background}
          onBackgroundChange={setBackground}
        />
        <div className="catalog-workspace">
          <ComponentsCanvas story={story} background={background} />
          <ComponentsInspector group={group} story={story} />
        </div>
      </div>
    </div>
  );
}
