import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectButton, SelectButtonGroup } from "./SelectButton";

const meta = {
  title: "Component/Select/Select button",
  component: SelectButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Select button — 보이는 선택지를 바로 눌러 하나 고르기. Figma select/select button (11061:3729) · select/select button group (11061:3760). " +
          "state = default · selected, status = true · false(비활성 40%). 묶음은 2 · 3 · 4열을 같은 폭으로, 사이 8.",
      },
    },
  },
  argTypes: { selected: { control: "boolean" }, status: { control: "boolean" }, children: { control: "text" } },
  args: { selected: false, status: true, children: "선택지" },
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllStates: Story = {
  name: "state × status",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 77px)", gap: 16 }}>
      <SelectButton style={{ width: 77 }}>선택지</SelectButton>
      <SelectButton style={{ width: 77 }} selected>선택지</SelectButton>
      <SelectButton style={{ width: 77 }} status={false}>선택지</SelectButton>
      <SelectButton style={{ width: 77 }} selected status={false}>선택지</SelectButton>
    </div>
  ),
};

function Group({ options, initial }: { options: string[]; initial: number }) {
  const [v, setV] = useState(initial);
  return <SelectButtonGroup options={options} value={v} onChange={setV} />;
}

export const Groups: Story = {
  name: "Group (2 · 3 · 4열)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
      <Group options={["네, 맞습니다.", "아니요"]} initial={0} />
      <Group options={["+3만원", "+5만원", "+10만원"]} initial={1} />
      <Group options={["5천원", "1만원", "5만원", "10만원"]} initial={1} />
    </div>
  ),
};
