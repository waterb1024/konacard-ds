import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CardSelect } from "./List";

const meta = {
  title: "Component/Select/Card select",
  component: CardSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS 카드형 선택 — list/card-select. " +
          "konacard-ds-components.md § 06_List / Select List. " +
          "Selected 상태는 테두리 색(color/border/focus)만 변경 — 체크 아이콘 없음 (2026-10-01 Figma 실측 확인).",
      },
    },
  },
  args: { title: "", selected: false },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF", padding: 20 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardSelectList: Story = {
  name: "Card Select — 카드 선택",
  render: () => {
    const [selected, setSelected] = useState("prime");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <CardSelect
          imageLabel="PRIME"
          title="KONACARD Prime"
          description="적립 5% · 연회비 30,000원"
          selected={selected === "prime"}
          onClick={() => setSelected("prime")}
        />
        <CardSelect
          imageLabel="LITE"
          title="KONACARD Lite"
          description="적립 2% · 연회비 0원"
          selected={selected === "lite"}
          onClick={() => setSelected("lite")}
        />
        <CardSelect
          imageLabel="TRAV"
          title="KONACARD Travel"
          description="해외 결제 5% 적립"
          selected={selected === "travel"}
          onClick={() => setSelected("travel")}
        />
      </div>
    );
  },
};
