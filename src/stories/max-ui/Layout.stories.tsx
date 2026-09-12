import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container, Grid, Panel } from "@maxhub/max-ui";

const meta = {
  title: "MAX UI/Layout",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const GridPanelContainer: Story = {
  name: "Grid · Panel · Container",
  render: () => (
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
  ),
};
