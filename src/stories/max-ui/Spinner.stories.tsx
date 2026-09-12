import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flex, Spinner } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Spinner",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Appearances: Story = {
  render: () => (
    <Flex gap={16} align="center" wrap="wrap">
      <Spinner size={20} appearance="primary" />
      <Spinner size={24} appearance="themed" />
      <Spinner size={24} appearance="contrast" />
      <Spinner size={24} appearance="negative" />
    </Flex>
  ),
};
