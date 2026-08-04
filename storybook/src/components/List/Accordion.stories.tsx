import type { Meta, StoryObj } from "@storybook/react";
import { Expand } from "./List";

const meta = {
  title: "Component/Accordion",
  component: Expand,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Accordion (list/expand). konacard-ds-components.md § 06_List — Expand Type. " +
          "Header + open 시 Body divider 노출. 2 depth 이하만 사용.",
      },
    },
  },
  args: { title: "Q. 카드 재발급은 어떻게 하나요?" },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Expand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const OpenState: Story = {
  name: "Open",
  args: {
    title: "카드 재발급 안내",
    description: "실물 카드와 앱카드",
    defaultOpen: true,
    children:
      "홈 > 내 카드 > 재발급 신청에서 카드 종류를 선택 후 신청할 수 있습니다. 영업일 기준 3~5일 이내 배송됩니다.",
    subContent: "고객센터 1234로 문의 주세요.",
  },
};

export const FAQ: Story = {
  name: "FAQ 응용 (여러 항목)",
  args: { title: "" },
  render: () => (
    <div>
      <Expand
        title="Q. 카드 재발급은 어떻게 하나요?"
        defaultOpen
        subContent="추가 안내는 고객센터 1234로 문의 주세요."
      >
        홈 &gt; 내 카드 &gt; 재발급 신청에서 카드 종류를 선택 후 신청할 수 있습니다.
        신청 후 영업일 기준 3~5일 이내 배송됩니다.
      </Expand>
      <Expand title="Q. 실물 카드와 앱카드의 차이는?">
        실물 카드는 오프라인 결제, 앱카드는 온라인·간편결제에 사용됩니다. 앱카드
        발급은 즉시 이루어집니다.
      </Expand>
      <Expand title="Q. 해외 결제 수수료는?">
        해외 이용 시 브랜드사 수수료 1.0% + 국제 브랜드 수수료가 별도 부과됩니다.
      </Expand>
    </div>
  ),
};
