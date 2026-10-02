import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomsheetItem, List } from "./List";

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
  name: "Bottomsheet — 통신사 선택",
  render: () => {
    const [value, setValue] = useState("kt");
    const items = [
      { id: "skt", label: "SKT" },
      { id: "kt", label: "KT" },
      { id: "lgu", label: "LG U+" },
      { id: "skt-mvno", label: "SKT 알뜰폰" },
      { id: "kt-mvno", label: "KT 알뜰폰" },
      { id: "lgu-mvno", label: "LG U+ 알뜰폰" },
    ];
    return (
      <div style={{ padding: "0 20px" }}>
        <List>
          {items.map((it) => (
            <BottomsheetItem
              key={it.id}
              title={it.label}
              selected={value === it.id}
              onClick={() => setValue(it.id)}
            />
          ))}
        </List>
      </div>
    );
  },
};
