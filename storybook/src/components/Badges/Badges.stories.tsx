import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badges";

const meta = {
  title: "Component/Badges",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Badges (Figma: badges/badge, node 3426:10001). " +
          "알림점 dot 4×4 · 신규 new 20×20 · 카운트 count (min-width 20, 자릿수 따라 확장). " +
          "배경은 color/gradient/tertiary (#FF364B → #FF1493). " +
          "액션바 아이콘 우상단 등 다른 요소에 붙여서 사용.",
      },
    },
  },
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["dot", "new", "count"],
    },
    count: { control: "text" },
  },
  args: { type: "count", count: "9" },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 20,
          background: "#FFFFFF",
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllTypes: Story = {
  name: "3 타입",
  render: () => (
    <>
      <Badge type="dot" />
      <Badge type="new" />
      <Badge type="count" count={9} />
    </>
  ),
};

export const CountRange: Story = {
  name: "count — 자릿수 증가",
  render: () => (
    <>
      <Badge type="count" count={1} />
      <Badge type="count" count={9} />
      <Badge type="count" count={25} />
      <Badge type="count" count={99} />
      <Badge type="count" count="99+" />
      <Badge type="count" count="999+" />
    </>
  ),
};

export const OnActionbarButton: Story = {
  name: "액션바 우상단 (관례)",
  render: () => (
    <>
      <IconWithBadge icon="🔔">
        <Badge type="dot" />
      </IconWithBadge>
      <IconWithBadge icon="🔔">
        <Badge type="new" />
      </IconWithBadge>
      <IconWithBadge icon="🔔">
        <Badge type="count" count={3} />
      </IconWithBadge>
      <IconWithBadge icon="🔔">
        <Badge type="count" count="99+" />
      </IconWithBadge>
    </>
  ),
};

function IconWithBadge({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: 56,
        height: 56,
        background: "#F5F5F5",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 24, lineHeight: "24px" }}>{icon}</div>
      <div style={{ position: "absolute", top: 12, right: 12 }}>{children}</div>
    </div>
  );
}
