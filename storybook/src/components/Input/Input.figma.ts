// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=41-505
// source=storybook/src/components/Input/Input.tsx
// component=Input
import figma from 'figma'

const instance = figma.selectedInstance

// 2026-10-15 정리: style/case 6종 × state 6종 + boolean title · info
const variant = instance.getEnum('style/case', {
  'text field': 'text-field',
  'search bar': 'search-bar',
  'text area': 'text-area',
  button: 'button',
  'card-number': 'card-number',
  'registration number': 'registration-number',
})

const state = instance.getEnum('state', {
  default: 'default',
  focus: 'focus',
  active: 'active',
  complete: 'complete',
  disabled: 'disabled',
  error: 'error',
})

const title = instance.getBoolean('title', { true: 'Title', false: undefined })
const info = instance.getBoolean('info', { true: '안내 문구', false: undefined })

export default {
  example: figma.code`<Input variant="${variant}" state="${state}" title="${title}" info="${info}" />`,
  imports: ['import { Input } from "./Input"'],
  id: 'input',
  metadata: { nestable: true },
}
