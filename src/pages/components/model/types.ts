import type { ReactNode } from "react";

export type PropDoc = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description?: string;
};

export type CatalogStory = {
  id: string;
  name: string;
  description?: string;
  render: () => ReactNode;
  props?: PropDoc[];
  usage?: string;
  source?: string;
  tags?: string[];
};

export type CatalogGroup = {
  id: string;
  title: string;
  description: string;
  component: string;
  importPath: string;
  props: PropDoc[];
  stories: CatalogStory[];
};

export type CanvasBackground = "neutral" | "secondary" | "white";
