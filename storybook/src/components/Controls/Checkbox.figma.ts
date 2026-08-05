// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=28-431
// source=storybook/src/components/Controls/Checkbox.tsx
// component=Checkbox
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant 4종: style / size / state / status
// - state=true → checked=true, state=false → checked=false
// - status=true → 활성, status=false → disabled=true (opacity 0.4)
const style = instance.getEnum('style', {
  circle: 'circle',
  'square-fill': 'square-fill',
  'square-line': 'square-line',
  line: 'line',
})

const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
})

const checked = instance.getBoolean('state')
const disabled = instance.getBoolean('status', { true: false, false: true })

export default {
  example: figma.code`<Checkbox style="${style}" size="${size}" checked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Checkbox } from "./Checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
