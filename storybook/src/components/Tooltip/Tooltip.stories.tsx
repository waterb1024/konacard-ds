import type { Meta, StoryObj } from "@storybook/react";
import { BubbleTooltip, Tooltip, TooltipTrigger } from "./Tooltip";
import type { TooltipPlacement, TooltipStyle } from "./Tooltip";

const meta = {
  title: "Component/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Tooltip (Bubble Type). Figma Nv4o6ozSx5W4w10uFnQIs5 / node 200:1909. " +
          "8 placement × 2 style (line / brand). Popup Type ( ? 아이콘 ) 은 별도 다이얼로그 컴포넌트 — 여기선 트리거만.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["line", "brand"] },
    placement: {
      control: "select",
      options: [
        "top-left",
        "top",
        "top-right",
        "bottom-left",
        "bottom",
        "bottom-right",
        "left",
        "right",
      ],
    },
  },
  args: {
    variant: "line",
    placement: "bottom-left",
    children: "Tooltip Text Tooltip Text Tooltip Text",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 40,
          background: "#FFFFFF",
          display: "inline-block",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Playground ─────────────────────────────── */
export const Playground: Story = {};

/* ── Style variants ─────────────────────────── */
export const Line: Story = {
  args: { variant: "line", placement: "bottom-left" },
};

export const Brand: Story = {
  args: { variant: "brand", placement: "bottom-left" },
};

/* ── Placement × Style Matrix (Figma component) ── */
const placements: TooltipPlacement[] = [
  "top-left",
  "top",
  "top-right",
  "bottom-left",
  "bottom",
  "bottom-right",
  "left",
  "right",
];

function Matrix({ variant }: { variant: TooltipStyle }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 32,
        padding: 20,
      }}
    >
      {placements.map((p) => (
        <div
          key={p}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              font: "var(--text-body-3-regular)",
              color: "var(--color-font-tertiary)",
            }}
          >
            {p}
          </span>
          <Tooltip variant={variant} placement={p}>
            Tooltip Text Tooltip Text
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export const LineMatrix: Story = {
  name: "Line — 8 Placement",
  render: () => <Matrix variant="line" />,
};

export const BrandMatrix: Story = {
  name: "Brand — 8 Placement",
  render: () => <Matrix variant="brand" />,
};

/* ── Usage example ─────────────────────────── */
export const BubbleWithTrigger: Story = {
  name: "Bubble — Trigger + Tooltip 조합",
  render: () => (
    <BubbleTooltip
      label="Infomation Text"
      content="해당 내용에 대한 간략한 정의나 정보를 노출 할 경우"
      variant="line"
      placement="bottom-left"
      defaultOpen
    />
  ),
};

export const BubbleBrand: Story = {
  name: "Bubble — Brand + Trigger",
  render: () => (
    <BubbleTooltip
      label="Infomation Text"
      content="해당 내용에 대한 간략한 정의나 정보를 노출 할 경우"
      variant="brand"
      placement="bottom-left"
      defaultOpen
    />
  ),
};

export const PopupTrigger: Story = {
  name: "Popup Trigger ( ? 아이콘 — 팝업은 별도 )",
  render: () => <TooltipTrigger icon="?">Infomation Text</TooltipTrigger>,
};
