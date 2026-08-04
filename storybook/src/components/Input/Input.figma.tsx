/**
 * Figma Code Connect — parser 방식 (Figma UI 및 GitHub App 자동 연동용).
 *
 * 같은 컴포넌트를 `.figma.ts` (MCP 템플릿) 로도 매핑해 두었으며 각자 다른 소비자를 담당:
 *   - `.figma.tsx` (이 파일)  : Figma UI · Dev Mode 코드 미리보기 · GitHub App
 *   - `.figma.ts`             : Cursor · Claude Code 등 MCP 로컬 도구
 * 매핑 논리는 동일하니 한쪽 수정 시 반드시 다른 한쪽도 함께 갱신하세요.
 */
import figma from "@figma/code-connect";
import { Input } from "./Input";

figma.connect(
  Input,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD---COMMON?node-id=41-505",
  {
    props: {
      // Figma "state" (default/focus/active/complete/disabled/error) → 코드 InputState.
      // Figma "disabled" 만 이름이 다르므로 "inactive" 로 remap.
      state: figma.enum("state", {
        default: "default",
        focus: "focus",
        active: "active",
        complete: "complete",
        disabled: "inactive",
        error: "error",
      }),
    },
    example: ({ state }) => <Input state={state} placeholder="입력하세요" />,
  },
);
