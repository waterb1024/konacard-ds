// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=28-409
// source=storybook/src/components/Controls/Switch.tsx
// component=Switch
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant 3종: size / state / status
// - state=true → on(checked=true), state=false → off
// - status=true → 활성, status=false → disabled=true (opacity 0.4)
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
})

const checked = instance.getBoolean('state')
const disabled = instance.getBoolean('status', { true: false, false: true })

export default {
  example: figma.code`<Switch size="${size}" checked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Switch } from "./Switch"'],
  id: 'switch',
  metadata: { nestable: true },
}
