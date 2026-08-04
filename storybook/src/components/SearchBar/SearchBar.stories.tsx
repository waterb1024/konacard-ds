import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta = {
  title: "Component/Input/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Search bar. konacard-ds-components.md § 04_Forms 기준. " +
          "Inputbox 와 동일한 기하 · 우측에 검색 아이콘 상시 노출.",
      },
    },
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "focus", "active", "complete", "inactive", "error"],
    },
    showClear: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    state: "default",
    placeholder: "검색어를 입력하세요",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF", width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = { args: { state: "default" } };
export const Focus: Story = { args: { state: "focus" } };
export const Active: Story = {
  args: { state: "active", defaultValue: "카드 신청" },
};
export const Inactive: Story = {
  args: { state: "inactive", defaultValue: "검색 불가" },
};
export const ErrorState: Story = {
  name: "Error",
  args: { state: "error", defaultValue: "지원하지 않는 키워드" },
};

export const StateMatrix: Story = {
  name: "State Matrix",
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <SearchBar state="default" />
      <SearchBar state="focus" placeholder="포커스" />
      <SearchBar state="active" defaultValue="포인트" />
      <SearchBar state="complete" defaultValue="확정된 검색어" />
      <SearchBar state="inactive" defaultValue="비활성" />
      <SearchBar state="error" defaultValue="오류 예시" />
    </div>
  ),
};
