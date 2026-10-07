import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { BubbleTooltip, Tooltip } from "./Tooltip";
import type { TooltipPlacement, TooltipStyle } from "./Tooltip";

const meta = {
  title: "Component/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Tooltip (Bubble Type). Figma ${FIGMA_DS_FILE_KEY} / node 200:1909. " +
          "8 placement × 2 style (line / brand). AX 실측 값 · 핀은 Figma 원본 SVG. " +
          "placement 는 Figma 이름 그대로 — top-* / bottom-* 는 말풍선 위치, left / right 는 핀이 붙는 쪽. " +
          "사용법은 아래 '사용 예시' — Figma ❖ Tooltip 예시 화면 기준.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["line", "brand"] },
    placement: {
      control: "select",
      options: [
        "top-left",
        "top",
        "top-right",
        "bottom-left",
        "bottom",
        "bottom-right",
        "left",
        "right",
      ],
    },
  },
  args: {
    variant: "line",
    placement: "bottom-left",
    children: "Tooltip Text Tooltip Text Tooltip Text",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 40,
          background: "#FFFFFF",
          display: "inline-block",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Playground ─────────────────────────────── */
export const Playground: Story = {};

/* ── Style variants ─────────────────────────── */
export const Line: Story = {
  args: { variant: "line", placement: "bottom-left" },
};

export const Brand: Story = {
  args: { variant: "brand", placement: "bottom-left" },
};

/* ── Placement × Style Matrix (Figma component) ── */
const placements: TooltipPlacement[] = [
  "top-left",
  "top",
  "top-right",
  "bottom-left",
  "bottom",
  "bottom-right",
  "left",
  "right",
];

function Matrix({ variant }: { variant: TooltipStyle }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 32,
        padding: 20,
      }}
    >
      {placements.map((p) => (
        <div
          key={p}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              font: "var(--text-body-3-regular)",
              color: "var(--color-font-tertiary)",
            }}
          >
            {p}
          </span>
          <Tooltip variant={variant} placement={p}>
            Tooltip Text Tooltip Text
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export const LineMatrix: Story = {
  name: "Line — 8 Placement",
  render: () => <Matrix variant="line" />,
};

export const BrandMatrix: Story = {
  name: "Brand — 8 Placement",
  render: () => <Matrix variant="brand" />,
};

/* ── 사용 예시 (Figma ❖ Tooltip 예시 화면 기준) ───────── */
const RULES =
  "사용 규칙 (Figma ❖ Tooltip 예시 화면 기준)\n" +
  "1. 글자 옆 회색 원형 아이콘을 누르면 열리고, 다시 누르면 닫힘\n" +
  "   · 입력칸 제목 옆 → 16 작은 \"?\" (ic_noti_16_g)\n" +
  "   · 정보 값 옆 → 20 \"?\" 용어·추가 설명 (ic_question_20_g) / 20 \"!\" 주의·조건 안내 (ic_guide_20_g)\n" +
  "2. 핀 끝이 아이콘 가운데를 가리킴. 말풍선은 아이콘 바로 아래(bottom-*), 아래 공간이 없으면 바로 위(top-*)\n" +
  "3. 화면 왼쪽 아이콘은 -left, 오른쪽 아이콘은 -right — 말풍선이 화면 좌우 여백 20 안에 들어오게\n" +
  "4. 문구가 길면 최대 폭 320(화면 360 − 여백 40) 안에서 줄바꿈. 의미 단위로 직접 줄을 나눠도 됨\n" +
  "5. 기본은 line 스타일";

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 360, background: "#FFFFFF", padding: "24px 20px 120px", boxSizing: "border-box", border: "1px solid var(--color-divider-tertiary)" }}>
      {children}
    </div>
  );
}

const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", font: "var(--text-body-2-regular)", letterSpacing: "var(--font-letterspacing-small)", color: "var(--color-font-tertiary)" };
const value: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 4, font: "var(--text-body-2-bold)", color: "var(--color-font-primary)" };

export const UsageInputLabel: Story = {
  name: "사용 예시 1 — 입력칸 제목 옆 (작은 ? · 아래 · 왼쪽)",
  parameters: { docs: { description: { story: RULES } } },
  render: () => (
    <Screen>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 4, font: "var(--text-body-3-bold)", color: "var(--color-font-primary)" }}>
        일련번호
        <BubbleTooltip
          icon="noti"
          placement="bottom-left"
          defaultOpen
          content={"운전면허증 사진 아래 숫자와 영문 조합으로된\n일련번호를 입력해 주세요."}
        />
      </div>
    </Screen>
  ),
};

export const UsageValueQuestion: Story = {
  name: "사용 예시 2 — 정보 값 옆 ? (위 · 오른쪽)",
  parameters: { docs: { description: { story: "상세 정보 목록의 값 옆 \"?\". 아래에 다른 줄이 이어져서 말풍선을 아이콘 위(top-right)에 띄움." } } },
  render: () => (
    <Screen>
      <div style={{ height: 72 }} />
      <div style={row}>
        거래방식
        <span style={value}>
          {"{JP} {USD결제}"}
          <BubbleTooltip
            icon="question"
            placement="top-right"
            defaultOpen
            content="해외원화결제(DCC)시 추가 수수료가 발생됩니다."
          />
        </span>
      </div>
    </Screen>
  ),
};

export const UsageValueGuide: Story = {
  name: "사용 예시 3 — 금액 옆 ! (아래 · 오른쪽 · 여러 줄)",
  parameters: { docs: { description: { story: "주의·조건 안내는 \"!\" 아이콘. 문구가 길면 의미 단위로 줄을 나눔." } } },
  render: () => (
    <Screen>
      <div style={row}>
        사용 가능 카드포인트
        <span style={value}>
          100,000P
          <BubbleTooltip
            icon="guide"
            placement="bottom-right"
            defaultOpen
            content={"결제 시 자동으로 사용되는 포인트 합계입니다.\n- 내 캐시 등 직접 입력한 결제 수단이 있을 때는\n  이 포인트를 사용하지 않습니다."}
          />
        </span>
      </div>
    </Screen>
  ),
};
