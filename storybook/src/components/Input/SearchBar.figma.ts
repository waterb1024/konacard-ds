// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=777-4492
// source=storybook/src/components/Input/SearchBar.tsx
// component=SearchBar
import figma from 'figma'

const instance = figma.selectedInstance

// Figma "state" (default/focus/active/complete/disabled/error) → 코드 SearchBarState.
// - "disabled" 는 코드 쪽 이름이 "inactive".
const state = instance.getEnum('state', {
  default: 'default',
  focus: 'focus',
  active: 'active',
  complete: 'complete',
  disabled: 'inactive',
  error: 'error',
})

// Figma "size" 는 코드 미매핑 (Input.tsx 와 동일 정책).
// 실제 프로덕트에서 large(48h) 만 사용하므로 컴포넌트가 size prop 을 노출하지 않음.

export default {
  example: figma.code`<SearchBar state="${state}" placeholder="검색어를 입력하세요" />`,
  imports: ['import { SearchBar } from "./SearchBar"'],
  id: 'search-bar',
  metadata: { nestable: true },
}
