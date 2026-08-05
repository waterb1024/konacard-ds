/**
 * Figma Code Connect — parser 방식.
 * Checkbox.figma.ts (MCP template) 와 동일 매핑.
 */
import figma from "@figma/code-connect";
import { Checkbox } from "./Checkbox";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=28-431",
  {
    props: {
      style: figma.enum("style", {
        circle: "circle",
        "square-fill": "square-fill",
        "square-line": "square-line",
        line: "line",
      }),
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "tiny",
      }),
      checked: figma.boolean("state"),
      // status=true 는 활성, status=false 는 disabled. 코드는 disabled boolean 이라 반전 매핑.
      disabled: figma.boolean("status", { true: false, false: true }),
    },
    example: ({ style, size, checked, disabled }) => (
      <Checkbox
        style={style}
        size={size}
        checked={checked}
        disabled={disabled}
      />
    ),
  },
);
