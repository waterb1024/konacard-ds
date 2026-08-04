import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";

const meta = {
  title: "Component/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Basic List (list/list). konacard-ds-components.md § 06_List. " +
          "설정·정보 나열용. Accordion 은 별도 스토리, Action sheet 도 별도.",
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

export const BasicMainOnly: Story = {
  name: "Main text 단독",
  render: () => (
    <List>
      <ListItem title="이용 안내" />
      <ListItem title="자주 묻는 질문" />
      <ListItem title="공지사항" last />
    </List>
  ),
};

export const BasicWithValue: Story = {
  name: "항목 + 값",
  render: () => (
    <List>
      <ListItem title="회원 등급" value="프리미엄" />
      <ListItem title="가입일" value="2024.03.15" />
      <ListItem title="포인트 잔액" value="12,540 P" last />
    </List>
  ),
};

export const BasicEntry: Story = {
  name: "진입형(chevron)",
  render: () => (
    <List>
      <ListItem title="내 정보 수정" chevron onClick={() => {}} />
      <ListItem title="비밀번호 변경" chevron onClick={() => {}} />
      <ListItem
        title="알림 설정"
        description="이메일 · 문자 · 푸시 개별 설정"
        chevron
        onClick={() => {}}
        last
      />
    </List>
  ),
};
