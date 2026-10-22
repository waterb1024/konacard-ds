import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import type { LabelColorFill, LabelColorLine, LabelSize } from "./Label";

const meta = {
  title: "Component/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Label — 정보 표시 전용 pill. Figma label (2121:5513). " +
          "KeyScreen 실사용 기준: type=color 5색 × 4사이즈, type=line 3색 × 3사이즈(tiny 없음).",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["large", "medium", "small", "tiny"] },
    type: { control: "inline-radio", options: ["color", "line"] },
    color: {
      control: "select",
      options: ["brand-gradient", "brand", "brand-light", "gray-dark", "warning", "gray-light"],
      description: "line 은 brand-gradient · brand · warning 만",
    },
    children: { control: "text" },
  },
  args: { size: "large", type: "color", color: "brand", children: "Label" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const SIZES: LabelSize[] = ["large", "medium", "small", "tiny"];
const FILL: LabelColorFill[] = ["brand-gradient", "brand", "brand-light", "gray-dark", "warning", "gray-light"];
const LINE: LabelColorLine[] = ["brand-gradient", "brand", "warning"];
const LINE_SIZES = ["large", "medium", "small"] as const;

const head = { font: "var(--text-body-3-regular)", color: "var(--color-font-tertiary)" } as const;

/* ── Figma 배치 그대로: 위 color 5×4, 아래 line 3×3 ── */
export const Matrix: Story = {
  name: "전체 (Figma 배치)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {[
        { t: "color" as const, colors: FILL, sizes: SIZES },
        { t: "line" as const, colors: LINE, sizes: LINE_SIZES },
      ].map(({ t, colors, sizes }) => (
        <div key={t}>
          <div style={{ ...head, marginBottom: 8 }}>type={t}</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `64px repeat(${colors.length}, 96px)`,
              rowGap: 14,
              alignItems: "center",
            }}
          >
            <div />
            {colors.map((c) => (
              <div key={c} style={head}>{c}</div>
            ))}
            {sizes.map((s) => (
              <>
                <div key={s} style={head}>{s}</div>
                {colors.map((c) => (
                  <div key={`${s}-${c}`}>
                    {t === "color" ? (
                      <Label size={s} color={c as LabelColorFill}>Label</Label>
                    ) : (
                      <Label type="line" size={s as (typeof LINE_SIZES)[number]} color={c as LabelColorLine}>
                        Label
                      </Label>
                    )}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
