import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Flex,
  Icon16SearchOutline,
  Input,
  Switch,
  Textarea,
} from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Forms",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function InputDemo() {
  const [value, setValue] = useState("MAX UI");

  return (
    <Input
      mode="contrast"
      value={value}
      onChange={event => setValue(event.target.value)}
      placeholder="Input"
      iconBefore={<Icon16SearchOutline />}
      withClearButton
      hint="Подсказка под полем"
    />
  );
}

function InputModesDemo() {
  const [value, setValue] = useState("MAX UI");

  return (
    <Flex direction="column" gap={12}>
      <Input
        mode="default"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="mode=default (на secondary фоне)"
      />
      <Input
        mode="contrast"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="mode=contrast"
        iconBefore={<Icon16SearchOutline />}
        withClearButton
      />
    </Flex>
  );
}

function SwitchDemo() {
  const [on, setOn] = useState(true);

  return (
    <Switch checked={on} onChange={event => setOn(event.target.checked)} />
  );
}

export const InputStory: Story = {
  name: "Input",
  render: () => <InputDemo />,
};

export const SwitchStory: Story = {
  name: "Switch",
  render: () => <SwitchDemo />,
};

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <Flex direction="column" gap={12}>
      <Textarea
        mode="primary"
        placeholder="mode=primary"
        defaultValue="Контрастное поле на secondary фоне"
        rows={3}
      />
      <Textarea
        mode="secondary"
        placeholder="mode=secondary"
        defaultValue="Сливается с фоном — не использовать на secondary"
        rows={3}
      />
    </Flex>
  ),
};

export const InputModes: Story = {
  name: "Input modes",
  render: () => <InputModesDemo />,
};
