import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Box",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "가장 기본적인 구성 요소이며, 콘텐츠 영역에 간격·테두리·둥근 모서리를 적용합니다.",
      },
    },
  },
  args: { name: "Box" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Box",
    hint: "가장 기본적인 구성 요소. 콘텐츠 영역에 간격·테두리·둥근 모서리를 적용. Figma 스펙 대기 중.",
  },
};
