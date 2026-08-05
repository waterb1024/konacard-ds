/**
 * Figma Code Connect — parser 방식.
 * Radio.figma.ts (MCP template) 와 동일 매핑.
 */
import figma from "@figma/code-connect";
import { Radio } from "./Radio";

figma.connect(
  Radio,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=30-409",
  {
    props: {
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "tiny",
      }),
      checked: figma.boolean("state"),
      // status=true=활성, status=false=disabled → 반전 매핑
      disabled: figma.boolean("status", { true: false, false: true }),
    },
    example: ({ size, checked, disabled }) => (
      <Radio size={size} checked={checked} disabled={disabled} />
    ),
  },
);
