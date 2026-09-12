import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Icon16SearchOutline } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Avatar",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Image: Story = {
  render: () => (
    <Avatar.Container size={72} form="squircle" onlineStatus>
      <Avatar.Image
        alt="User"
        src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg"
      />
    </Avatar.Container>
  ),
};

export const Text: Story = {
  render: () => (
    <Avatar.Container size={64} form="circle">
      <Avatar.Text gradient="blue">AB</Avatar.Text>
    </Avatar.Container>
  ),
};

export const Icon: Story = {
  render: () => (
    <Avatar.Container size={56} form="squircle">
      <Avatar.Icon>
        <Icon16SearchOutline />
      </Avatar.Icon>
    </Avatar.Container>
  ),
};

export const OverlayAndClose: Story = {
  name: "Overlay + Close",
  render: () => (
    <Avatar.Container
      size={64}
      form="circle"
      overlay={<Avatar.Overlay />}
      rightBottomCorner={<Avatar.CloseButton aria-label="Remove" />}
    >
      <Avatar.Text gradient="purple">MC</Avatar.Text>
    </Avatar.Container>
  ),
};
