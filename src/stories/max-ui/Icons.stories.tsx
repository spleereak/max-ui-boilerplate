import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Flex,
  Icon16Chevron,
  Icon16SearchOutline,
  Icon20CloseFilled,
} from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Icons",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconSet: Story = {
  name: "Icon set",
  render: () => (
    <Flex gap={12} align="center">
      <Icon16Chevron />
      <Icon16SearchOutline />
      <Icon20CloseFilled />
    </Flex>
  ),
};
