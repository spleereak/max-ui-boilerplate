import type { CatalogGroup } from "./types";
import {
  AvatarIconDemo,
  AvatarImageDemo,
  AvatarOverlayDemo,
  AvatarTextDemo,
  ButtonLoadingDemo,
  ButtonSizesDemo,
  ButtonVariantsDemo,
  CellInputDemo,
  CellListDemo,
  CounterVariantsDemo,
  EllipsisTextDemo,
  IconButtonDefaultDemo,
  IconButtonLoadingDemo,
  IconsDemo,
  InputDemo,
  InputModesDemo,
  LayoutGridDemo,
  SpinnerAppearancesDemo,
  SwitchDemo,
  TextareaDemo,
  TypographyBodyDemo,
  TypographyDisplayDemo,
  TypographyHeadlineDemo,
  TypographyLabelTextActionDemo,
  TypographyTitleDemo,
} from "./demos";

const buttonProps = [
  { name: "variant", type: "ButtonVariant", defaultValue: "primary", description: "Визуальный стиль" },
  { name: "size", type: "ButtonSize", defaultValue: "medium", description: "Размер кнопки" },
  { name: "loading", type: "boolean", defaultValue: "false", description: "Состояние загрузки" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Неактивное состояние" },
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Слот для Link / a" },
  { name: "iconBefore", type: "ReactNode", description: "Иконка слева от текста" },
  { name: "children", type: "ReactNode", required: true, description: "Содержимое кнопки" },
];

export const CATALOG_GROUPS: CatalogGroup[] = [
  {
    id: "typography",
    title: "Typography",
    component: "Typography.*",
    importPath: "import { Typography } from '@maxhub/max-ui'",
    description: "Типографика MAX UI: Display, Headline, Title, Body, Label, Text, Action.",
    props: [
      { name: "variant", type: "string", description: "Начертание внутри подкомпонента" },
      { name: "color", type: "primary | secondary | tertiary | inherit", defaultValue: "inherit" },
      { name: "asChild", type: "boolean", defaultValue: "false" },
      { name: "className", type: "string", description: "Дополнительные классы" },
    ],
    stories: [
      {
        id: "typography/display",
        name: "Display",
        description: "Самый крупный акцентный текст.",
        tags: ["typography", "display"],
        render: TypographyDisplayDemo,
        source: `<Typography.Display>Display</Typography.Display>`,
      },
      {
        id: "typography/headline",
        name: "Headline",
        description: "Заголовки экрана.",
        tags: ["typography", "headline"],
        render: TypographyHeadlineDemo,
        source: `<Typography.Headline variant="large-strong">...</Typography.Headline>`,
      },
      {
        id: "typography/title",
        name: "Title",
        tags: ["typography", "title"],
        render: TypographyTitleDemo,
      },
      {
        id: "typography/body",
        name: "Body",
        tags: ["typography", "body"],
        render: TypographyBodyDemo,
      },
      {
        id: "typography/label-text-action",
        name: "Label · Text · Action",
        tags: ["typography", "label", "text", "action"],
        render: TypographyLabelTextActionDemo,
      },
    ],
  },
  {
    id: "button",
    title: "Button",
    component: "Button",
    importPath: "import { Button } from '@maxhub/max-ui'",
    description: "Основная кнопка действия. Поддерживает варианты, размеры, loading и иконки.",
    props: buttonProps,
    stories: [
      {
        id: "button/sizes",
        name: "Sizes",
        description: "Размеры: xsmall, small, medium, large.",
        tags: ["button", "size"],
        render: ButtonSizesDemo,
        usage: "Размер подбирайте по плотности интерфейса: medium — дефолт для форм.",
        source: `<Button size="medium" variant="primary">Label</Button>`,
      },
      {
        id: "button/variants",
        name: "Variants",
        description: "Все варианты оформления на одном экране.",
        tags: ["button", "variant"],
        render: ButtonVariantsDemo,
      },
      {
        id: "button/loading",
        name: "Loading",
        description: "Кнопка в состоянии загрузки с иконкой.",
        tags: ["button", "state"],
        render: ButtonLoadingDemo,
        props: [
          { name: "loading", type: "boolean", defaultValue: "true" },
          { name: "iconBefore", type: "ReactNode" },
        ],
      },
    ],
  },
  {
    id: "icon-button",
    title: "IconButton",
    component: "IconButton",
    importPath: "import { IconButton } from '@maxhub/max-ui'",
    description: "Компактная кнопка только с иконкой.",
    props: [
      { name: "variant", type: "IconButtonVariant", defaultValue: "secondary" },
      { name: "size", type: "IconButtonSize", defaultValue: "medium" },
      { name: "loading", type: "boolean", defaultValue: "false" },
      { name: "children", type: "ReactNode", required: true, description: "SVG-иконка" },
    ],
    stories: [
      {
        id: "icon-button/default",
        name: "Default",
        render: IconButtonDefaultDemo,
        source: `<IconButton size="medium" variant="secondary"><Icon16SearchOutline /></IconButton>`,
      },
      {
        id: "icon-button/loading",
        name: "Loading",
        render: IconButtonLoadingDemo,
      },
    ],
  },
  {
    id: "avatar",
    title: "Avatar",
    component: "Avatar.*",
    importPath: "import { Avatar } from '@maxhub/max-ui'",
    description: "Аватар: изображение, текст, иконка, overlay и online-статус.",
    props: [
      { name: "size", type: "number", defaultValue: "40", description: "Размер контейнера в px" },
      { name: "form", type: "circle | squircle", defaultValue: "circle" },
      { name: "onlineStatus", type: "boolean", defaultValue: "false" },
      { name: "overlay", type: "ReactNode", description: "Затемнение поверх аватара" },
    ],
    stories: [
      { id: "avatar/image", name: "Image", render: AvatarImageDemo, tags: ["avatar", "image"] },
      { id: "avatar/text", name: "Text", render: AvatarTextDemo, tags: ["avatar", "text"] },
      { id: "avatar/icon", name: "Icon", render: AvatarIconDemo, tags: ["avatar", "icon"] },
      {
        id: "avatar/overlay",
        name: "Overlay + Close",
        render: AvatarOverlayDemo,
        tags: ["avatar", "overlay"],
      },
    ],
  },
  {
    id: "layout",
    title: "Layout",
    component: "Grid · Panel · Container",
    importPath: "import { Grid, Panel, Container } from '@maxhub/max-ui'",
    description: "Layout-компоненты для сеток и поверхностей.",
    props: [
      { name: "mode", type: "primary | secondary", description: "Фон Panel" },
      { name: "cols", type: "number", description: "Колонки Grid" },
      { name: "gap", type: "number", description: "Отступ между ячейками" },
    ],
    stories: [
      {
        id: "layout/grid-panel",
        name: "Grid · Panel · Container",
        render: LayoutGridDemo,
        usage: "На secondary Panel используйте contrast-режимы для полей ввода.",
      },
    ],
  },
  {
    id: "cells",
    title: "Cells",
    component: "CellList · CellSimple · CellAction · CellInput",
    importPath: "import { CellList, CellSimple, CellAction, CellInput } from '@maxhub/max-ui'",
    description: "Списки ячеек в стиле мобильных настроек и форм.",
    props: [
      { name: "mode", type: "island | ...", description: "Режим CellList" },
      { name: "filled", type: "boolean", description: "Заливка списка" },
      { name: "showChevron", type: "boolean", description: "Стрелка навигации" },
    ],
    stories: [
      { id: "cells/list", name: "CellList", render: CellListDemo },
      { id: "cells/input", name: "CellInput", render: CellInputDemo },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    component: "Input · Switch · Textarea",
    importPath: "import { Input, Switch, Textarea } from '@maxhub/max-ui'",
    description: "Элементы форм. На цветном фоне используйте contrast/primary режимы.",
    props: [
      { name: "mode", type: "default | contrast | primary | secondary", description: "Контрастность поля" },
      { name: "disabled", type: "boolean", defaultValue: "false" },
      { name: "withClearButton", type: "boolean", description: "Кнопка очистки Input" },
      { name: "hint", type: "string", description: "Подсказка под полем" },
    ],
    stories: [
      {
        id: "forms/input",
        name: "Input",
        render: InputDemo,
        usage: "На Panel mode=\"secondary\" используйте Input mode=\"contrast\".",
        source: `<Input mode="contrast" withClearButton hint="..." />`,
      },
      { id: "forms/switch", name: "Switch", render: SwitchDemo },
      { id: "forms/textarea", name: "Textarea", render: TextareaDemo },
      {
        id: "forms/input-modes",
        name: "Input modes",
        description: "Сравнение default и contrast на одном экране.",
        render: InputModesDemo,
      },
    ],
  },
  {
    id: "counter",
    title: "Counter",
    component: "Counter",
    importPath: "import { Counter } from '@maxhub/max-ui'",
    description: "Числовой бейдж для уведомлений и меток.",
    props: [
      { name: "value", type: "number", required: true },
      { name: "variant", type: "CounterVariant", defaultValue: "primary" },
      { name: "rounded", type: "boolean", defaultValue: "false" },
    ],
    stories: [
      { id: "counter/variants", name: "Variants", render: CounterVariantsDemo },
    ],
  },
  {
    id: "spinner",
    title: "Spinner",
    component: "Spinner",
    importPath: "import { Spinner } from '@maxhub/max-ui'",
    description: "Индикатор загрузки.",
    props: [
      { name: "size", type: "number", defaultValue: "24" },
      { name: "appearance", type: "primary | themed | contrast | negative" },
    ],
    stories: [
      { id: "spinner/appearances", name: "Appearances", render: SpinnerAppearancesDemo },
    ],
  },
  {
    id: "helpers",
    title: "Helpers",
    component: "EllipsisText",
    importPath: "import { EllipsisText } from '@maxhub/max-ui'",
    description: "Утилиты для текста.",
    props: [
      { name: "maxLines", type: "number", required: true, description: "Макс. строк до обрезки" },
    ],
    stories: [
      { id: "helpers/ellipsis", name: "EllipsisText", render: EllipsisTextDemo },
    ],
  },
  {
    id: "icons",
    title: "Icons",
    component: "Icon*",
    importPath: "import { Icon16SearchOutline, ... } from '@maxhub/max-ui'",
    description: "Набор SVG-иконок из пакета.",
    props: [
      { name: "width / height", type: "number", description: "Задаётся в компоненте иконки" },
      { name: "className", type: "string", description: "Цвет через currentColor" },
    ],
    stories: [
      { id: "icons/set", name: "Icon set", render: IconsDemo },
    ],
  },
];

export const ALL_CATALOG_STORIES = CATALOG_GROUPS.flatMap(group => group.stories);

export function findCatalogStory(storyId: string) {
  return ALL_CATALOG_STORIES.find(story => story.id === storyId) ?? ALL_CATALOG_STORIES[0];
}

export function findCatalogGroup(storyId: string) {
  return CATALOG_GROUPS.find(group => group.stories.some(story => story.id === storyId));
}

export function findCatalogGroupById(groupId: string) {
  return CATALOG_GROUPS.find(group => group.id === groupId);
}
