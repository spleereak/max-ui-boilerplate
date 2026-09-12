import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Counter, Flex } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Counter",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Flex gap={8} wrap="wrap">
      {(
        ["primary", "attention", "promo", "default", "mute", "menu"] as const
      ).map(variant => (
        <Counter key={variant} value={7} variant={variant} rounded />
      ))}
    </Flex>
  ),
};
