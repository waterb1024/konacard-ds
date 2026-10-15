// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=41-550
// source=storybook/src/components/Selectbox/Selectbox.tsx
// component=Selectbox
import figma from 'figma'

const instance = figma.selectedInstance

// 2026-10-15 정리: select/select box · state 5종 (소문자) + boolean title · info
const state = instance.getEnum('state', {
  default: 'default',
  active: 'active',
  select: 'select',
  disabled: 'disabled',
  error: 'error',
})

const title = instance.getBoolean('title', { true: 'Title', false: undefined })
const info = instance.getBoolean('info', { true: '안내 문구', false: undefined })

export default {
  example: figma.code`<Selectbox state="${state}" title="${title}" info="${info}" placeholder="선택" />`,
  imports: ['import { Selectbox } from "./Selectbox"'],
  id: 'selectbox',
  metadata: { nestable: true },
}
