// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=30-409
// source=storybook/src/components/Controls/Radio.tsx
// component=Radio
import figma from 'figma'

const instance = figma.selectedInstance

const size = instance.getEnum('size', {
  medium: 'medium',
  small: 'small',
})

// state=true → 선택됨(checked=true), state=false → 미선택
const checked = instance.getBoolean('state')

// status=true → 활성, status=false → disabled=true (opacity 0.4)
const disabled = instance.getBoolean('status', { true: false, false: true })

export default {
  example: figma.code`<Radio size="${size}" checked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Radio } from "./Radio"'],
  id: 'radio',
  metadata: { nestable: true },
}
