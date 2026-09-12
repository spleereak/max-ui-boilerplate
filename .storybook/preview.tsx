import type { Preview } from "@storybook/nextjs-vite";
import { MaxUI } from "@maxhub/max-ui";

import "@maxhub/max-ui/dist/styles.css";
import "../src/app/styles/globals.css";

const preview: Preview = {
  decorators: [
    Story => (
      <MaxUI colorScheme="light" platform="ios" className="min-h-full p-24">
        <Story />
      </MaxUI>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
