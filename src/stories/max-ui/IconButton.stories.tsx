import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flex, Icon16SearchOutline, Icon20CloseFilled, IconButton } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/IconButton",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Flex gap={8} wrap="wrap">
      {(["xsmall", "small", "medium", "large"] as const).map(size => (
        <IconButton key={size} size={size} variant="secondary">
          <Icon16SearchOutline />
        </IconButton>
      ))}
    </Flex>
  ),
};

export const Loading: Story = {
  render: () => (
    <IconButton size="medium" variant="primary" loading>
      <Icon20CloseFilled />
    </IconButton>
  ),
};
