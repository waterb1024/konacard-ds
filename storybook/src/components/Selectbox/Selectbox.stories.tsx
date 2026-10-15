import type { Meta, StoryObj } from "@storybook/react";
import { Selectbox } from "./Selectbox";
import type { SelectboxState } from "./Selectbox";

const meta = {
  title: "Component/Select",
  component: Selectbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Select (필드형 드롭다운) — Figma select/select box (41:550). " +
          "state 5종: default · active(목록 열림, 위 화살표) · select(선택 완료) · disabled · error. " +
          "제목(title)과 안내 문구(info)는 넣으면 보임 — input 과 같은 틀.",
      },
    },
  },
  argTypes: {
    state: { control: "inline-radio", options: ["default", "active", "select", "disabled", "error"] },
    value: { control: "text" },
    placeholder: { control: "text" },
    title: { control: "text" },
    info: { control: "text" },
  },
  args: { state: "default", placeholder: "선택", title: "Title", info: "Input bottom info text" },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
} satisfies Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const STATES: SelectboxState[] = ["default", "active", "select", "disabled", "error"];
const VALUE: Partial<Record<SelectboxState, string>> = { active: "Active", select: "Select", error: "Error" };

export const AllStates: Story = {
  name: "전체 state",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 280px)", gap: 24 }}>
      {STATES.map((s) => (
        <Selectbox
          key={s}
          state={s}
          title={s}
          value={VALUE[s]}
          placeholder={s === "disabled" ? "Disabled" : "Default"}
          info={s === "error" ? "Input bottom error text" : "Input bottom info text"}
        />
      ))}
    </div>
  ),
  decorators: [(Story: () => JSX.Element) => <Story />],
};
