import type { Meta, StoryObj } from "@storybook/react";
import { Chips, LinkIcon } from "./Chips";

const meta = {
  title: "Component/Chips",
  component: Chips,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Chips. konacard-ds-components.md § 09_Label. " +
          "정보 표시 전용 pill 태그. Basic(24h) / Link(22h) · Fill/Line × 5색.",
      },
    },
  },
  argTypes: {
    type: { control: "inline-radio", options: ["Fill", "Line"] },
    color: {
      control: "select",
      options: ["Brand", "Brand_Light", "Gray_Light", "Dark", "White"],
    },
    variant: { control: "inline-radio", options: ["basic", "link"] },
    children: { control: "text" },
  },
  args: { type: "Fill", color: "Brand_Light", variant: "basic", children: "혜택" },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 20,
          background: "#FFFFFF",
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FillMatrix: Story = {
  name: "Fill × 5색",
  render: () => (
    <>
      <Chips type="Fill" color="Brand">Brand</Chips>
      <Chips type="Fill" color="Brand_Light">Brand_Light</Chips>
      <Chips type="Fill" color="Gray_Light">Gray_Light</Chips>
      <Chips type="Fill" color="Dark">Dark</Chips>
      <Chips type="Fill" color="White">White</Chips>
    </>
  ),
};

export const LineMatrix: Story = {
  name: "Line × 5색",
  render: () => (
    <>
      <Chips type="Line" color="Brand">Brand</Chips>
      <Chips type="Line" color="Brand_Light">Brand_Light</Chips>
      <Chips type="Line" color="Gray_Light">Gray_Light</Chips>
      <Chips type="Line" color="Dark">Dark</Chips>
      <Chips type="Line" color="White">White</Chips>
    </>
  ),
};

export const LinkChip: Story = {
  name: "Link Chip (아이콘 + 텍스트)",
  render: () => (
    <>
      <Chips variant="link" type="Fill" color="Brand_Light" icon={<LinkIcon />}>
        상세보기
      </Chips>
      <Chips variant="link" type="Line" color="Gray_Light" icon={<LinkIcon />}>
        첨부파일
      </Chips>
      <Chips variant="link" type="Fill" color="Dark" icon={<LinkIcon />}>
        외부링크
      </Chips>
    </>
  ),
};
