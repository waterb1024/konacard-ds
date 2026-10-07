// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=28-431
// source=storybook/src/components/Controls/Checkbox.tsx
// component=Checkbox
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant 3종: style / state / status (size 는 2026-10-07 삭제 — style 마다 크기 고정)
// - state=true → checked=true, state=false → checked=false
// - status=true → 활성, status=false → disabled=true (opacity 0.4)
const style = instance.getEnum('style', {
  circle: 'circle',
  'square-fill': 'square-fill',
  'square-line': 'square-line',
  line: 'line',
})

const checked = instance.getBoolean('state')
const disabled = instance.getBoolean('status', { true: false, false: true })

export default {
  example: figma.code`<Checkbox style="${style}" checked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Checkbox } from "./Checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
