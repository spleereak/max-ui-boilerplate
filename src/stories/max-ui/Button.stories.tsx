import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, Flex, Icon16SearchOutline } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Button",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Flex gap={8} wrap="wrap">
      {(["xsmall", "small", "medium", "large"] as const).map(size => (
        <Button key={size} size={size} variant="primary">
          {size}
        </Button>
      ))}
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex gap={8} wrap="wrap">
      {(
        [
          "primary",
          "secondary",
          "ghost",
          "primary-contrast",
          "secondary-contrast",
          "overlay",
          "destructive",
        ] as const
      ).map(variant => (
        <Button key={variant} size="small" variant={variant}>
          {variant}
        </Button>
      ))}
    </Flex>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      loading
      size="medium"
      variant="primary"
      iconBefore={<Icon16SearchOutline />}
    >
      Loading
    </Button>
  ),
};
