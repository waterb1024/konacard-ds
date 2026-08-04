import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Toast",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "즉각적인 피드백을 주어 사용자가 바로 액션을 취할 수 있도록 돕습니다.",
      },
    },
  },
  args: { name: "Toast" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Toast",
    hint: "즉각적인 피드백 알림. 화면 하단에 잠깐 노출 후 사라짐. Figma 스펙 대기 중.",
  },
};
