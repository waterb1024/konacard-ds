import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Popup",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "중요한 정보를 전달하거나 사용자의 선택을 요청하기 위해 앱 콘텐츠 앞에 나타나는 구성 요소.",
      },
    },
  },
  args: { name: "Popup" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Popup",
    hint: "중요한 정보 전달·사용자 선택 요청용. 앱 콘텐츠 앞에 dim 배경 + 카드 형태로 노출. Figma 스펙 대기 중.",
  },
};
