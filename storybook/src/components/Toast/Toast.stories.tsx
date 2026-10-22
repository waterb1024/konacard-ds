import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Toast } from "./Toast";

const meta = {
  title: "Component/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "즉각적인 피드백을 주어 사용자가 바로 액션을 취할 수 있도록 돕습니다. " +
          "Figma ${FIGMA_DS_FILE_KEY} / node 11099:3580 (toast). 속성 없는 단일 컴포넌트 — " +
          "성공/실패 색 구분 없이 문구로만 성격을 전달합니다. " +
          "배치: 화면 아래에서 40, 좌우 20 (360 화면에서 폭 320).",
      },
    },
  },
  args: { children: "신청이 완료되었습니다.", floating: false },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Playground ─────────────────────────────── 
 * floating=true 면 position: fixed 라 미리보기 밖(Docs 페이지 전체)으로 빠져나감 →
 * transform 을 준 360 폭 틀 안에 가둬서 true · false 모두 같은 자리(아래 40 · 좌우 20)에 보이게 함
 */
export const Playground: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: 360,
        height: 160,
        padding: "0 20px 40px",
        boxSizing: "border-box",
        background: "var(--color-background-primary)",
        boxShadow: "0 0 0 1px var(--color-border-default)",
        transform: "translateZ(0)",
      }}
    >
      <Toast {...args} />
    </div>
  ),
};

/* ── 화면 배치 — Figma #CBP_toast popup_CASE ─────
 * 360×800 화면 틀에 transform 을 줘서 position: fixed 인 토스트가 틀 안에 갇히게 함
 */
function Screen({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        width: 360,
        height: 800,
        background: "var(--color-background-primary)",
        boxShadow: "0 0 0 1px var(--color-border-default)",
        transform: "translateZ(0)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export const OnScreen: Story = {
  name: "화면 배치 (아래 40 · 좌우 20)",
  args: { floating: true },
  render: (args) => (
    <Screen>
      <Toast {...args} />
    </Screen>
  ),
};

/* ── 눌러서 띄우기 ──────────────────────────── */
function TriggerDemo() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(t);
  }, [open]);
  return (
    <Screen>
      <div style={{ padding: 20 }}>
        <button type="button" onClick={() => setOpen(true)}>
          토스트 띄우기
        </button>
        <p style={{ font: "var(--text-body-3-regular)", color: "var(--color-font-tertiary)" }}>
          노출 시간은 Figma 에 정해진 값이 없어 이 예시에서만 2초로 둠
        </p>
      </div>
      {open && <Toast>신청이 완료되었습니다.</Toast>}
    </Screen>
  );
}

export const Trigger: Story = {
  name: "눌러서 띄우기",
  render: () => <TriggerDemo />,
};
