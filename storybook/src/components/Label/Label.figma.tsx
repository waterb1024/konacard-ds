/**
 * Figma Code Connect — parser 방식 (Figma UI · GitHub App · CLI publish 대상).
 * 같은 컴포넌트를 `Label.figma.ts` (MCP template) 로도 매핑 중이며 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * Figma 원본은 type=color 계열에서 "gray-drak"(오타), type=line 계열에서
 * "gray-dark"(정타) 를 사용. 코드는 "gray-dark" 로 통일했으므로 두 값 모두
 * 같은 코드 값으로 remap.
 */
import figma from "@figma/code-connect";
import { Label } from "./Label";

figma.connect(
  Label,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=2121-5513",
  {
    props: {
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "tiny",
      }),
      type: figma.enum("type", {
        color: "color",
        line: "line",
      }),
      color: figma.enum("color", {
        brand: "brand",
        "brand-light": "brand-light",
        "brand-gradient": "brand-gradient",
        "gray-drak": "gray-dark",
        "gray-dark": "gray-dark",
        "gray-light": "gray-light",
        warning: "warning",
        white: "white",
      }),
    },
    example: ({ size, type, color }) => (
      <Label size={size} type={type} color={color}>Label</Label>
    ),
  },
);
