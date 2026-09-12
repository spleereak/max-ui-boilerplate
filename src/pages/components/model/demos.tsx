"use client";

import { useState } from "react";

import {
  Avatar,
  Button,
  CellAction,
  CellHeader,
  CellInput,
  CellList,
  CellSimple,
  Container,
  Counter,
  EllipsisText,
  Flex,
  Grid,
  Icon16Chevron,
  Icon16SearchOutline,
  Icon20CloseFilled,
  IconButton,
  Input,
  Panel,
  Spinner,
  Switch,
  Textarea,
  Typography,
} from "@maxhub/max-ui";

export function TypographyDisplayDemo() {
  return <Typography.Display>Display</Typography.Display>;
}

export function TypographyHeadlineDemo() {
  return (
    <Flex direction="column" gap={8}>
      <Typography.Headline variant="large-strong">
        Headline large-strong
      </Typography.Headline>
      <Typography.Headline variant="medium">Headline medium</Typography.Headline>
    </Flex>
  );
}

export function TypographyTitleDemo() {
  return (
    <Flex direction="column" gap={8}>
      <Typography.Title variant="large-strong">Title large-strong</Typography.Title>
      <Typography.Title variant="medium">Title medium</Typography.Title>
    </Flex>
  );
}

export function TypographyBodyDemo() {
  return (
    <Flex direction="column" gap={8}>
      <Typography.Body variant="large">Body large</Typography.Body>
      <Typography.Body variant="medium">Body medium</Typography.Body>
    </Flex>
  );
}

export function TypographyLabelTextActionDemo() {
  return (
    <Flex direction="column" gap={12}>
      <Typography.Label variant="large">Label large</Typography.Label>
      <Typography.Text variant="body" color="primary">
        Text body
      </Typography.Text>
      <Typography.Action variant="medium">Action medium</Typography.Action>
    </Flex>
  );
}

export function ButtonSizesDemo() {
  return (
    <Flex gap={8} wrap="wrap">
      {(["xsmall", "small", "medium", "large"] as const).map(size => (
        <Button key={size} size={size} variant="primary">
          {size}
        </Button>
      ))}
    </Flex>
  );
}

export function ButtonVariantsDemo() {
  return (
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
  );
}

export function ButtonLoadingDemo() {
  return (
    <Button
      loading
      size="medium"
      variant="primary"
      iconBefore={<Icon16SearchOutline />}
    >
      Loading
    </Button>
  );
}

export function IconButtonDefaultDemo() {
  return (
    <Flex gap={8} wrap="wrap">
      {(["xsmall", "small", "medium", "large"] as const).map(size => (
        <IconButton key={size} size={size} variant="secondary">
          <Icon16SearchOutline />
        </IconButton>
      ))}
    </Flex>
  );
}

export function IconButtonLoadingDemo() {
  return (
    <IconButton size="medium" variant="primary" loading>
      <Icon20CloseFilled />
    </IconButton>
  );
}

export function AvatarImageDemo() {
  return (
    <Avatar.Container size={72} form="squircle" onlineStatus>
      <Avatar.Image
        alt="User"
        src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg"
      />
    </Avatar.Container>
  );
}

export function AvatarTextDemo() {
  return (
    <Avatar.Container size={64} form="circle">
      <Avatar.Text gradient="blue">AB</Avatar.Text>
    </Avatar.Container>
  );
}

export function AvatarIconDemo() {
  return (
    <Avatar.Container size={56} form="squircle">
      <Avatar.Icon>
        <Icon16SearchOutline />
      </Avatar.Icon>
    </Avatar.Container>
  );
}

export function AvatarOverlayDemo() {
  return (
    <Avatar.Container
      size={64}
      form="circle"
      overlay={<Avatar.Overlay />}
      rightBottomCorner={<Avatar.CloseButton aria-label="Remove" />}
    >
      <Avatar.Text gradient="purple">MC</Avatar.Text>
    </Avatar.Container>
  );
}

export function LayoutGridDemo() {
  return (
    <Panel mode="secondary" className="rounded-8 p-12">
      <Grid cols={2} gap={8}>
        <Panel mode="primary" className="rounded-8 p-12">
          Grid 1
        </Panel>
        <Panel mode="primary" className="rounded-8 p-12">
          Grid 2
        </Panel>
      </Grid>
      <Container fullWidth className="mt-8 p-8">
        Container
      </Container>
    </Panel>
  );
}

export function CellListDemo() {
  return (
    <CellList
      mode="island"
      filled
      header={<CellHeader titleStyle="caps">Список</CellHeader>}
    >
      <CellSimple
        title="CellSimple"
        subtitle="С подзаголовком"
        showChevron
        before={
          <Avatar.Container size={40} form="circle">
            <Avatar.Text gradient="green">UI</Avatar.Text>
          </Avatar.Container>
        }
        after={<Counter value={3} variant="attention" rounded />}
      />
      <CellAction mode="themed" showChevron before={<Icon16Chevron />}>
        CellAction themed
      </CellAction>
      <CellAction mode="destructive">CellAction destructive</CellAction>
    </CellList>
  );
}

export function CellInputDemo() {
  return (
    <CellList mode="island" filled>
      <CellInput
        height="normal"
        placeholder="CellInput"
        before={<Icon16SearchOutline />}
      />
    </CellList>
  );
}

export function InputDemo() {
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

export function InputModesDemo() {
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

export function SwitchDemo() {
  const [on, setOn] = useState(true);

  return (
    <Switch checked={on} onChange={event => setOn(event.target.checked)} />
  );
}

export function TextareaDemo() {
  return (
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
  );
}

export function CounterVariantsDemo() {
  return (
    <Flex gap={8} wrap="wrap">
      {(
        ["primary", "attention", "promo", "default", "mute", "menu"] as const
      ).map(variant => (
        <Counter key={variant} value={7} variant={variant} rounded />
      ))}
    </Flex>
  );
}

export function SpinnerAppearancesDemo() {
  return (
    <Flex gap={16} align="center" wrap="wrap">
      <Spinner size={20} appearance="primary" />
      <Spinner size={24} appearance="themed" />
      <Spinner size={24} appearance="contrast" />
      <Spinner size={24} appearance="negative" />
    </Flex>
  );
}

export function EllipsisTextDemo() {
  return (
    <EllipsisText maxLines={2}>
      EllipsisText обрезает длинный текст. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </EllipsisText>
  );
}

export function IconsDemo() {
  return (
    <Flex gap={12} align="center">
      <Icon16Chevron />
      <Icon16SearchOutline />
      <Icon20CloseFilled />
    </Flex>
  );
}
