"use client";

import Link from "next/link";

import { Panel } from "@maxhub/max-ui";

import type { Story } from "../model/types";

export function StorybookCanvas({
  groupTitle,
  story,
}: {
  groupTitle: string;
  story: Story;
}) {
  return (
    <div className="storybook-main">
      <header className="storybook-toolbar">
        <div className="storybook-toolbar__breadcrumbs">
          <Link href="/" className="storybook-toolbar__link">
            MAX UI
          </Link>
          <span className="storybook-toolbar__sep">/</span>
          <span>{groupTitle}</span>
          <span className="storybook-toolbar__sep">/</span>
          <span className="storybook-toolbar__current">{story.name}</span>
        </div>
        <code className="storybook-toolbar__id">{story.id}</code>
      </header>

      <div className="storybook-canvas">
        <div className="storybook-canvas__stage">
          <Panel mode="secondary" className="storybook-canvas__preview">
            {story.render()}
          </Panel>
        </div>
      </div>

      <footer className="storybook-docs">
        <div className="storybook-docs__row">
          <span className="storybook-docs__key">Component</span>
          <span className="storybook-docs__value">{groupTitle}</span>
        </div>
        <div className="storybook-docs__row">
          <span className="storybook-docs__key">Story</span>
          <span className="storybook-docs__value">{story.name}</span>
        </div>
        <div className="storybook-docs__row">
          <span className="storybook-docs__key">Package</span>
          <span className="storybook-docs__value">@maxhub/max-ui@0.4.0</span>
        </div>
      </footer>
    </div>
  );
}
