"use client";

import { cn } from "@/src/shared/lib/utils/cn";

import type { StoryGroup } from "../model/types";

export function StorybookSidebar({
  groups,
  selectedStoryId,
  onSelect,
}: {
  groups: StoryGroup[];
  selectedStoryId: string;
  onSelect: (storyId: string) => void;
}) {
  return (
    <aside className="storybook-sidebar hide-scrollbar">
      <div className="storybook-sidebar__header">
        <span className="storybook-sidebar__label">Components</span>
      </div>
      <nav className="storybook-sidebar__nav">
        {groups.map(group => (
          <div key={group.id} className="storybook-sidebar__group">
            <div className="storybook-sidebar__group-title">{group.title}</div>
            <ul className="storybook-sidebar__list">
              {group.stories.map(story => {
                const isActive = story.id === selectedStoryId;

                return (
                  <li key={story.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(story.id)}
                      className={cn(
                        "storybook-sidebar__item",
                        isActive && "storybook-sidebar__item--active"
                      )}
                    >
                      {story.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
