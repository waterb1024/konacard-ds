import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { List, ListItem } from "./List";

const meta = {
  title: "Component/Action sheet",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Action sheet — 바텀시트 옵션 리스트(list/bottomsheet). " +
          "konacard-ds-components.md § 06_List / Select List. " +
          "Card select(list/card-select)는 별도 컴포넌트(Component/Card select)로 분리됨 — Actionsheet는 바텀시트 전용.",
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
