import type { Meta, StoryObj } from "@storybook/react";
import {
  GroupDivider,
  InfoBox,
  InfoLine,
  ItemListRow,
  TextInfo,
} from "./Info";

const meta = {
  title: "Component/Info",
  component: TextInfo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Info. konacard-ds-components.md § 10_Info. " +
          "Text info(• 1depth / * 2depth) · Info-box(항목명↔내용 + 그룹 Divider).",
      },
    },
  },
  args: {
    children: null,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF", padding: "16px 0" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitledInfo: Story = {
  name: "Text info — 제목 있는 안내문구",
  render: () => (
    <TextInfo title="유의사항">
      <InfoLine>서비스 이용 전 아래 사항을 반드시 확인해 주세요.</InfoLine>
      <InfoLine>연회비는 매년 자동 결제됩니다.</InfoLine>
      <InfoLine depth={2}>결제일 기준 30일 전 알림 발송</InfoLine>
      <InfoLine depth={2}>해외 결제 수수료 별도</InfoLine>
    </TextInfo>
  ),
};

export const UntitledInfo: Story = {
  name: "Text info — 제목 없는 안내문구 (상단 dotted line)",
  render: () => (
    <TextInfo>
      <InfoLine>본 서비스는 만 19세 이상만 이용 가능합니다.</InfoLine>
      <InfoLine>신청 후 취소는 영업일 기준 3일 이내 가능합니다.</InfoLine>
    </TextInfo>
  ),
};

export const InfoBoxItems: Story = {
  name: "Info-box — 결제 상세 (Item List)",
  render: () => (
    <InfoBox>
      <ItemListRow label="주문번호">2026-08-03-12345</ItemListRow>
      <ItemListRow label="결제일시">2026.08.03 14:22</ItemListRow>
      <ItemListRow label="결제수단">KONACARD Prime (1234)</ItemListRow>
      <GroupDivider />
      <ItemListRow label="상품금액">40,000원</ItemListRow>
      <ItemListRow label="할인">-2,500원</ItemListRow>
      <ItemListRow label="최종 결제금액">37,500원</ItemListRow>
    </InfoBox>
  ),
};
