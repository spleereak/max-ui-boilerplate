"use client";

import { useCallback, useMemo, useState } from "react";

import {
  ALL_STORIES,
  STORY_GROUPS,
  findStory,
  findStoryGroup,
} from "../model/stories";
import { StorybookCanvas } from "./StorybookCanvas";
import { StorybookSidebar } from "./StorybookSidebar";

export default function ComponentsPage() {
  const [selectedStoryId, setSelectedStoryId] = useState(ALL_STORIES[0]?.id);

  const story = useMemo(
    () => findStory(selectedStoryId),
    [selectedStoryId]
  );
  const group = useMemo(
    () => findStoryGroup(story.id) ?? STORY_GROUPS[0],
    [story.id]
  );

  const handleSelect = useCallback((storyId: string) => {
    setSelectedStoryId(storyId);
  }, []);

  return (
    <div className="storybook">
      <StorybookSidebar
        groups={STORY_GROUPS}
        selectedStoryId={story.id}
        onSelect={handleSelect}
      />
      <StorybookCanvas groupTitle={group.title} story={story} />
    </div>
  );
}
