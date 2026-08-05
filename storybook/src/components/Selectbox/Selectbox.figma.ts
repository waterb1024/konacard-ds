// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=41-550
// source=storybook/src/components/Selectbox/Selectbox.tsx
// component=Selectbox
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant 이름은 대문자 "State" (다른 폼 요소는 "state" 소문자)
// 값 5종: default / active / select / disabled / error
// - "disabled" → "inactive" 로 이름만 다름 (Input.tsx 와 동일 정책)
const state = instance.getEnum('State', {
  default: 'default',
  active: 'active',
  select: 'select',
  disabled: 'inactive',
  error: 'error',
})

// Figma "size" 는 large 만 있음 (다른 폼 요소와 달리 처음부터 단일 사이즈)
// 매핑 skip.

export default {
  example: figma.code`<Selectbox state="${state}" placeholder="선택" />`,
  imports: ['import { Selectbox } from "./Selectbox"'],
  id: 'selectbox',
  metadata: { nestable: true },
}
