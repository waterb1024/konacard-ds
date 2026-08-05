/**
 * Figma Code Connect — parser 방식 (Figma UI · GitHub App · CLI publish 대상).
 * 같은 컴포넌트를 `TextButton.figma.ts` (MCP template) 로도 매핑 중이며 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * 매핑 요약
 * - size · color 는 outlier 없이 1:1
 * - state 는 HTML disabled 로 별도 처리 → skip
 * - underline 은 사용 시점 결정 사항 → 매핑에서 강제 안 함
 */
import figma from "@figma/code-connect";
import { TextButton } from "./TextButton";

figma.connect(
  TextButton,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=17-793",
  {
    props: {
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "tiny",
      }),
      color: figma.enum("color", {
        black: "black",
        brand: "brand",
        gray: "gray",
        "gray-light": "gray-light",
      }),
    },
    example: ({ size, color }) => (
      <TextButton size={size} color={color}>Button</TextButton>
    ),
  },
);
