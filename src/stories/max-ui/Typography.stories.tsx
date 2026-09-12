import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flex, Typography } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Typography",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  render: () => <Typography.Display>Display</Typography.Display>,
};

export const Headline: Story = {
  render: () => (
    <Flex direction="column" gap={8}>
      <Typography.Headline variant="large-strong">
        Headline large-strong
      </Typography.Headline>
      <Typography.Headline variant="medium">Headline medium</Typography.Headline>
    </Flex>
  ),
};

export const Title: Story = {
  render: () => (
    <Flex direction="column" gap={8}>
      <Typography.Title variant="large-strong">Title large-strong</Typography.Title>
      <Typography.Title variant="medium">Title medium</Typography.Title>
    </Flex>
  ),
};

export const Body: Story = {
  render: () => (
    <Flex direction="column" gap={8}>
      <Typography.Body variant="large">Body large</Typography.Body>
      <Typography.Body variant="medium">Body medium</Typography.Body>
    </Flex>
  ),
};

export const LabelTextAction: Story = {
  name: "Label · Text · Action",
  render: () => (
    <Flex direction="column" gap={12}>
      <Typography.Label variant="large">Label large</Typography.Label>
      <Typography.Text variant="body" color="primary">
        Text body
      </Typography.Text>
      <Typography.Action variant="medium">Action medium</Typography.Action>
    </Flex>
  ),
};
