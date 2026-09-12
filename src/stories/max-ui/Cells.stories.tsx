import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Avatar,
  CellAction,
  CellHeader,
  CellInput,
  CellList,
  CellSimple,
  Counter,
  Icon16Chevron,
  Icon16SearchOutline,
} from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Cells",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CellListExample: Story = {
  name: "CellList",
  render: () => (
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
  ),
};

export const CellInputExample: Story = {
  name: "CellInput",
  render: () => (
    <CellList mode="island" filled>
      <CellInput
        height="normal"
        placeholder="CellInput"
        before={<Icon16SearchOutline />}
      />
    </CellList>
  ),
};
