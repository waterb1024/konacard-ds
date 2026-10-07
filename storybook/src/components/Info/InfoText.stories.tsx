import type { Meta, StoryObj } from "@storybook/react";
import { InfoText } from "./InfoText";
import type { InfoTextType } from "./InfoText";

const TYPES: InfoTextType[] = ["info", "error", "icon-error", "icon-info", "icon-guide"];

const meta = {
  title: "Component/Info/Info text",
  component: InfoText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Info text — 입력칸 아래 안내·오류 문구. Figma info (구 input/info-text, ❖ Info 페이지). " +
          "type 5종 (info / error / icon-error / icon-info / icon-guide), 사이즈 1종 (높이 18 · 글자 12). AX 실측 값 · 아이콘은 Figma input/bullet 원본 SVG.",
      },
    },
  },
  argTypes: {
    type: { control: "inline-radio", options: TYPES },
    children: { control: "text" },
  },
  args: {
    type: "icon-error",
    children: "Input bottom error text",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        {/* Figma 컴포넌트 폭 230 */}
        <div style={{ width: 230 }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof InfoText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllTypes: Story = {
  name: "type 5종",
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {TYPES.map((t) => (
        <div key={t} style={{ display: "grid", gap: 4 }}>
          <span style={{ font: "var(--text-body-3-regular)", color: "var(--color-font-quaternary)" }}>{t}</span>
          <InfoText type={t}>{t.includes("error") ? "Input bottom error text" : "Input bottom info text"}</InfoText>
        </div>
      ))}
    </div>
  ),
};

export const MultiLine: Story = {
  name: "여러 줄 — 아이콘은 첫 줄에",
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <InfoText type="icon-error">이메일이 다른 사람의 계정 정보로 전송되지 않도록 주의해주세요.</InfoText>
      <InfoText type="icon-guide">1회용컵 보증금을 제외한 금액에서만 할인혜택이 적용됩니다.</InfoText>
      <InfoText type="info">잔액이 없거나 유효기간이 만료된 브랜드 머니는 90일 이후 사라집니다.</InfoText>
    </div>
  ),
};
