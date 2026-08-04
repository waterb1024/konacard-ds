// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD---COMMON?node-id=41-505
// source=storybook/src/components/Input/Input.tsx
// component=Input
import figma from 'figma'

const instance = figma.selectedInstance

// Figma "state" (default/focus/active/complete/disabled/error) → 코드 InputState
// - "disabled" 는 코드 쪽 이름이 "inactive" 라서 이름만 다름
const state = instance.getEnum('state', {
  default: 'default',
  focus: 'focus',
  active: 'active',
  complete: 'complete',
  disabled: 'inactive',
  error: 'error',
})

// active / error 상태에서 clear(×) 버튼이 자동 노출되도록 Input.tsx 가 처리하므로
// showClear 는 명시하지 않음. complete 상태의 refresh 아이콘은 현재 미지원.

export default {
  example: figma.code`<Input state="${state}" placeholder="입력하세요" />`,
  imports: ['import { Input } from "./Input"'],
  id: 'input',
  metadata: { nestable: true },
}
