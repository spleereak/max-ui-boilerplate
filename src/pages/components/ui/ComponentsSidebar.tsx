"use client";

import { cn } from "@/src/shared/lib/utils/cn";

import type { CatalogGroup } from "../model/types";

export function ComponentsSidebar({
  groups,
  query,
  onQueryChange,
  selectedStoryId,
  onSelect,
}: {
  groups: CatalogGroup[];
  query: string;
  onQueryChange: (value: string) => void;
  selectedStoryId: string;
  onSelect: (storyId: string) => void;
}) {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <aside className="catalog-sidebar hide-scrollbar">
      <div className="catalog-sidebar__header">
        <span className="catalog-sidebar__label">MAX UI</span>
        <input
          type="search"
          value={query}
          onChange={event => onQueryChange(event.target.value)}
          placeholder="Поиск компонентов…"
          className="catalog-sidebar__search"
          aria-label="Поиск компонентов"
        />
      </div>
      <nav className="catalog-sidebar__nav">
        {groups.map(group => {
          const stories = group.stories.filter(story => {
            if (!normalizedQuery) return true;

            const haystack = [
              group.title,
              story.name,
              story.id,
              ...(story.tags ?? []),
            ]
              .join(" ")
              .toLowerCase();

            return haystack.includes(normalizedQuery);
          });

          if (stories.length === 0) return null;

          return (
            <div key={group.id} className="catalog-sidebar__group">
              <div className="catalog-sidebar__group-title">{group.title}</div>
              <ul className="catalog-sidebar__list">
                {stories.map(story => {
                  const isActive = story.id === selectedStoryId;

                  return (
                    <li key={story.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(story.id)}
                        className={cn(
                          "catalog-sidebar__item",
                          isActive && "catalog-sidebar__item--active"
                        )}
                      >
                        {story.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
