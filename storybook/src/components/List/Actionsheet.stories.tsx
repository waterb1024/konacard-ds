import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CardSelect, List, ListItem } from "./List";

const meta = {
  title: "Component/Action sheet",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Action sheet — 바텀시트 리스트(list/bottomsheet) + Card select 리스트. " +
          "konacard-ds-components.md § 06_List / Select List.",
      },
    },
  },
  args: { children: null },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectList: Story = {
  name: "Bottomsheet — 옵션 선택",
  render: () => {
    const [value, setValue] = useState("recent");
    const items = [
      { id: "recent", label: "최신순" },
      { id: "popular", label: "인기순" },
      { id: "amount", label: "혜택 금액순" },
    ];
    return (
      <div style={{ paddingTop: 8 }}>
        <List>
          {items.map((it, i) => (
            <ListItem
              key={it.id}
              title={it.label}
              selected={value === it.id}
              onClick={() => setValue(it.id)}
              last={i === items.length - 1}
            />
          ))}
        </List>
      </div>
    );
  },
};

export const CardSelectStory: Story = {
  name: "Card Select — 카드 선택",
  render: () => {
    const [selected, setSelected] = useState("prime");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 20,
        }}
      >
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
