import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EllipsisText } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Helpers",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const EllipsisTextExample: Story = {
  name: "EllipsisText",
  render: () => (
    <EllipsisText maxLines={2}>
      EllipsisText обрезает длинный текст. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </EllipsisText>
  ),
};
