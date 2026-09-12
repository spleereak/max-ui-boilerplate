import type { ReactNode } from "react";

export type Story = {
  id: string;
  name: string;
  render: () => ReactNode;
};

export type StoryGroup = {
  id: string;
  title: string;
  stories: Story[];
};
