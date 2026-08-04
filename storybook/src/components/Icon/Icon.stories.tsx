import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Icon",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "기호로 만든 시각적 언어로, 한정된 공간에서 효율적으로 정보를 전달합니다. Foundation/Iconography 와는 별개의 컴포넌트 사용법을 다룹니다.",
      },
    },
  },
  args: { name: "Icon" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Icon",
    hint: "아이콘은 기호로 만든 시각적 언어. Foundation/Iconography 참조. 컴포넌트로서의 Icon 스펙은 Figma 스펙 대기 중.",
  },
};
