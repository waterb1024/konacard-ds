/**
 * Figma Code Connect — parser 방식.
 * Switch.figma.ts (MCP template) 와 동일 매핑.
 */
import figma from "@figma/code-connect";
import { Switch } from "./Switch";

figma.connect(
  Switch,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=28-409",
  {
    props: {
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
    example: ({ size, checked, disabled }) => (
      <Switch size={size} checked={checked} disabled={disabled} />
    ),
  },
);
