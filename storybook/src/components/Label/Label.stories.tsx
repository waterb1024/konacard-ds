import type { Meta, StoryObj } from "@storybook/react";
import { Label, LinkLabel } from "./Label";
import type { LabelColor, LabelSize } from "./Label";

const meta = {
  title: "Component/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Label — 정보 표시 전용 pill 태그. " +
          "Figma: Nv4o6ozSx5W4w10uFnQIs5 / Basic 2121:5513 · Link 2415:6389 · Usage 149:1240. " +
          "Basic (4 size × 2 type × 7 color) + LinkLabel (icon + text 조합).",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    type: { control: "inline-radio", options: ["color", "line"] },
    color: {
      control: "select",
      options: [
        "brand",
        "brand-light",
        "brand-gradient",
        "gray-dark",
        "gray-light",
        "white",
        "warning",
      ],
    },
    children: { control: "text" },
  },
  args: {
    size: "large",
    type: "color",
    color: "brand",
    children: "Label",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 24,
          background: "#FFFFFF",
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const sizes: LabelSize[] = ["large", "medium", "small", "tiny"];
const colors: LabelColor[] = [
  "brand",
  "brand-light",
  "brand-gradient",
  "gray-dark",
  "gray-light",
  "white",
  "warning",
];

/* ── Fill matrix — 4 size × 7 color ─────── */
export const FillMatrix: Story = {
  name: "Fill (color) — Size × Color 매트릭스",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px repeat(7, auto)",
        gap: 12,
        alignItems: "center",
        background: "#F8F9FB",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <div />
      {colors.map((c) => (
        <div
          key={c}
          style={{
            font: "var(--text-body-3-regular)",
            color: "var(--color-font-tertiary)",
            textAlign: "center",
          }}
        >
          {c}
        </div>
      ))}
      {sizes.map((s) => (
        <>
          <div
            key={`row-${s}`}
            style={{
              font: "var(--text-body-3-bold)",
              color: "var(--color-font-tertiary)",
            }}
          >
            {s}
          </div>
          {colors.map((c) => (
            <div
              key={`${s}-${c}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Label size={s} type="color" color={c}>
                Label
              </Label>
            </div>
          ))}
        </>
      ))}
    </div>
  ),
};

/* ── Line matrix — 4 size × 7 color ─────── */
export const LineMatrix: Story = {
  name: "Line — Size × Color 매트릭스",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px repeat(7, auto)",
        gap: 12,
        alignItems: "center",
        background: "#F8F9FB",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <div />
      {colors.map((c) => (
        <div
          key={c}
          style={{
            font: "var(--text-body-3-regular)",
            color: "var(--color-font-tertiary)",
            textAlign: "center",
          }}
        >
          {c}
        </div>
      ))}
      {sizes.map((s) => (
        <>
          <div
            key={`row-${s}`}
            style={{
              font: "var(--text-body-3-bold)",
              color: "var(--color-font-tertiary)",
            }}
          >
            {s}
          </div>
          {colors.map((c) => (
            <div
              key={`${s}-${c}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Label size={s} type="line" color={c}>
                Label
              </Label>
            </div>
          ))}
        </>
      ))}
    </div>
  ),
};

/* ── Link Label ─────────────────────────── */
export const LinkLabelStory: Story = {
  name: "Link Label — icon + text",
  render: () => (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(2, auto)" }}>
      <LinkLabel bg="brand" type="color">Text</LinkLabel>
      <LinkLabel bg="brand" type="line">Text</LinkLabel>
      <LinkLabel bg="brand-light" type="color">Text</LinkLabel>
      <LinkLabel bg="gray" type="color">Text</LinkLabel>
      <LinkLabel bg="gray" type="line">Text</LinkLabel>
      <LinkLabel bg="gray-dark" type="line">Text</LinkLabel>
      <LinkLabel bg="white" type="color">Text</LinkLabel>
    </div>
  ),
};
